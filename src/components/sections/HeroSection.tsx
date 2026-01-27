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
      {/* ===== BARRA DE EDITOR NO TOPO (conceito canvas) ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-lg z-50" />

      {/* Elementos decorativos - círculos e elementos de canvas */}
      <DecorativeElements />

      {/* ===== HEADER ESTILO CANVAS ===== */}
      <header className="relative z-40 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        {/* Logo/Nome com indicador de status */}
        <div className="flex items-start gap-2">
          <div className="flex flex-col gap-0.5 mt-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">
              Thiago Botelho
            </h2>
            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
              Desenvolvedor, UX/UI Designer
            </p>
          </div>
        </div>

        {/* Botão Menu minimalista */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
          aria-label="Abrir menu"
        >
          <span className="text-sm font-medium">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="w-6 h-0.5 bg-gray-900 transition-transform group-hover:translate-x-0.5" />
            <span className="w-6 h-0.5 bg-gray-900 transition-transform group-hover:-translate-x-0.5" />
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
        pt-4 sm:pt-8 md:pt-12
        pb-12 sm:pb-16
        flex flex-col
        min-h-[calc(100vh-80px)]
        justify-center
      ">
        {/* Container com alinhamento à esquerda */}
        <div className="w-full max-w-2xl lg:max-w-4xl mx-auto">

          {/* ===== SAUDAÇÃO COM ELEMENTO DE CANVAS ===== */}
          <div className="flex items-center gap-2 mb-4 animate-fade-in">
            {/* X de fechar (elemento de UI) */}
            <span className="text-yellow-500 text-lg font-light cursor-pointer hover:text-yellow-600 transition-colors select-none">
              ✕
            </span>
            <p className="text-base sm:text-lg text-gray-500 font-light">
              {greeting}
            </p>
          </div>

          {/* ===== NOME COM ESTILO OUTLINE E LINHA DE SELEÇÃO ===== */}
          <div className="relative mb-6 sm:mb-8">
            {/* Linha de seleção vertical (elemento de canvas) */}
            <div className="absolute -left-4 sm:-left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full" />

            <h1 className="text-left">
              <span
                className="
                  block
                  text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                  font-black tracking-tighter leading-none
                  text-transparent bg-clip-text
                  stroke-text
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
                  mt-1 sm:mt-2
                  animate-slide-up
                  relative
                "
                style={{
                  WebkitTextStroke: '2px #60A5FA',
                  color: 'transparent',
                  animationDelay: '0.1s',
                }}
              >
                {lastName.toUpperCase()}
                {/* Cursor decorativo ao lado do nome */}
                <svg
                  className="absolute -right-8 sm:-right-12 bottom-2 w-6 h-6 sm:w-8 sm:h-8 text-gray-400 animate-float-slow"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 4l16 8-8 2-2 8z" />
                </svg>
              </span>
            </h1>
          </div>

          {/* ===== SUBTÍTULO COM TYPEWRITER ===== */}
          <div className="text-left mb-10 sm:mb-14">
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
            <p className="text-sm sm:text-base text-gray-400 mt-2 font-light">
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
