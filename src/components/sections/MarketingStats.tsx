import React from 'react';
import { 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Globe2, 
  Users, 
  ArrowRight,
  HardHat,
  FileCheck2
} from 'lucide-react';
import { PageId } from '../../types';
import { BjorkDecodeText } from '../ui/BjorkDecodeText';
import WebhookRelay from '../ui/isokit/aadil/WebhookRelay';

interface MarketingStatsProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const MarketingStats: React.FC<MarketingStatsProps> = ({
  navigateTo,
  openInspectorModal,
  openQuoteModal
}) => {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FAFAF9] text-stone-900 border-b border-stone-200/80 overflow-hidden">
      
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative space-y-12">
        
        {/* Section Header (stats-06 style in Light Luxury) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-stone-700 uppercase font-semibold">[02 // OPERATIONAL PROOF]</span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-500">GLOBAL IMPACT TELEMETRY</span>
          </div>

          <h2 className="text-balance text-center font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-stone-900 font-sans">
            <BjorkDecodeText text="Numbers That Define Trust." trigger="inView" charset="blocks" />
          </h2>

          <p className="text-pretty text-center text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            A quick look at our global surveillance footprint, responsiveness, and zero-compromise compliance delivered across international supply chains.
          </p>
        </div>

        {/* stats-06 Asymmetric 3-Column Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 items-stretch">
          
          {/* Card 1 (Top Left): 24–48h Rapid Dispatch */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-6 py-7 flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/40 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-700 flex items-center justify-center mb-6">
                <Clock className="w-5 h-5 stroke-[2px]" />
              </div>
              <div className="font-mono font-bold text-4xl sm:text-5xl text-stone-900 tracking-tight">
                24–48h
              </div>
              <h3 className="mt-3 text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                Rapid Mobilization SLA
              </h3>
              <p className="mt-1.5 text-xs text-stone-600 font-normal leading-relaxed">
                Direct boots-on-the-ground dispatch to vendor facilities across the United States, Europe, and Asia-Pacific.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
              <span>SLA Guaranteed</span>
              <span className="text-amber-700 font-semibold">Immediate</span>
            </div>
          </div>

          {/* Card 2 (Top Middle): 99.8% Hold Point Compliance */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-6 py-7 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/40 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5 stroke-[2px]" />
              </div>
              <div className="font-mono font-bold text-4xl sm:text-5xl text-stone-900 tracking-tight">
                99.8%
              </div>
              <h3 className="mt-3 text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                Hold-Point Compliance
              </h3>
              <p className="mt-1.5 text-xs text-stone-600 font-normal leading-relaxed">
                Zero missed witness or hold inspections across 10,000+ audited ITP stages and factory test stands.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
              <span>Zero-Bypass Policy</span>
              <span className="text-emerald-700 font-semibold">Verified</span>
            </div>
          </div>

          {/* Card 3 (Right Column, row-span-2 Tall Card): 100% Conflict-Free Objectivity */}
          <div className="row-span-2 flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-6 py-7 relative group hover:border-amber-500/40 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-700 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-5 h-5 stroke-[2px]" />
              </div>
              <div className="font-mono font-bold text-4xl sm:text-5xl text-stone-900 tracking-tight">
                100%
              </div>
              <h3 className="mt-3 text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                Conflict-Free Objectivity
              </h3>
              <p className="mt-1.5 text-xs text-stone-600 font-normal leading-relaxed">
                Qualispect operates with complete third-party independence. We represent only our client's purchase order, approved drawings, and agreed technical specifications.
              </p>

              {/* Bullet checklist */}
              <div className="mt-6 space-y-2.5 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>No commercial affiliation with fabricators</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Strict NDA & confidentiality compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Uncompromising reporting on every NCR</span>
                </div>
              </div>
            </div>

            {/* Bottom federal verification badge */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-[10px] text-stone-400 uppercase block">Federal Credential</span>
                <span className="text-stone-900 font-semibold">UEI L3C9LLNA2KJ9</span>
              </div>
              <button
                onClick={() => openInspectorModal()}
                className="bg-stone-900 hover:bg-black text-white text-[11px] font-mono uppercase px-3.5 py-1.5 rounded-full font-medium transition-all shadow-xs"
              >
                Deploy
              </button>
            </div>
          </div>

          {/* Card 4 (Bottom Left): 45+ Industrial Countries */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-6 py-7 flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/40 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200/60 text-purple-700 flex items-center justify-center mb-6">
                <Globe2 className="w-5 h-5 stroke-[2px]" />
              </div>
              <div className="font-mono font-bold text-4xl sm:text-5xl text-stone-900 tracking-tight">
                45+
              </div>
              <h3 className="mt-3 text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                Industrial Countries
              </h3>
              <p className="mt-1.5 text-xs text-stone-600 font-normal leading-relaxed">
                Houston HQ coordinating active field inspection coverage across 6 continents without cross-border delay.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
              <button 
                onClick={() => navigateTo('global-coverage')}
                className="text-stone-700 hover:text-stone-900 font-medium flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>View Coverage Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5 (Bottom Middle): 2,500+ Vetted Professionals */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-6 py-7 flex flex-col justify-between relative overflow-hidden group hover:border-stone-400 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center mb-6">
                <Users className="w-5 h-5 stroke-[2px]" />
              </div>
              <div className="font-mono font-bold text-4xl sm:text-5xl text-stone-900 tracking-tight">
                2,500+
              </div>
              <h3 className="mt-3 text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                Vetted Technical Specialists
              </h3>
              <p className="mt-1.5 text-xs text-stone-600 font-normal leading-relaxed">
                Certified AWS CWI, CSWIP, API 510/570/653, NACE/AMPP, CompEx, and ASNT Level II/III inspectors.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
              <button 
                onClick={() => navigateTo('quality')}
                className="text-stone-700 hover:text-stone-900 font-medium flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>Review Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 24-Hour IDR Flash Transmittal Relay */}
        <div className="mt-8 bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-[0_12px_45px_rgba(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-stone-800 uppercase font-bold">[24H ELECTRONIC TRANSMITTAL RELAY]</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-sans">
              Instant Geotagged Field Report Relay.
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed font-normal">
              Press <strong>Send</strong> to simulate our 24-hour flash transmittal: packet routing instantaneously to the Client Web Portal, Houston Operations Command, and the EPC Project Manager with 100% receipt confirmation.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500">
              <span>200 OK Response</span>
              <span>&bull;</span>
              <span>GPS Coordinates Encrypted</span>
              <span>&bull;</span>
              <span className="text-emerald-700 font-bold">&lt; 24h SLA</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[480px] h-[380px] rounded-2xl overflow-hidden border border-stone-200 bg-stone-50/50 shadow-sm">
              <WebhookRelay />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
