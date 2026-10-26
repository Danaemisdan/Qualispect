import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  HardHat, 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck2, 
  Clock, 
  Globe2, 
  ChevronRight, 
  Flame, 
  Activity, 
  Award, 
  Check, 
  Search, 
  Zap 
} from 'lucide-react';
import { PageId } from '../../types';
import { GlassFold } from '../ui/GlassFold';
import { DecodeText } from '../ui/DecodeText';
import { BjorkDecodeText } from '../ui/BjorkDecodeText';

interface HeroSectionProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  navigateTo,
  openInspectorModal,
  openQuoteModal
}) => {
  const [inspectorHovered, setInspectorHovered] = useState(false);
  const [quoteHovered, setQuoteHovered] = useState(false);

  return (
    <section className="relative bg-[#030712] text-white pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden border-b border-stone-800">
      
      {/* ======================================================== */}
      {/* 21ST.DEV GLASS FOLD ANIMATED BACKGROUND SHADER           */}
      {/* ======================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* WebGL 21st.dev Glass Fold shader with deep sapphire & obsidian — zero pee yellow */}
        <GlassFold 
          color1="#1d4ed8" 
          color2="#030712" 
          color3="#38bdf8" 
          speed={0.35}
          scale={1.1}
          noise={0.06}
          className="absolute inset-0 w-full h-full opacity-65"
        />
        
        {/* Soft Vignette Overlay to guarantee high contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-transparent to-[#030712]/70 pointer-events-none" />
        
        {/* Subtle Light Dot Grid with Radial Vignette */}
        <div className="absolute inset-0 bg-dot-grid-dark opacity-25 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_60%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ======================================================== */}
        {/* HERO EDITORIAL HEADLINE & VALUE PRESENTATION             */}
        {/* ======================================================== */}
        <div className="max-w-4xl space-y-6 sm:space-y-8 text-left">
          
          {/* Announcement Pill */}
          <div 
            onClick={() => navigateTo('global-coverage')}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 shadow-sm backdrop-blur-md transition-all cursor-pointer group select-none text-white"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide text-white/90 uppercase">
              <DecodeText text="GLOBAL THIRD-PARTY INSPECTION • QA/QC" trigger="both" speed={24} />
            </span>
            <span className="text-white/30">|</span>
            <span className="text-xs font-mono text-amber-300 group-hover:text-amber-200 font-semibold flex items-center gap-1">
              <span>45+ Countries</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>

          {/* Monumental Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-bold tracking-[-0.035em] leading-[1.06] text-white font-sans">
            <BjorkDecodeText text="Quality. Compliance. Confidence." trigger="inView" charset="blocks" accentColor="#38BDF8" />
            <span className="block text-stone-300 font-normal mt-1 sm:mt-2 text-2xl sm:text-4xl lg:text-[44px] tracking-[-0.03em]">
              Wherever your project takes you.
            </span>
          </h1>

          {/* Meaningful, Clear Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-2xl leading-relaxed font-normal">
            We deploy independent technical inspectors directly to vendor fabrication shops, testing facilities, and job sites worldwide—verifying equipment quality before it ships.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            
            {/* Primary Action Button */}
            <button
              onClick={() => openInspectorModal()}
              onMouseEnter={() => setInspectorHovered(true)}
              onMouseLeave={() => setInspectorHovered(false)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-stone-950 bg-white hover:bg-stone-100 shadow-[0_4px_25px_rgba(255,255,255,0.25)] transition-all duration-200 active:scale-[0.98] cursor-pointer group"
            >
              <HardHat className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover:scale-110" />
              <BjorkDecodeText 
                text="REQUEST AN INSPECTOR" 
                isHovered={inspectorHovered}
                charset="matrix"
                speed={15}
                accentColor="#D97706"
              />
              <ArrowRight className="w-3.5 h-3.5 text-stone-600 group-hover:translate-x-1 group-hover:text-black transition-all" />
            </button>

            {/* Secondary Action Button */}
            <button
              onClick={() => openQuoteModal()}
              onMouseEnter={() => setQuoteHovered(true)}
              onMouseLeave={() => setQuoteHovered(false)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer font-semibold"
            >
              <BjorkDecodeText 
                text="REQUEST A QUOTE (RFQ)" 
                isHovered={quoteHovered}
                charset="matrix"
                speed={15}
                accentColor="#38BDF8"
              />
            </button>

          </div>

          {/* Corporate Identifiers Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-stone-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Houston HQ: <strong className="text-white font-semibold">9801 Westheimer Rd</strong>
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-stone-300">
              SAM.gov: <strong className="text-amber-400 font-semibold">UEI L3C9LLNA2KJ9</strong> (CAGE 7S2L7)
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-stone-300 font-medium">24–48h Rapid Mobilization</span>
          </div>

        </div>

        {/* ======================================================== */}
        {/* ROW OF 3 VALUE PROPOSITION CARDS                         */}
        {/* ======================================================== */}
        <div className="pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            
            {/* Card 1: Rapid Mobilization */}
            <div className="p-6 rounded-2xl bg-stone-900/80 border border-white/15 shadow-xl hover:border-amber-400/40 backdrop-blur-xl transition-all duration-200 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-amber-400 tracking-wider block">
                    GLOBAL SLA
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                    24–48h Rapid Dispatch
                  </h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  Accredited technical inspectors dispatched directly to manufacturer facilities across North America, Europe, the Middle East, and Asia.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>45+ Countries Covered</span>
                <span className="text-white font-semibold">Local Rates</span>
              </div>
            </div>

            {/* Card 2: Hold Point Enforcement */}
            <div className="p-6 rounded-2xl bg-stone-900/80 border border-white/15 shadow-xl hover:border-emerald-400/40 backdrop-blur-xl transition-all duration-200 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 tracking-wider block">
                    STAGE ZERO-BYPASS
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                    Hold Point Enforcement
                  </h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  Zero skipped steps. Physical witness at designated ITP stages: material receiving, fit-up, root pass, NDT, and hydro proofing.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>100% Witness Ratio</span>
                <span className="text-emerald-400 font-semibold">Zero Bypass</span>
              </div>
            </div>

            {/* Card 3: 24h Transmittal */}
            <div className="p-6 rounded-2xl bg-stone-900/80 border border-white/15 shadow-xl hover:border-amber-400/40 backdrop-blur-xl transition-all duration-200 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <FileCheck2 className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-amber-400 tracking-wider block">
                    TRANSMITTAL SLA
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                    24h Flash Reporting
                  </h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  Electronic Inspection Daily Reports (IDR) with geotagged photo evidence and signed punch lists transmitted same-day to your team.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>PDF + Raw Data Sync</span>
                <span className="text-white font-semibold">Daily Transmittal</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
