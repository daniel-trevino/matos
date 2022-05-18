import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { Button } from 'ui'
import { useAccount, useNetwork } from 'wagmi'
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
  // const { a } = useAppContractRead('Matos', 'totalSupply', {
  //   args: [0],
  // })
  const { onSaleMint, mint } = useMint()
  if (!account?.address) {
    return null
  }
  if (activeChain?.unsupported) {
    return null
  }

  const loading = onSaleMint?.loading || mint.loading

  const onClick = (): void => {
    if (signerHasValidProof && price) {
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

  if (signerHasValidProof && price) {
    text = `Mint for ${ethers.utils.formatEther(price)}`
  }
  if (loading) {
    text = 'minting...'
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
