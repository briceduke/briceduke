import { AppProps } from 'next/app';

import 'highlight.js/styles/default.css'
import 'highlight.js/styles/vs2015.css'

import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
