// ==========================================
// TYPES - Definições de tipos do projeto
// ==========================================

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface HeroSectionProps {
  profileImage?: string;
  name?: string;
  greeting?: string;
  role?: string;
  rotatingWords?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export interface ProfilePhotoProps {
  src: string;
  alt: string;
  isDark?: boolean;
}

export interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export interface DecorativeElementsProps {
  isDark?: boolean;
}

export interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  items: MenuItem[];
}

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}
