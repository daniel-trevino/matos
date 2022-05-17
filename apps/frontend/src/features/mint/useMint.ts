import { ethers } from 'ethers'
import { useAppContractRead } from '../../hooks/useAppContractRead'
import { useAppContractWrite } from '../../hooks/useAppContractWrite'

type ReadResponse = {
  data: ethers.utils.Result | undefined
  error: Error | null
  loading: boolean | undefined
}

type WriteResponse = {
  data: ethers.providers.TransactionResponse | undefined
  error: Error | null
  loading: boolean | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  run: any
}

type UseMint = {
  merkleRoot: ReadResponse
  onSaleMint: WriteResponse
  mint: WriteResponse
}

const contractName = 'Matos'

export const useMint = (): UseMint => {
  const onSaleMint = useAppContractWrite(contractName, 'onSaleMint')
  const mint = useAppContractWrite(contractName, 'mint')

  return {
    onSaleMint,
    mint,
  }
}
