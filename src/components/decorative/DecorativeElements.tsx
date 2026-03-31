/**
 * Elementos decorativos do hero
 * Conceito: Canvas de design com ícones de desenvolvimento web
 * Suporta dark/light mode
 */
export function DecorativeElements() {
  return (
    <>
      {/* ========== CÍRCULO AZUL - Cortado no topo direito ========== */}
      <div
        className="
          absolute -top-8 -right-8 sm:-top-10 sm:-right-10
          w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60
          bg-blue-500 dark:bg-blue-600
          rounded-full
          z-0
          opacity-80 dark:opacity-60
        "
        aria-hidden="true"
      />

      {/* ========== CÍRCULO ROSA - Canto inferior esquerdo ========== */}
      <div
        className="
          absolute -bottom-10 -left-10 sm:-bottom-12 sm:-left-12
          w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44
          bg-gradient-to-tr from-pink-500 to-rose-400
          dark:from-pink-600 dark:to-rose-500
          rounded-full
          z-0
          opacity-80 dark:opacity-60
        "
        aria-hidden="true"
      />

      {/* ========== ÍCONES DE DESENVOLVIMENTO WEB (Sutis) ========== */}

      {/* Tag HTML < /> */}
      <div
        className="
          absolute top-28 left-4 sm:left-8 lg:left-16
          text-gray-400/30 dark:text-gray-600/40 text-lg sm:text-xl
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
          text-gray-400/25 dark:text-gray-600/35 text-xl sm:text-2xl
          font-mono
          animate-float-medium
          select-none
        "
        style={{ animationDelay: '0.5s' }}
        aria-hidden="true"
      >
        {'{'}...{'}'}
      </div>

      {/* Ícone de código/terminal */}
      <div
        className="
          absolute bottom-1/4 left-6 sm:left-12 lg:left-20
          text-gray-400/30 dark:text-gray-600/40 text-sm sm:text-base
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
          text-gray-400/25 dark:text-gray-600/35 text-2xl sm:text-3xl
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
          text-gray-400/25 dark:text-gray-600/35 text-2xl
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
          text-gray-400/20 dark:text-gray-600/30 text-3xl
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
          text-gray-400/20 dark:text-gray-600/30 text-xl
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
          text-gray-400/25 dark:text-gray-600/35 text-base
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
          text-gray-400/20 dark:text-gray-600/30 text-lg
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
