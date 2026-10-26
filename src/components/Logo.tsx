import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'dark',
  showSubtitle = false
}) => {
  const isLight = variant === 'light';

  const markSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-9 h-9'
  };

  const titleSizes = {
    sm: 'text-[13px] tracking-[0.22em]',
    md: 'text-[15px] tracking-[0.24em]',
    lg: 'text-[22px] tracking-[0.26em]'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Minimal Precision Glyph (Optical Lens & Caliper Q) */}
      <div className={`relative ${markSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
        >
          {/* Main Precision Optical Lens Ring */}
          <circle 
            cx="14.5" 
            cy="14.5" 
            r="11" 
            stroke={isLight ? '#0F172A' : '#FFFFFF'} 
            strokeWidth="2" 
          />
          
          {/* Tangent Caliper Line (The Q signature) */}
          <path 
            d="M21.5 21.5L28 28" 
            stroke="#F59E0B" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
          
          {/* Fine Concentric Reticle Calibration Circle */}
          <circle 
            cx="14.5" 
            cy="14.5" 
            r="5" 
            stroke={isLight ? 'rgba(15, 23, 42, 0.25)' : 'rgba(255, 255, 255, 0.2)'} 
            strokeWidth="0.8" 
            strokeDasharray="1.5 1.5" 
          />
          
          {/* Ultra-Minimal Laser Focal Point */}
          <circle 
            cx="14.5" 
            cy="14.5" 
            r="1.6" 
            fill="#F59E0B" 
          />
        </svg>
      </div>

      {/* Minimal Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center">
          <span className={`font-sans font-bold uppercase ${titleSizes[size]} ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            QUALISPECT
          </span>
          <span className="text-[9px] font-mono tracking-widest text-zinc-400 pl-2 ml-2 border-l border-white/[0.15] hidden xs:inline font-normal">
            INC
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] font-mono tracking-[0.24em] text-zinc-400 uppercase mt-1 font-normal">
            Third-Party Inspection • QA/QC
          </span>
        )}
      </div>
    </div>
  );
};
