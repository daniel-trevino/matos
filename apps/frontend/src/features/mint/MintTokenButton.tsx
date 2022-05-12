import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { Button } from 'ui'
import { useAccount, useConnect, useNetwork } from 'wagmi'
import { useMerkleTree } from '../../hooks/useMerkleTree'
import { useMint } from './useMint'

export const useIsMounted = (): boolean => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

const MintTokenButton: React.FC = () => {
  const isMounted = useIsMounted()
  const { data: account } = useAccount()
  const { data } = useConnect()
  const { signerHasValidProof, price } = useMerkleTree()

  const { onSaleMint, mint } = useMint()
  if (!account?.address) {
    return null
  }
  if (data?.chain.unsupported) {
    return null
  }
  const onClick = (): void => {
    if (signerHasValidProof && price) {
      console.log(
        '!!!',
        {
          signerHasValidProof,
          price,
        },
        ethers.utils.formatEther(price)
      )

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

  return (
    <>
      {signerHasValidProof === undefined
        ? null
        : signerHasValidProof && <h1>You are elegible for a discount!</h1>}

      <Button
        onClick={(): void => {
          onClick()
        }}
      >
        {text}
      </Button>
    </>
  )
}

export default MintTokenButton
