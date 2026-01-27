# Portfolio Hero

Personal portfolio website with a modern hero section featuring animated typewriter effects, theme switching, and responsive mobile-first design.

## Tech Stack

- **React 19** - UI library
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **ESLint 9** - Linting with React Hooks and React Refresh plugins

## Project Structure

```
portfolio-hero/
├── src/
│   ├── assets/              # Static assets (images, SVGs)
│   ├── components/
│   │   ├── decorative/      # Visual decorative elements
│   │   │   ├── DecorativeElements.tsx
│   │   │   └── index.ts
│   │   ├── layout/          # Structural components
│   │   │   ├── Header.tsx
│   │   │   ├── HomeIndicator.tsx
│   │   │   └── index.ts
│   │   ├── sections/        # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   └── index.ts
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── ProfilePhoto.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── TypewriterText.tsx
│   │   │   └── index.ts
│   │   └── index.ts         # Centralized component exports
│   ├── hooks/
│   │   └── useTheme.ts      # Theme management hook (light/dark mode)
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx              # Root application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles with Tailwind directives
├── public/                  # Static public assets
├── index.html               # HTML template
├── package.json
├── tsconfig.json            # TypeScript configuration (references)
├── tsconfig.app.json        # App TypeScript config
├── tsconfig.node.json       # Node TypeScript config
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
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
- **decorative/** - Visual elements with no interactivity
- **layout/** - Structural components (Header, HomeIndicator)
- **sections/** - Page sections (HeroSection)
- **ui/** - Reusable interactive components (Button, TypewriterText, etc.)

Each subdirectory has an `index.ts` barrel file for clean exports. The root `components/index.ts` re-exports everything for centralized imports:

```tsx
import { HeroSection, Button, Header } from './components';
```

### TypeScript Types

All component props and shared types are defined in `src/types/index.ts`:
- `HeroSectionProps`
- `ProfilePhotoProps`
- `CTAButtonProps`
- `HeaderProps`
- `ThemeContextType`
- `TypewriterTextProps`
- `MobileMenuProps`
- `MenuItem`
- `ThemeToggleProps`
- `DecorativeElementsProps`

### Styling Conventions

- **Mobile-first responsive design** - Base styles for mobile, then sm/md/lg breakpoints
- **Tailwind CSS** with custom configuration:
  - Custom brand colors (`brand-blue`, `brand-pink`)
  - Custom animations (`fade-in`, `slide-up`, `float`, `glow`, `blink`)
  - Custom font family (Inter)
- **Dark mode** support via `darkMode: 'media'` (system preference)
- **CSS layers** used in `index.css` for base, components, and utilities

### Theme Management

The `useTheme` hook provides:
- `isDark` - Current theme state
- `toggleTheme()` - Toggle between light/dark

Theme automatically detects system preference and listens for changes.

### Component Patterns

1. **Default exports + named exports** - Components export both for flexibility
2. **Props interfaces** - All props are typed via interfaces in `types/index.ts`
3. **JSDoc comments** - Components have Portuguese/English documentation comments
4. **Accessibility** - ARIA labels, roles, and `aria-hidden` for decorative elements
5. **Responsive padding/sizing** - Using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`)

### TypeScript Configuration

- **Strict mode** enabled
- **ES2022** target
- **Bundler module resolution** for Vite compatibility
- **React JSX transform** (no React import needed)
- Unused locals/parameters flagged as errors

## Key Components

### HeroSection
Main hero section with profile photo, animated typewriter text, theme toggle, and CTA button. Accepts customizable props for name, greeting, role, and contact action.

### TypewriterText
Animated text effect that cycles through an array of words with typing and deleting animations.

### Button
Reusable CTA button with three variants: `primary`, `secondary`, `outline`. Includes hover gradient effects.

### ThemeToggle
Animated sun/moon icon toggle for switching between light and dark themes.

### ProfilePhoto
Circular profile image with gradient border and hover glow effects.

### MobileMenu
Slide-in navigation menu with overlay, keyboard support (ESC to close), and scroll lock.

## Notes

- Comments in code are primarily in Portuguese
- The project uses ES modules (`"type": "module"` in package.json)
- Vite is configured with the React plugin for Fast Refresh
