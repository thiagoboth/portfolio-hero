/**
 * Elementos decorativos do hero
 * Conceito: Canvas de design em edição
 * Elementos que parecem UI de editor de design
 */
export function DecorativeElements() {
  return (
    <>
      {/* ========== CÍRCULO AZUL - Canto superior direito ========== */}
      <div
        className="
          absolute -top-20 -right-20 sm:-top-24 sm:-right-24
          w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80
          bg-blue-500
          rounded-full
          z-0
        "
        aria-hidden="true"
      />

      {/* ========== TRIÂNGULO ROSA - Canto inferior esquerdo ========== */}
      <div
        className="
          absolute -bottom-2 -left-2
          z-0
        "
        aria-hidden="true"
      >
        {/* Triângulo rosa (como play button / cursor) */}
        <div
          className="w-0 h-0
            border-t-[30px] border-t-transparent
            border-l-[45px] border-l-pink-500
            border-b-[30px] border-b-transparent
            sm:border-t-[40px] sm:border-l-[60px] sm:border-b-[40px]
            rotate-[-45deg]
            translate-x-2 translate-y-2
          "
        />
      </div>

      {/* ========== ELEMENTOS DE UI DO CANVAS ========== */}

      {/* Ponto de seleção superior esquerdo */}
      <div
        className="
          absolute top-32 left-4 sm:left-8
          w-2 h-2 sm:w-2.5 sm:h-2.5
          bg-blue-500 rounded-full
          animate-pulse
          shadow-lg shadow-blue-500/50
        "
        style={{ animationDuration: '2s' }}
        aria-hidden="true"
      />

      {/* Ponto de seleção - canto */}
      <div
        className="
          absolute top-48 right-8 sm:right-16
          w-2 h-2 sm:w-2.5 sm:h-2.5
          border-2 border-blue-500 bg-white rounded-sm
        "
        aria-hidden="true"
      />

      {/* Linha guia vertical sutil */}
      <div
        className="
          absolute top-0 bottom-0 left-1/4
          w-px bg-gray-200/50
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* Cursor de mouse decorativo */}
      <svg
        className="
          absolute bottom-1/3 right-6 sm:right-12
          w-5 h-5 sm:w-6 sm:h-6
          text-gray-400
          animate-float-slow
        "
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4 4l16 8-8 2-2 8z" />
      </svg>

      {/* Elemento de texto placeholder */}
      <div
        className="
          absolute top-1/2 right-4 sm:right-10
          flex flex-col gap-1.5
          animate-float-medium
        "
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      >
        <div className="w-8 sm:w-12 h-1 bg-gray-200 rounded" />
        <div className="w-6 sm:w-8 h-1 bg-gray-200 rounded" />
      </div>

      {/* Bounding box corners - superior direito */}
      <div
        className="
          absolute top-40 right-24 sm:right-32
          w-3 h-3
          border-t-2 border-r-2 border-gray-300
        "
        aria-hidden="true"
      />

      {/* Bounding box corners - inferior esquerdo */}
      <div
        className="
          absolute bottom-40 left-20 sm:left-28
          w-3 h-3
          border-b-2 border-l-2 border-gray-300
        "
        aria-hidden="true"
      />

      {/* Plus icon flutuante (como adicionar elemento) */}
      <div
        className="
          absolute top-2/3 left-6 sm:left-12
          w-6 h-6 sm:w-8 sm:h-8
          flex items-center justify-center
          text-gray-300 text-xl sm:text-2xl
          animate-float-fast
          select-none
        "
        style={{ animationDelay: '0.5s' }}
        aria-hidden="true"
      >
        +
      </div>

      {/* Régua/medida decorativa */}
      <div
        className="
          absolute bottom-1/4 right-8 sm:right-16
          flex items-center gap-1
          animate-float-medium
        "
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      >
        <div className="w-1 h-3 bg-gray-300 rounded" />
        <div className="w-12 sm:w-16 h-0.5 bg-gray-300" />
        <div className="w-1 h-3 bg-gray-300 rounded" />
      </div>

      {/* Layer indicator */}
      <div
        className="
          absolute bottom-20 left-4 sm:left-8
          flex flex-col gap-0.5
        "
        aria-hidden="true"
      >
        <div className="w-4 h-1 bg-blue-400 rounded-sm opacity-80" />
        <div className="w-4 h-1 bg-gray-300 rounded-sm opacity-60" />
        <div className="w-4 h-1 bg-gray-300 rounded-sm opacity-40" />
      </div>
    </>
  );
}

export default DecorativeElements;
