import ThemeProvider from '../utils/theme_context';

import '../styles/index.css';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
