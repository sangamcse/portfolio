import { createContext, useContext, useEffect, useState } from 'react';

const initialValue = { theme: 'theme-light' };

export const ThemeContext = createContext(initialValue);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('theme-light');

  useEffect(() => {
    function handleTheme() {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (isDark) {
        setTheme('theme-dark');
      }
    }

    handleTheme();
  }, []);

  function toggleTheme() {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
