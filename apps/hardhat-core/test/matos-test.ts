import * as chai from 'chai'
import { ethers } from 'hardhat'
import chaiAsPromised from 'chai-as-promised'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'
import { solidityKeccak256 } from 'ethers/lib/utils'
import { BigNumber } from 'ethers'
import { Matos } from '../generated-types/Matos'

chai.use(chaiAsPromised)

const { expect } = chai

let MatosContract: Matos

let owner: SignerWithAddress
let acc1: SignerWithAddress
let acc2: SignerWithAddress
let acc3: SignerWithAddress

let addrs: SignerWithAddress[] = []
let merkleTree: MerkleTree

const generateLeaf = (address: string, price: BigNumber): Buffer =>
  Buffer.from(
    // Hash in appropriate Merkle format
    solidityKeccak256(['address', 'uint256'], [address, price]).slice(2),
    'hex'
  )

describe('Matos', () => {
  beforeEach(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ;[owner, acc1, acc2, acc3, ...addrs] = await ethers.getSigners()

    const accounts = [
      {
        address: acc1.address,
        price: ethers.utils.parseEther('0.01'),
      },
      {
        address: acc2.address,
        price: ethers.utils.parseEther('0.01'),
      },
      {
        address: acc3.address,
        price: ethers.utils.parseEther('0.01'),
      },
    ]

    const leafs = accounts.map((acc) => generateLeaf(acc.address, acc.price))
    merkleTree = new MerkleTree(leafs, keccak256, { sortPairs: true })

    const MatosFactory = await ethers.getContractFactory('Matos')
    MatosContract = (await MatosFactory.deploy(merkleTree.getRoot())) as Matos

    // Reset block timestamp
    const blockNumber = ethers.provider.getBlockNumber()
    const block = await ethers.provider.getBlock(blockNumber)
    const currentTimestamp = Math.floor(new Date().getTime() / 1000)
    const secondsDiff = currentTimestamp - block.timestamp
    await ethers.provider.send('evm_increaseTime', [secondsDiff])
    await ethers.provider.send('evm_mine', [])
  })

  describe('Matos', () => {
    it('should have public meta', async () => {
      const MAX_SUPPLY = await MatosContract.MAX_TOKENS()
      expect(+MAX_SUPPLY).to.eq(100)
    })

    it('should mint', async () => {
      await MatosContract.mint({ value: ethers.utils.parseEther('0.02') })
      let totalSupply = await MatosContract.totalSupply(0)
      expect(+totalSupply).to.eq(1)
      // Only one per wallet
      totalSupply = await MatosContract.totalSupply(0)
      expect(+totalSupply).to.eq(1)

      await MatosContract.connect(acc1).mint({ value: ethers.utils.parseEther('0.02') })
      totalSupply = await MatosContract.totalSupply(0)

      expect(+totalSupply).to.eq(2)

      await MatosContract.connect(acc2).mint({ value: ethers.utils.parseEther('0.02') })
      totalSupply = await MatosContract.totalSupply(0)

      expect(+totalSupply).to.eq(3)

      await MatosContract.connect(acc2).mint({ value: ethers.utils.parseEther('0.02') })
      totalSupply = await MatosContract.totalSupply(0)

      expect(+totalSupply).to.eq(4)
    })

    it('should whitelist mint', async () => {
      const leaf = generateLeaf(acc1.address, ethers.utils.parseEther('0.01'))
      const proof = merkleTree.getHexProof(leaf)

      await MatosContract.connect(acc1).onSaleMint(proof, {
        value: ethers.utils.parseEther('0.01'),
      })
      let totalSupply = await MatosContract.totalSupply(0)
      expect(+totalSupply).to.eq(1)

      let failure = false

      try {
        await MatosContract.connect(acc1).onSaleMint(proof, {
          value: ethers.utils.parseEther('0.01'),
        })
      } catch (e) {
        failure = true
      }
      expect(failure).to.eq(true)

      totalSupply = await MatosContract.totalSupply(0)
      expect(+totalSupply).to.eq(1)
    })

    it('should fail whitelist mint', async () => {
      const leaf = generateLeaf(acc1.address, ethers.utils.parseEther('0.001'))
      const proof = merkleTree.getHexProof(leaf)

      let failure = false

      try {
        await MatosContract.connect(acc1).onSaleMint(proof, {
          value: ethers.utils.parseEther('0.001'),
        })
      } catch (e) {
        failure = true
      }
      expect(failure).to.eq(true)

      const totalSupply = await MatosContract.totalSupply(0)
      expect(+totalSupply).to.eq(0)
    })

    it('max mint', async () => {
      const MAX_SUPPLY = 100
      // eslint-disable-next-line
      for (let i in Array(MAX_SUPPLY).fill(null)) {
        // eslint-disable-next-line
        await MatosContract.mint({ value: ethers.utils.parseEther('0.02') })
      }
      const totalSupply = await MatosContract.totalSupply(0)

      expect(+totalSupply).to.eq(100)

      let failure = false

      try {
        await MatosContract.mint({ value: ethers.utils.parseEther('0.02') })
      } catch (e) {
        failure = true
      }
      expect(failure).to.eq(true)
    })
  })
})
