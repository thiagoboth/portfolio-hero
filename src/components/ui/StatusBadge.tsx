import type { StatusBadgeProps } from '../../types';

/**
 * StatusBadge - Badge de disponibilidade
 * Indica se o profissional está disponível para novos projetos
 */

const statusConfig = {
  available: {
    color: 'bg-[#0183FF]',
    ringColor: 'bg-[#0183FF]/60',
    bgColor: 'bg-[#0183FF]/10 dark:bg-[#0183FF]/20',
    borderColor: 'border-[#0183FF]/20 dark:border-[#0183FF]/30',
    textColor: 'text-[#0B4DB4] dark:text-[#7AB6FF]',
    defaultText: 'Disponível para projetos',
  },
  partial: {
    color: 'bg-amber-500',
    ringColor: 'bg-amber-400',
    bgColor: 'bg-amber-500/10 dark:bg-amber-500/20',
    borderColor: 'border-amber-500/20 dark:border-amber-500/30',
    textColor: 'text-amber-700 dark:text-amber-300',
    defaultText: 'Disponibilidade limitada',
  },
  unavailable: {
    color: 'bg-red-500',
    ringColor: 'bg-red-400',
    bgColor: 'bg-red-500/10 dark:bg-red-500/20',
    borderColor: 'border-red-500/20 dark:border-red-500/30',
    textColor: 'text-red-700 dark:text-red-300',
    defaultText: 'Indisponível no momento',
  },
};

export function StatusBadge({
  status = 'available',
  text,
  className = '',
}: StatusBadgeProps) {
  const config = statusConfig[status];
  const displayText = text || config.defaultText;

  return (
    <div
      className={`
        inline-flex items-center gap-2.5
        px-4 py-2
        rounded-full
        ${config.bgColor}
        border ${config.borderColor}
        backdrop-blur-sm
        transition-all duration-300
        hover:scale-105
        ${className}
      `}
    >
      {/* Dot com pulse */}
      <span className="relative flex h-2.5 w-2.5">
        {/* Ring pulse animation */}
        <span
          className={`
            absolute inset-0 rounded-full
            ${config.ringColor}
            animate-pulse-ring
          `}
        />
        {/* Dot central */}
        <span
          className={`
            relative inline-flex rounded-full h-2.5 w-2.5
            ${config.color}
            animate-pulse-dot
          `}
        />
      </span>

      {/* Texto */}
      <span className={`text-sm font-medium ${config.textColor}`}>
        {displayText}
      </span>
    </div>
  );
}

export default StatusBadge;
