import * as chai from 'chai'
import { ethers } from 'hardhat'
import chaiAsPromised from 'chai-as-promised'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
// import { NFTFactory } from '../generated'
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'
import { solidityKeccak256 } from 'ethers/lib/utils'

chai.use(chaiAsPromised)

const { expect } = chai

let MatosContract: any

let owner: SignerWithAddress
let acc1: SignerWithAddress
let acc2: SignerWithAddress
let acc3: SignerWithAddress
let acc4: SignerWithAddress
let acc5: SignerWithAddress

let addrs: SignerWithAddress[] = []
let merkleTree: MerkleTree

const generateLeaf = (address: string, price: BigNumber): string =>
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

    const _MatosContract = await ethers.getContractFactory('Matos')
    factory = (await _MatosContract.deploy(merkleTree.getRoot())) as NFTFactory

    // Reset block timestamp
    const blockNumber = ethers.provider.getBlockNumber()
    const block = await ethers.provider.getBlock(blockNumber)
    const currentTimestamp = Math.floor(new Date().getTime() / 1000)
    const secondsDiff = currentTimestamp - block.timestamp
    await ethers.provider.send('evm_increaseTime', [secondsDiff])
    await ethers.provider.send('evm_mine', [])
  })

  describe('NFT Factory', () => {
    it('should have public meta', async () => {
      const MAX_SUPPLY = await factory.MAX_SUPPLY()
      expect(+MAX_SUPPLY).to.eq(1337)
    })
  })
})
