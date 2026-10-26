import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface BjorkDecodeTextProps {
  text: string;
  className?: string;
  trigger?: 'inView' | 'hover' | 'mount' | 'custom';
  charset?: 'blocks' | 'alphanumeric' | 'symbols' | 'matrix';
  speed?: number; // ms per tick
  accentColor?: string;
  isHovered?: boolean;
}

const CHARSETS = {
  blocks: ['█', '▓', '▒', '░', '▖', '▗', '▘', '▝'],
  alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(''),
  symbols: ['*', '+', '~', '#', '%', '•', '>', '<', '$', '&'],
  matrix: '!@#$%&*<>/[]{}0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
};

export const BjorkDecodeText: React.FC<BjorkDecodeTextProps> = ({
  text,
  className = '',
  trigger = 'inView',
  charset = 'matrix',
  speed = 18,
  accentColor = '#D97706',
  isHovered
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [flashingIndices, setFlashingIndices] = useState<Set<number>>(new Set());
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const isDecodingRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const glyphPool = CHARSETS[charset] || CHARSETS.matrix;

  const playDecode = useCallback(() => {
    // If already decoding, clear timer and restart smoothly
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    isDecodingRef.current = true;

    const len = text.length;
    let iteration = 0;
    // Calculate iterations proportional to text length for satisfying rhythm
    const maxIterations = Math.max(Math.min(len + 6, 22), 12);

    const tick = () => {
      iteration++;
      const resolvedCutoff = Math.floor((iteration / maxIterations) * len);
      const newFlashing = new Set<number>();

      let result = '';
      for (let i = 0; i < len; i++) {
        const targetChar = text[i];
        if (targetChar === ' ' || targetChar === '\n' || targetChar === '—' || targetChar === '•' || targetChar === '(' || targetChar === ')') {
          result += targetChar;
        } else if (i < resolvedCutoff) {
          result += targetChar;
        } else if (i === resolvedCutoff) {
          // Char that just resolved flashes with accent
          newFlashing.add(i);
          result += targetChar;
        } else {
          // Still scrambling with glyphs
          result += glyphPool[Math.floor(Math.random() * glyphPool.length)];
        }
      }

      setDisplayText(result);
      setFlashingIndices(newFlashing);

      if (iteration < maxIterations) {
        timerRef.current = window.setTimeout(tick, speed);
      } else {
        setDisplayText(text);
        setFlashingIndices(new Set());
        isDecodingRef.current = false;
      }
    };

    tick();
  }, [text, speed, glyphPool]);

  // Keep displayText in sync with prop
  useEffect(() => {
    setDisplayText(text);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      isDecodingRef.current = false;
      setDisplayText(text);
    };
  }, [text]);

  // Handle external isHovered prop
  useEffect(() => {
    if (isHovered) {
      playDecode();
    }
  }, [isHovered, playDecode]);

  // Trigger handlers
  useEffect(() => {
    if (trigger === 'mount') {
      playDecode();
    } else if (trigger === 'inView') {
      const el = elementRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isDecodingRef.current) {
              playDecode();
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      return () => {
        observer.disconnect();
        if (timerRef.current) clearTimeout(timerRef.current);
        isDecodingRef.current = false;
        setDisplayText(text);
      };
    }
  }, [trigger, playDecode, text]);

  const handleMouseEnter = () => {
    if (trigger === 'hover' || trigger === 'custom' || !isHovered) {
      playDecode();
    }
  };

  return (
    <span
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      className={`inline-block select-none cursor-inherit ${className}`}
      aria-label={text}
    >
      {displayText.split('').map((ch, idx) => {
        const isFlash = flashingIndices.has(idx);
        return (
          <span
            key={idx}
            style={isFlash ? { color: accentColor } : undefined}
            className={isFlash ? 'transition-colors duration-75 font-bold' : undefined}
          >
            {ch}
          </span>
        );
      })}
    </span>
  );
};
