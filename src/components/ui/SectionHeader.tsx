import type { SectionHeaderProps } from '../../types';

/**
 * SectionHeader - Cabeçalho padronizado para seções
 * Com título e subtítulo opcional, suporte a gradiente
 */
export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  gradient = false,
}: SectionHeaderProps) {
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center',
  };

  return (
    <div className={`mb-12 sm:mb-16 ${alignmentStyles[align]}`}>
      <h2
        className={`
          text-3xl sm:text-4xl md:text-5xl
          font-bold tracking-tight
          mb-4
          ${gradient
            ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent'
            : 'text-gray-900 dark:text-white'
          }
        `}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
