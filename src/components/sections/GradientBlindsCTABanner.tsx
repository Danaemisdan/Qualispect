import React, { useState } from 'react';
import { 
  ArrowRight, 
  HardHat, 
  Phone, 
  ShieldCheck, 
  FileCheck2, 
  Clock, 
  CheckCircle2,
  Mail,
  Building2,
  Sparkles
} from 'lucide-react';
import { GradientBlinds } from '../ui/GradientBlinds';
import { BjorkDecodeText } from '../ui/BjorkDecodeText';
import { PageId } from '../../types';

interface GradientBlindsCTABannerProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const GradientBlindsCTABanner: React.FC<GradientBlindsCTABannerProps> = ({
  navigateTo,
  openInspectorModal,
  openQuoteModal
}) => {
  const [isBannerHovered, setIsBannerHovered] = useState(false);
  const [inspectorHovered, setInspectorHovered] = useState(false);
  const [quoteHovered, setQuoteHovered] = useState(false);

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FAFAF9] text-stone-900 border-b border-stone-200/80 overflow-hidden select-none">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        
        {/* ======================================================== */}
        {/* 21ST.DEV @dev.brijosh / FINAL CTA BANNER CARD (RED W/ BLINDS) */}
        {/* ======================================================== */}
        <div 
          onMouseEnter={() => setIsBannerHovered(true)}
          onMouseLeave={() => setIsBannerHovered(false)}
          className={`relative w-full rounded-3xl sm:rounded-[36px] bg-[#07070A] text-white p-8 sm:p-14 lg:p-16 shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_28px_56px_-28px_rgba(0,0,0,0.55)] overflow-hidden border border-white/10 transition-all duration-300 group ${
            isBannerHovered ? 'border-red-500/30 shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_28px_60px_-12px_rgba(220,38,38,0.20)]' : ''
          }`}
        >
          
          {/* Animated WebGL Gradient Blinds in Background (SIGNAL RED / CRIMSON / OBSIDIAN) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90 transition-opacity duration-500">
            <GradientBlinds 
              color1={[0.88, 0.12, 0.20]} // Signal Crimson Red (#DC2626)
              color2={[0.07, 0.04, 0.08]} // Deep Obsidian (#120A14)
              color3={[1.0, 0.38, 0.44]}  // Ruby specular sheen (#FF6170)
              blindsCount={22.0}
              speed={isBannerHovered ? 1.0 : 0.55}
            />
          </div>

          {/* Dev Brijosh Signature Scrim Gradient Overlay with Crimson Glow */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              background: `
                linear-gradient(105deg, rgba(7,7,10,0.90) 0%, rgba(7,7,10,0.60) 45%, rgba(7,7,10,0.22) 100%),
                radial-gradient(90% 80% at 78% 50%, rgba(220,38,38,${isBannerHovered ? '0.35' : '0.22'}), transparent 68%)
              `
            }}
          />

          {/* Precision Architectural Calibration Marks */}
          <span className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/30 pointer-events-none z-20 group-hover:border-red-400/60 transition-colors" />
          <span className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/30 pointer-events-none z-20 group-hover:border-red-400/60 transition-colors" />
          <span className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/30 pointer-events-none z-20 group-hover:border-red-400/60 transition-colors" />
          <span className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/30 pointer-events-none z-20 group-hover:border-red-400/60 transition-colors" />

          {/* Banner Content Container */}
          <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8 text-left">
            
            {/* Eyebrow Pill with Red Signal Line */}
            <div className="inline-flex items-center gap-3 font-mono text-xs text-white/70 tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-red-500 rounded-full" />
              <span className="font-bold text-white tracking-wider">
                [07 // RAPID MOBILIZATION CALL]
              </span>
              <span className="text-white/40">&bull;</span>
              <span className="text-red-400 font-semibold">24–48H GLOBAL SLA</span>
            </div>

            {/* Monumental Headline with Bjork Decode Text */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-sans">
              <BjorkDecodeText 
                text="Deploy Certified QA Directly to Your Fabricator." 
                trigger="inView"
                accentColor="#EF4444"
              />
            </h2>

            {/* Meaningful, Clear Subtext */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed font-normal">
              Eliminate supply chain risk before equipment departs the vendor shop. Our Houston operations desk coordinates accredited AWS, API, and AMPP inspectors dispatched to 45+ industrial countries.
            </p>

            {/* CTA Action Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              
              {/* Primary Action Button (White Capsule) */}
              <button
                onClick={() => openInspectorModal()}
                onMouseEnter={() => setInspectorHovered(true)}
                onMouseLeave={() => setInspectorHovered(false)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-stone-950 bg-white hover:bg-stone-100 shadow-[0_6px_25px_rgba(0,0,0,0.3)] transition-all duration-200 active:scale-[0.98] cursor-pointer group/btn"
              >
                <HardHat className="w-4 h-4 text-red-600 transition-transform group-hover/btn:scale-110" />
                <BjorkDecodeText 
                  text="REQUEST AN INSPECTOR" 
                  isHovered={inspectorHovered}
                  charset="matrix"
                  speed={15}
                  accentColor="#EF4444"
                />
                <ArrowRight className="w-4 h-4 text-stone-600 group-hover/btn:translate-x-1 group-hover/btn:text-black transition-all" />
              </button>

              {/* Secondary RFQ Button (Glass Pill) */}
              <button
                onClick={() => openQuoteModal()}
                onMouseEnter={() => setQuoteHovered(true)}
                onMouseLeave={() => setQuoteHovered(false)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-xs transition-all duration-200 active:scale-[0.98] cursor-pointer font-semibold"
              >
                <BjorkDecodeText 
                  text="REQUEST A QUOTE (RFQ)" 
                  isHovered={quoteHovered}
                  charset="matrix"
                  speed={15}
                  accentColor="#38BDF8"
                />
              </button>

              {/* Direct Houston Operations Phone */}
              <a
                href="tel:2817646224"
                className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors px-4 py-2"
              >
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>281-764-6224</span>
              </a>

            </div>

            {/* Trust Badges Strip */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-white/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 17020 Inspection Controls</span>
              </span>
              <span>&bull;</span>
              <span>SAM.gov: <strong className="text-white">UEI L3C9LLNA2KJ9</strong></span>
              <span>&bull;</span>
              <span className="text-red-400 font-semibold">Zero NCR Escape Guarantee</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
