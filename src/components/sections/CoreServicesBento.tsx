import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Flame, 
  Wrench, 
  FileCheck2, 
  Clock, 
  ArrowRight,
  HardHat,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../../types';

interface CoreServicesBentoProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
}

const coreServicesList = [
  {
    id: 'vendor-surveillance',
    title: 'Third-Party Inspection & Vendor Surveillance',
    shortDesc: 'Independent on-site monitoring at vendor facilities against approved purchase orders, drawings, and client ITPs.',
    specs: ['ITP Hold Points', 'PO Compliance', 'Pre-Shipment Release'],
    icon: ShieldCheck,
    badge: 'PRIMARY PILLAR',
    accentColor: 'text-amber-700 bg-amber-50 border-amber-200/60'
  },
  {
    id: 'fat-testing',
    title: 'Factory Acceptance Testing (FAT) Witness',
    shortDesc: 'Independent witnessing of hydrostatic proofs, mechanical run tests (MRT), vibration FFT, and functional safety trips.',
    specs: ['API 610 / 617', 'Hydro Shell Proof', 'Vibration FFT Analysis'],
    icon: Activity,
    badge: 'DYNAMIC TESTING',
    accentColor: 'text-sky-700 bg-sky-50 border-sky-200/60'
  },
  {
    id: 'welding-qa',
    title: 'Welding & Fabrication QA/QC',
    shortDesc: 'Certified AWS CWI and CSWIP personnel auditing fit-up, root passes, WPS/PQR procedures, and radiographic NDT film.',
    specs: ['AWS D1.1', 'ASME Sec IX', 'CSWIP 3.2.2 Senior'],
    icon: Flame,
    badge: 'AWS / CSWIP CERTIFIED',
    accentColor: 'text-amber-700 bg-amber-50 border-amber-200/60'
  },
  {
    id: 'mechanical-rotating',
    title: 'Mechanical & Rotating Equipment Inspection',
    shortDesc: 'Specialized inspection for centrifugal pumps, compressors, turbines, gearboxes, valves, and heavy packaged skids.',
    specs: ['API 610 Pumps', 'API 6D Valves', 'Dynamic Balancing'],
    icon: Wrench,
    badge: 'ROTATING & FIXED',
    accentColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/60'
  },
  {
    id: 'material-verification',
    title: 'Material Verification & MTR Audits',
    shortDesc: 'Positive Material Identification (XRF) and EN 10204 3.1/3.2 mill test certificate cross-checks to defeat counterfeit alloys.',
    specs: ['EN 10204 3.1 / 3.2', 'XRF Metallurgy', 'NACE MR0175'],
    icon: FileCheck2,
    badge: 'METALLURGICAL QA',
    accentColor: 'text-indigo-700 bg-indigo-50 border-indigo-200/60'
  },
  {
    id: 'expediting',
    title: 'Field & Desk Expediting Oversight',
    shortDesc: 'Proactive manufacturing schedule tracking to verify physical shop progress and eliminate supply bottlenecks before delays occur.',
    specs: ['Critical Path Method', 'Earned Value', 'Sub-Vendor Tracking'],
    icon: Clock,
    badge: 'ON-TIME DELIVERY',
    accentColor: 'text-stone-700 bg-stone-100 border-stone-200/80'
  }
];

export const CoreServicesBento: React.FC<CoreServicesBentoProps> = ({
  navigateTo,
  openInspectorModal
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF9] text-stone-900 relative border-b border-stone-200/80">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        
        {/* Section Header: Clean, Authoritative, Clear */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-stone-200/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-stone-700 uppercase font-semibold">[01 // CORE CAPABILITIES]</span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-500">INDEPENDENT TECHNICAL SURVEILLANCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-sans">
              Inspection Services Built For Zero Defects.
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              Whether you need a single FAT witness visit, recurring vendor surveillance, or multi-year project QA/QC staffing, we provide accredited technical personnel matched to your assignment.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => navigateTo('services')}
              className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-stone-800 hover:text-black bg-white hover:bg-stone-50 border border-stone-300 px-5 py-2.5 rounded-full shadow-sm transition-all cursor-pointer group"
            >
              <span>Explore All 10 Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 group-hover:text-black transition-all" />
            </button>
          </div>
        </div>

        {/* 6-Card Services Grid (Clean, Sexy, Meaningful) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200/80 text-stone-800 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${service.accentColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight group-hover:text-amber-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Technical Spec Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-50 border border-stone-200/80 text-stone-600"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom Action Strip */}
                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (service.id === 'vendor-surveillance') {
                        navigateTo('vendor-surveillance');
                      } else {
                        navigateTo('services');
                      }
                    }}
                    className="text-xs font-mono text-stone-500 hover:text-stone-900 font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Scope</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openInspectorModal({ inspectionDiscipline: service.title })}
                    className="text-xs font-mono font-medium uppercase tracking-wider text-stone-900 hover:text-black bg-stone-100 hover:bg-stone-200/80 px-3.5 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <HardHat className="w-3 h-3 text-stone-700" />
                    <span>Deploy</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Assurance Bottom Banner */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-stone-600 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>All inspection assignments backed by signed Daily Inspection Reports (IDR) issued within 24 hours.</span>
          </div>

          <button
            onClick={() => openInspectorModal()}
            className="text-xs font-mono uppercase tracking-wider text-white bg-stone-900 hover:bg-black px-5 py-2.5 rounded-full font-medium transition-all shadow-sm shrink-0 cursor-pointer"
          >
            Request Inspector Availability
          </button>
        </div>

      </div>
    </section>
  );
};
