# Projeto: Portfolio Pessoal - Expansão

## Contexto
Estou expandindo meu portfolio pessoal que já possui um Hero Section funcional.
O site deve transmitir profissionalismo, criatividade e domínio técnico.
Público-alvo: recrutadores, empresas e potenciais clientes de consultoria.

## Stack Técnica (já configurada)
- React 19
- TypeScript 5.9
- Vite 5
- Tailwind CSS 3 (com configuração customizada)
- ESLint 9

## Estrutura de Pastas Existente
```
src/
├── assets/
├── components/
│   ├── decorative/
│   │   ├── DecorativeElements.tsx
│   │   └── index.ts
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── HomeIndicator.tsx
│   │   └── index.ts
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   └── index.ts
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ProfilePhoto.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── TypewriterText.tsx
│   │   └── index.ts
│   └── index.ts
├── hooks/
│   └── useTheme.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Design System Existente

### Cores (tailwind.config.js)
```js
colors: {
  'brand-blue': '/* valor atual */',
  'brand-pink': '/* valor atual */'
}
```

### Animações Disponíveis
- `fade-in` - Fade de entrada
- `slide-up` - Slide de baixo para cima
- `float` - Flutuação suave
- `glow` - Efeito de brilho
- `blink` - Piscar (cursor typewriter)

### Tipografia
- Font family: Inter
- Responsivo com breakpoints sm/md/lg

### Padrões de Código Estabelecidos
- Comentários em português
- Props tipadas em `src/types/index.ts`
- Barrel exports em cada pasta (`index.ts`)
- Import centralizado: `import { Component } from './components'`
- Mobile-first responsive design
- Dark mode via `darkMode: 'media'`
- JSDoc comments nos componentes
- Acessibilidade: ARIA labels, roles, aria-hidden

---

## TAREFA: Criar Novas Seções

### 1. AboutSection
**Arquivo:** `src/components/sections/AboutSection.tsx`

**Layout:**
- Split layout: texto (60%) | imagem/ilustração (40%)
- Mobile: stack vertical (imagem primeiro)

**Conteúdo:**
- Título com destaque gradient (consistente com Hero)
- 2-3 parágrafos sobre experiência e foco profissional
- Grid de métricas (3 itens):
    - Anos de experiência
    - Projetos entregues
    - Clientes atendidos
- Animação fade-in no scroll

**Props Interface:**
```typescript
interface AboutSectionProps {
  title: string
  description: string[]
  metrics: Array<{ value: string; label: string }>
  imageSrc?: string
}
```

### 2. ServicesSection
**Arquivo:** `src/components/sections/ServicesSection.tsx`

**Layout:**
- Header centralizado (título + subtítulo)
- Grid 3 colunas (md:grid-cols-3, mobile: 1 coluna)

**Cards de Serviço:**
- Ícone (usar emoji ou criar componente Icon)
- Título do serviço
- Descrição breve (2-3 linhas)
- Hover: elevação + borda brand-blue/brand-pink

**Serviços a incluir:**
1. Consultoria em Tecnologia
2. Desenvolvimento de ERP
3. Análise de Negócios
4. Arquitetura de Sistemas
5. Automação de Processos
6. Treinamento Técnico

**Props Interface:**
```typescript
interface Service {
  icon: string
  title: string
  description: string
}

interface ServicesSectionProps {
  title: string
  subtitle?: string
  services: Service[]
}
```

### 3. ProjectsSection
**Arquivo:** `src/components/sections/ProjectsSection.tsx`

**Layout:**
- Grid 2 colunas (lg:grid-cols-2)
- Cards maiores com imagem de preview

**Card de Projeto:**
- Imagem/thumbnail do projeto
- Título
- Descrição curta
- Tags de tecnologias usadas
- Link/botão "Ver mais"
- Hover: scale sutil + overlay gradient

**Props Interface:**
```typescript
interface Project {
  id: string
  title: string
  description: string
  imageSrc: string
  tags: string[]
  link?: string
}

interface ProjectsSectionProps {
  title: string
  projects: Project[]
}
```

### 4. ContactSection
**Arquivo:** `src/components/sections/ContactSection.tsx`

**Layout:**
- Background diferenciado (gradient ou cor sólida escura)
- Split: formulário (esquerda) | info de contato (direita)
- Mobile: stack vertical

**Formulário:**
- Campos: nome, email, mensagem
- Botão submit usando componente Button existente (variant: primary)
- Validação básica (required)
- Estados: idle, loading, success, error

**Info de Contato:**
- Email
- LinkedIn
- GitHub
- Localização

**Props Interface:**
```typescript
interface ContactInfo {
  email: string
  linkedin?: string
  github?: string
  location?: string
}

interface ContactSectionProps {
  title: string
  subtitle?: string
  contactInfo: ContactInfo
  onSubmit: (data: { name: string; email: string; message: string }) => void
}
```

### 5. Footer
**Arquivo:** `src/components/layout/Footer.tsx`

**Conteúdo:**
- Logo ou nome
- Links de navegação (mesmo do Header)
- Redes sociais (ícones)
- Copyright com ano dinâmico
- "Feito com ❤️ e React"

---

## Componentes UI Adicionais Necessários

### Card
**Arquivo:** `src/components/ui/Card.tsx`
```typescript
interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'outlined'
  hover?: boolean
  className?: string
}
```

### SectionHeader
**Arquivo:** `src/components/ui/SectionHeader.tsx`
```typescript
interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  gradient?: boolean
}
```

### Input / Textarea
**Arquivo:** `src/components/ui/Input.tsx`
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}
```

### Tag
**Arquivo:** `src/components/ui/Tag.tsx`
```typescript
interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'brand'
}
```

---

## Hooks Adicionais

### useInView
**Arquivo:** `src/hooks/useInView.ts`
- Intersection Observer para animações no scroll
- Retorna `{ ref, isInView }`

### useForm
**Arquivo:** `src/hooks/useForm.ts`
- Gerenciamento de estado do formulário
- Validação básica
- Estados de loading/success/error

---

## Atualização do types/index.ts

Adicionar todas as novas interfaces ao arquivo de tipos centralizado.

---

## Atualização do App.tsx

Ordem das seções:
1. Header (existente)
2. HeroSection (existente)
3. AboutSection (novo)
4. ServicesSection (novo)
5. ProjectsSection (novo)
6. ContactSection (novo)
7. Footer (novo)

---

## Checklist de Qualidade

- [ ] Todos os componentes com props tipadas
- [ ] Dark mode funcionando em todas as seções
- [ ] Responsivo: mobile, tablet, desktop
- [ ] Animações suaves no scroll (fade-in, slide-up)
- [ ] Acessibilidade: focus states, aria-labels
- [ ] Consistência visual com HeroSection existente
- [ ] Barrel exports atualizados em cada pasta
- [ ] Comentários em português nos componentes

---

## Ordem de Implementação Sugerida

1. Componentes UI base (Card, SectionHeader, Input, Tag)
2. Hooks (useInView, useForm)
3. AboutSection
4. ServicesSection
5. ProjectsSection
6. ContactSection
7. Footer
8. Integração no App.tsx
9. Testes e ajustes de responsividade