import type { ProfilePhotoProps } from '../../types';

/**
 * Componente de foto de perfil estilo colagem com fita e selo
 * Mobile-first: camadas leves e personalidade sem peso visual
 */
export function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  return (
    <div
      className="
        relative mx-auto
        w-[16rem] h-[21rem]
        sm:w-[18rem] sm:h-[24rem]
        md:w-[20rem] md:h-[26rem]
      "
    >
      {/* Papel de fundo */}
      <div
        className="
          absolute -inset-3
          rounded-[30px]
          bg-gradient-to-br from-[#E7F2FF] via-white to-[#FFE3FB]
          dark:from-[#0B1D3A] dark:via-gray-900/70 dark:to-[#2B0A2F]
          rotate-[-1.5deg]
          shadow-[0_30px_60px_-40px_rgba(15,23,42,0.5)]
        "
        aria-hidden="true"
      />

      {/* Fita */}
      <div
        className="
          absolute -top-4 left-10
          w-20 h-7
          bg-[#FFD6F6] dark:bg-[#FF00E4]/20
          border border-[#FF00E4]/40 dark:border-[#FF00E4]/30
          rotate-[-7deg] rounded-sm
          shadow-sm
        "
        aria-hidden="true"
      />

      {/* Foto */}
      <div
        className="
          relative w-full h-full
          rounded-[28px]
          overflow-hidden
          bg-white/80 dark:bg-gray-900/70
          ring-1 ring-white/70 dark:ring-white/10
          shadow-[0_25px_70px_-40px_rgba(15,23,42,0.6)]
          animate-float-slow motion-reduce:animate-none
        "
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover scale-[1.03]"
          draggable={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Selo */}
      <div
        className="
          absolute -right-4 bottom-6
          rounded-full
          bg-white/85 dark:bg-gray-900/85
          border border-gray-200/70 dark:border-gray-700/60
          px-3 py-1
          text-[0.65rem] sm:text-xs
          font-semibold text-gray-700 dark:text-gray-200
          shadow-[0_12px_30px_-18px_rgba(15,23,42,0.45)]
        "
      >
        Rota completa
      </div>

      {/* Pino */}
      <div
        className="
          absolute -left-4 bottom-10
          w-3 h-3 rounded-full
          bg-[#0183FF]
          shadow-[0_0_0_6px_rgba(1,131,255,0.18)]
        "
        aria-hidden="true"
      />
    </div>
  );
}

export default ProfilePhoto;
