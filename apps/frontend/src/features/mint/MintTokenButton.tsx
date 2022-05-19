import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { Button } from 'ui'
import { useAccount, useContractRead, useNetwork } from 'wagmi'
import { Matos__factory } from '../../../generated/typechain'
import { useAppContractRead } from '../../hooks/useAppContractRead'
import { useMerkleTree } from '../../hooks/useMerkleTree'
import { useMint } from './useMint'

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

  const loading = onSaleMint?.loading || mint.loading

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

  let text = 'Mint OG NFT 0.02 ETH'
  if (signerHasValidProof && price && balanceOf?.isZero()) {
    text = `Mint for ${ethers.utils.formatEther(price)}`
  }
  if (loading) {
    text = 'Minting...'
  }

  return (
    <Button
      onClick={(): void => {
        onClick()
      }}
      disabled={loading}
    >
      {text}
    </Button>
  )
}

export default MintTokenButton
