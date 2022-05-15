import { ConnectButton } from '@rainbow-me/rainbowkit'
import Head from 'next/head'
import { MatosLogo } from 'ui'
import Copy from '../components/Copy'
import MintTokenButton from '../features/mint/MintTokenButton'

const Home: React.FC = () => (
  <>
    <Head>
      <title>Matos Club</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="fixed right-5 top-5">
      <ConnectButton />
    </div>
    <div className="flex flex-col items-center">
      <MatosLogo className="mb-20" width={385} height={124} />
      <Copy />
      <MintTokenButton />
    </div>
  </>
)

export default Home
