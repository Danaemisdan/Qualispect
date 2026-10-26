import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  HardHat, 
  FileText,
  Building2,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { ContactSection } from '../components/sections/ContactSection';
import { DevBrijoshBanner } from '../components/ui/DevBrijoshBanner';
import { BjorkDecodeText } from '../components/ui/BjorkDecodeText';

interface ContactPageProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
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
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>PAGE 11 // HOUSTON HEADQUARTERS &amp; GLOBAL MOBILIZATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              <BjorkDecodeText text="Contact & Mobilization" />
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal">
              Connect with our Houston headquarters technical coordination desk for immediate vendor inspection dispatch, formal rate quotations, or federal capability inquiries.
            </p>

            {/* Quick Contact Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-stone-800 font-mono text-xs">
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
                <span className="text-stone-400 block text-[10px] uppercase">Direct Dispatch Phone</span>
                <a href="tel:2817646224" className="text-base font-bold text-stone-900 block hover:text-amber-700 transition-colors">
                  281-764-6224
                </a>
                <span className="text-emerald-700 text-[11px] block">24/7 Assignment Intake</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
                <span className="text-stone-400 block text-[10px] uppercase">Technical RFQ Email</span>
                <a href="mailto:info@qualispect.com" className="text-base font-bold text-stone-900 block hover:text-amber-700 transition-colors">
                  info@qualispect.com
                </a>
                <span className="text-stone-500 text-[11px] block">Response within 2 hours</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
                <span className="text-stone-400 block text-[10px] uppercase">Corporate Headquarters</span>
                <span className="text-sm font-bold text-stone-900 block">
                  Houston, Texas 77042
                </span>
                <span className="text-stone-500 text-[11px] block">9801 Westheimer Rd, Ste 300</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Contact Form & Details Section */}
      <ContactSection openInspectorModal={openInspectorModal} />

      {/* Dedicated Dev Brijosh Crimson CTA Banner */}
      <div className="py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DevBrijoshBanner 
            badgeText="IMMEDIATE 24-HOUR DISPATCH"
            headline="Need Immediate Shop Attendance?"
            description="Our coordination desk operates 24/7 to resolve urgent hold points, critical FAT witnessing, and expedite manufacturing schedules."
            primaryButtonText="DISPATCH AN INSPECTOR"
            secondaryButtonText="REQUEST RATE CARD"
            onPrimaryClick={() => openInspectorModal()}
            onSecondaryClick={openQuoteModal}
          />
        </div>
      </div>

    </div>
  );
};
