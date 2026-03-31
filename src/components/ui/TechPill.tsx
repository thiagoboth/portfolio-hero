import type { TechPillProps, TechStackProps } from '../../types';

/**
 * TechPill - Badge individual de tecnologia
 */
export function TechPill({ tech, index = 0, className = '' }: TechPillProps) {
  return (
    <div
      className={`
        inline-flex items-center gap-2
        px-3 py-1.5
        rounded-full
        bg-gray-100 dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        text-gray-700 dark:text-gray-300
        text-sm font-medium
        transition-all duration-300
        hover:scale-105 hover:shadow-md
        hover:bg-gray-200 dark:hover:bg-gray-700
        hover:border-gray-300 dark:hover:border-gray-600
        animate-tech-pill
        ${className}
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <span className="text-base">{tech.icon}</span>
      <span>{tech.name}</span>
    </div>
  );
}

/**
 * TechStack - Grid de tecnologias
 */
export function TechStack({ technologies, className = '' }: TechStackProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech, index) => (
        <TechPill key={tech.name} tech={tech} index={index} />
      ))}
    </div>
  );
}

export default TechPill;
