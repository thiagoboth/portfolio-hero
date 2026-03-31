import type { TagProps } from '../../types';

/**
 * Tag - Componente de tag/badge para categorização
 * Usado em cards de projeto para mostrar tecnologias
 */
export function Tag({
  children,
  variant = 'default',
}: TagProps) {
  const variants = {
    default: `
      bg-gray-100 dark:bg-gray-800
      text-gray-700 dark:text-gray-300
    `,
    brand: `
      bg-gradient-to-r from-blue-500/10 to-indigo-500/10
      text-blue-600 dark:text-blue-400
      border border-blue-500/20
    `,
  };

  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        text-xs sm:text-sm font-medium
        rounded-full
        transition-all duration-200
        hover:scale-105
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
}

export default Tag;
