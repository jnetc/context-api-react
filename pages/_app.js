import '../styles/globals.css'
import { AppWrapper } from '../public/context/context.js'

function MyApp({ Component, pageProps }) {
  return <AppWrapper><Component {...pageProps} /></AppWrapper>
}

export default MyApp
