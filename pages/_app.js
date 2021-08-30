import { createStore } from 'effector';
import '../styles/globals.css';

const store = createStore([])

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
