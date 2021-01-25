import { useTheme } from 'utils/theme_context';

import Header from 'components/Header';
import { Footer } from 'components/Footer';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`content-transition duration-200 flex-auto flex flex-col min-h-screen justify-center text-center ${theme} bg-background`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
