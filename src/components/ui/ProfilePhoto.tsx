import type { ProfilePhotoProps } from '../../types';

/**
 * Componente de foto de perfil com borda gradiente
 * Mobile-first: tamanhos responsivos
 */
export function ProfilePhoto({ src, alt, isDark = false }: ProfilePhotoProps) {
  return (
    <div className="
      relative mx-auto group
      w-52 h-52
      sm:w-60 sm:h-60
      md:w-72 md:h-72
      lg:w-80 lg:h-80
    ">
      {/* Glow effect no hover */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-gradient-to-br from-blue-500 to-indigo-500
          opacity-0 group-hover:opacity-30
          blur-xl transition-opacity duration-500
        "
        aria-hidden="true"
      />

      {/* Círculo decorativo externo */}
      <div
        className={`
          absolute -inset-3 sm:-inset-4 rounded-full border
          ${isDark ? 'border-gray-700' : 'border-gray-200'}
          group-hover:border-blue-300
          transition-all duration-300
          group-hover:scale-105
        `}
        aria-hidden="true"
      />

      {/* Borda principal com gradiente azul */}
      <div className="
        absolute inset-0 rounded-full
        bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500
        p-[3px] sm:p-1
        group-hover:from-blue-400 group-hover:to-indigo-400
        transition-all duration-300
      ">
        <div className={`
          w-full h-full rounded-full p-[3px] sm:p-1
          ${isDark ? 'bg-gray-900' : 'bg-white'}
        `}>
          <img
            src={src}
            alt={alt}
            className="
              w-full h-full rounded-full object-cover
              group-hover:scale-105 transition-transform duration-500
            "
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePhoto;
