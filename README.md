# Portfolio Hero

Componente Hero para portfolio pessoal, construído com React, TypeScript e Tailwind CSS.

## Estrutura do Projeto

```
portfolio-hero/
├── src/
│   ├── components/
│   │   ├── decorative/          # Elementos visuais decorativos
│   │   │   ├── DecorativeElements.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── layout/              # Componentes estruturais
│   │   │   ├── Header.tsx
│   │   │   ├── HomeIndicator.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── sections/            # Seções da página
│   │   │   ├── HeroSection.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── ui/                  # Componentes de UI reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── ProfilePhoto.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── index.ts             # Exportação centralizada
│   │
│   ├── hooks/
│   │   └── useTheme.ts          # Hook para dark/light mode
│   │
│   ├── types/
│   │   └── index.ts             # Definições TypeScript
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── package.json
```

## Componentes

### Layout

| Componente | Descrição |
|------------|-----------|
| `Header` | Cabeçalho com logo e menu |
| `HomeIndicator` | Indicador de home do iOS |

### UI

| Componente | Descrição |
|------------|-----------|
| `Button` | Botão CTA com variantes (primary, secondary, outline) |
| `ProfilePhoto` | Foto de perfil com borda gradiente e efeitos hover |

### Decorative

| Componente | Descrição |
|------------|-----------|
| `DecorativeElements` | Formas, gradientes e elementos flutuantes |

### Sections

| Componente | Descrição |
|------------|-----------|
| `HeroSection` | Seção hero completa com todos os elementos |

## Uso

```tsx
import { HeroSection } from './components';

function App() {
  return (
    <HeroSection
      profileImage="/sua-foto.jpg"
      name="Seu Nome"
      greeting="Olá mundo, eu sou"
      roleHighlight="programador"
      role="durante o dia"
      ctaText="Entre em Contato"
      onCtaClick={() => console.log('Contato')}
    />
  );
}
```

## Props do HeroSection

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `profileImage` | string | Unsplash URL | URL da imagem de perfil |
| `name` | string | "Thiago Botelho" | Nome completo |
| `greeting` | string | "Olá mundo, eu sou" | Texto de saudação |
| `roleHighlight` | string | "programador" | Palavra destacada em azul |
| `role` | string | "durante o dia" | Continuação da frase |
| `ctaText` | string | "Entre em Contato" | Texto do botão |
| `onCtaClick` | function | undefined | Callback do botão |

## Scripts

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

## Melhorias Implementadas

- ✅ Header simplificado (não compete com hero)
- ✅ Contraste de texto melhorado (WCAG AA)
- ✅ Botão CTA maior com efeitos hover
- ✅ Espaçamento consistente
- ✅ Foto de perfil com efeitos hover e glow
- ✅ Acessibilidade (aria-labels, focus states)
- ✅ Dark mode automático
- ✅ Animações de entrada
- ✅ Efeito de digitação na profissão

## Tecnologias

- React 18
- TypeScript
- Tailwind CSS 3
- Vite 5
