import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface DecodeTextProps {
  text: string;
  characters?: string;
  speed?: number; // ms per frame
  scrambleSteps?: number; // frames per resolved character
  delay?: number; // delay before start in ms
  trigger?: 'mount' | 'hover' | 'inView' | 'both';
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  onComplete?: () => void;
}

const CLEAN_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const DecodeText: React.FC<DecodeTextProps> = ({
  text,
  characters = CLEAN_CHARS,
  speed = 18,
  delay = 0,
  trigger = 'hover',
  className = '',
  as: Component = 'span',
  onComplete
}) => {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const isDecodingRef = useRef(false);

  const startDecoding = useCallback(() => {
    if (isDecodingRef.current) return;
    isDecodingRef.current = true;

    if (timerRef.current) clearTimeout(timerRef.current);

    const charsArray = characters.split('');
    const len = text.length;
    let iteration = 0;
    // Keep total animation tight (max ~300ms)
    const maxIterations = Math.min(len + 4, 18);

    const run = () => {
      iteration++;
      const resolvedCutoff = Math.floor((iteration / maxIterations) * len);

      let result = '';
      for (let i = 0; i < len; i++) {
        const char = text[i];
        if (char === ' ' || char === '•' || char === '/' || char === '-') {
          result += char;
        } else if (i < resolvedCutoff) {
          result += char;
        } else {
          result += charsArray[Math.floor(Math.random() * charsArray.length)];
        }
      }

      setDisplayText(result);

      if (iteration < maxIterations) {
        timerRef.current = window.setTimeout(run, speed);
      } else {
        setDisplayText(text);
        isDecodingRef.current = false;
        if (onComplete) onComplete();
      }
    };

    if (delay > 0) {
      timerRef.current = window.setTimeout(run, delay);
    } else {
      run();
    }
  }, [text, characters, speed, delay, onComplete]);

  // Keep displayText in sync with text prop
  useEffect(() => {
    setDisplayText(text);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      isDecodingRef.current = false;
      setDisplayText(text);
    };
  }, [text]);

  // Handle triggers
  useEffect(() => {
    if (trigger === 'mount') {
      startDecoding();
    } else if (trigger === 'inView' || trigger === 'both') {
      const el = elementRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isDecodingRef.current) {
              startDecoding();
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      return () => {
        observer.disconnect();
        if (timerRef.current) clearTimeout(timerRef.current);
        isDecodingRef.current = false;
        setDisplayText(text);
      };
    }
  }, [trigger, startDecoding, text]);

  const handleMouseEnter = () => {
    if (trigger === 'hover' || trigger === 'both') {
      startDecoding();
    }
  };

  return (
    <Component
      // @ts-ignore
      ref={elementRef}
      className={`inline-block select-none ${className}`}
      onMouseEnter={handleMouseEnter}
      aria-label={text}
    >
      {displayText}
    </Component>
  );
};
