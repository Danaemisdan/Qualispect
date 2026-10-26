import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  FileCheck2, 
  Layers, 
  ArrowRight,
  Download,
  Lock
} from 'lucide-react';
import { PageId } from '../types';
import { QualitySystemSection } from '../components/sections/QualitySystemSection';
import { DevBrijoshBanner } from '../components/ui/DevBrijoshBanner';
import { BjorkDecodeText } from '../components/ui/BjorkDecodeText';

interface QualityPageProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({
  navigateTo,
  openInspectorModal,
  openQuoteModal
}) => {
  return (
    <div className="bg-[#FAFAF9] text-stone-900">
      
      {/* Hero Header */}
      <div className="bg-[#FAFAF9] pt-28 sm:pt-36 pb-16 relative overflow-hidden border-b border-stone-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>PAGE 08 // QUALITY &amp; CERTIFICATIONS FRAMEWORK</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              <BjorkDecodeText text="Quality Management System" />
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal">
              Our quality system is structured around the principles of ISO/IEC 17020 for independent inspection bodies. We maintain rigorous controls covering inspector competency vetting, calibration traceability, and anti-counterfeit material testing.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-800 font-mono text-xs">
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Conformity Standard</span>
                <span className="text-base font-bold text-stone-900 block mt-0.5">ISO/IEC 17020</span>
                <span className="text-emerald-700 text-[11px]">Type A Independence</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Inspector Audit</span>
                <span className="text-base font-bold text-stone-900 block mt-0.5">100% Vetted</span>
                <span className="text-stone-600 text-[11px]">Direct Credential Proof</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Material Defense</span>
                <span className="text-base font-bold text-stone-900 block mt-0.5">Strict PMI &amp; MTR</span>
                <span className="text-amber-700 text-[11px]">Anti-Counterfeit Check</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Documentation</span>
                <span className="text-base font-bold text-stone-900 block mt-0.5">24-Hr Flash</span>
                <span className="text-emerald-700 text-[11px]">Daily Site Findings</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Quality System Section (Vault Door + Security Key + Standards Browser) */}
      <QualitySystemSection openInspectorModal={openInspectorModal} />

      {/* Dedicated Dev Brijosh Crimson CTA Banner */}
      <div className="py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DevBrijoshBanner 
            badgeText="QUALITY AUDIT & GOVERNANCE"
            headline="Request Our Quality Assurance Manual"
            description="Examine our ISO 17020 aligned procedures, inspector vetting protocols, and sample inspection & test plans (ITPs) for your compliance records."
            primaryButtonText="REQUEST QUALITY MANUAL"
            secondaryButtonText="SCHEDULE AUDIT REVIEW"
            onPrimaryClick={openQuoteModal}
            onSecondaryClick={() => openInspectorModal()}
          />
        </div>
      </div>

    </div>
  );
};
