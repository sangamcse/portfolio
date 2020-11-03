import { useTheme } from 'utils/theme_context';

import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`content-transition duration-200 relative min-h-screen px:4 grid grid-cols-12 col-gap-4 ${theme} bg-background`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
