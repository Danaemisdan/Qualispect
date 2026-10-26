import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Flame, 
  Activity, 
  Layers, 
  FileCheck2, 
  Zap, 
  CheckCircle2, 
  HardHat, 
  Truck, 
  Search,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../../types';

interface DisciplinesMatrixProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
}

export const technicalDisciplinesData = [
  { name: 'Welding Inspection', icon: Flame, certs: 'AWS CWI, CSWIP 3.1/3.2', desc: 'Visual weld examination, WPS/PQR review, and welder qualification verification.' },
  { name: 'Mechanical Equipment Inspection', icon: Wrench, certs: 'ASME, API, ISO', desc: 'Precision machining tolerance checks, dimensional inspection, and assembly auditing.' },
  { name: 'Rotating Equipment Inspection', icon: Activity, certs: 'API 610/617/618', desc: 'Centrifugal pumps, compressors, turbines, dynamic balancing, and MRT witness.' },
  { name: 'Fixed Equipment Inspection', icon: Layers, certs: 'API 510, ASME Sec VIII', desc: 'Pressure vessels, heat exchangers, distillation columns, and shell proof testing.' },
  { name: 'Piping Inspection', icon: Wrench, certs: 'API 570, ASME B31.3', desc: 'Spool fabrication, flange face verification, bolt torquing, and isometric walkdowns.' },
  { name: 'Pressure Vessel Inspection', icon: ShieldCheck, certs: 'ASME U/U2, National Board', desc: 'Plate rolling, nozzle alignment, PWHT chart audits, and final hydrotest witness.' },
  { name: 'Pipeline Inspection', icon: Search, certs: 'API 1169, API 1104', desc: 'Transmission line surveillance, ditching, bending, field joint coating, and lowering-in.' },
  { name: 'Coating & Corrosion Inspection', icon: Layers, certs: 'AMPP / NACE L2/L3, SSPC', desc: 'Abrasive blast cleanliness (SP 10), DFT mapping, and continuous holiday spark tests.' },
  { name: 'Electrical Inspection', icon: Zap, certs: 'NFPA 70, IEC 60079', desc: 'Medium/low voltage switchgear, MCCs, transformers, and dielectric withstand tests.' },
  { name: 'Instrumentation Inspection', icon: CpuIcon, certs: 'ISA, CompEx', desc: 'Transmitter calibration audits, loop checks, and hazardous area Ex certifications.' },
  { name: 'Civil & Structural Inspection', icon: HardHat, certs: 'AWS D1.1, AISC, ACI', desc: 'Structural steel framing, bolt tension calibration, and concrete batch plant auditing.' },
  { name: 'Material Verification & MTR Audit', icon: FileCheck2, certs: 'EN 10204 3.1/3.2, PMI', desc: 'Positive Material Identification (XRF), mill test certs, and heat traceability.' },
  { name: 'NDT Coordination / Witnessing', icon: Search, certs: 'ASNT Level II/III, PCN', desc: 'Witnessing and audit of RT film, UT thickness, PAUT, TOFD, MT, and PT examination.' },
  { name: 'Factory Acceptance Testing (FAT)', icon: Activity, certs: 'Test Stand Protocols', desc: 'Witnessing full performance, NPSH, pressure tests, and safety interlock demonstrations.' },
  { name: 'Pre-Shipment Inspection', icon: CheckCircle2, certs: 'Client PO Criteria', desc: 'Final cleanliness inspection, tagging, crate protection, and moisture barrier verification.' },
  { name: 'Loading & Unloading Supervision', icon: Truck, certs: 'Cargo Securing Rules', desc: 'Heavy lift supervision, rigging review, sea-fastening, and transit damage prevention.' },
  { name: 'Pre-Commissioning Support', icon: Wrench, certs: 'Operations Readiness', desc: 'Line blowing, chemical cleaning, flange management, and system reinstatement.' },
  { name: 'Construction Inspection', icon: HardHat, certs: 'OSHA, Client QA', desc: 'Job-site multidiscipline surveillance from foundation pouring through mechanical completion.' },
  { name: 'Field & Desk Expediting', icon: Activity, certs: 'Earned Value / CPM', desc: 'Shop progress auditing, BOM verification, and supply chain bottleneck resolution.' },
  { name: 'QA/QC Documentation Review', icon: FileCheck2, certs: 'ISO 9001:2015', desc: 'Manufacturing Data Report (MDR) auditing, turnover packages, and punch-list closure.' }
];

function CpuIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
    </svg>
  );
}

export const DisciplinesMatrix: React.FC<DisciplinesMatrixProps> = ({
  navigateTo,
  openInspectorModal
}) => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredDisciplines = technicalDisciplinesData.filter(d => 
    d.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    d.certs.toLowerCase().includes(filterQuery.toLowerCase()) ||
    d.desc.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-[#FAFAF9] text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              20 CORE SPECIALIZATIONS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-sans uppercase">
              Technical Disciplines
            </h2>

            <p className="text-base text-stone-600 leading-relaxed font-normal">
              Qualispect supports inspection requirements across all primary industrial engineering disciplines. Our inspectors hold industry-recognized credentials matching your project specifications.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Search discipline or code (e.g. AWS, API, NACE)..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-xl pl-10 pr-3 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 font-mono transition-colors shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDisciplines.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-white hover:bg-stone-50/70 border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 text-amber-700 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-stone-700 font-semibold bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                      {item.certs}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-stone-900 group-hover:text-stone-950 transition-colors uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">Field Verified</span>
                  <button
                    onClick={() => openInspectorModal({ inspectionDiscipline: item.name })}
                    className="text-[11px] font-mono font-bold text-stone-900 hover:text-amber-700 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Mobilize</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
