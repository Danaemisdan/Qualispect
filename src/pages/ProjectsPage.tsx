import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  ShieldCheck, 
  FileCheck2, 
  ArrowRight,
  Download,
  Building2
} from 'lucide-react';
import { PageId } from '../types';
import { FilterableProjects } from '../components/sections/FilterableProjects';
import { DevBrijoshBanner } from '../components/ui/DevBrijoshBanner';
import { BjorkDecodeText } from '../components/ui/BjorkDecodeText';

interface ProjectsPageProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  navigateTo,
  openInspectorModal,
  openQuoteModal
}) => {
  return (
    <div className="bg-[#FAFAF9] text-stone-900">
      
      {/* Hero Header */}
      <div className="bg-[#FAFAF9] pt-28 sm:pt-36 pb-16 relative overflow-hidden border-b border-stone-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-amber-600" />
              <span>PAGE 07 // TRACK RECORD &amp; PAST PERFORMANCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              <BjorkDecodeText text="Project Experience Matrix" />
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal">
              Explore our project history across major offshore production platforms, LNG liquefaction trains, subsea tiebacks, pipeline transmissions, and federal infrastructure facilities.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-800 font-mono text-xs">
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Capital Assets</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">$12B+</span>
                <span className="text-emerald-700 text-[11px]">Hardware Safeguarded</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Defect Prevention</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">0 Incidents</span>
                <span className="text-emerald-700 text-[11px]">Zero Critical Escapes</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Shop Witnessing</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">5,800+</span>
                <span className="text-stone-600 text-[11px]">Hold Points Verified</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Reporting Turnaround</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">24 Hours</span>
                <span className="text-amber-700 text-[11px]">Daily Flash Reports</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Filterable Projects Matrix Section */}
      <FilterableProjects openInspectorModal={openInspectorModal} />

      {/* Dedicated Dev Brijosh Crimson CTA Banner */}
      <div className="py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DevBrijoshBanner 
            badgeText="PROJECT QUALITY ASSURANCE"
            headline="Planning an Upcoming Capital Equipment Procurement?"
            description="Our Houston technical team can review your purchase orders, specifications, and Inspection & Test Plans (ITPs) to design a tailored vendor surveillance schedule."
            primaryButtonText="REQUEST PROJECT RFQ"
            secondaryButtonText="DISPATCH AN INSPECTOR"
            onPrimaryClick={openQuoteModal}
            onSecondaryClick={() => openInspectorModal()}
          />
        </div>
      </div>

    </div>
  );
};
