import React, { useState } from 'react';
import { HardHat, Flame, ShieldCheck, ArrowRight, Layers, FileCheck2, CheckCircle2, Activity, Zap, Check } from 'lucide-react';
import { PageId } from '../../types';
import { BjorkDecodeText } from '../ui/BjorkDecodeText';
import { MetallurgyGraphicTerminal } from '../ui/MetallurgyGraphicTerminal';

interface HeroLiquidMetalSectionProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

const metallurgyBadges = [
  { name: 'AWS CWI', version: 'v4.1', spec: 'Structural & Piping' },
  { name: 'CSWIP', version: '3.2.2', spec: 'Senior Welding QA' },
  { name: 'ASME Sec IX', version: '2025', spec: 'WPS / PQR / WPQ' },
  { name: 'API 577', version: '4th Ed', spec: 'Welding & Metallurgy' },
  { name: 'EN 10204 3.1', version: 'MTR', spec: '100% Heat Trace' },
  { name: 'NACE MR0175', version: 'Sour', spec: 'H2S Cracking Prevention' }
];

export const HeroLiquidMetalSection: React.FC<HeroLiquidMetalSectionProps> = ({
  navigateTo,
  openInspectorModal,
  openQuoteModal
}) => {
  const [activeTab, setActiveTab] = useState<'thermal' | 'ndt' | 'wps'>('thermal');
  const [weldHovered, setWeldHovered] = useState(false);

  return (
    <section className="relative w-full py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200/80 overflow-hidden">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        
        {/* Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Content & Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Monospace Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
              <span className="text-stone-700 uppercase font-semibold">[04 // METALLURGICAL SURVEILLANCE]</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-500">MOLTEN INTEGRITY</span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 uppercase font-sans">
                <BjorkDecodeText text="Molten Metallurgy & Welding Integrity." trigger="inView" charset="blocks" />
              </h2>
              <p className="text-stone-600 text-base sm:text-lg font-normal leading-relaxed pt-2">
                From heavy wall pressure vessels to cryogenic subsea manifolds, Qualispect verifies weld puddle solidification, heat-affected zone (HAZ) toughness, and alloy chemistry before equipment enters critical service.
              </p>
            </div>

            {/* Tech Badges Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {metallurgyBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="group relative px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 hover:border-stone-300 transition-all text-xs font-mono flex items-center gap-1.5"
                >
                  <Flame className="w-3 h-3 text-amber-600" />
                  <span className="font-bold text-stone-800 tracking-tight">{badge.name}</span>
                  <span className="text-[10px] text-stone-500">{badge.version}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => openInspectorModal({ inspectionDiscipline: 'Welding & Fabrication QA/QC' })}
                onMouseEnter={() => setWeldHovered(true)}
                onMouseLeave={() => setWeldHovered(false)}
                className="bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow flex items-center gap-2 transition-all cursor-pointer active:scale-95 group"
              >
                <HardHat className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <BjorkDecodeText 
                  text="Request Welding Inspector" 
                  isHovered={weldHovered}
                  charset="matrix"
                  speed={15}
                  accentColor="#F59E0B"
                />
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('services')}
                className="bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-sm transition-all cursor-pointer"
              >
                Explore All 10 Services
              </button>
            </div>

            {/* Micro Spec Footnote */}
            <div className="pt-2 text-[11px] font-mono text-stone-500 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full WPS, PQR &amp; Welder Performance Qualification (WPQ) audit compliance.</span>
            </div>

          </div>

          {/* Right Column: High-Impact Metallurgical Inspection Graphic Terminal */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-[460px]">
              <MetallurgyGraphicTerminal />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
