// eslint-disable-next-line import/no-unresolved
import '@rainbow-me/rainbowkit/styles.css'

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { chain, createClient, WagmiProvider } from 'wagmi'
import Layout from './Layout'
import SEO from './SEO'

const { chains, provider } = configureChains(
  [chain.rinkeby],
  [apiProvider.infura(process.env.NEXT_PUBLIC_RINKEBY_INFURA_KEY), apiProvider.fallback()]
)

const { connectors } = getDefaultWallets({
  appName: 'Matos',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const AppBootstrap: React.FC = ({ children }) => (
  <WagmiProvider client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <Layout>{children}</Layout>
      <SEO />
    </RainbowKitProvider>
  </WagmiProvider>
)

export default AppBootstrap
