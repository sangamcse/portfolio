import { useTheme } from '../utils/theme_context';

import Footer from './footer';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`content-transition duration-200 relative min-h-screen py-8 px:4 grid grid-cols-12 col-gap-4 ${theme} bg-background`}
    >
      {children}
      <Footer />
    </div>
  );
}
