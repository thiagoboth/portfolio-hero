import { useState, useEffect, useCallback } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;      // Velocidade de digitação (ms por caractere)
  deletingSpeed?: number;    // Velocidade de apagar (ms por caractere)
  pauseDuration?: number;    // Tempo de pausa com a palavra completa (ms)
  className?: string;
}

/**
 * Componente de texto com efeito typewriter
 * Digita, pausa, apaga e troca para a próxima palavra
 */
export function TypewriterText({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
  className = '',
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = words[currentWordIndex];

  const handleTyping = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // Digitando
      if (displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else {
        // Palavra completa - pausar
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Apagando
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        // Palavra apagada - próxima palavra
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayText, isDeleting, isPaused, currentWord, pauseDuration, words.length]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, typingSpeed, deletingSpeed]);

  return (
    <span className={className}>
      {displayText}
      <span
        className="
          inline-block w-[2px] h-[1.1em] ml-[2px]
          bg-blue-500
          animate-blink
          align-middle
        "
        aria-hidden="true"
      />
    </span>
  );
}

export default TypewriterText;
