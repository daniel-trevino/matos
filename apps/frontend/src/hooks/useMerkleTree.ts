import { MerkleTree } from 'merkletreejs'
import { ethers } from 'ethers'
import keccak256 from 'keccak256'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export function hashAddress(address: string): Buffer {
  return Buffer.from(ethers.utils.solidityKeccak256(['address'], [address]).slice(2), 'hex')
}

const whitelistAddresses = [
  '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc',
]

const expectedMerkleRoot = '343750465941b29921f50a28e0e43050e5e1c2611a3ea8d7fe1001090d5e1436'

const leafNodes = whitelistAddresses.map((addr) => keccak256(addr))

type UseMerkleTree = {
  signerHasValidProof: string[] | false | undefined
}

export const useMerkleTree = (): UseMerkleTree => {
  const [signerHasValidProof, setSignerHasValidProof] = useState<string[] | false | undefined>()
  const [merkleTree, setMerkleTree] = useState<MerkleTree | undefined>()
  const [account] = useAccount({
    fetchEns: true,
  })

  useEffect(() => {
    // Returns proof array, or false if address ineligible
    const getProof = (address: string): string[] | false => {
      if (merkleTree === undefined) {
        console.error('getProof cannot be called before merkleTree initialized')
        return false
      }

      const proof = merkleTree.getHexProof(hashAddress(address))
      if (proof.length === 0) return false
      return proof
    }

    if (account.data && !signerHasValidProof) {
      setSignerHasValidProof(getProof(account.data.address))
    }
  }, [account.data, signerHasValidProof, merkleTree])

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

  return { signerHasValidProof }
}
