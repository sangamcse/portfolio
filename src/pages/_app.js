import ThemeProvider from 'utils/theme_context';

import '../styles/index.scss';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
