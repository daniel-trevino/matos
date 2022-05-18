import { useContractRead } from 'wagmi'
import { CallOverrides, ethers } from 'ethers'
import { useContractAddress } from './useContractAddress'
import { SupportedContracts } from '../lib/contracts'
import { getLocalContractAbiFromName } from '../utils/local-contracts-utils'

type ReadResponse = {
  data: ethers.utils.Result | undefined
  error: Error | null
  loading: boolean | undefined
}

type Config = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args?: any | any[]
  overrides?: CallOverrides
  skip?: boolean
  watch?: boolean
}

export const useAppContractRead = (
  contractName: SupportedContracts,
  functionName: string,
  config?: Config
): ReadResponse => {
  const { data: contractData } = useContractAddress(contractName)

  const contractConfig = {
    addressOrName: contractData ?? '',
    contractInterface: getLocalContractAbiFromName(contractName),
  }

  console.log({ contractConfig })

  return {}
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, isLoading } = useContractRead(contractConfig, functionName, {
      watch: true,
      ...config,
    })

    return {
      data,
      error,
      loading: isLoading,
    }
  } catch (e) {
    return {
      data: undefined,
      loading: false,
      error: new Error(
        `Contract ${contractName} not found on this network. Make sure DEFAULT_NETWORK_NAME is set correctly`
      ),
    }
  }
}
