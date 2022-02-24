import { Provider } from 'wagmi'
import { defaultProvider, METAMASK_CONNECTOR } from '../utils/web3-utils'
import Layout from './Layout'

const AppBootstrap: React.FC = ({ children }) => (
  <Layout>
    <Provider
      autoConnect
      provider={defaultProvider}
      connectors={[METAMASK_CONNECTOR]}
      connectorStorageKey="dyorWallet"
    >
      {children}
    </Provider>
  </Layout>
)

export default AppBootstrap
