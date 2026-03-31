import { useState } from 'react';
import type { MenuItem } from '../../types';
import { MobileMenu, ThemeToggle } from '../ui';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

// Links de navegação
const navItems: MenuItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

/**
 * Header - Cabeçalho responsivo fixo
 * Mobile: Logo + Theme Toggle + Hamburger
 * Desktop: Logo + Nav Links + Theme Toggle
 */
export function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          px-5 py-4 sm:px-8 lg:px-12
          backdrop-blur-md
          border-b
          transition-colors duration-300
          ${isDark
            ? 'bg-gray-950/90 border-gray-800'
            : 'bg-white/90 border-gray-200'
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col gap-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 group-hover:bg-emerald-400 transition-colors" />
            </div>
            <div>
              <span
                className={`
                  text-base sm:text-lg font-bold tracking-tight
                  transition-colors
                  ${isDark ? 'text-white' : 'text-gray-900'}
                `}
              >
                Thiago Botelho
              </span>
              <p
                className={`
                  text-[10px] sm:text-xs uppercase tracking-widest
                  ${isDark ? 'text-gray-400' : 'text-gray-500'}
                `}
              >
                Dev & Designer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  px-4 py-2
                  text-sm font-medium
                  rounded-lg
                  transition-all duration-200
                  ${isDark
                    ? 'text-gray-300 hover:text-white hover:bg-white/10'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side: Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            {/* Mobile Menu Button - only on mobile/tablet */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`
                lg:hidden
                flex flex-col gap-1.5 p-2.5
                rounded-lg
                transition-colors
                ${isDark
                  ? 'hover:bg-white/10'
                  : 'hover:bg-gray-100'
                }
              `}
              aria-label="Abrir menu"
            >
              <span
                className={`
                  w-6 h-0.5 rounded-full transition-colors
                  ${isDark ? 'bg-white' : 'bg-gray-900'}
                `}
              />
              <span
                className={`
                  w-4 h-0.5 rounded-full transition-colors ml-auto
                  ${isDark ? 'bg-white' : 'bg-gray-900'}
                `}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isDark={isDark}
        items={navItems}
      />
    </>
  );
}

export default Header;
