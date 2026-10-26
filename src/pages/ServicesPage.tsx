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
              <span>END-TO-END QUALITY VERIFICATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              Technical Inspection &amp; <br />
              <span className="text-amber-700">Quality Services</span>
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
                onClick={() => openInspectorModal()}
                className="bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-mono text-xs uppercase px-6 py-3 rounded-full shadow-sm transition-all cursor-pointer"
              >
                Request an Inspector
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Explorer: Left Sidebar + Right Interactive Details */}
      <div className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav List (4 Cols) */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-3 shadow-sm space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-stone-500 px-3 py-2 block tracking-wider">
                10 Core Inspection Services:
              </span>

              {servicesData.map((svc, idx) => {
                const isSelected = svc.id === selectedServiceId;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedServiceId(svc.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected 
                        ? 'bg-stone-900 text-white shadow-sm font-bold' 
                        : 'text-stone-700 hover:bg-stone-100 hover:text-stone-950'
                    }`}
                  >
                    <span className={`font-mono text-xs font-bold mt-0.5 ${isSelected ? 'text-amber-400' : 'text-stone-500'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold leading-tight uppercase font-sans">
                        {svc.title}
                      </div>
                      <div className={`text-[10px] font-mono ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                        {svc.badge}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Showcase (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 shadow-sm p-8 sm:p-10 space-y-8 animate-fade-in">
              
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 border border-stone-200 shadow-inner">
                <img 
                  src={activeService.imageUrl} 
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent flex items-end p-6 sm:p-8">
                  <div className="space-y-2">
                    <span className="px-3 py-1 bg-amber-500 text-stone-950 text-xs font-mono font-bold uppercase rounded-md shadow-sm">
                      {activeService.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
                      {activeService.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-stone-900 font-mono uppercase tracking-wider">
                  Service Scope &amp; Technical Objectives:
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-normal">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Deliverables & Hold Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 font-mono">
                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700" /> Typical Inspection Deliverables:
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {activeService.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                        <span className="leading-tight">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                  <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-stone-700" /> Equipment &amp; Asset Types:
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700">
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
                    <span key={std} className="px-3 py-1 bg-stone-100 rounded-lg text-xs font-mono text-stone-700 font-medium border border-stone-200">
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

    </div>
  );
};
