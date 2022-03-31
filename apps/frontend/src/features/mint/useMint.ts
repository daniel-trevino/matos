import { ethers } from 'ethers'
import { useAppContractRead } from '../../hooks/useAppContractRead'
import { useAppContractWrite } from '../../hooks/useAppContractWrite'

type ReadResponse = {
  data: ethers.utils.Result | undefined
  error: Error | undefined
  loading: boolean | undefined
}

type WriteResponse = {
  data: ethers.providers.TransactionResponse | undefined
  error: Error | undefined
  loading: boolean | undefined
  run: any
}

type UseMint = {
  merkleRoot: ReadResponse
  onSaleMint: WriteResponse
  mint: WriteResponse
}

const contractName = 'Matos'

export const useMint = (): UseMint => {
  const merkleRoot = useAppContractRead(contractName, 'merkleRoot')
  const onSaleMint = useAppContractWrite(contractName, 'onSaleMint')
  const mint = useAppContractWrite(contractName, 'mint')

  return {
    merkleRoot: {
      data: merkleRoot.data,
      error: merkleRoot.error,
      loading: merkleRoot.loading && merkleRoot.data === undefined,
    },
    onSaleMint,
    mint,
  }
}
