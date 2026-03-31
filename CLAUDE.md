# Portfolio Hero

Professional portfolio website with multiple sections, animated typewriter effects, dark/light theme switching, and responsive mobile-first design.

## Tech Stack

- **React 19** - UI library
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework with @theme configuration
- **ESLint 9** - Linting with React Hooks and React Refresh plugins

## Project Structure

```
portfolio-hero/
├── src/
│   ├── assets/              # Static assets (images, SVGs)
│   ├── components/
│   │   ├── decorative/      # Visual decorative elements (currently unused)
│   │   │   ├── DecorativeElements.tsx
│   │   │   └── index.ts
│   │   ├── layout/          # Structural components
│   │   │   ├── Header.tsx   # Responsive header with nav links (desktop) / hamburger (mobile)
│   │   │   ├── Footer.tsx   # Site footer with navigation, social links, CTA
│   │   │   ├── HomeIndicator.tsx
│   │   │   └── index.ts
│   │   ├── sections/        # Page sections
│   │   │   ├── HeroSection.tsx      # Main hero with profile photo & typewriter
│   │   │   ├── AboutSection.tsx     # About me with metrics grid
│   │   │   ├── ServicesSection.tsx  # Services offered (3-column grid)
│   │   │   ├── ProjectsSection.tsx  # Portfolio projects (2-column grid)
│   │   │   ├── ContactSection.tsx   # Contact form + info
│   │   │   └── index.ts
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx           # Card with variants (default, elevated, outlined)
│   │   │   ├── Input.tsx          # Input & Textarea with floating labels
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── ProfilePhoto.tsx
│   │   │   ├── SectionHeader.tsx  # Section headers with gradient option
│   │   │   ├── Tag.tsx            # Technology tags for projects
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── TypewriterText.tsx
│   │   │   └── index.ts
│   │   └── index.ts         # Centralized component exports
│   ├── hooks/
│   │   ├── useTheme.ts      # Theme management with localStorage persistence
│   │   ├── useInView.ts     # Intersection Observer for scroll animations
│   │   ├── useForm.ts       # Form state management with validation
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx              # Root application component with all sections
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles with Tailwind v4 @theme config
├── public/                  # Static public assets
├── ia/
│   └── projeto.md           # Project specification document
├── index.html               # HTML template
├── package.json
├── tsconfig.json            # TypeScript configuration (references)
├── tsconfig.app.json        # App TypeScript config
├── tsconfig.node.json       # Node TypeScript config
├── vite.config.ts           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## Key Commands

```bash
# Start development server
npm run dev

# Build for production (runs TypeScript check first)
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Architecture Patterns

### Component Organization

Components are organized by purpose into subdirectories:
- **decorative/** - Visual elements with no interactivity (currently unused)
- **layout/** - Structural components (Header, Footer)
- **sections/** - Page sections (Hero, About, Services, Projects, Contact)
- **ui/** - Reusable interactive components (Button, Card, Input, etc.)

Each subdirectory has an `index.ts` barrel file for clean exports. The root `components/index.ts` re-exports everything for centralized imports:

```tsx
import { HeroSection, AboutSection, Button, Header, Footer } from './components';
```

### TypeScript Types

All component props and shared types are defined in `src/types/index.ts`:

**Core Types:**
- `MenuItem` - Navigation menu item
- `ThemeContextType` - Theme hook return type

**Section Props:**
- `HeroSectionProps` - Hero section configuration
- `AboutSectionProps` - About section with metrics
- `ServicesSectionProps` - Services section
- `ProjectsSectionProps` - Projects portfolio
- `ContactSectionProps` - Contact form section

**UI Props:**
- `ButtonProps` - Button with variants
- `CardProps` - Card component
- `InputProps` / `TextareaProps` - Form inputs
- `TagProps` - Technology tags
- `SectionHeaderProps` - Section headers
- `ProfilePhotoProps` - Profile image
- `TypewriterTextProps` - Typewriter effect
- `MobileMenuProps` - Mobile navigation
- `ThemeToggleProps` - Theme switcher

**Data Types:**
- `Metric` - Stats/metrics display
- `Service` - Service item
- `Project` - Portfolio project
- `ContactInfo` - Contact information
- `ContactFormData` - Form submission data
- `SocialLinks` - Social media links

### Styling Conventions

- **Mobile-first responsive design** - Base styles for mobile, then sm/md/lg breakpoints
- **Tailwind CSS v4** with `@theme` configuration in `index.css`:
  - Custom brand colors (`brand-blue`, `brand-pink`)
  - Custom animations (`fade-in`, `slide-up`, `float`, `glow`, `blink`)
  - Custom font family (Inter via Google Fonts)
- **Dark mode** support via class-based strategy using `@custom-variant dark`
- **CSS layers** used in `index.css` for base, components, and utilities

### Theme Management

The `useTheme` hook provides:
- `isDark` - Current theme state
- `toggleTheme()` - Toggle between light/dark

Features:
- Persists theme choice in localStorage
- Falls back to system preference on first visit
- Applies `dark` class to document element

### Custom Hooks

**useInView** - Intersection Observer wrapper for scroll animations
```tsx
const { ref, isInView } = useInView({ threshold: 0.2 });
```

**useForm** - Form state management with validation
```tsx
const { values, errors, status, handleChange, handleSubmit } = useForm({
  initialValues: { name: '', email: '' },
  validate: (values) => ({ /* errors */ }),
  onSubmit: async (data) => { /* submit logic */ }
});
```

### Component Patterns

1. **Default exports + named exports** - Components export both for flexibility
2. **Props interfaces** - All props are typed via interfaces in `types/index.ts`
3. **JSDoc comments** - Components have Portuguese documentation comments
4. **Accessibility** - ARIA labels, roles, and `aria-hidden` for decorative elements
5. **Responsive padding/sizing** - Using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`)
6. **Scroll animations** - Sections use `useInView` for entrance animations

### TypeScript Configuration

- **Strict mode** enabled
- **ES2022** target
- **Bundler module resolution** for Vite compatibility
- **React JSX transform** (no React import needed)
- Unused locals/parameters flagged as errors

## Key Components

### Sections

**HeroSection** - Main landing section with profile photo, animated typewriter text cycling through roles, and CTA button. Clean design without decorative elements.

**AboutSection** - Split layout with personal description and metrics grid (years of experience, projects, technologies, etc.).

**ServicesSection** - 3-column grid of service cards with icons, titles, and descriptions.

**ProjectsSection** - 2-column grid of project cards with images, descriptions, technology tags, and links.

**ContactSection** - Split layout with contact form (name, email, message) and contact information panel.

### Layout

**Header** - Responsive navigation:
- Desktop (lg+): Logo + navigation links + theme toggle
- Mobile: Logo + theme toggle + hamburger menu
- Fixed position with backdrop blur

**Footer** - 4-column grid with logo/description, navigation links, social media, and CTA.

### UI Components

**Button** - CTA button with variants: `primary`, `secondary`, `outline`. Includes gradient and hover effects.

**Card** - Container with variants: `default`, `elevated`, `outlined`. Supports hover effects.

**Input/Textarea** - Form inputs with floating labels, error states, and disabled states.

**Tag** - Small pill for displaying technologies. Variants: `default`, `primary`, `secondary`.

**SectionHeader** - Consistent section titles with optional gradient text and centered/left alignment.

**TypewriterText** - Animated text effect cycling through an array of words with configurable speeds.

**ThemeToggle** - Animated sun/moon icon for switching between light and dark themes.

**ProfilePhoto** - Circular profile image with gradient border and hover glow effects.

**MobileMenu** - Slide-in navigation menu with overlay, keyboard support (ESC to close), and scroll lock.

## Dark Mode Configuration

Tailwind CSS v4 uses `@custom-variant` for class-based dark mode:

```css
/* index.css */
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

This enables dark mode classes like `dark:bg-gray-950` to work when the `dark` class is on the document element.

## Notes

- Comments in code are primarily in Portuguese
- The project uses ES modules (`"type": "module"` in package.json)
- Vite is configured with the React plugin for Fast Refresh
- All sections support both dark and light modes
- Form validation is client-side with real-time feedback
- Scroll animations use Intersection Observer for performance
