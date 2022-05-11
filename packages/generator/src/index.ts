// 1. Import libraries. Use `npm` package manager to install
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'
import { solidityKeccak256 } from 'ethers/lib/utils'
import * as ethers from 'ethers'

// 2. Collect list of wallet addresses from competition, raffle, etc.
// Store list of addresses in some data sheeet (Google Sheets or Excel)
let whitelistAddresses = [
  '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc',
  '0xA4B7CEe8409673624EC9B075f5A4f9b8EbAdEd49',
]

const generateLeaf = (address: string, value: string): Buffer =>
  Buffer.from(
    // Hash in appropriate Merkle format
    solidityKeccak256(['address', 'uint256'], [address, value]).slice(2),
    'hex'
  )

// 3. Create a new array of `leafNodes` by hashing all indexes of the `whitelistAddresses`
// using `keccak256`. Then creates a Merkle Tree object using keccak256 as the algorithm.
//
// The leaves, merkleTree, and rootHas are all PRE-DETERMINED prior to whitelist claim
const leafNodes = whitelistAddresses.map((addr, price) =>
  generateLeaf(addr, ethers.utils.parseEther('0.1').toString())
)
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

// 4. Get root hash of the `merkleeTree` in hexadecimal format (0x)
// Print out the Entire Merkle Tree.
const rootHash = merkleTree.getHexRoot()
// console.log('Whitelist Merkle Tree\n', merkleTree.toString())
console.log('hash:', rootHash)

// ***** ***** ***** ***** ***** ***** ***** ***** //

// CLIENT-SIDE: Use `msg.sender` address to query and API that returns the merkle proof
// required to derive the root hash of the Merkle Tree

// ✅ Positive verification of address
const claimingAddress = leafNodes[0]
// ❌ Change this address to get a `false` verification
// const claimingAddress = keccak256("0X5B38DA6A701C568545DCFCB03FCB875F56BEDDD6");

// `getHexProof` returns the neighbour leaf and all parent nodes hashes that will
// be required to derive the Merkle Trees root hash.
// const hexProof = merkleTree.getHexProof(claimingAddress)
// console.log(hexProof)

// // ✅ - ❌: Verify is claiming address is in the merkle tree or not.
// // This would be implemented in your Solidity Smart Contract
// console.log('Verify => ', merkleTree.verify(hexProof, claimingAddress, rootHash))
