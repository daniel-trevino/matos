import { MerkleTree } from 'merkletreejs'
import { ethers } from 'ethers'
import keccak256 from 'keccak256'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { generateWhitelist, generateLeaf } from 'whitelist'

const whitelistAddresses = generateWhitelist()

const expectedMerkleRoot = '0x361207418277ea248185ac60d4d2b62e0ae9fa688e1cfa3a32a43d0888ca8845'

const leafNodes = whitelistAddresses.map((member) => generateLeaf(member.address, member.price))

type UseMerkleTree = {
  signerHasValidProof: string[] | false | undefined
  price?: ethers.BigNumber
}

export const useMerkleTree = (): UseMerkleTree => {
  const [merkleTree, setMerkleTree] = useState<MerkleTree | undefined>()
  const { data: account } = useAccount({})

  const match = whitelistAddresses.find(
    (member) => member.address.toLowerCase() === account?.address?.toLowerCase()
  )

  // useEffect(() => {
  //   // Returns proof array, or false if address ineligible
  //   const getProof = (address: string): string[] | false => {
  //     if (merkleTree === undefined) {
  //       console.error('getProof cannot be called before merkleTree initialized')
  //       return false
  //     }

  //     if (!match?.price) {
  //       return false
  //     }

  //     const proof = merkleTree.getHexProof(generateLeaf(address, match.price))
  //     if (proof.length === 0) return false
  //     return proof
  //   }

  //   if (account?.address && !signerHasValidProof) {
  //     setSignerHasValidProof(getProof(account.address))
  //   }
  // }, [account?.address, match?.price, signerHasValidProof, merkleTree])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

      // Check tree validity
      if (tree.getHexRoot() !== expectedMerkleRoot) {
        console.error('Merkle root mismatch')
      }

      setMerkleTree(tree)
    }
  }, [])

  let signerHasValidProof: string[] | false | undefined = false

  const getProof = (address: string): string[] | false => {
    if (merkleTree === undefined) {
      console.error('getProof cannot be called before merkleTree initialized')
      return false
    }

    if (!match?.price) {
      return false
    }

    const proof = merkleTree.getHexProof(generateLeaf(address, match.price))
    if (proof.length === 0) return false
    return proof
  }

  if (account?.address) {
    signerHasValidProof = getProof(account.address)
  }

  return { signerHasValidProof, price: match?.price }
}
