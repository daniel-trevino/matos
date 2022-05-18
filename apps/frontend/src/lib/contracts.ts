import { SupportedNetworks } from './constants'

type ContractAddresses = {
  [key in SupportedNetworks]?: string
}

// Name should have the same as in the Solidity file contract
export type LocalContractName = 'Matos'

// Name should have the same as in the abi file added to /abi folder
export type SupportedContractName = 'USDC' | 'WAGMIGOTCHI'

export type SupportedErc20Token = 'USDC'

export type SupportedContracts = SupportedContractName | SupportedErc20Token | LocalContractName

export type SupportedContractAddresses = {
  [key in SupportedContracts]: ContractAddresses
}

export const MATOS_CONTRACT_ADDRESSES: ContractAddresses = {
  goerli: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  rinkeby: '0x4AE033E495f0f9d57A8E2C8e627Fd97f6dF68D21',
  mainnet: '0x760C862191EBd06fe91ec76f7e8b7356308489e2',
}

export const WAGMIGOTCHI_ADDRESSES: ContractAddresses = {
  mainnet: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
}

export const USDC_ADDRESSES: ContractAddresses = {
  mainnet: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  ropsten: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
  goerli: '0xaFF4481D10270F50f203E0763e2597776068CBc5',
}

export const supportedContracts: SupportedContractAddresses = {
  USDC: USDC_ADDRESSES,
  WAGMIGOTCHI: WAGMIGOTCHI_ADDRESSES,
  Matos: MATOS_CONTRACT_ADDRESSES,
}

export const getContractAddress = (
  contract: SupportedContracts,
  currentNetwork: SupportedNetworks
): string | undefined => {
  try {
    const supportedContract = supportedContracts[contract]
    return supportedContract[currentNetwork]
  } catch {
    return undefined
  }
}
