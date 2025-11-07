import { useEffect, useState } from 'react';

const THEME_KEY = 'app_theme';

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const t = localStorage.getItem(THEME_KEY);
      return t || 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    // Use Tailwind's class-based dark mode: only toggle the 'dark' class
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
  }, [theme]);

  return [theme, setTheme];
}
