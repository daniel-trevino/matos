import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { Button } from 'ui'
import { useAccount, useContractRead, useNetwork } from 'wagmi'
import { useMint } from './useMint'
import { Matos__factory } from '../../../generated/typechain'
import { useMerkleTree } from '../../hooks/useMerkleTree'

export const useIsMounted = (): boolean => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

const MintTokenButton: React.FC = () => {
  const { data: account } = useAccount()
  const { activeChain } = useNetwork()
  const { signerHasValidProof, price } = useMerkleTree()

  const {
    data: balanceOf,
    error,
    isLoading,
  } = useContractRead(
    {
      addressOrName: '0x760C862191EBd06fe91ec76f7e8b7356308489e2',
      contractInterface: Matos__factory.abi,
    },
    'balanceOf',
    {
      args: [account?.address, 0],
      watch: true,
    }
  )

  const { onSaleMint, mint } = useMint()
  if (!account?.address) {
    return null
  }
  if (activeChain?.unsupported) {
    return null
  }

  if (isLoading) {
    return null
  }

  const onClick = (): void => {
    if (signerHasValidProof && price && balanceOf?.isZero()) {
      onSaleMint.run({
        args: [signerHasValidProof],
        overrides: {
          value: price,
        },
      })
    } else {
      mint.run({
        args: [],
        overrides: {
          value: ethers.utils.parseEther('0.02'),
        },
      })
    }
  }

  const text = 'Sold out!'

  return (
    <Button
      onClick={(): void => {
        onClick()
      }}
      disabled
    >
      {text}
    </Button>
  )
}

export default MintTokenButton
