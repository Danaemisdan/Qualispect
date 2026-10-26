import React from 'react';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  HardHat, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  UploadCloud,
  Award
} from 'lucide-react';
import { PageId } from '../types';
import { CareersSection } from '../components/sections/CareersSection';
import { DevBrijoshBanner } from '../components/ui/DevBrijoshBanner';
import { BjorkDecodeText } from '../components/ui/BjorkDecodeText';

interface CareersPageProps {
  navigateTo: (page: PageId) => void;
  openInspectorNetworkModal: (jobTitle?: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  navigateTo,
  openInspectorNetworkModal
}) => {
  return (
    <div className="bg-[#FAFAF9] text-stone-900">
      
      {/* Hero Header */}
      <div className="bg-[#FAFAF9] pt-28 sm:pt-36 pb-16 relative overflow-hidden border-b border-stone-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
              <HardHat className="w-3.5 h-3.5 text-amber-600" />
              <span>PAGE 10 // GLOBAL INSPECTOR NETWORK RECRUITMENT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              <BjorkDecodeText text="Careers & Inspector Network" />
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal">
              Qualispect continually recruits experienced, certified quality control professionals, non-destructive testing technicians, and field expeditors for industrial assignments worldwide.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-800 font-mono text-xs">
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Active Network</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">1,200+</span>
                <span className="text-emerald-700 text-[11px]">Credentialed Techs</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Disciplines</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">24 Scopes</span>
                <span className="text-stone-600 text-[11px]">Welding, API, NDT, Coating</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Assignment Types</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">Short &amp; Long</span>
                <span className="text-amber-700 text-[11px]">FAT Callouts &amp; Resident</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Payment Terms</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">Prompt Net</span>
                <span className="text-emerald-700 text-[11px]">Direct Wire Remittance</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openInspectorNetworkModal()}
                className="bg-stone-900 hover:bg-black text-white font-mono font-medium text-xs uppercase px-6 py-3 rounded-full flex items-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95"
              >
                <UploadCloud className="w-3.5 h-3.5 text-stone-300" />
                <span>Submit Your Inspector Profile / CV</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Careers Section (Open Roles & Disciplines) */}
      <CareersSection openInspectorNetworkModal={openInspectorNetworkModal} />

      {/* Dedicated Dev Brijosh Crimson CTA Banner */}
      <div className="py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DevBrijoshBanner 
            badgeText="TECHNICAL TALENT COMMUNITY"
            headline="Are You a Certified AWS, API, or NACE Inspector?"
            description="Join our global roster to receive notifications for high-day-rate vendor surveillance callouts, mill audits, and factory acceptance test witnessing in your region."
            primaryButtonText="REGISTER YOUR CREDENTIALS"
            secondaryButtonText="VIEW ALL DISCIPLINES"
            onPrimaryClick={() => openInspectorNetworkModal()}
            onSecondaryClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
          />
        </div>
      </div>

    </div>
  );
};
