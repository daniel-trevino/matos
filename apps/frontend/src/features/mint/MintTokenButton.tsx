import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { Button } from 'ui'
import { useAccount, useConnect } from 'wagmi'
import { useMerkleTree } from '../../hooks/useMerkleTree'
import { useMint } from './useMint'

export const useIsMounted = (): boolean => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

const MintTokenButton: React.FC = () => {
  const isMounted = useIsMounted()
  const [{ data, error }, connect] = useConnect()
  const { signerHasValidProof, price } = useMerkleTree()

  const { onSaleMint, mint } = useMint()

  const [account] = useAccount({
    fetchEns: true,
  })

  if (!isMounted) return null

  console.log('PRICE:', price)
  const onClick = (connectorItem: any): void => {
    if (!account.data) {
      connect(connectorItem)
      return
    }

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

  let text = account.data ? 'Mint OG NFT' : 'Connect Wallet to Mint'

  if (signerHasValidProof && price) {
    text = `Mint for ${ethers.utils.formatEther(price)}`
  }

  return (
    <>
      {signerHasValidProof === undefined
        ? null
        : signerHasValidProof && <h1>You are elegible for a discount!</h1>}
      {data.connectors.map((x) => (
        <Button
          disabled={isMounted ? !x.ready : false}
          key={x.id}
          onClick={(): void => {
            onClick(x)
          }}
        >
          {text}
          {isMounted ? !x.ready && ' (unsupported)' : ''}
        </Button>
      ))}

      {error && <div>{error?.message ?? 'Failed to connect'}</div>}
    </>
  )
}

export default MintTokenButton
