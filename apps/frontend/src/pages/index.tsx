import Head from 'next/head'
import { MatosLogo } from 'ui'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import MintTokenButton from '../features/mint/MintTokenButton'
import Room from '../components/Room'
import Copy from '../components/Copy'

const Home: React.FC = () => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="fixed top-5 right-5 z-50">
      <ConnectButton />
    </div>
    <div className="flex mx-auto max-w-screen-xl h-full	">
      <div className="flex flex-[2] items-center">
        <Room />
      </div>
      <div className="flex relative z-50 flex-col flex-[1] justify-center items-center p-4">
        <MatosLogo className="mb-20" width={385} height={124} />
        <Copy />
        <MintTokenButton />
      </div>
    </div>
  </>
)

export default Home
