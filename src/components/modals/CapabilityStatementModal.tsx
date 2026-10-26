import React from 'react';
import { 
  X, 
  Printer, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Download,
  Award,
  Globe2
} from 'lucide-react';
import { governmentContractingData } from '../../data/capabilityStatementData';

interface CapabilityStatementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapabilityStatementModal: React.FC<CapabilityStatementModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl bg-white text-steel-900 rounded-2xl shadow-2xl overflow-hidden my-6 border border-steel-300 print:border-none print:shadow-none print:rounded-none">
        
        {/* Top Modal Controls (Hidden in Print) */}
        <div className="bg-industrial-950 px-6 py-3 border-b border-steel-800 flex items-center justify-between print:hidden text-white">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono tracking-wider text-safety-400 font-bold">
              OFFICIAL FEDERAL CAPABILITY STATEMENT
            </span>
            <span className="text-xs text-steel-400">• UEI: L3C9LLNA2KJ9</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-safety-500 hover:bg-safety-600 text-white font-bold text-xs uppercase px-4 py-2 rounded-lg flex items-center gap-2 shadow"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-steel-400 hover:text-white rounded-lg hover:bg-industrial-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Printable Document Container */}
        <div className="p-8 sm:p-12 print:p-8 space-y-8 bg-white font-sans text-xs">
          
          {/* Header Block */}
          <div className="border-b-4 border-industrial-900 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-industrial-900 rounded-xl flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-8 h-8 text-safety-500" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-industrial-900 tracking-tight font-sans">
                  QUALISPECT INC.
                </h1>
                <p className="text-xs font-bold text-safety-600 uppercase tracking-widest">
                  GLOBAL THIRD-PARTY INSPECTION • QA/QC • VENDOR SURVEILLANCE
                </p>
                <p className="text-[11px] text-steel-600 italic">
                  Quality. Compliance. Confidence. Wherever your project takes you.
                </p>
              </div>
            </div>

            {/* Corporate Address Block */}
            <div className="text-right sm:text-right text-[11px] text-steel-700 space-y-0.5 border-l-2 sm:border-l-0 sm:border-none border-safety-500 pl-3 sm:pl-0">
              <p className="font-bold text-industrial-900">Corporate Headquarters:</p>
              <p>9801 Westheimer Road, Suite 300</p>
              <p>Houston, Texas 77042, USA</p>
              <p>Phone: 281-764-6224 / 281-764-1335</p>
              <p>Email: info@qualispect.com | www.qualispect.com</p>
            </div>
          </div>

          {/* Federal Procurement Identifiers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-steel-50 p-4 rounded-xl border border-steel-200 text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-steel-500 block">Unique Entity ID (UEI)</span>
              <span className="font-mono font-bold text-industrial-900 text-sm">{governmentContractingData.uei}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-steel-500 block">CAGE Code</span>
              <span className="font-mono font-bold text-industrial-900 text-sm">{governmentContractingData.cage}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-steel-500 block">Primary NAICS</span>
              <span className="font-mono font-bold text-safety-600 text-sm">213112</span>
              <span className="text-[10px] text-steel-600 block">Oil & Gas Support</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-steel-500 block">SAM.gov Status</span>
              <span className="inline-flex items-center gap-1 font-bold text-emerald-700 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Active Profile
              </span>
              <span className="text-[10px] text-steel-600 block">Houston, Texas Entity</span>
            </div>
          </div>

          {/* Corporate Profile Statement */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-industrial-900 border-b border-steel-200 pb-1 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-safety-500" /> Corporate Overview
            </h2>
            <p className="text-steel-700 text-xs leading-relaxed text-justify">
              Qualispect Inc. is a Houston-based technical inspection and quality assurance services organization providing third-party inspection, source surveillance, expediting, and technical personnel for public-sector, municipal, industrial, and defense-critical infrastructure. We act as independent technical representatives at equipment vendor facilities, fabrication shops, and job sites across the United States and international markets.
            </p>
          </div>

          {/* Core Capabilities & NAICS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Core Capabilities */}
            <div className="space-y-2">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-industrial-900 border-b border-steel-200 pb-1">
                Core Capabilities
              </h2>
              <ul className="space-y-1.5 text-steel-700 text-xs">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-500 mt-1.5 shrink-0"></span>
                  <span><strong>Third-Party Inspection & Vendor Surveillance:</strong> Independent shop auditing, ITP hold/witness points, dimensional check, and PO compliance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-500 mt-1.5 shrink-0"></span>
                  <span><strong>Welding & Fabrication QA/QC:</strong> AWS CWI / CSWIP weld verification, WPS/PQR review, fit-up, and NDT film audits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-500 mt-1.5 shrink-0"></span>
                  <span><strong>Mechanical & Rotating Equipment:</strong> Centrifugal pumps, compressors, turbines, gearboxes, hydro-testing, and dynamic balancing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-500 mt-1.5 shrink-0"></span>
                  <span><strong>Electrical & Instrumentation:</strong> Switchgear, MCCs, transformers, FAT witnessing, and hazardous area inspections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-500 mt-1.5 shrink-0"></span>
                  <span><strong>Coating & Corrosion:</strong> AMPP / NACE certified blast profile, dry film thickness (DFT), and holiday testing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-500 mt-1.5 shrink-0"></span>
                  <span><strong>Factory Acceptance Testing (FAT):</strong> Test stand representation, protocol verification, sensor audits, and release sign-offs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-500 mt-1.5 shrink-0"></span>
                  <span><strong>Field & Desk Expediting:</strong> Shop progress auditing, supply chain delay mitigation, and critical milestone defense.</span>
                </li>
              </ul>
            </div>

            {/* NAICS & Product Service Codes */}
            <div className="space-y-4">
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-industrial-900 border-b border-steel-200 pb-1">
                  NAICS Codes
                </h2>
                <div className="mt-2 space-y-1 text-xs">
                  <div className="p-1.5 bg-safety-50 rounded border border-safety-200">
                    <span className="font-mono font-bold text-safety-700">213112</span> — Support Activities for Oil & Gas (Primary)
                  </div>
                  {governmentContractingData.secondaryNaics.map(naics => (
                    <div key={naics.code} className="text-steel-700 text-[11px]">
                      <span className="font-mono font-bold text-industrial-900">{naics.code}</span> — {naics.title}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-industrial-900 border-b border-steel-200 pb-1">
                  Product Service Codes (PSC)
                </h2>
                <div className="mt-2 space-y-1 text-[11px] text-steel-700">
                  {governmentContractingData.pscCodes.map(psc => (
                    <div key={psc.code}>
                      <span className="font-mono font-bold text-industrial-900">{psc.code}</span> — {psc.title}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-industrial-900 border-b border-steel-200 pb-1">
                  Applicable Codes & Standards
                </h2>
                <p className="text-[11px] text-steel-600 mt-1">
                  API (510/570/653/598/610/1104/1169) • ASME (Sec I/VIII/IX, B31.3) • AWS (D1.1/D1.6) • AMPP/NACE • ASTM • ASNT SNT-TC-1A • ISO 9001:2015 • IEC / NFPA 70
                </p>
              </div>
            </div>

          </div>

          {/* Differentiators */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-industrial-900 border-b border-steel-200 pb-1">
              Key Differentiators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-steel-700">
              {governmentContractingData.differentiators.map((diff, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-steel-50 p-2 rounded border border-steel-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-safety-600 mt-0.5 shrink-0" />
                  <span className="text-[11px] leading-tight">{diff}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Verification Footer */}
          <div className="pt-4 border-t border-steel-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-steel-600">
            <div>
              <strong>Government Business Development:</strong> info@qualispect.com | Direct: 281-764-6224
            </div>
            <div className="font-mono text-[10px]">
              Document Verification Code: QSP-GOV-2026-CAP
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
