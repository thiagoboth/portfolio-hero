import type { ProfilePhotoProps } from '../../types';

/**
 * Componente de foto de perfil com estilo canvas
 * Borda tracejada como elemento de seleção
 * Mobile-first: tamanhos responsivos
 */
export function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  return (
    <div className="
      relative mx-auto group
      w-44 h-44
      sm:w-52 sm:h-52
      md:w-60 md:h-60
    ">
      {/* Círculo tracejado externo (estilo seleção de canvas) */}
      <div
        className="
          absolute -inset-3 sm:-inset-4
          rounded-full
          border-2 border-dashed border-gray-200
          group-hover:border-blue-300
          transition-colors duration-300
        "
        aria-hidden="true"
      />

      {/* Borda principal azul sólida */}
      <div className="
        absolute inset-0 rounded-full
        border-[3px] border-blue-500
        group-hover:border-blue-400
        group-hover:shadow-lg group-hover:shadow-blue-500/20
        transition-all duration-300
      ">
        <div className="
          w-full h-full rounded-full
          bg-white p-0.5
          overflow-hidden
        ">
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
