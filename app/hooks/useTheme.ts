
import { useEffect, useState } from 'react';

enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export const useTheme = () => {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const toggleTheme = () => {
    if (theme === THEME.LIGHT) {
      localStorage.theme = THEME.DARK;
      document.documentElement.classList.add(THEME.DARK);
      setTheme(THEME.DARK);
    } else {
      localStorage.theme = THEME.LIGHT;
      document.documentElement.classList.remove(THEME.DARK);
      setTheme(THEME.LIGHT);
    }
  };

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme(THEME.DARK);
    }
  }, []);

  return { theme, toggleTheme };
};
