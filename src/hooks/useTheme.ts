import { useState, useEffect } from 'react';
import type { ThemeContextType } from '../types';

/**
 * Hook para gerenciar o tema (light/dark mode)
 * Detecta automaticamente a preferência do sistema
 */
export function useTheme(): ThemeContextType {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detecta preferência do sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    // Listener para mudanças na preferência
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);

  return { isDark, toggleTheme };
}

export default useTheme;
