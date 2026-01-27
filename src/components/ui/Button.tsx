import type { CTAButtonProps } from '../../types';

/**
 * Botão CTA reutilizável
 * Mobile-first com padding responsivo
 * Animações aprimoradas de hover, click e shine
 */
export function Button({
  children,
  onClick,
  variant = 'primary'
}: CTAButtonProps) {
  const baseStyles = `
    contact-btn
    relative overflow-hidden
    px-8 py-4
    sm:px-10 sm:py-5
    md:px-12 md:py-5
    text-sm sm:text-base
    font-bold uppercase tracking-wider sm:tracking-widest
    rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-offset-2
    group
    cursor-pointer
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
      text-white
      border-2 border-transparent
      hover:border-blue-500/50
      focus:ring-blue-500/50
      shadow-lg shadow-gray-900/30
    `,
    secondary: `
      bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600
      text-white
      border-2 border-transparent
      hover:border-blue-300/50
      focus:ring-blue-500/50
      shadow-lg shadow-blue-500/30
    `,
    outline: `
      bg-transparent
      border-2 border-gray-900
      text-gray-900
      hover:bg-gray-900 hover:text-white
      focus:ring-gray-900/50
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {/* Efeito de gradiente animado no hover (apenas primary) */}
      {variant === 'primary' && (
        <span className="
          absolute inset-0
          bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        " />
      )}

      {/* Glow pulsante no hover */}
      <span className="
        absolute inset-0
        rounded-full
        opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20
        blur-xl
        scale-150
        transition-all duration-500
        -z-10
      " />

      {/* Texto com efeito de elevação */}
      <span className="
        relative z-10
        flex items-center justify-center gap-2
        transition-transform duration-300
        group-hover:scale-105
      ">
        {children}
        {/* Seta animada */}
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>

      {/* Efeito de brilho deslizante no hover */}
      <span className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-white to-transparent
        opacity-0 group-hover:opacity-30
        -translate-x-full group-hover:translate-x-full
        transition-transform duration-700 ease-out
      " />

      {/* Partículas decorativas no hover */}
      <span className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-2 h-2 rounded-full bg-white
        opacity-0 group-hover:opacity-60
        scale-0 group-hover:scale-100
        transition-all duration-300 delay-100
        group-active:scale-150 group-active:opacity-0
      " />
    </button>
  );
}

export default Button;
