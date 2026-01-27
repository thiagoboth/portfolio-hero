import { useEffect } from 'react';

interface MenuItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  items: MenuItem[];
}

/**
 * Menu mobile com overlay e animação
 */
export function MobileMenu({ isOpen, onClose, isDark, items }: MobileMenuProps) {
  // Bloquear scroll quando menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Fechar menu com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40
          bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 z-50
          h-full w-72 sm:w-80
          ${isDark ? 'bg-gray-900' : 'bg-white'}
          shadow-2xl
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* Header do Menu */}
        <div className={`
          flex items-center justify-between
          px-6 py-5
          border-b
          ${isDark ? 'border-gray-800' : 'border-gray-100'}
        `}>
          <span className={`
            text-lg font-semibold
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Menu
          </span>

          {/* Botão Fechar */}
          <button
            onClick={onClose}
            className={`
              w-10 h-10
              flex items-center justify-center
              rounded-full
              transition-colors duration-200
              ${isDark
                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }
            `}
            aria-label="Fechar menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Links do Menu */}
        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className={`
                    block
                    px-4 py-3
                    rounded-xl
                    text-lg font-medium
                    transition-all duration-200
                    ${isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer do Menu */}
        <div className={`
          absolute bottom-0 left-0 right-0
          px-6 py-6
          border-t
          ${isDark ? 'border-gray-800' : 'border-gray-100'}
        `}>
          <p className={`
            text-sm
            ${isDark ? 'text-gray-500' : 'text-gray-400'}
          `}>
            © 2024 Thiago Botelho
          </p>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
