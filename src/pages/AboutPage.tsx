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
import { WhyQualispect } from '../components/sections/WhyQualispect';
import { DevBrijoshBanner } from '../components/ui/DevBrijoshBanner';
import { BjorkDecodeText } from '../components/ui/BjorkDecodeText';

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

  return (
    <div className="bg-[#FAFAF9] text-stone-900">
      
      {/* Hero Header */}
      <div className="bg-[#FAFAF9] pt-28 sm:pt-36 pb-20 relative overflow-hidden border-b border-stone-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>PAGE 01 // HOUSTON-BASED TECHNICAL INSPECTION FIRM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              <BjorkDecodeText text="About Qualispect Inc." />
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal">
              Qualispect Inc. is a Houston-based technical inspection and quality services company supporting industrial clients across the United States and international markets with certified source surveillance, expediting, and technical QA/QC.
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
              <span className="font-bold text-emerald-700">SAM.gov Verified (CAGE: 7S2L7)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Qualispect (Pillars & Differentiators) */}
      <WhyQualispect 
        openInspectorModal={openInspectorModal}
        openQuoteModal={openQuoteModal}
      />

      {/* Corporate Values */}
      <div className="py-24 bg-white border-b border-stone-200">
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
                className="p-6 rounded-2xl bg-[#FAFAF9] border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md transition-all space-y-3 group"
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

        </div>
      </div>

      {/* Dedicated Dev Brijosh Crimson CTA Banner */}
      <div className="py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DevBrijoshBanner 
            badgeText="HOUSTON GLOBAL HEADQUARTERS"
            headline="Ready to Partner with Qualispect?"
            description="Engage our Houston technical team for your upcoming procurement inspection needs, vendor surveillance programs, or federal subcontractor support."
            primaryButtonText="DISPATCH AN INSPECTOR"
            secondaryButtonText="REQUEST COMPANY PROFILE"
            onPrimaryClick={() => openInspectorModal()}
            onSecondaryClick={openQuoteModal}
          />
        </div>
      </div>

    </div>
  );
};
