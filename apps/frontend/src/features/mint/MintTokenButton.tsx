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
  const { signerHasValidProof } = useMerkleTree()
  const { onSaleMint, mint } = useMint()

  const [account] = useAccount({
    fetchEns: true,
  })

  if (!isMounted) return null

  const onClick = (connectorItem: any): void => {
    if (!account.data) {
      connect(connectorItem)
      return
    }

    if (signerHasValidProof) {
      onSaleMint.run({
        args: [signerHasValidProof],
        overrides: {
          value: ethers.utils.parseEther('0.005'),
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

  const text = account.data ? 'Mint OG NFT' : 'Connect Wallet to Mint'

  return (
    <>
      {signerHasValidProof === undefined
        ? null
        : signerHasValidProof && <h1>You are elegible for a discount!</h1>}
      {data.connectors.map((x) => (
        <Button disabled={isMounted ? !x.ready : false} key={x.id} onClick={(): void => onClick(x)}>
          {text}
          {isMounted ? !x.ready && ' (unsupported)' : ''}
        </Button>
      ))}

      {error && <div>{error?.message ?? 'Failed to connect'}</div>}
    </>
  )
}

export default MintTokenButton
