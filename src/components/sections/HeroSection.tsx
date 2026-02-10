import type { HeroSectionProps } from '../../types';
import { useState } from 'react';
import { HomeIndicator } from '../layout';
import { Button, ProfilePhoto, TypewriterText, MobileMenu } from '../ui';
import { DecorativeElements } from '../decorative';

/**
 * Hero Section - Seção principal da landing page
 * Conceito: Canvas de design em edição
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Itens do menu
  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre mim', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <div
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Grid dots de fundo - estilo canvas */}
      <div
        className="absolute inset-0 canvas-grid opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Elementos decorativos - círculos e ícones de dev */}
      <DecorativeElements />

      {/* ===== HEADER COM FUNDO BRANCO ===== */}
      <header className="relative z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 bg-white">
        {/* Logo/Nome com indicador de status */}
        <div className="flex items-start gap-2 group/logo cursor-default">
          <div className="flex flex-col gap-0.5 mt-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 transition-colors duration-300 group-hover/logo:bg-emerald-400" />
          </div>
          <div className="transition-transform duration-300 group-hover/logo:translate-x-0.5">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">
              Thiago Botelho
            </h2>
            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
              Desenvolvedor, UX/UI Designer
            </p>
          </div>
        </div>

        {/* Botão Menu com animação nas barrinhas */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
          aria-label="Abrir menu"
        >
          <span className="text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">Menu</span>
          <div className="flex flex-col gap-1.5 overflow-hidden">
            <span className="
              w-6 h-0.5 bg-gray-900
              transition-all duration-500 ease-out origin-right
              group-hover:w-4 group-hover:bg-blue-500 group-hover:translate-x-1
            " />
            <span className="
              w-6 h-0.5 bg-gray-900
              transition-all duration-500 ease-out delay-100 origin-left
              group-hover:w-5 group-hover:bg-pink-500
            " />
          </div>
        </button>
      </header>

      {/* Menu Mobile */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isDark={false}
        items={menuItems}
      />

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <main className="
        relative z-10
        px-6 sm:px-8 md:px-12 lg:px-16
        pt-4 sm:pt-6
        pb-12 sm:pb-16
        flex flex-col
        min-h-[calc(100vh-80px)]
        justify-center
      ">
        {/* Container centralizado */}
        <div className="w-full max-w-xl sm:max-w-2xl mx-auto text-center">

          {/* ===== SAUDAÇÃO ===== */}
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 animate-fade-in">
            {/* X decorativo */}
            <span className="text-yellow-500 text-base sm:text-lg font-light cursor-pointer hover:text-yellow-600 hover:rotate-90 transition-all duration-300 select-none">
              ✕
            </span>
            <p className="text-sm sm:text-base text-gray-500 font-light">
              {greeting}
            </p>
          </div>

          {/* ===== NOME COM ESTILO OUTLINE ===== */}
          <div className="relative mb-4 sm:mb-6">
            {/* Linha de seleção vertical */}
            <div className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 h-3/4 w-1 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full" />

            <h1>
              <span
                className="
                  block
                  text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                  font-black tracking-tighter leading-none
                  animate-slide-up
                "
                style={{
                  WebkitTextStroke: '2px #60A5FA',
                  color: 'transparent',
                }}
              >
                {firstName.toUpperCase()}
              </span>
              <span
                className="
                  block
                  text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                  font-black tracking-tighter leading-none
                  mt-0 sm:mt-1
                  animate-slide-up
                "
                style={{
                  WebkitTextStroke: '2px #60A5FA',
                  color: 'transparent',
                  animationDelay: '0.1s',
                }}
              >
                {lastName.toUpperCase()}
              </span>
            </h1>
          </div>

          {/* ===== SUBTÍTULO COM TYPEWRITER ===== */}
          <div className="mb-8 sm:mb-10">
            <p className="text-lg sm:text-xl md:text-2xl">
              <TypewriterText
                words={rotatingWords}
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2000}
                className="text-pink-500 font-bold"
              />
              <span className="text-gray-900 font-medium">
                {' '}{role}
              </span>
            </p>
            <p className="text-sm sm:text-base text-gray-400 mt-1 sm:mt-2 font-light">
              & durante a noite também...
            </p>
          </div>

          {/* ===== FOTO DE PERFIL COM ESTILO CANVAS ===== */}
          <div className="flex justify-center mb-10 sm:mb-14">
            <ProfilePhoto
              src={profileImage}
              alt={`Foto de ${name}`}
              isDark={false}
            />
          </div>

          {/* ===== BOTÃO CTA ===== */}
          <div className="flex justify-center">
            <Button onClick={onCtaClick}>
              {ctaText}
            </Button>
          </div>
        </div>
      </main>

      {/* Home Indicator (iOS) */}
      <HomeIndicator isDark={false} />
    </div>
  );
}

export default HeroSection;
