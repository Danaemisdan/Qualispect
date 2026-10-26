import React from 'react';
import { 
  Zap, 
  Target, 
  ShieldCheck, 
  Sliders, 
  Globe2, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  HardHat
} from 'lucide-react';
import { PageId } from '../../types';

interface WhyQualispectProps {
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const WhyQualispect: React.FC<WhyQualispectProps> = ({
  openInspectorModal,
  openQuoteModal
}) => {
  const pillars = [
    {
      icon: Zap,
      title: 'Responsive',
      desc: 'Inspection requirements can develop quickly. Our team works rapidly to understand the technical assignment, identify the required discipline, and mobilize vetted resources—often within 24–48 hours.',
      badge: 'Rapid Mobilization'
    },
    {
      icon: Target,
      title: 'Technically Focused',
      desc: 'We are not a generic staffing agency. Personnel are vetted and selected strictly according to the specific technical standards, codes (AWS, API, ASME, AMPP), and equipment types of each assignment.',
      badge: 'Credential-Vetted'
    },
    {
      icon: ShieldCheck,
      title: 'Independent & Objective',
      desc: 'Our inspectors represent solely the inspection scope and agreed client specifications. Free from manufacturing bias or commercial conflicts, we deliver honest, objective findings.',
      badge: 'Conflict-Free'
    },
    {
      icon: Sliders,
      title: 'Flexible & Scalable',
      desc: 'From a single 1-day FAT witness assignment or periodic mill surveillance to a dedicated resident QA/QC team on a multi-year megaproject, support scales to your project tempo.',
      badge: 'Call-Out to Resident'
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      desc: 'Our network enables Qualispect to support inspection assignments across major industrial regions in North America, Europe, the Middle East, Asia-Pacific, and Latin America.',
      badge: '45+ Countries'
    }
  ];

  return (
    <section className="py-24 bg-white text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      {/* Background dot matrix */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Contrast / Problem & Solution Card */}
        <div className="rounded-3xl p-8 sm:p-12 mb-20 shadow-sm border border-stone-200 bg-stone-50/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block">
              THE COMMERCIAL CASE FOR THIRD-PARTY INSPECTION
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight font-sans uppercase">
              Quality Begins Before Equipment Arrives on Site.
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              Quality problems discovered after delivery become expensive project problems. Shutting down a job site because a flange was drilled off-center or an impeller balance test was forged costs orders of magnitude more than independent shop surveillance.
            </p>

            <p className="text-sm text-stone-600">
              Our core objective is to help clients identify concerns where they originate—<strong>during manufacturing, fabrication, testing, and pre-shipment</strong>—saving project schedules and millions in rework costs.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-rose-800 uppercase">
                <AlertTriangle className="w-4 h-4" /> Without Independent Source Surveillance:
              </span>
              <p className="text-rose-900/80 text-[11px] leading-relaxed">
                Hidden weld defects, non-compliant MTRs, paint holidays, and FAT deviations discovered on site during erection—causing weeks of schedule delay and disputes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-emerald-800 uppercase">
                <CheckCircle2 className="w-4 h-4" /> With Qualispect On Site at the Vendor:
              </span>
              <p className="text-emerald-900/80 text-[11px] leading-relaxed">
                Hold points signed off, WPS verified, hydrotests witnessed in person, and 24-hour flash reports issued before equipment ever leaves the vendor's loading dock.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Pillars Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
            <span>CORE VALUE PROPOSITION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight uppercase">
            Why Choose Qualispect
          </h2>

          <p className="text-sm text-stone-600">
            Built on deep technical competence, unyielding objectivity, and client responsiveness.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-white hover:bg-stone-50/70 border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 text-amber-700 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-stone-950 transition-colors uppercase tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-stone-100 mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">Pillar 0{idx + 1}</span>
                  <button
                    onClick={() => openInspectorModal({ notes: `Inquiry regarding ${pillar.title} service model.` })}
                    className="text-xs font-mono font-bold text-stone-900 hover:text-amber-700 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Deploy</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Call to Action */}
          <div className="relative p-7 rounded-2xl bg-stone-900 text-white border border-stone-800 flex flex-col justify-between overflow-hidden shadow-lg">
            {/* Precision corner brackets */}
            <span className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-stone-600 pointer-events-none" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-stone-600 pointer-events-none" />
            <span className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-stone-600 pointer-events-none" />
            <span className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-stone-600 pointer-events-none" />

            <div className="space-y-3">
              <span className="text-[10px] font-mono font-medium text-amber-400 uppercase tracking-widest block">
                [GLOBAL EXPEDITION]
              </span>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                Need an Inspector Tomorrow?
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-mono">
                WHERE. WHAT. WHEN.<br />
                We provide confirmed inspector availability and transparent mobilization within hours.
              </p>
            </div>

            <div className="pt-6 space-y-2">
              <button
                onClick={() => openInspectorModal()}
                className="w-full bg-white hover:bg-stone-100 text-stone-900 font-mono font-medium text-xs uppercase py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all cursor-pointer"
              >
                <HardHat className="w-3.5 h-3.5 text-stone-900" />
                <span>Request Inspector</span>
              </button>

              <button
                onClick={() => openQuoteModal()}
                className="w-full bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 font-mono text-xs uppercase py-3 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Request a Quote (RFQ)</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
