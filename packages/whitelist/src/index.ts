import matosWhitelist from './matos-whitelist.json'
import { INITIAL_MINT_PRICE_ETH } from './constants'
import * as ethers from 'ethers'
import { solidityKeccak256 } from 'ethers/lib/utils'

type MatosMemberWhitelist = {
  address: string
  discount: number
}

type MatosMember = {
  address: string
  price: any
}

export const generateWhitelist = (): MatosMember[] => {
  return matosWhitelist.map((member: MatosMemberWhitelist) => {
    return {
      address: ethers.utils.getAddress(member.address),
      price: ethers.utils
        .parseEther(INITIAL_MINT_PRICE_ETH.toString())
        .sub(ethers.utils.parseEther(member.discount.toString())),
    }
  })
}

export const generateLeaf = (address: string, value: ethers.BigNumber): Buffer =>
  Buffer.from(
    // Hash in appropriate Merkle format
    solidityKeccak256(['address', 'uint256'], [address, value]).slice(2),
    'hex'
  )
