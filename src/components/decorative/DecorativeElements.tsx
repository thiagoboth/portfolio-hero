import type { DecorativeElementsProps } from '../../types';

/**
 * Elementos decorativos do hero
 * Círculos azul e rosa como cores principais
 * Ícones com animações flutuantes suaves
 */
export function DecorativeElements({ isDark = false }: DecorativeElementsProps) {
  return (
    <>
      {/* ========== CÍRCULO AZUL - Canto superior direito ========== */}
      {/* Glow/blur do círculo azul */}
      <div
        className="
          absolute -top-16 -right-16
          w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80
          bg-gradient-to-bl from-blue-400 via-blue-500 to-indigo-500
          rounded-full
          opacity-50 blur-3xl
          animate-pulse
          z-0
        "
        style={{ animationDuration: '4s' }}
        aria-hidden="true"
      />
      {/* Círculo azul principal - z-index baixo para ficar atrás do menu */}
      <div
        className="
          absolute -top-12 -right-12
          w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64
          bg-gradient-to-bl from-blue-400 to-blue-600
          rounded-full
          z-0
        "
        aria-hidden="true"
      />

      {/* ========== CÍRCULO ROSA - Canto inferior esquerdo ========== */}
      {/* Glow/blur do círculo rosa */}
      <div
        className="
          absolute -bottom-12 -left-12
          w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64
          bg-gradient-to-tr from-pink-400 via-rose-500 to-pink-600
          rounded-full
          opacity-40 blur-3xl
          animate-pulse
          z-0
        "
        style={{ animationDuration: '3s' }}
        aria-hidden="true"
      />
      {/* Círculo rosa principal */}
      <div
        className="
          absolute -bottom-8 -left-8
          w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56
          bg-gradient-to-tr from-pink-500 to-rose-500
          rounded-full
          z-0
        "
        aria-hidden="true"
      />

      {/* ========== ELEMENTOS FLUTUANTES COM ANIMAÇÕES ========== */}
      {/* Cruz superior esquerda - flutuação lenta */}
      <div
        className={`
          absolute top-28 left-6 sm:left-10 lg:left-16
          text-3xl sm:text-4xl lg:text-5xl font-extralight select-none
          animate-float-slow
          ${isDark ? 'text-gray-700' : 'text-gray-300'}
        `}
        aria-hidden="true"
      >
        +
      </div>

      {/* Cruz superior direita - flutuação média */}
      <div
        className={`
          absolute top-40 right-20 sm:right-28 lg:right-40
          text-2xl sm:text-3xl lg:text-4xl font-extralight select-none
          animate-float-medium
          ${isDark ? 'text-gray-600' : 'text-gray-400'}
        `}
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      >
        +
      </div>

      {/* Cruz centro direita - flutuação rápida */}
      <div
        className={`
          absolute top-1/2 right-6 sm:right-12 lg:right-20
          text-xl sm:text-2xl lg:text-3xl select-none
          animate-float-fast
          ${isDark ? 'text-gray-700' : 'text-gray-300'}
        `}
        style={{ animationDelay: '0.5s' }}
        aria-hidden="true"
      >
        +
      </div>

      {/* Cruz inferior esquerda */}
      <div
        className={`
          absolute bottom-1/4 left-8 sm:left-16 lg:left-24
          text-xl sm:text-2xl lg:text-3xl font-extralight select-none
          animate-float-medium
          ${isDark ? 'text-gray-600' : 'text-gray-400'}
        `}
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      >
        +
      </div>

      {/* Cursor decorativo - flutuação com rotação */}
      <svg
        className={`
          absolute bottom-1/3 right-8 sm:right-16 lg:right-28
          w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10
          animate-float-rotate
          ${isDark ? 'text-gray-700' : 'text-gray-300'}
        `}
        style={{ animationDelay: '2s' }}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4 4l16 8-8 2-2 8z" />
      </svg>

      {/* Elemento decorativo extra - círculo pequeno flutuante */}
      <div
        className={`
          absolute top-1/3 left-10 sm:left-20 lg:left-32
          w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5
          rounded-full
          animate-float-slow
          ${isDark ? 'bg-gray-700' : 'bg-gray-300'}
        `}
        style={{ animationDelay: '0.8s' }}
        aria-hidden="true"
      />

      {/* Elemento decorativo extra - losango */}
      <div
        className={`
          absolute bottom-1/2 left-4 sm:left-8 lg:left-12
          w-3 h-3 sm:w-4 sm:h-4
          rotate-45
          animate-float-fast
          ${isDark ? 'bg-gray-700' : 'bg-gray-300'}
        `}
        style={{ animationDelay: '1.2s' }}
        aria-hidden="true"
      />

      {/* Linha decorativa horizontal */}
      <div
        className={`
          absolute top-2/3 right-16 sm:right-24 lg:right-36
          w-8 sm:w-12 lg:w-16 h-0.5
          animate-float-medium
          ${isDark ? 'bg-gray-700' : 'bg-gray-300'}
        `}
        style={{ animationDelay: '0.3s' }}
        aria-hidden="true"
      />
    </>
  );
}

export default DecorativeElements;
