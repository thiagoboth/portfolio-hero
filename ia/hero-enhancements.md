# Hero Section Enhancements

Documento de especificação para melhorias visuais da Hero Section do portfolio.

## Objetivo

Tornar a página inicial mais atrativa e com personalidade profissional, mantendo performance e responsividade.

---

## Features a Implementar

### 1. Gradient Mesh Animado

**Descrição:** Background com gradientes coloridos suaves que se movem lentamente, criando um efeito visual dinâmico mas não distrator.

**Implementação:**
- CSS puro com `@keyframes` para animação
- Múltiplas camadas de gradientes radiais com `mix-blend-mode`
- Cores: tons de azul, roxo e rosa (brand colors)
- Animação lenta (20-30s de duração) para não distrair
- Opacidade reduzida para não competir com o conteúdo

**Código Base:**
```css
.gradient-mesh {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.gradient-mesh::before,
.gradient-mesh::after {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: gradientMove 20s ease-in-out infinite;
}

@keyframes gradientMove {
  0%, 100% { transform: translate(-20%, -20%) rotate(0deg); }
  50% { transform: translate(10%, 10%) rotate(180deg); }
}
```

**Responsividade:**
- Mobile: Reduzir opacidade para 0.3, blur maior
- Desktop: Opacidade 0.4-0.5

**Dark Mode:**
- Light: Cores mais suaves (blue-200, pink-200, purple-200)
- Dark: Cores mais saturadas com opacidade menor (blue-500/30, pink-500/30)

**Performance:**
- Usar `will-change: transform` apenas durante animação
- Preferir `transform` e `opacity` (GPU accelerated)
- Considerar `@media (prefers-reduced-motion)` para desabilitar

---

### 2. 3D Tilt Effect na Foto de Perfil

**Descrição:** A foto de perfil responde ao movimento do mouse com um efeito de inclinação 3D suave, criando profundidade e interatividade.

**Implementação:**
- Hook customizado `useTilt` ou lógica inline
- Calcular ângulo baseado na posição do mouse relativa ao elemento
- Aplicar `transform: perspective() rotateX() rotateY()`
- Adicionar sombra dinâmica que acompanha a inclinação
- Efeito de "brilho" (glare) opcional que segue o mouse

**Código Base:**
```tsx
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 10; // -15 to 15 degrees
  const rotateY = (centerX - x) / 10;

  setTilt({ rotateX, rotateY });
};
```

**Parâmetros:**
- Ângulo máximo: ±15 graus
- Transição de saída: 0.5s ease-out (volta suave ao estado normal)
- Perspective: 1000px

**Responsividade:**
- Mobile/Tablet: Desabilitar (touch não tem hover)
- Desktop: Ativar apenas com mouse

**Acessibilidade:**
- Respeitar `prefers-reduced-motion`
- Não afetar funcionalidade, apenas visual

---

### 3. Status Badge "Disponível para Projetos"

**Descrição:** Badge flutuante indicando disponibilidade para novos projetos, com indicador pulsante.

**Implementação:**
- Componente `StatusBadge` reutilizável
- Dot animado com `pulse` effect
- Posicionado próximo ao nome ou foto
- Cores: verde para disponível, amarelo para parcial, vermelho para indisponível

**Props Interface:**
```typescript
interface StatusBadgeProps {
  status: 'available' | 'partial' | 'unavailable';
  text?: string;
  className?: string;
}
```

**Variantes:**
| Status | Cor | Texto Default |
|--------|-----|---------------|
| available | green-500 | "Disponível para projetos" |
| partial | yellow-500 | "Disponibilidade limitada" |
| unavailable | red-500 | "Indisponível no momento" |

**Design:**
- Fundo semi-transparente com backdrop-blur (glassmorphism)
- Borda sutil
- Dot pulsante à esquerda
- Texto pequeno (text-sm)
- Ícone opcional à direita

**Animação do Dot:**
```css
@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}
```

**Responsividade:**
- Mobile: Versão compacta (apenas dot + "Disponível")
- Desktop: Versão completa

---

### 4. Tech Stack Pills

**Descrição:** Badges/pills das principais tecnologias que o desenvolvedor domina, com ícones.

**Implementação:**
- Array de tecnologias com nome e ícone
- Componente `TechPill` para cada item
- Layout em flex/grid com gap
- Hover effect sutil (scale + glow)

**Estrutura de Dados:**
```typescript
interface TechItem {
  name: string;
  icon: string; // emoji ou componente de ícone
  color?: string; // cor de destaque opcional
}

const techStack: TechItem[] = [
  { name: 'React', icon: '⚛️', color: 'blue' },
  { name: 'TypeScript', icon: '📘', color: 'blue' },
  { name: 'Node.js', icon: '💚', color: 'green' },
  { name: 'Tailwind', icon: '🎨', color: 'cyan' },
  { name: 'Next.js', icon: '▲', color: 'gray' },
];
```

**Design:**
- Pills com fundo semi-transparente
- Ícone à esquerda, nome à direita
- Border radius alto (rounded-full)
- Hover: leve aumento de escala (1.05) + sombra

**Animação de Entrada:**
- Staggered animation (cada pill aparece com delay)
- Fade in + slide up

**Responsividade:**
- Mobile: 2-3 pills visíveis, scroll horizontal ou grid 2x3
- Desktop: Todas visíveis em linha ou grid

**Posicionamento:**
- Abaixo do subtítulo (typewriter) e acima do CTA
- Ou ao lado da foto em layout desktop

---

### 5. Text Reveal Animation no Nome

**Descrição:** O nome aparece com animação de revelação dramática na entrada da página.

**Opções de Efeito:**

**Opção A - Clip Path Reveal:**
```css
.text-reveal {
  clip-path: inset(0 100% 0 0);
  animation: reveal 0.8s ease-out forwards;
}

@keyframes reveal {
  to { clip-path: inset(0 0 0 0); }
}
```

**Opção B - Letter by Letter:**
- Cada letra aparece individualmente
- Delay escalonado entre letras
- Combina opacity + translateY

**Opção C - Gradient Mask Sweep:**
- Máscara de gradiente que desliza da esquerda para direita
- Revela o texto progressivamente
- Efeito mais suave

**Implementação Recomendada (Opção A + B híbrido):**
```tsx
// Separar nome em letras
const letters = name.split('');

// Renderizar cada letra com delay
{letters.map((letter, i) => (
  <span
    key={i}
    className="inline-block animate-letter-reveal"
    style={{ animationDelay: `${i * 0.05}s` }}
  >
    {letter === ' ' ? '\u00A0' : letter}
  </span>
))}
```

**Timing:**
- Delay inicial: 0.3s (após page load)
- Duração por letra: 0.4s
- Delay entre letras: 0.03-0.05s
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

**Responsividade:**
- Manter animação em todos os breakpoints
- Ajustar timing se nome muito longo

**Acessibilidade:**
- `prefers-reduced-motion`: mostrar texto sem animação
- Garantir que texto seja legível durante animação

---

## Estrutura de Arquivos

```
src/
├── components/
│   ├── ui/
│   │   ├── StatusBadge.tsx      # NOVO
│   │   ├── TechPill.tsx         # NOVO
│   │   ├── TiltCard.tsx         # NOVO (wrapper com efeito 3D)
│   │   ├── AnimatedText.tsx     # NOVO (text reveal)
│   │   └── index.ts             # Atualizar exports
│   └── sections/
│       └── HeroSection.tsx      # Modificar
├── hooks/
│   └── useTilt.ts               # NOVO (opcional, pode ser inline)
└── index.css                    # Adicionar keyframes
```

---

## Ordem de Implementação

1. **index.css** - Adicionar keyframes das animações
2. **StatusBadge.tsx** - Componente simples, independente
3. **TechPill.tsx** - Componente simples, independente
4. **AnimatedText.tsx** - Componente para text reveal
5. **TiltCard.tsx** - Wrapper com efeito 3D (ou adicionar direto no ProfilePhoto)
6. **HeroSection.tsx** - Integrar todos os componentes + gradient mesh

---

## Checklist de Qualidade

### Performance
- [ ] Animações usam apenas `transform` e `opacity`
- [ ] `will-change` aplicado apenas quando necessário
- [ ] Nenhum layout shift durante animações
- [ ] Lazy loading mantido para imagens

### Responsividade
- [ ] Testado em 320px (mobile pequeno)
- [ ] Testado em 768px (tablet)
- [ ] Testado em 1024px+ (desktop)
- [ ] Touch devices não têm hover bugs

### Acessibilidade
- [ ] `prefers-reduced-motion` respeitado
- [ ] Contraste adequado mantido
- [ ] Nenhum conteúdo essencial depende de animação
- [ ] Screen readers não afetados

### Dark Mode
- [ ] Gradient mesh funciona em ambos os modos
- [ ] StatusBadge legível em ambos
- [ ] TechPills com contraste adequado
- [ ] Glow effects ajustados para dark

---

## Preview Visual (ASCII)

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]              Nav Links              [Theme] [Menu]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ══ Olá mundo, eu sou                                      │
│                                                             │
│   ████████╗██╗  ██╗██╗ █████╗  ██████╗  ██████╗            │
│   ╚══██╔══╝██║  ██║██║██╔══██╗██╔════╝ ██╔═══██╗    ┌────┐ │
│      ██║   ███████║██║███████║██║  ███╗██║   ██║    │    │ │
│      ██║   ██╔══██║██║██╔══██║██║   ██║██║   ██║    │ 📷 │ │
│      ██║   ██║  ██║██║██║  ██║╚██████╔╝╚██████╔╝    │    │ │
│      ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝     └────┘ │
│   Botelho  (gradient)                         (3D tilt)     │
│                                                             │
│   [🟢 Disponível para projetos]  <-- Status Badge           │
│                                                             │
│   programador| durante o dia    <-- Typewriter              │
│   & durante a noite também...                               │
│                                                             │
│   [⚛️ React] [📘 TS] [💚 Node] [🎨 TW]  <-- Tech Pills      │
│                                                             │
│   [    ENTRE EM CONTATO    ]    <-- CTA Button              │
│                                                             │
│                   SCROLL                                    │
│                    (↓)                                       │
│                                                             │
│  ░░░░░ GRADIENT MESH BACKGROUND (animated) ░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────────────┘
```

---

## Notas Finais

- Todas as animações devem ser sutis e profissionais
- Evitar exageros que pareçam "amadores"
- Priorizar a experiência do usuário sobre efeitos visuais
- Manter tempo de carregamento baixo
- Testar em dispositivos reais quando possível
