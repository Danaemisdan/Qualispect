import React from 'react';
import { 
  Landmark, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Download, 
  Phone, 
  Mail, 
  Printer, 
  Award, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { governmentContractingData } from '../../data/capabilityStatementData';
import { DevBrijoshBanner } from '../ui/DevBrijoshBanner';

interface GovernmentContractingSectionProps {
  openCapabilityModal: () => void;
  openQuoteModal: () => void;
}

export const GovernmentContractingSection: React.FC<GovernmentContractingSectionProps> = ({
  openCapabilityModal,
  openQuoteModal
}) => {
  return (
    <section className="py-24 bg-white text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      {/* Background dot matrix */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5 text-emerald-700" />
            <span>FEDERAL &amp; PUBLIC-SECTOR TECHNICAL PROCUREMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-sans uppercase">
            Government Contracting <br />
            <span className="text-amber-700">&amp; Critical Infrastructure</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Qualispect Inc. provides technical inspection, quality assurance, industrial project support and credentialed technical personnel for federal, state, and municipal public-sector requirements.
          </p>

          <p className="text-sm text-stone-600">
            Our Houston-based organization combines technical inspection capability with rapid access to specialized professionals across multiple disciplines and geographic locations.
          </p>
        </div>

        {/* Federal Data Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-2 transition-all">
            <span className="text-[10px] font-mono uppercase font-bold text-stone-500 block">
              Unique Entity Identifier (UEI)
            </span>
            <div className="text-xl font-bold font-mono text-stone-900">
              {governmentContractingData.uei}
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> SAM.gov Active Entity
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-2 transition-all">
            <span className="text-[10px] font-mono uppercase font-bold text-stone-500 block">
              CAGE Code
            </span>
            <div className="text-xl font-bold font-mono text-stone-900">
              {governmentContractingData.cage}
            </div>
            <span className="text-[11px] font-mono text-stone-500">
              Defense Logistics Agency (DLA)
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-2 transition-all">
            <span className="text-[10px] font-mono uppercase font-bold text-stone-500 block">
              Primary NAICS Code
            </span>
            <div className="text-xl font-bold font-mono text-amber-700">
              {governmentContractingData.primaryNaics.code}
            </div>
            <span className="text-[11px] font-mono text-stone-700 truncate block">
              {governmentContractingData.primaryNaics.title}
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-2 transition-all">
            <span className="text-[10px] font-mono uppercase font-bold text-stone-500 block">
              Corporate Headquarters
            </span>
            <div className="text-base font-bold text-stone-900 uppercase font-sans">
              Houston, Texas
            </div>
            <span className="text-[11px] font-mono text-stone-500 block">
              9801 Westheimer Road, Suite 300
            </span>
          </div>

        </div>

        {/* Detailed Breakdown: Differentiators + Past Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Differentiators (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <h3 className="text-lg font-bold text-stone-900 uppercase tracking-tight">
                Public-Sector Differentiators
              </h3>
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Institutional Quality
              </span>
            </div>

            <div className="space-y-3">
              {governmentContractingData.differentiators.map((diff, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-800 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-xs text-stone-700 leading-relaxed font-medium">
                    {diff}
                  </span>
                </div>
              ))}
            </div>

            {/* NAICS List Grid */}
            <div className="pt-4 border-t border-stone-200 space-y-2">
              <span className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block">
                Secondary NAICS Codes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {governmentContractingData.secondaryNaics.map(naics => (
                  <div key={naics.code} className="p-2 bg-stone-50 rounded-lg border border-stone-200 flex items-center gap-2">
                    <span className="font-bold text-amber-700">{naics.code}</span>
                    <span className="text-stone-600 truncate text-[11px]">{naics.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capability Statement Download Banner (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Capability Statement Download Banner (Dev Brijosh Style) */}
            <DevBrijoshBanner
              badgeIcon={<FileText className="w-5 h-5 text-red-400" />}
              eyebrow="OFFICIAL PROCUREMENT ASSET"
              title="Download Capability Statement"
              description="Access our one-page federal capability dossier containing verified UEI, CAGE, NAICS, PSC codes, and past performance summaries."
              primaryButtonText="View & Download Capability Statement"
              primaryButtonAction={openCapabilityModal}
              primaryButtonIcon={<Download className="w-3.5 h-3.5 text-stone-900" />}
              secondaryButtonText="Contact Government BD Team"
              secondaryButtonAction={openQuoteModal}
              layout="stacked"
              accentColor="#EF4444"
            />

            {/* Direct Contact for Government Contracting Officers */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 text-xs space-y-3 shadow-sm">
              <h5 className="font-bold text-stone-900 uppercase tracking-tight text-xs flex items-center gap-1.5 font-mono">
                <Landmark className="w-4 h-4 text-amber-600" />
                Government Contracting Desk
              </h5>

              <p className="text-stone-600 text-[11px] leading-relaxed">
                Qualispect responds to Sources Sought notices, RFIs, RFQs, and sub-tier prime contractor teaming agreements for industrial inspection.
              </p>

              <div className="space-y-1.5 pt-2 text-stone-700 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <a href="mailto:info@qualispect.com" className="text-stone-900 font-semibold hover:underline">
                    info@qualispect.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>281-764-6224 / 281-764-1335</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
