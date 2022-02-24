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
    ;[owner, acc1, acc2, acc3, ...addrs] = await ethers.getSigners()

    const accounts = [
      {
        address: acc1.address,
        price: ethers.utils.parseEther('0.1'),
      },
      {
        address: acc2.address,
        price: ethers.utils.parseEther('0.1'),
      },
      {
        address: acc3.address,
        price: ethers.utils.parseEther('0.1'),
      },
    ]

    const leafs = accounts.map((acc) => generateLeaf(acc.address, acc.price))
    merkleTree = new MerkleTree(leafs, keccak256, { sortPairs: true })

    const MatosFactory = await ethers.getContractFactory('Matos')
    MatosContract = (await MatosFactory.deploy('localhost:3000', merkleTree.getRoot())) as Matos

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

    it('should premint on init', async () => {
      const totalSupply = await MatosContract['totalSupply()']()
      expect(+totalSupply).to.eq(20)
    })

    it('should mint', async () => {
      await MatosContract.mint({ value: ethers.utils.parseEther('0.005') })
      const totalSupply = await MatosContract['totalSupply()']()
      expect(+totalSupply).to.eq(21)
    })
  })
})
