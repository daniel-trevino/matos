import Head from 'next/head'
import MintTokenButton from '../features/mint/MintTokenButton'

const Home: React.FC = () => (
  <>
    <Head>
      <title>Matos Club</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MintTokenButton />
  </>
)

export default Home
