import { useState, useEffect, useCallback } from 'react';
import type { ThemeContextType } from '../types';

/**
 * Hook para gerenciar o tema (light/dark mode)
 * Persiste a preferência no localStorage
 * Aplica a classe 'dark' no documento
 */
export function useTheme(): ThemeContextType {
  const [isDark, setIsDark] = useState(() => {
    // Verifica localStorage primeiro
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
      // Fallback para preferência do sistema
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Aplica a classe 'dark' no documento
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Listener para mudanças na preferência do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      // Só muda se não houver preferência salva
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  return { isDark, toggleTheme };
}

export default useTheme;
