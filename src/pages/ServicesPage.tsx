import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  HardHat, 
  FileText, 
  Search, 
  ChevronRight,
  Download
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { PageId } from '../types';
import { CoreServicesBento } from '../components/sections/CoreServicesBento';
import { DisciplinesMatrix } from '../components/sections/DisciplinesMatrix';
import { FeaturesWithPanel } from '../components/sections/FeaturesWithPanel';
import { DevBrijoshBanner } from '../components/ui/DevBrijoshBanner';
import { BjorkDecodeText } from '../components/ui/BjorkDecodeText';

interface ServicesPageProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  navigateTo,
  openInspectorModal,
  openQuoteModal
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);

  const activeService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  return (
    <div className="bg-[#FAFAF9] text-stone-900">
      
      {/* Hero Banner */}
      <div className="bg-[#FAFAF9] pt-28 sm:pt-36 pb-20 relative overflow-hidden border-b border-stone-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>PAGE 02 // END-TO-END QUALITY VERIFICATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              <BjorkDecodeText text="Technical Inspection & Quality Services" />
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal">
              Qualispect provides independent technical inspection and quality support throughout procurement, manufacturing, fabrication, construction and commissioning worldwide.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => navigateTo('vendor-surveillance')}
                className="bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase px-6 py-3 rounded-full flex items-center gap-2 shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
              >
                <span>Vendor Surveillance Workflow (5 Steps)</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>

              <button
                onClick={() => openQuoteModal()}
                className="bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-mono text-xs uppercase px-6 py-3 rounded-full shadow-2xs transition-all cursor-pointer"
              >
                Request Service Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Service Detail Browser */}
      <div className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
              SERVICE CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 uppercase tracking-tight">
              Select a Technical Discipline
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-normal">
              Click through our specialized scopes of work below to review deliverables, covered asset types, and applicable engineering codes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav List */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block px-2 mb-2">
                Available Scopes ({servicesData.length})
              </span>
              <div className="space-y-1">
                {servicesData.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedServiceId(svc.id)}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${
                      selectedServiceId === svc.id
                        ? 'bg-stone-900 text-white shadow-sm font-semibold'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/80'
                    }`}
                  >
                    <span className="truncate pr-2">{svc.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${
                      selectedServiceId === svc.id ? 'text-amber-400' : 'text-stone-400'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Detailed Panel */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#FAFAF9] border border-stone-200 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-[11px] font-mono font-bold text-amber-800 uppercase tracking-widest block">
                    {activeService.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 uppercase tracking-tight mt-1">
                    {activeService.title}
                  </h3>
                </div>

                <button
                  onClick={() => openInspectorModal({ inspectionDiscipline: activeService.title })}
                  className="bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs uppercase px-4 py-2 rounded-full flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer font-bold"
                >
                  <HardHat className="w-3.5 h-3.5" />
                  <span>Request Inspector</span>
                </button>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed font-normal">
                {activeService.fullDesc}
              </p>

              {/* Deliverables & Assets Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-mono">
                <div className="p-5 rounded-xl bg-white border border-stone-200 space-y-3 shadow-2xs">
                  <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-amber-600" /> Typical Deliverables:
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-600">
                    {activeService.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                        <span className="leading-tight">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-white border border-stone-200 space-y-3 shadow-2xs">
                  <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-stone-700" /> Equipment &amp; Asset Types:
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-600">
                    {activeService.equipmentCovered.map((eq, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
                        <span className="leading-tight">{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Standards Tags */}
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <span className="text-[11px] font-mono text-stone-500 font-bold uppercase block">
                  Applicable International Engineering Codes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeService.standards.map(std => (
                    <span key={std} className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-stone-700 font-medium border border-stone-200 shadow-2xs">
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 font-mono">
                <span className="text-xs text-stone-600">
                  Ready to deploy inspectors for {activeService.title}?
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => openQuoteModal()}
                    className="px-5 py-2.5 rounded-full border border-stone-300 text-stone-800 font-bold text-xs uppercase hover:bg-stone-50 transition-colors cursor-pointer shadow-sm"
                  >
                    Request Day Rates
                  </button>
                  <button
                    onClick={() => openInspectorModal({ inspectionDiscipline: activeService.title })}
                    className="bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase px-5 py-2.5 rounded-full shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                  >
                    <HardHat className="w-3.5 h-3.5 text-amber-400" />
                    <span>Mobilize Inspector</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Core Services Bento */}
      <CoreServicesBento 
        navigateTo={navigateTo}
        openInspectorModal={openInspectorModal}
      />

      {/* Full Disciplines Matrix */}
      <DisciplinesMatrix 
        navigateTo={navigateTo}
        openInspectorModal={openInspectorModal}
      />

      {/* Surveillance Protocols with Usage Meter Graphic */}
      <FeaturesWithPanel 
        navigateTo={navigateTo}
        openInspectorModal={openInspectorModal}
      />

      {/* Dedicated Dev Brijosh Crimson CTA Banner */}
      <div className="py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DevBrijoshBanner 
            badgeText="TECHNICAL SCOPE DISPATCH"
            headline="Have a Complex Engineering Specification to Fulfill?"
            description="Our Houston quality managers review client purchase orders and approved Inspection & Test Plans (ITPs) to pair the exact right certified inspector with your assignment."
            primaryButtonText="SUBMIT TECHNICAL SCOPE"
            secondaryButtonText="REQUEST RATE SHEET"
            onPrimaryClick={() => openInspectorModal()}
            onSecondaryClick={openQuoteModal}
          />
        </div>
      </div>

    </div>
  );
};
