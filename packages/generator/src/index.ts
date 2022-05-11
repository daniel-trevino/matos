// 1. Import libraries. Use `npm` package manager to install
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'

import { generateWhitelist, generateLeaf } from 'whitelist'

// 2. Collect list of wallet addresses from competition, raffle, etc.
// Store list of addresses in some data sheeet (Google Sheets or Excel)
let whitelistAddresses = generateWhitelist()

// 3. Create a new array of `leafNodes` by hashing all indexes of the `whitelistAddresses`
// using `keccak256`. Then creates a Merkle Tree object using keccak256 as the algorithm.
//
// The leaves, merkleTree, and rootHas are all PRE-DETERMINED prior to whitelist claim
const leafNodes = whitelistAddresses.map((member) => generateLeaf(member.address, member.price))
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
