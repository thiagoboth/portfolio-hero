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

// ==========================================
// NOVAS INTERFACES - Seções e Componentes
// ==========================================

// Card Component
export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  hover?: boolean;
  className?: string;
}

// SectionHeader Component
export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  gradient?: boolean;
}

// Input Component
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

// Textarea Component
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

// Tag Component
export interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand';
}

// About Section
export interface Metric {
  value: string;
  label: string;
}

export interface AboutSectionProps {
  title?: string;
  description?: string[];
  metrics?: Metric[];
  imageSrc?: string;
}

// Services Section
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

// Projects Section
export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link?: string;
}

export interface ProjectsSectionProps {
  title?: string;
  projects?: Project[];
}

// Contact Section
export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  location?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo;
  onSubmit?: (data: ContactFormData) => void;
}

// Footer
export interface FooterProps {
  name?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}
