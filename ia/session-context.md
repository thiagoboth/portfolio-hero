# Contexto da sessao

## Objetivo
- Ajustar o hero da home para um conceito "Mapa de Rotas".
- Tornar o layout menos poluido e mais humano para publico nao tecnico.
- Manter animacao de typewriter sem causar layout shift.
- Usar paleta primaria #0183FF e secundaria #FF00E4.

## Decisoes de design
- Hero com roteiro visual (rota desenhada) e checkpoints alinhados ao caminho.
- Foto no centro do percurso como "hub" visual.
- Tipografia mais expressiva: display para nome, sans para texto.
- Textura de mapa mais visivel no fundo.

## Copy principal (hero)
- Saudacao: "Prazer, eu sou"
- Titulo: nome com gradiente
- Linha principal: "Desenvolvedor fullstack que transforma ideias em [typewriter] para pessoas reais."
- Subtexto: "Da primeira conversa ao lancamento, eu guio todo o percurso."
- CTA: "Vamos conversar"
- Scroll: "Siga a rota" / "Veja o caminho completo"

## Alteracoes tecnicas
- Typewriter com largura minima fixa para evitar movimento do layout.
- Rota em SVG com caminho em "S", traco base e traco animado.
- Checkpoints posicionados ao longo da rota e pontos no SVG.
- Foto aumentada e centralizada no mapa.
- Paleta aplicada em gradientes, botao e badge.

## Arquivos editados
- src/components/sections/HeroSection.tsx
- src/components/ui/ProfilePhoto.tsx
- src/components/ui/TypewriterText.tsx
- src/components/ui/Button.tsx
- src/components/ui/StatusBadge.tsx
- src/index.css
- src/App.tsx

## Observacoes
- A rota deve parecer um percurso real e conectar visualmente os checkpoints.
- O hero precisa convidar o usuario a descer a pagina sem excesso de elementos.
