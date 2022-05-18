import Head from 'next/head'
import { MatosLogo } from 'ui'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import MintTokenButton from '../features/mint/MintTokenButton'
import Room from '../components/Room'
import Copy from '../components/Copy'
import { useContractRead } from 'wagmi'
import { Matos__factory } from '../../generated/typechain'

const Home: React.FC = () => {
  const { data, error, isLoading } = useContractRead(
    {
      addressOrName: '0x760C862191EBd06fe91ec76f7e8b7356308489e2',
      contractInterface: Matos__factory.abi,
    },
    'totalSupply',
    {
      args: [0],
      watch: true,
    }
  )

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed top-5 right-5 z-50">
        <ConnectButton />
      </div>
      <div
        className="flex flex-col mx-auto max-w-screen-xl h-full 
md:flex-row "
      >
        <div className="flex flex-[2] items-center max-h-72 md:max-h-screen">
          <Room />
        </div>
        <div className="flex relative z-30 flex-col flex-[1.3] items-center p-4 md:justify-center">
          <MatosLogo className="mb-5 max-w-full" width={385} height={124} />
          <Copy />
          {data && (
            <div className="text-3xl text-center	text-white mb-4">{data.toString()} / 100</div>
          )}
          <MintTokenButton />
        </div>
      </div>
    </>
  )
}

export default Home
