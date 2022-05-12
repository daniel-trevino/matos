import Head from 'next/head'
import { MatosLogo } from 'ui'
import MintTokenButton from '../features/mint/MintTokenButton'
import Room from '../components/Room'

const Home: React.FC = () => (
  <>
    <Head>
      <title>Matos Club</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="flex flex-col items-center">
      <Room />
      <MatosLogo className="mb-20" width={385} height={124} />
      <MintTokenButton />
    </div>
  </>
)

export default Home
