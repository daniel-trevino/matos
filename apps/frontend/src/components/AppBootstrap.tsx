// eslint-disable-next-line import/no-unresolved
import '@rainbow-me/rainbowkit/styles.css'

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  Theme,
} from '@rainbow-me/rainbowkit'
import { chain, createClient, WagmiProvider } from 'wagmi'
import merge from 'lodash.merge'
import Layout from './Layout'
import SEO from './SEO'
import config from '../lib/config'

const selectedChain = config.isProduction ? chain.mainnet : chain.rinkeby
const infuraKey = config.isProduction ? config.MAINNET_INFURA_KEY : config.RINKEBY_INFURA_KEY

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#000',
  },
} as Theme)

const { chains, provider } = configureChains(
  [selectedChain],
  [apiProvider.infura(infuraKey), apiProvider.fallback()]
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
    <RainbowKitProvider theme={myTheme} chains={chains}>
      <Layout>{children}</Layout>
      <SEO />
    </RainbowKitProvider>
  </WagmiProvider>
)

export default AppBootstrap
