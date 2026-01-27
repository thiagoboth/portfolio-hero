import { useState } from 'react';
import { ThemeToggle, MobileMenu } from '../ui';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

// Itens do menu
const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre mim', href: '#sobre' },
];

/**
 * Header com logo, toggle de tema e menu
 * Mobile-first com funcionalidades completas
 */
export function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`
        relative z-50
        flex items-center justify-between
        px-5 py-4
        sm:px-8 sm:py-5
        ${isDark ? 'bg-gray-900/95' : 'bg-white/95'}
        backdrop-blur-sm
        transition-colors duration-300
        animate-slide-down
      `}>
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 sm:gap-3 group"
        >
          <div className="
            w-9 h-9 sm:w-10 sm:h-10
            bg-gradient-to-br from-blue-500 to-indigo-600
            rounded-full
            flex items-center justify-center
            transform group-hover:scale-110 transition-transform duration-300
            shadow-lg shadow-blue-500/20
          ">
            <span className="text-white font-bold text-xs sm:text-sm">TB</span>
          </div>
          <div className="hidden sm:block">
            <p className={`
              text-xs uppercase tracking-wider
              ${isDark ? 'text-gray-400' : 'text-gray-500'}
            `}>
              Dev & Designer
            </p>
          </div>
        </a>

        {/* Ações do Header */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Toggle Dark/Light Mode */}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          {/* Botão Menu - z-index muito alto para ficar acima de tudo */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`
              menu-btn
              relative z-[100]
              flex items-center gap-3
              px-5 py-3 sm:px-6 sm:py-3.5
              rounded-full
              border-2
              backdrop-blur-md
              shadow-xl
              transition-all duration-300 ease-out
              hover:scale-105
              active:scale-95
              ${isDark
                ? 'text-white bg-gray-800/90 border-gray-600 hover:bg-gray-700 hover:border-blue-400 hover:shadow-blue-500/30'
                : 'text-gray-900 bg-white/90 border-gray-300 hover:bg-white hover:border-blue-500 hover:shadow-blue-500/40'
              }
            `}
            aria-label="Abrir menu de navegação"
          >
            <span className="text-sm sm:text-base font-bold tracking-wide">Menu</span>
            <div className="flex flex-col gap-1.5 transition-all duration-300">
              <span className={`
                w-5 sm:w-6 h-0.5 rounded-full
                transition-all duration-300
                ${isDark ? 'bg-blue-400' : 'bg-blue-500'}
              `} />
              <span className={`
                w-5 sm:w-6 h-0.5 rounded-full
                transition-all duration-300
                ${isDark ? 'bg-pink-400' : 'bg-pink-500'}
              `} />
            </div>
          </button>
        </div>
      </header>

      {/* Menu Mobile/Desktop */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isDark={isDark}
        items={menuItems}
      />
    </>
  );
}

export default Header;
