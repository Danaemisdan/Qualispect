import React, { useState } from 'react';
import { 
  Factory, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  HardHat, 
  Flame, 
  Activity, 
  Pickaxe, 
  Truck
} from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { PageId } from '../types';

interface IndustriesPageProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  navigateTo,
  openInspectorModal,
  openQuoteModal
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(industriesData[0].id);

  const activeIndustry = industriesData.find(i => i.id === selectedIndustryId) || industriesData[0];

  return (
    <div className="bg-[#FAFAF9] text-stone-900">
      
      {/* Hero */}
      <div className="bg-[#FAFAF9] pt-28 sm:pt-36 pb-20 relative overflow-hidden border-b border-stone-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block">
              PAGE 5 — INDUSTRIAL SECTOR EXPERTISE
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              Industry Experience <br />
              <span className="text-amber-700">Where Quality Matters</span>
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal">
              Qualispect supports critical global industries where equipment reliability, regulatory compliance, documentation rigor, and independent quality control are mission-critical.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Showcase Grid */}
      <div className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* 8 Industries Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md ${
                  selectedIndustryId === ind.id 
                    ? 'bg-white text-stone-900 border-amber-600 ring-2 ring-amber-600/20' 
                    : 'bg-white text-stone-800 border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={ind.imageUrl} 
                    alt={ind.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-white/90 px-2 py-0.5 rounded border border-amber-200 shadow-sm backdrop-blur-sm">
                    Industrial Sector
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold uppercase tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs leading-relaxed line-clamp-2 text-stone-600">
                    {ind.tagline}
                  </p>
                </div>

                <div className={`p-4 border-t text-[11px] font-mono font-bold flex items-center justify-between ${
                  selectedIndustryId === ind.id 
                    ? 'border-stone-200 text-amber-700' 
                    : 'border-stone-100 text-stone-500 group-hover:text-stone-900'
                }`}>
                  <span>{selectedIndustryId === ind.id ? 'Active Focus' : 'Explore Scope'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Deep Dive Panel into Active Industry */}
          <div className="bg-[#FAFAF9] rounded-3xl border border-stone-200 shadow-sm p-8 sm:p-12 space-y-8 animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4 relative z-10">
              <div>
                <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block">
                  TECHNICAL FOCUS &amp; CRITICAL ASSETS
                </span>
                <h2 className="text-3xl font-bold text-stone-900 uppercase tracking-tight">
                  {activeIndustry.title}
                </h2>
                <p className="text-stone-600 text-sm mt-1 font-normal">
                  {activeIndustry.tagline}
                </p>
              </div>

              <button
                onClick={() => openInspectorModal({ equipmentType: activeIndustry.keyEquipment[0] })}
                className="bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase px-6 py-3 rounded-full shadow-sm shrink-0 cursor-pointer active:scale-95 transition-all"
              >
                Request {activeIndustry.title} Inspector
              </button>
            </div>

            <p className="text-stone-700 text-sm leading-relaxed max-w-4xl font-normal relative z-10">
              {activeIndustry.description}
            </p>

            {/* Equipment & Inspection Checkpoints Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 relative z-10">
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-xs font-bold font-mono text-stone-900 uppercase tracking-wider flex items-center gap-2">
                  <Factory className="w-4 h-4 text-amber-700" /> Key Equipment Monitored:
                </h3>
                <ul className="space-y-2 text-xs text-stone-700 font-mono">
                  {activeIndustry.keyEquipment.map((eq, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <span className="font-medium text-stone-900">{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-xs font-bold font-mono text-amber-800 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700" /> Inspections &amp; Tests Performed:
                </h3>
                <ul className="space-y-2 text-xs text-stone-700 font-mono">
                  {activeIndustry.inspectionsPerformed.map((insp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                      <span>{insp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Highlight */}
            <div className="p-6 bg-amber-50/70 text-stone-900 rounded-2xl border border-amber-200 flex items-start gap-4 relative z-10">
              <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl border border-amber-200 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] text-amber-800 font-bold uppercase tracking-wider block">
                  FIELD VERIFICATION CASE SNIPPET
                </span>
                <p className="text-stone-800 leading-relaxed font-sans text-sm">
                  {activeIndustry.caseSnippet}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
