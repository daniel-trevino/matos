import matosWhitelist from './matos-whitelist.json'
import { INITIAL_MINT_PRICE_ETH } from './constants'

type MatosMemberWhitelist = {
  address: string
  discount: number
}

type MatosMember = {
  address: string
  price: number
}

export const generateWhitelist = (): MatosMember[] => {
  return matosWhitelist.map((member: MatosMemberWhitelist) => {
    return {
      address: member.address,
      price: INITIAL_MINT_PRICE_ETH - member.discount,
    }
  })
}
