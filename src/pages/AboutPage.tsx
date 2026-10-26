import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Clock, 
  FileText, 
  CheckCircle2, 
  MapPin, 
  Award, 
  Users, 
  ArrowRight,
  HardHat,
  HeartHandshake
} from 'lucide-react';
import { PageId } from '../types';

interface AboutPageProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  navigateTo,
  openInspectorModal,
  openQuoteModal
}) => {
  const values = [
    { name: 'QUALITY', desc: 'We believe quality must be demonstrated in the details. Every hold point, test reading, and weld cap matters.' },
    { name: 'INTEGRITY', desc: 'Inspection requires independence, objectivity and professional judgment free from manufacturer commercial pressures.' },
    { name: 'RESPONSIVENESS', desc: 'Project schedules move quickly. Our clients need partners who respond promptly and mobilize without delay.' },
    { name: 'COMPETENCE', desc: 'The right inspector must be matched with the right assignment. We align credentials with specific equipment physics.' },
    { name: 'ACCOUNTABILITY', desc: 'We take ownership of our responsibilities and communicate clearly before, during, and after shop attendance.' },
    { name: 'RELATIONSHIPS', desc: 'Long-term business is built by consistently delivering value and safeguarding our clients’ critical capital investments.' }
  ];

  const approachPriorities = [
    {
      num: '01',
      title: 'Technical Competence',
      desc: 'Match the assignment with appropriately qualified personnel holding verified AWS CWI, CSWIP, API, AMPP, or ASNT credentials.',
      color: 'border-l-amber-500'
    },
    {
      num: '02',
      title: 'Responsive Coordination',
      desc: 'Communicate effectively before, during, and after the inspection with prompt assignment reviews and vendor dispatch coordination.',
      color: 'border-l-stone-800'
    },
    {
      num: '03',
      title: 'Quality Reporting',
      desc: 'Provide clear, photographic documentation of inspection activities, observations, and outcomes with 24-hour flash reporting.',
      color: 'border-l-emerald-600'
    }
  ];

  return (
    <div className="bg-[#FAFAF9] text-stone-900">
      
      {/* Hero Header */}
      <div className="bg-[#FAFAF9] pt-28 sm:pt-36 pb-20 relative overflow-hidden border-b border-stone-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
              <span>HOUSTON-BASED TECHNICAL INSPECTION FIRM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              Technical Inspection Built Around <br />
              <span className="text-amber-700">Quality, Responsiveness &amp; Trust</span>
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal">
              Qualispect Inc. is a Houston-based technical inspection and quality services company supporting industrial clients across the United States and international markets.
            </p>
          </div>
        </div>
      </div>

      {/* Corporate Role & Statement */}
      <div className="py-20 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block">
              OUR CORE ROLE IS SIMPLE
            </span>

            <blockquote className="text-2xl sm:text-3xl font-bold text-stone-900 uppercase leading-snug tracking-tight">
              “Help our clients know what is happening where their equipment is being manufactured, tested, fabricated or installed.”
            </blockquote>

            <p className="text-base text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal">
              We provide third-party inspection, vendor surveillance, QA/QC, expediting, technical staffing and project support services for organizations operating across energy, oil &amp; gas, manufacturing, construction, infrastructure and heavy industrial sectors.
            </p>

            <div className="pt-4 flex justify-center items-center gap-4 text-xs font-mono text-stone-500">
              <span className="flex items-center gap-1.5 font-bold text-stone-900">
                <MapPin className="w-4 h-4 text-amber-600" /> Houston Headquarters
              </span>
              <span>•</span>
              <span>Global Inspector Network</span>
              <span>•</span>
              <span className="font-bold text-emerald-700">SAM.gov Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-24 border-b border-stone-200 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block">
                OUR APPROACH
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 uppercase tracking-tight">
                More Than Just Sending Someone to a Shop.
              </h2>

              <p className="text-stone-600 text-sm leading-relaxed font-normal">
                We understand that inspection is much more than having a body on site. Before stepping foot into any manufacturing facility, our inspectors must thoroughly understand:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 pt-1 font-mono">
                <div className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>The Client's Scope</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>The Purchase Order &amp; Addenda</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Applicable Specifications</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>The Approved ITP</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Relevant Codes &amp; Standards</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Hold &amp; Witness Points</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Documentation Requirements</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Reporting Expectations</span>
                </div>
              </div>
            </div>

            {/* Three Priorities */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold text-stone-600 uppercase tracking-wider block mb-2">
                Qualispect Approaches Every Assignment Around Three Priorities:
              </span>

              {approachPriorities.map((p) => (
                <div 
                  key={p.num}
                  className={`p-6 rounded-2xl bg-white border-l-4 ${p.color} border-y border-r border-stone-200 space-y-2 shadow-sm`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-stone-900 uppercase font-sans">
                      {p.title}
                    </h3>
                    <span className="font-mono text-sm font-bold text-stone-400">PRIORITY {p.num}</span>
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="p-8 sm:p-10 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 shadow-sm">
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block">
                OUR MISSION
              </span>
              <h3 className="text-2xl font-bold text-stone-900 uppercase tracking-tight">
                Protecting Critical Assets Across Global Supply Chains
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-normal">
                To provide dependable technical inspection and quality services that help our clients protect assets, manage project risk and achieve quality requirements across their supply chains.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 shadow-sm">
              <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-widest block">
                OUR VISION
              </span>
              <h3 className="text-2xl font-bold text-stone-900 uppercase tracking-tight">
                Global Partner for Third-Party Quality Assurance
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-normal">
                To be a trusted global partner for third-party inspection, quality assurance and technical project support—recognized for uncompromising technical integrity and rapid responsiveness.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Corporate Values */}
      <div className="py-24 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 uppercase tracking-tight">
              Our Core Values
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-normal">
              The professional tenets that guide our inspectors and coordination leads on every assignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div 
                key={v.name}
                className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">0{i + 1}</span>
                  <div className="w-2 h-2 rounded-full bg-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 uppercase tracking-tight group-hover:text-stone-950 transition-colors">
                  {v.name}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed font-normal">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 bg-stone-900 text-white rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white uppercase">Ready to work with Qualispect?</h4>
              <p className="text-xs text-stone-300">Engage our Houston technical team for your upcoming procurement inspection needs.</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => openInspectorModal()}
                className="bg-white hover:bg-stone-100 text-stone-900 font-mono font-medium text-xs uppercase px-6 py-3 rounded-full shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                Request an Inspector
              </button>
              <button
                onClick={() => openQuoteModal()}
                className="bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-mono text-xs uppercase px-6 py-3 rounded-full transition-all cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
