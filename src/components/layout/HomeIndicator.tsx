interface HomeIndicatorProps {
  isDark?: boolean;
}

/**
 * Indicador Home do iOS (barra na parte inferior)
 */
export function HomeIndicator({ isDark = false }: HomeIndicatorProps) {
  return (
    <div className={`
      absolute bottom-2 left-1/2 -translate-x-1/2
      w-32 h-1 rounded-full
      ${isDark ? 'bg-white' : 'bg-black'}
    `} />
  );
}

export default HomeIndicator;
