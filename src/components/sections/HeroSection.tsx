import type { HeroSectionProps } from '../../types';
import { Button, ProfilePhoto, TypewriterText } from '../ui';

/**
 * Hero Section - Seção principal da landing page
 * Design moderno com suporte a dark/light mode
 * Responsivo: mobile-first
 */
export function HeroSection({
  profileImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  name = 'Thiago Botelho',
  greeting = 'Olá mundo, eu sou',
  role = 'durante o dia',
  ctaText = 'Entre em Contato',
  onCtaClick,
}: HeroSectionProps) {
  // Palavras que vão rotacionar com efeito typewriter
  const rotatingWords = [
    'programador',
    'designer',
    'criativo',
    'amante de café',
  ];

  // Separar nome em partes para melhor hierarquia visual
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

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
      {/* Background com gradiente sutil */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-gradient-to-b from-blue-50/50 via-transparent to-transparent
          dark:from-blue-950/20 dark:via-transparent dark:to-transparent
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
        <div className="w-full max-w-4xl mx-auto">
          {/* Layout: Mobile (centralizado) / Desktop (split) */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Texto */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Saudação */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 animate-fade-in">
                <span className="
                  w-8 h-[2px] rounded-full
                  bg-gradient-to-r from-blue-500 to-pink-500
                " />
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                  {greeting}
                </p>
              </div>

              {/* Nome */}
              <h1 className="mb-6 animate-slide-up">
                <span
                  className="
                    block
                    text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                    font-black tracking-tight leading-none
                    bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                    dark:from-white dark:via-gray-100 dark:to-white
                    bg-clip-text text-transparent
                  "
                >
                  {firstName}
                </span>
                <span
                  className="
                    block
                    text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                    font-black tracking-tight leading-none
                    mt-1
                    bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500
                    bg-clip-text text-transparent
                  "
                >
                  {lastName}
                </span>
              </h1>

              {/* Subtítulo com Typewriter */}
              <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg sm:text-xl md:text-2xl">
                  <TypewriterText
                    words={rotatingWords}
                    typingSpeed={80}
                    deletingSpeed={50}
                    pauseDuration={2000}
                    className="text-blue-500 dark:text-blue-400 font-bold"
                  />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {' '}{role}
                  </span>
                </p>
                <p className="text-sm sm:text-base text-gray-400 dark:text-gray-500 mt-2 font-light">
                  & durante a noite também...
                </p>
              </div>

              {/* CTA Button */}
              <div
                className="flex justify-center lg:justify-start animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <Button onClick={onCtaClick}>
                  {ctaText}
                </Button>
              </div>
            </div>

            {/* Foto de Perfil */}
            <div
              className="
                flex justify-center lg:justify-end
                order-1 lg:order-2
                animate-fade-in
              "
              style={{ animationDelay: '0.3s' }}
            >
              <ProfilePhoto
                src={profileImage}
                alt={`Foto de ${name}`}
                isDark={false}
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden sm:flex justify-center mt-16 lg:mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="#sobre"
              className="
                flex flex-col items-center gap-2
                text-gray-400 dark:text-gray-500
                hover:text-blue-500 dark:hover:text-blue-400
                transition-colors
              "
              aria-label="Rolar para próxima seção"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
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
