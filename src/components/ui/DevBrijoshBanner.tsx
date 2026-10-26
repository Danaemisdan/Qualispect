import React, { useState } from 'react';
import { ArrowRight, HardHat, ShieldCheck } from 'lucide-react';
import { GradientBlinds } from './GradientBlinds';
import { BjorkDecodeText } from './BjorkDecodeText';

export interface DevBrijoshBannerProps {
  eyebrow?: string;
  tag?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  primaryButtonIcon?: React.ReactNode;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
  secondaryButtonIcon?: React.ReactNode;
  badgeIcon?: React.ReactNode;
  extraContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  className?: string;
  layout?: 'horizontal' | 'compact' | 'stacked';
  accentColor?: string; // Default: '#EF4444' (Signal Red)
}

export const DevBrijoshBanner: React.FC<DevBrijoshBannerProps> = ({
  eyebrow,
  tag,
  title,
  description,
  primaryButtonText,
  primaryButtonAction,
  primaryButtonIcon,
  secondaryButtonText,
  secondaryButtonAction,
  secondaryButtonIcon,
  badgeIcon,
  extraContent,
  footerContent,
  className = '',
  layout = 'horizontal',
  accentColor = '#EF4444' // Signal Red
}) => {
  const [isBannerHovered, setIsBannerHovered] = useState(false);
  const [primaryBtnHovered, setPrimaryBtnHovered] = useState(false);
  const [secondaryBtnHovered, setSecondaryBtnHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsBannerHovered(true)}
      onMouseLeave={() => setIsBannerHovered(false)}
      className={`relative w-full rounded-3xl bg-[#07070A] text-white p-6 sm:p-10 lg:p-12 shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_24px_48px_-12px_rgba(0,0,0,0.55)] overflow-hidden border border-white/10 group select-none transition-all duration-300 ${
        isBannerHovered ? 'border-red-500/30 shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_28px_60px_-12px_rgba(220,38,38,0.20)]' : ''
      } ${className}`}
    >
      {/* ======================================================== */}
      {/* 21ST.DEV @dev.brijosh WEBGL GRADIENT BLINDS (RED/CRIMSON)*/}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90 transition-opacity duration-500">
        <GradientBlinds 
          color1={[0.88, 0.12, 0.20]} // Signal Crimson Red (#DC2626)
          color2={[0.07, 0.04, 0.08]} // Obsidian Dark (#120A14)
          color3={[1.0, 0.38, 0.44]}  // Ruby specular sheen (#FF6170)
          blindsCount={layout === 'compact' ? 18.0 : 22.0}
          speed={isBannerHovered ? 1.0 : 0.5}
        />
      </div>

      {/* Signature Dev Brijosh Dark Scrim & Crimson Glow Radial Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `
            linear-gradient(105deg, rgba(7,7,10,0.92) 0%, rgba(7,7,10,0.65) 50%, rgba(7,7,10,0.25) 100%),
            radial-gradient(85% 80% at 80% 50%, rgba(220,38,38,${isBannerHovered ? '0.35' : '0.22'}), transparent 68%)
          `
        }}
      />

      {/* Precision Architectural Calibration Marks */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/30 pointer-events-none z-20 group-hover:border-red-400/60 transition-colors" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/30 pointer-events-none z-20 group-hover:border-red-400/60 transition-colors" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/30 pointer-events-none z-20 group-hover:border-red-400/60 transition-colors" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/30 pointer-events-none z-20 group-hover:border-red-400/60 transition-colors" />

      {/* Main Content Layout */}
      {layout === 'horizontal' ? (
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          
          {/* Left Text Block */}
          <div className="max-w-2xl space-y-3.5 text-left">
            
            {/* Eyebrow with Signal Red Bar */}
            {(eyebrow || tag) && (
              <div className="inline-flex items-center gap-2.5 font-mono text-[11px] text-white/70 uppercase tracking-wider">
                <span className="w-6 h-[2px] bg-red-500 rounded-full shrink-0" />
                {eyebrow && <span className="font-bold text-white tracking-widest">{eyebrow}</span>}
                {eyebrow && tag && <span className="text-white/40">•</span>}
                {tag && <span className="text-red-400 font-semibold">{tag}</span>}
              </div>
            )}

            {/* Headline with Isaiah Bjork Decode Text */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight font-sans">
              <BjorkDecodeText 
                text={title} 
                trigger="inView" 
                charset="blocks" 
                accentColor={accentColor}
              />
            </h3>

            {/* Description */}
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
              {description}
            </p>

            {extraContent}
          </div>

          {/* Right Action Buttons */}
          {(primaryButtonText || secondaryButtonText) && (
            <div className="shrink-0 flex flex-wrap sm:flex-nowrap items-center gap-3 relative z-10 pt-2 lg:pt-0">
              
              {primaryButtonText && (
                <button
                  onClick={primaryButtonAction}
                  onMouseEnter={() => setPrimaryBtnHovered(true)}
                  onMouseLeave={() => setPrimaryBtnHovered(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-stone-950 bg-white hover:bg-stone-100 shadow-[0_4px_20px_rgba(255,255,255,0.2)] transition-all duration-200 active:scale-[0.98] cursor-pointer group/btn"
                >
                  {primaryButtonIcon}
                  <BjorkDecodeText 
                    text={primaryButtonText}
                    isHovered={primaryBtnHovered}
                    charset="matrix"
                    speed={15}
                    accentColor={accentColor}
                  />
                  <ArrowRight className="w-3.5 h-3.5 text-stone-600 group-hover/btn:translate-x-1 group-hover/btn:text-black transition-all" />
                </button>
              )}

              {secondaryButtonText && (
                <button
                  onClick={secondaryButtonAction}
                  onMouseEnter={() => setSecondaryBtnHovered(true)}
                  onMouseLeave={() => setSecondaryBtnHovered(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-xs transition-all duration-200 active:scale-[0.98] cursor-pointer font-semibold"
                >
                  {secondaryButtonIcon}
                  <BjorkDecodeText 
                    text={secondaryButtonText}
                    isHovered={secondaryBtnHovered}
                    charset="matrix"
                    speed={15}
                    accentColor="#38BDF8"
                  />
                </button>
              )}

            </div>
          )}

        </div>
      ) : (
        /* Stacked / Compact Layout */
        <div className="relative z-10 space-y-5 text-left">
          
          {/* Top Badge / Icon */}
          {badgeIcon && (
            <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center font-bold shadow-sm">
              {badgeIcon}
            </div>
          )}

          {/* Eyebrow */}
          {(eyebrow || tag) && (
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] text-white/70 uppercase tracking-wider">
              <span className="w-5 h-[2px] bg-red-500 rounded-full shrink-0" />
              {eyebrow && <span className="font-bold text-white tracking-widest">{eyebrow}</span>}
              {eyebrow && tag && <span className="text-white/40">•</span>}
              {tag && <span className="text-red-400 font-semibold">{tag}</span>}
            </div>
          )}

          {/* Headline */}
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight font-sans">
            <BjorkDecodeText 
              text={title} 
              trigger="inView" 
              charset="blocks" 
              accentColor={accentColor}
            />
          </h4>

          {/* Description */}
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
            {description}
          </p>

          {extraContent}

          {/* Stacked Action Buttons */}
          {(primaryButtonText || secondaryButtonText) && (
            <div className="pt-2 flex flex-col gap-2.5">
              
              {primaryButtonText && (
                <button
                  onClick={primaryButtonAction}
                  onMouseEnter={() => setPrimaryBtnHovered(true)}
                  onMouseLeave={() => setPrimaryBtnHovered(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-stone-950 bg-white hover:bg-stone-100 shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer group/btn"
                >
                  {primaryButtonIcon}
                  <BjorkDecodeText 
                    text={primaryButtonText}
                    isHovered={primaryBtnHovered}
                    charset="matrix"
                    speed={15}
                    accentColor={accentColor}
                  />
                  <ArrowRight className="w-3.5 h-3.5 text-stone-600 group-hover/btn:translate-x-1 group-hover/btn:text-black transition-all" />
                </button>
              )}

              {secondaryButtonText && (
                <button
                  onClick={secondaryButtonAction}
                  onMouseEnter={() => setSecondaryBtnHovered(true)}
                  onMouseLeave={() => setSecondaryBtnHovered(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-stone-200 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-xs transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  {secondaryButtonIcon}
                  <BjorkDecodeText 
                    text={secondaryButtonText}
                    isHovered={secondaryBtnHovered}
                    charset="matrix"
                    speed={15}
                    accentColor="#38BDF8"
                  />
                </button>
              )}

            </div>
          )}

          {footerContent}
        </div>
      )}

      {/* Optional Full-width Bottom Footer */}
      {layout === 'horizontal' && footerContent && (
        <div className="relative z-10 pt-4 mt-4 border-t border-white/10">
          {footerContent}
        </div>
      )}

    </div>
  );
};
