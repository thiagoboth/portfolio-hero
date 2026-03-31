import type { CTAButtonProps } from '../../types';

/**
 * Botão CTA com estilo moderno
 * Gradiente azul-roxo com efeito de brilho no hover
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
      bg-gradient-to-r from-[#0183FF] via-[#3B9BFF] to-[#FF00E4]
      text-white
      hover:from-[#1C8DFF] hover:via-[#5CAEFF] hover:to-[#FF3FED]
      focus:ring-[#0183FF]/40
      shadow-[0_18px_45px_-22px_rgba(1,131,255,0.55)]
      hover:shadow-[0_22px_55px_-26px_rgba(255,0,228,0.45)]
    `,
    secondary: `
      bg-gradient-to-r from-[#FF00E4] via-[#FF4AED] to-[#FF7AF4]
      text-white
      hover:from-[#FF1FE8] hover:via-[#FF6CF2] hover:to-[#FF9AF7]
      focus:ring-[#FF00E4]/40
      shadow-[0_18px_45px_-22px_rgba(255,0,228,0.45)]
    `,
    outline: `
      bg-transparent
      border-2 border-[#0183FF]
      text-[#0183FF]
      hover:bg-[#0183FF] hover:text-white
      focus:ring-[#0183FF]/40
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {/* Glow effect no hover */}
      <span className="
        absolute inset-0
        rounded-full
        bg-white/20
        opacity-0 group-hover:opacity-100
        blur-md
        transition-opacity duration-300
      " />

      {/* Texto */}
      <span className="
        relative z-10
        flex items-center justify-center gap-2
        transition-all duration-300
        group-hover:-translate-y-0.5
        group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]
      ">
        {children}
      </span>

      {/* Efeito de brilho deslizante no hover */}
      <span className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-white to-transparent
        opacity-0 group-hover:opacity-30
        -translate-x-full group-hover:translate-x-full
        transition-transform duration-700 ease-out
      " />
    </button>
  );
}

export default Button;
