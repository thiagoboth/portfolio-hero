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
      w-48 h-48
      sm:w-56 sm:h-56
      md:w-64 md:h-64
    ">
      {/* Círculo tracejado externo (estilo seleção de canvas) */}
      <div
        className="
          absolute -inset-4 sm:-inset-5
          rounded-full
          border-2 border-dashed border-gray-300
          group-hover:border-blue-400
          transition-colors duration-300
        "
        aria-hidden="true"
      />

      {/* Pontos de controle nos cantos (estilo bounding box) */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-2 border-blue-500 rounded-sm" aria-hidden="true" />
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-2 border-blue-500 rounded-sm" aria-hidden="true" />
      <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-2 h-2 bg-white border-2 border-blue-500 rounded-sm" aria-hidden="true" />
      <div className="absolute top-1/2 -right-5 -translate-y-1/2 w-2 h-2 bg-white border-2 border-blue-500 rounded-sm" aria-hidden="true" />

      {/* Borda principal azul sólida */}
      <div className="
        absolute inset-0 rounded-full
        border-[3px] border-blue-500
        group-hover:border-blue-400
        transition-colors duration-300
      ">
        <div className="
          w-full h-full rounded-full
          bg-white p-1
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

      {/* Indicador de dimensão (estilo editor) */}
      <div
        className="
          absolute -bottom-10 left-1/2 -translate-x-1/2
          text-[10px] text-gray-400 font-mono
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
        aria-hidden="true"
      >
        256 × 256
      </div>
    </div>
  );
}

export default ProfilePhoto;
