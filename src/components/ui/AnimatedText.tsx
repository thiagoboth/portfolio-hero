import { useEffect, useState } from 'react';
import type { AnimatedTextProps } from '../../types';

/**
 * AnimatedText - Texto com animação de revelação letra por letra
 * Cada letra aparece com um efeito de fade + slide
 */
export function AnimatedText({
  text,
  as: Tag = 'span',
  className = '',
  textClassName = '',
  delay = 0,
  letterDelay = 0.03,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeno delay para garantir que o componente está montado
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Separar texto em letras preservando espaços
  const letters = text.split('');

  return (
    <Tag className={className}>
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={`inline-block transition-all duration-500 ${textClassName}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${delay + index * letterDelay}s`,
            // Preservar espaços
            ...(letter === ' ' && { width: '0.25em' }),
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </Tag>
  );
}

export default AnimatedText;
