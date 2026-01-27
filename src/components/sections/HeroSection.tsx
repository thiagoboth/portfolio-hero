import type { HeroSectionProps } from '../../types';
import { useTheme } from '../../hooks/useTheme';
import { Header, HomeIndicator } from '../layout';
import { Button, ProfilePhoto, TypewriterText } from '../ui';
import { DecorativeElements } from '../decorative';

/**
 * Hero Section - Seção principal da landing page
 * Mobile-first com espaçamentos otimizados
 */
export function HeroSection({
  profileImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  name = 'Thiago Botelho',
  greeting = 'Olá mundo, eu sou',
  role = 'durante o dia',
  ctaText = 'Entre em Contato',
  onCtaClick,
}: HeroSectionProps) {
  const { isDark, toggleTheme } = useTheme();

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
    <div
      id="inicio"
      className={`
        relative min-h-screen overflow-hidden
        ${isDark ? 'bg-gray-900' : 'bg-white'}
        transition-colors duration-500
      `}
    >
      {/* Elementos decorativos - círculos azul e rosa */}
      <DecorativeElements isDark={isDark} />

      {/* Header com toggle de tema e menu */}
      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Conteúdo principal - Mobile First - Melhor aproveitamento de tela */}
      <main className="
        relative z-10
        px-6 sm:px-8 md:px-12 lg:px-16
        pt-4 sm:pt-6 md:pt-8
        pb-12 sm:pb-16
        flex flex-col items-center
        min-h-[calc(100vh-60px)]
        justify-center
      ">
        {/* Container central com max-width maior */}
        <div className="w-full max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center">

          {/* Saudação - Fonte maior */}
          <p className={`
            text-base sm:text-lg md:text-xl
            mb-3 sm:mb-4
            font-medium tracking-wide
            ${isDark ? 'text-gray-400' : 'text-gray-500'}
            animate-fade-in
          `}>
            {greeting}
          </p>

          {/* Nome - Fontes maiores e melhor espaçamento */}
          <h1 className="text-center mb-6 sm:mb-8">
            <span
              className={`
                block
                text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
                font-black tracking-tighter leading-none
                ${isDark ? 'text-white' : 'text-gray-900'}
                animate-slide-up
              `}
            >
              {firstName.toUpperCase()}
            </span>
            <span
              className={`
                block
                text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
                font-black tracking-tighter leading-none
                mt-1 sm:mt-2
                ${isDark ? 'text-white' : 'text-gray-900'}
                animate-slide-up
              `}
              style={{ animationDelay: '0.1s' }}
            >
              {lastName.toUpperCase()}
            </span>
          </h1>

          {/* Subtítulo de profissão com Typewriter - Fontes maiores */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <TypewriterText
                words={rotatingWords}
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2000}
                className="text-blue-500 font-bold"
              />
              <span className={`
                font-medium
                ${isDark ? 'text-gray-300' : 'text-gray-600'}
              `}>
                {' '}{role}
              </span>
            </p>
            <p className={`
              text-base sm:text-lg md:text-xl
              mt-2 sm:mt-3
              font-light
              ${isDark ? 'text-gray-500' : 'text-gray-400'}
            `}>
              & durante a noite também...
            </p>
          </div>

          {/* Foto de perfil - Maior */}
          <div className="mb-10 sm:mb-12 md:mb-14">
            <ProfilePhoto
              src={profileImage}
              alt={`Foto de ${name}`}
              isDark={isDark}
            />
          </div>

          {/* Botão CTA */}
          <Button onClick={onCtaClick}>
            {ctaText}
          </Button>
        </div>
      </main>

      {/* Home Indicator (iOS) */}
      <HomeIndicator isDark={isDark} />
    </div>
  );
}

export default HeroSection;
