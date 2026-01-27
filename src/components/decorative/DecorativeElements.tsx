/**
 * Elementos decorativos do hero
 * Conceito: Canvas de design com ícones de desenvolvimento web
 */
export function DecorativeElements() {
  return (
    <>
      {/* ========== CÍRCULO AZUL - Canto superior direito ========== */}
      <div
        className="
          absolute -top-20 -right-20 sm:-top-24 sm:-right-24
          w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72
          bg-blue-500
          rounded-full
          z-0
        "
        aria-hidden="true"
      />

      {/* ========== CÍRCULO ROSA - Canto inferior esquerdo ========== */}
      <div
        className="
          absolute -bottom-10 -left-10 sm:-bottom-12 sm:-left-12
          w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44
          bg-gradient-to-tr from-pink-500 to-rose-400
          rounded-full
          z-0
        "
        aria-hidden="true"
      />

      {/* ========== ÍCONES DE DESENVOLVIMENTO WEB ========== */}

      {/* Tag HTML < /> */}
      <div
        className="
          absolute top-28 left-4 sm:left-8 lg:left-16
          text-gray-300 text-lg sm:text-xl
          font-mono
          animate-float-slow
          select-none
        "
        aria-hidden="true"
      >
        &lt;/&gt;
      </div>

      {/* Chaves { } */}
      <div
        className="
          absolute top-1/3 right-4 sm:right-12 lg:right-20
          text-gray-300 text-xl sm:text-2xl
          font-mono
          animate-float-medium
          select-none
        "
        style={{ animationDelay: '0.5s' }}
        aria-hidden="true"
      >
        {'{'}...{'}'}
      </div>

      {/* Cursor de mouse */}
      <svg
        className="
          absolute bottom-1/3 right-6 sm:right-14 lg:right-24
          w-5 h-5 sm:w-6 sm:h-6
          text-gray-300
          animate-float-slow
        "
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4 4l16 8-8 2-2 8z" />
      </svg>

      {/* Ícone de código/terminal */}
      <div
        className="
          absolute bottom-1/4 left-6 sm:left-12 lg:left-20
          text-gray-300 text-sm sm:text-base
          font-mono
          animate-float-fast
          select-none
        "
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      >
        {'>'}_
      </div>

      {/* Hashtag/ID selector */}
      <div
        className="
          absolute top-1/2 left-2 sm:left-6
          text-gray-300/60 text-2xl sm:text-3xl
          font-light
          animate-float-medium
          select-none
        "
        style={{ animationDelay: '0.8s' }}
        aria-hidden="true"
      >
        #
      </div>

      {/* Ponto e vírgula */}
      <div
        className="
          absolute top-40 right-8 sm:right-20
          text-gray-300 text-2xl
          font-mono
          animate-float-slow
          select-none
        "
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      >
        ;
      </div>

      {/* Asterisco/pointer */}
      <div
        className="
          absolute bottom-40 right-4 sm:right-10
          text-gray-300/50 text-3xl
          animate-float-fast
          select-none
        "
        style={{ animationDelay: '0.3s' }}
        aria-hidden="true"
      >
        *
      </div>

      {/* Parênteses () */}
      <div
        className="
          absolute top-2/3 left-8 sm:left-16
          text-gray-300/40 text-xl
          font-mono
          animate-float-medium
          select-none
        "
        style={{ animationDelay: '1.2s' }}
        aria-hidden="true"
      >
        ( )
      </div>

      {/* Barra dupla // comentário */}
      <div
        className="
          absolute bottom-1/3 left-4 sm:left-10
          text-gray-300/50 text-base
          font-mono
          animate-float-slow
          select-none
        "
        style={{ animationDelay: '1.8s' }}
        aria-hidden="true"
      >
        //
      </div>

      {/* Colchetes [] */}
      <div
        className="
          absolute top-1/4 right-6 sm:right-16
          text-gray-300/40 text-lg
          font-mono
          animate-float-fast
          select-none
        "
        style={{ animationDelay: '0.6s' }}
        aria-hidden="true"
      >
        [ ]
      </div>
    </>
  );
}

export default DecorativeElements;
