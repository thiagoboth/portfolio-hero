import type { CardProps } from '../../types';

/**
 * Card - Componente de cartão reutilizável
 * Suporta variantes: default, elevated, outlined
 */
export function Card({
  children,
  variant = 'default',
  hover = true,
  className = '',
  style,
}: CardProps) {
  const baseStyles = `
    rounded-2xl
    transition-all duration-300 ease-out
    ${hover ? 'hover:-translate-y-1' : ''}
  `;

  const variants = {
    default: `
      bg-white
      dark:bg-gray-800
      ${hover ? 'hover:shadow-lg' : ''}
    `,
    elevated: `
      bg-white
      dark:bg-gray-800
      shadow-lg
      ${hover ? 'hover:shadow-2xl hover:shadow-blue-500/10' : ''}
    `,
    outlined: `
      bg-transparent
      border-2 border-gray-200
      dark:border-gray-700
      ${hover ? 'hover:border-blue-500 dark:hover:border-blue-400' : ''}
    `,
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Card;
