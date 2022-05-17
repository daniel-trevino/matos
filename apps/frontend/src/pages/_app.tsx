import { AppProps } from 'next/app'
import '../styles/globals.css'
import AppBootstrap from '../components/AppBootstrap'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <AppBootstrap>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <Component {...pageProps} />
  </AppBootstrap>
)

export default MyApp
