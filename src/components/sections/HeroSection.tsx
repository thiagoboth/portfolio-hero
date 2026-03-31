import type { HeroSectionProps } from '../../types';
import {
  Button,
  ProfilePhoto,
  TypewriterText,
  StatusBadge,
  AnimatedText,
} from '../ui';

/**
 * Hero Section - Seção principal da landing page
 * Design moderno com suporte a dark/light mode
 * Inclui: Gradient Mesh, Profile Photo, Status Badge, Animated Text
 * Responsivo: mobile-first
 */
export function HeroSection({
  profileImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  name = 'Thiago Botelho',
  greeting = 'Prazer, eu sou',
  role = 'para pessoas reais',
  ctaText = 'Vamos conversar',
  onCtaClick,
}: HeroSectionProps) {
  // Palavras que vão rotacionar com efeito typewriter
  const rotatingWords = [
    'caminhos claros',
    'experiências simples',
    'produtos que crescem',
  ];
  const maxWordLength = Math.max(...rotatingWords.map((word) => word.length));

  // Separar nome em partes para melhor hierarquia visual
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');
  const routeStops = [
    {
      label: 'Ouvir',
      position: 'sm:top-[18%] sm:left-[10%]',
      dotClass: 'bg-[#FF00E4]',
      dotColor: '#FF00E4',
      dotX: 90,
      dotY: 175,
    },
    {
      label: 'Co-criar',
      position: 'sm:top-[22%] sm:right-[8%]',
      dotClass: 'bg-[#0183FF]',
      dotColor: '#0183FF',
      dotX: 470,
      dotY: 205,
    },
    {
      label: 'Entregar',
      position: 'sm:bottom-[18%] sm:right-[14%]',
      dotClass: 'bg-[#FF00E4]',
      dotColor: '#FF00E4',
      dotX: 390,
      dotY: 520,
    },
    {
      label: 'Evoluir',
      position: 'sm:bottom-[28%] sm:left-[12%]',
      dotClass: 'bg-[#0183FF]',
      dotColor: '#0183FF',
      dotX: 150,
      dotY: 405,
    },
  ];

  return (
    <section
      id="inicio"
      className="
        relative min-h-screen overflow-hidden
        pt-24 sm:pt-28 lg:pt-32
        pb-12 sm:pb-16
        bg-white dark:bg-gray-950
        transition-colors duration-300
      "
    >
      {/* ========== GRADIENT MESH BACKGROUND ========== */}
      <div className="gradient-mesh" aria-hidden="true">
        <div className="gradient-mesh-blob gradient-mesh-blob-1" />
        <div className="gradient-mesh-blob gradient-mesh-blob-2" />
        <div className="gradient-mesh-blob gradient-mesh-blob-3" />
      </div>

      {/* Overlay sutil para melhor legibilidade */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-white/50 dark:bg-gray-950/50
        "
        aria-hidden="true"
      />

      {/* Conteúdo Principal */}
      <main className="
        relative z-10
        px-6 sm:px-8 md:px-12 lg:px-16
        flex flex-col
        min-h-[calc(100vh-120px)]
        justify-center
      ">
        <div className="w-full max-w-7xl mx-auto">
          {/* Layout: Mobile (centralizado) / Desktop (split) */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
            {/* Texto */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mx-auto lg:mx-0 max-w-xl space-y-6">
                {/* Saudação */}
                <div className="flex items-center justify-center lg:justify-start gap-2 animate-fade-in">
                  <span className="
                    w-8 h-[2px] rounded-full
                    bg-gradient-to-r from-[#0183FF] to-[#FF00E4]
                  " />
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                    {greeting}
                  </p>
                </div>

                {/* Nome com Animação */}
                <h1>
                  <AnimatedText
                    text={firstName}
                    as="span"
                    delay={0.2}
                    letterDelay={0.04}
                    className="
                      block
                      text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                      font-black tracking-tight leading-none
                      font-display
                    "
                    textClassName="
                      bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                      dark:from-white dark:via-gray-100 dark:to-white
                      bg-clip-text text-transparent
                    "
                  />
                  <AnimatedText
                    text={lastName}
                    as="span"
                    delay={0.4}
                    letterDelay={0.04}
                    className="
                      block
                      text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                      font-black tracking-tight leading-none
                      mt-1
                      font-display
                    "
                    textClassName="
                      bg-gradient-to-r from-[#0183FF] via-[#3B9BFF] to-[#FF00E4]
                      dark:from-[#5FB2FF] dark:via-[#7DC3FF] dark:to-[#FF6BF1]
                      bg-clip-text text-transparent
                    "
                  />
                </h1>

                {/* Subtítulo com Typewriter */}
                <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <p className="
                    text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300
                    leading-snug
                    min-h-[3.5rem] sm:min-h-[3.75rem] md:min-h-[4.25rem]
                  ">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Desenvolvedor fullstack
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {' '}que transforma ideias em{' '}
                    </span>
                    <span
                      className="inline-flex align-baseline whitespace-nowrap"
                      style={{ minWidth: `${maxWordLength + 2}ch` }}
                    >
                      <TypewriterText
                        words={rotatingWords}
                        typingSpeed={80}
                        deletingSpeed={50}
                        pauseDuration={2000}
                        className="text-[#0183FF] dark:text-[#5FB2FF] font-semibold"
                      />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 font-medium">
                      {' '}{role}.
                    </span>
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 font-light">
                    Da primeira conversa ao lançamento, eu guio todo o percurso.
                  </p>
                </div>

                {/* Status Badge */}
                <div
                  className="flex justify-center lg:justify-start animate-fade-in"
                  style={{ animationDelay: '0.7s' }}
                >
                  <StatusBadge status="available" />
                </div>

                {/* CTA Button */}
                <div
                  className="flex justify-center lg:justify-start animate-fade-in"
                  style={{ animationDelay: '0.9s' }}
                >
                  <Button onClick={onCtaClick}>
                    {ctaText}
                  </Button>
                </div>
              </div>
            </div>

            {/* Mapa de Rotas */}
            <div
              className="
                flex justify-center lg:justify-end
                order-1 lg:order-2
                animate-fade-in
              "
              style={{ animationDelay: '0.3s' }}
            >
              <div className="
                relative w-full max-w-xl sm:max-w-2xl lg:max-w-none
                sm:min-h-[560px] lg:min-h-[680px]
              ">
                <div
                  className="
                    absolute inset-0 rounded-[28px]
                    map-texture opacity-45 dark:opacity-30
                    pointer-events-none
                  "
                  aria-hidden="true"
                />
                <div
                  className="
                    absolute inset-0 rounded-[28px]
                    bg-gradient-to-br from-white/60 via-white/20 to-white/50
                    dark:from-gray-900/40 dark:via-gray-950/20 dark:to-gray-900/40
                    pointer-events-none
                  "
                  aria-hidden="true"
                />
                <svg
                  className="absolute inset-0 hidden sm:block w-full h-full pointer-events-none"
                  viewBox="0 0 600 680"
                  fill="none"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0183FF" stopOpacity="0.65" />
                      <stop offset="55%" stopColor="#3B9BFF" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#FF00E4" stopOpacity="0.65" />
                    </linearGradient>
                    <marker
                      id="routeArrow"
                      viewBox="0 0 8 8"
                      refX="6"
                      refY="4"
                      markerWidth="8"
                      markerHeight="8"
                      orient="auto-start-reverse"
                    >
                      <path d="M0 0 L8 4 L0 8 Z" fill="#FF00E4" />
                    </marker>
                  </defs>
                  <path
                    d="M70 170 C 180 50, 420 60, 520 190 C 590 300, 520 480, 360 540 C 190 610, 90 500, 120 360 C 140 260, 210 230, 300 250"
                    stroke="#0183FF"
                    strokeOpacity="0.18"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M70 170 C 180 50, 420 60, 520 190 C 590 300, 520 480, 360 540 C 190 610, 90 500, 120 360 C 140 260, 210 230, 300 250"
                    className="route-draw animate-route-draw"
                    stroke="url(#routeGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    markerEnd="url(#routeArrow)"
                  />
                  {routeStops.map((stop) => (
                    <circle
                      key={`${stop.label}-dot`}
                      cx={stop.dotX}
                      cy={stop.dotY}
                      r="6"
                      fill={stop.dotColor}
                    />
                  ))}
                </svg>

                <div className="
                  relative z-10 flex justify-center pt-4 sm:pt-0
                  sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
                  sm:scale-110
                ">
                  <div
                    className="
                      absolute -inset-10 sm:-inset-12
                      rounded-full
                      border border-[#0183FF]/20
                      bg-gradient-to-br from-[#0183FF]/10 via-transparent to-[#FF00E4]/10
                      blur-[1px]
                    "
                    aria-hidden="true"
                  />
                  <ProfilePhoto
                    src={profileImage}
                    alt={`Foto de ${name}`}
                  />
                </div>

                <div className="relative z-10 mt-6 sm:mt-0 flex flex-col items-center gap-3 sm:block">
                  {routeStops.map((stop) => (
                    <div
                      key={stop.label}
                      className={`
                        inline-flex items-center gap-2
                        px-3 py-1.5
                        rounded-full
                        bg-white/80 dark:bg-gray-900/70
                        border border-gray-200/70 dark:border-gray-700/60
                        text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200
                        shadow-[0_10px_30px_-22px_rgba(15,23,42,0.45)]
                        sm:absolute ${stop.position}
                      `}
                    >
                      <span className={`w-2 h-2 rounded-full ${stop.dotClass}`} aria-hidden="true" />
                      <span>{stop.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="hidden sm:flex justify-center mt-12 lg:mt-16 animate-fade-in"
            style={{ animationDelay: '1.1s' }}
          >
            <a
              href="#sobre"
              className="
                flex flex-col items-center gap-2
                text-gray-400 dark:text-gray-500
                hover:text-[#0183FF] dark:hover:text-[#5FB2FF]
                transition-colors
              "
              aria-label="Rolar para próxima seção"
            >
              <span className="text-xs uppercase tracking-[0.3em]">Siga a rota</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Veja o caminho completo
              </span>
              <span className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                <span className="w-1 h-2 bg-current rounded-full animate-bounce" />
              </span>
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}

export default HeroSection;
