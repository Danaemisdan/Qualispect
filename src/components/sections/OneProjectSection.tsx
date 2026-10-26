import React from 'react';
import { 
  Globe2, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Ship, 
  Factory, 
  ShieldCheck,
  TrendingUp,
  FileCheck2
} from 'lucide-react';
import { PageId } from '../../types';
import { DeployPipelineGraphic } from '../ui/isokit/DeployPipelineGraphic';

interface OneProjectSectionProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
}

export const OneProjectSection: React.FC<OneProjectSectionProps> = ({
  navigateTo,
  openInspectorModal
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F9F9F8] text-stone-900 relative overflow-hidden border-b border-stone-200/80">
      
      {/* Background Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-stone-700 text-xs font-mono font-medium tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              GLOBAL SUPPLY CHAIN VISIBILITY
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-sans">
              One Project. Multiple Locations. <br />
              <span className="text-stone-500 font-normal">One consistent quality expectation.</span>
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Modern industrial projects depend upon distributed global supply chains. Equipment may be engineered in Houston, manufactured in Northern Italy, forged in Japan, and installed in the Permian Basin or offshore.
              </p>
              <p>
                Qualispect bridges that physical distance. Our inspection professionals serve as an extension of your quality organization—providing independent observations, daily flash reports, and technical verification right from the vendor shop floor.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 font-mono">
              <div className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-stone-900 block uppercase">Reduce Travel Overhead</span>
                  <span className="text-stone-500 text-[11px]">Deploy vetted local inspectors without transatlantic flights.</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-sm flex items-start gap-2.5">
                <FileCheck2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-stone-900 block uppercase">24-Hour Flash Reporting</span>
                  <span className="text-stone-500 text-[11px]">Know shop test outcomes the same day they occur.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateTo('global-coverage')}
                className="bg-stone-900 hover:bg-black text-white font-mono font-medium text-xs uppercase tracking-wider px-6 py-3 rounded-full flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <Globe2 className="w-3.5 h-3.5 text-stone-300" />
                <span>EXPLORE GLOBAL COVERAGE</span>
              </button>

              <button
                onClick={() => navigateTo('about')}
                className="text-xs font-mono font-medium text-stone-700 hover:text-stone-950 uppercase tracking-wider px-5 py-3 border border-stone-300 hover:border-stone-400 rounded-full bg-white hover:bg-stone-50 transition-all cursor-pointer shadow-xs"
              >
                Our Quality Approach
              </button>
            </div>
          </div>

          {/* Right Visual Column: Multi-Tier Supply Chain Node Flow & Isokit Deploy Pipeline */}
          <div className="lg:col-span-6 space-y-4">
            {/* Aadil Ghani isokit Deploy Pipeline */}
            <DeployPipelineGraphic />

            {/* Quick Milestone Strip */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] text-stone-400 uppercase block">Stage 02 Witness</span>
                <span className="font-bold text-stone-900 block mt-0.5">WPS / PQR Root Pass</span>
                <span className="text-[10px] text-emerald-700 font-semibold">AWS CWI Audited</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] text-stone-400 uppercase block">Stage 03 Proof</span>
                <span className="font-bold text-stone-900 block mt-0.5">2,250 PSI Shell Hydro</span>
                <span className="text-[10px] text-emerald-700 font-semibold">Zero Pressure Decay</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
