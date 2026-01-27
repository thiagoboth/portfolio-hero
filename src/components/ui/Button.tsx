import type { CTAButtonProps } from '../../types';

/**
 * Botão CTA com estilo moderno
 * Gradiente azul-roxo com animações suaves
 */
export function Button({
  children,
  onClick,
  variant = 'primary'
}: CTAButtonProps) {
  const baseStyles = `
    contact-btn
    relative overflow-hidden
    px-8 py-3.5
    sm:px-10 sm:py-4
    text-sm sm:text-base
    font-semibold uppercase tracking-wider
    rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-offset-2
    group
    cursor-pointer
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600
      text-white
      hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600
      focus:ring-blue-500/50
      shadow-lg shadow-blue-500/30
      hover:shadow-xl hover:shadow-blue-500/40
    `,
    secondary: `
      bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600
      text-white
      hover:from-pink-600 hover:via-rose-600 hover:to-pink-700
      focus:ring-pink-500/50
      shadow-lg shadow-pink-500/30
    `,
    outline: `
      bg-transparent
      border-2 border-blue-500
      text-blue-500
      hover:bg-blue-500 hover:text-white
      focus:ring-blue-500/50
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {/* Texto */}
      <span className="
        relative z-10
        flex items-center justify-center gap-2
        transition-transform duration-300
        group-hover:-translate-y-0.5
      ">
        {children}
      </span>

      {/* Efeito de brilho deslizante no hover */}
      <span className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-white to-transparent
        opacity-0 group-hover:opacity-20
        -translate-x-full group-hover:translate-x-full
        transition-transform duration-700 ease-out
      " />
    </button>
  );
}

export default Button;
