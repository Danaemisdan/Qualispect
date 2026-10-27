import React, { useState } from 'react';
import { PageId } from '../types';
import { Page13Data, Page13Card } from '../data/pages13Data';
import { 
  HardHat, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Download,
  Send,
  UploadCloud,
  FileCheck2,
  Globe2,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';

interface Client13PageTemplateProps {
  pageData: Page13Data;
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
  openCapabilityModal?: () => void;
}

export const Client13PageTemplate: React.FC<Client13PageTemplateProps> = ({
  pageData,
  navigateTo,
  openInspectorModal,
  openQuoteModal,
  openCapabilityModal
}) => {
  const [selectedCard, setSelectedCard] = useState<Page13Card | null>(null);

  // Form state for Page 12 (Request an Inspector)
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    projectName: '',
    email: '',
    phone: '',
    vendorName: '',
    vendorLocation: '',
    equipmentType: 'Pressure Vessels (ASME Sec VIII)',
    inspectionDate: '',
    scopeNotes: '',
    urgency: 'Standard (48h Notice)'
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleCardAction = (card: Page13Card) => {
    if (card.modalDetails.actionType === 'download-capability' && openCapabilityModal) {
      openCapabilityModal();
    } else if (card.modalDetails.actionType === 'quote') {
      openQuoteModal();
    } else if (card.modalDetails.actionType === 'contact') {
      navigateTo('contact-request-a-quote');
    } else if (card.modalDetails.actionType === 'request-inspector') {
      openInspectorModal({ inspectionDiscipline: card.title });
    } else {
      setSelectedCard(card);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-slate-800 font-sans">
      
      {/* ======================================================== */}
      {/* 1. HERO BANNER — Deep Industrial Navy (#08253E)          */}
      {/* ======================================================== */}
      <section className="relative bg-[#08253E] text-white pt-16 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-[#0D3B62]">
        
        {/* Subtle Industrial Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`, 
            backgroundSize: '24px 24px' 
          }} 
        />
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 text-left">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-amber-400 text-xs font-mono font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>{pageData.eyebrow}</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.12] text-white max-w-5xl">
            {pageData.heroHeadline}
          </h1>

          {/* Meaningful Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal max-w-3xl leading-relaxed">
            {pageData.heroSubtitle}
          </p>

          {/* CTA Buttons Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => openInspectorModal()}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-950/30 transition-all duration-150 cursor-pointer active:scale-[0.98]"
            >
              <HardHat className="w-4 h-4 text-white" />
              <span>{pageData.ctaText}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-300" />
              <span>REQUEST A QUOTE (RFQ)</span>
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SECTION TITLE BAR / BREADCRUMB                       */}
      {/* ======================================================== */}
      <section className="bg-white border-b border-slate-200/90 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-sm bg-[#F97316]" />
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-900">
              {pageData.pageTitle}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>PAGE {pageData.pageNumber} OF 12</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline text-slate-600">QUALISPECT GLOBAL SITEMAP</span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. 6-CARD CONTENT GRID (#F4F7FA)                         */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {pageData.cards.map((card, idx) => (
              <div 
                key={card.id || idx}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Category Pill */}
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F97316] bg-orange-50 border border-orange-200/60 px-2 py-0.5 rounded-sm inline-block mb-3">
                    {card.category}
                  </span>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                    {card.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.summary}
                  </p>

                  {/* Bullet Points */}
                  <ul className="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCard(card)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#F97316] hover:text-[#EA580C] group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>{card.actionLabel || 'VIEW DETAILS >'}</span>
                  </button>

                  <button
                    onClick={() => handleCardAction(card)}
                    className="p-1 rounded text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    title="Action"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* ======================================================== */}
          {/* SPECIAL ON-PAGE FORM: ONLY ON PAGE 12 (Request Inspector)*/}
          {/* ======================================================== */}
          {pageData.id === 'request-an-inspector' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-10 max-w-4xl mx-auto text-left">
              <div className="border-b border-slate-200 pb-5 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F97316] block">
                  OFFICIAL DISPATCH REQUISITION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Submit Third-Party Inspector Requisition
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Direct dispatch coordination from our Houston corporate office. Confirmed within 4 business hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">
                    Inspection Request Transmitted Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto">
                    Thank you, <span className="font-bold">{formData.clientName || 'Partner'}</span>. Your assignment tracking ID has been generated. A Qualispect technical coordinator will review your scope and provide confirmed inspector credentials within 4 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase"
                    >
                      Submit Another Requisition
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Grid 1: Client & Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Client / Company Name *
                      </label>
                      <input 
                        type="text" 
                        name="clientName"
                        required
                        value={formData.clientName}
                        onChange={handleFormChange}
                        placeholder="e.g., Bechtel, Chevron, Technip"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F97316] bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Name & Work Package
                      </label>
                      <input 
                        type="text" 
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleFormChange}
                        placeholder="e.g., Golden Pass LNG — Package 4B"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F97316] bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Grid 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Technical Lead Email *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="qa.lead@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F97316] bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Direct Telephone Number *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+1 (xxx) xxx-xxxx"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F97316] bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Grid 3: Vendor Facility */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Vendor Shop Name *
                      </label>
                      <input 
                        type="text" 
                        name="vendorName"
                        required
                        value={formData.vendorName}
                        onChange={handleFormChange}
                        placeholder="e.g., Bonney Forge, Valvitalia, Flowserve"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F97316] bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Vendor Facility Location (City, Country) *
                      </label>
                      <input 
                        type="text" 
                        name="vendorLocation"
                        required
                        value={formData.vendorLocation}
                        onChange={handleFormChange}
                        placeholder="e.g., Houston TX, Milan Italy, Busan Korea"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F97316] bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Grid 4: Equipment & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Equipment Category *
                      </label>
                      <select 
                        name="equipmentType"
                        value={formData.equipmentType}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F97316] bg-slate-50"
                      >
                        <option>Pressure Vessels (ASME Sec VIII)</option>
                        <option>Piping & Flanges (ASME B31.3)</option>
                        <option>Valves & Actuators (API 6D / 598)</option>
                        <option>Rotating Equipment (Pumps / Turbines API 610/617)</option>
                        <option>Structural Steel Fabrication (AWS D1.1)</option>
                        <option>Protective Coating & Painting (NACE/AMPP)</option>
                        <option>Electrical & Instrumentation (IEC/ATEX)</option>
                        <option>Factory Acceptance Testing (FAT)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Target Inspection Date *
                      </label>
                      <input 
                        type="date" 
                        name="inspectionDate"
                        required
                        value={formData.inspectionDate}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F97316] bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Scope Description */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Scope of Work & Hold Points to Witness
                    </label>
                    <textarea 
                      name="scopeNotes"
                      rows={3}
                      value={formData.scopeNotes}
                      onChange={handleFormChange}
                      placeholder="Specify hold points (e.g., Hydrostatic test witness, NDT audit, visual & dimensional, final FAT)"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F97316] bg-slate-50"
                    />
                  </div>

                  {/* Document Upload Notice */}
                  <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#F97316] flex items-center justify-center shrink-0">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">
                          Attach Purchase Order (PO) & Approved ITP
                        </span>
                        <span className="text-[11px] text-slate-500">
                          PDF, Word, or ZIP up to 50MB (or email to info@qualispect.com)
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => alert('Files can also be emailed directly to info@qualispect.com with your project reference.')}
                      className="px-3.5 py-1.5 rounded bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs"
                    >
                      Browse Files
                    </button>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-orange-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Official Inspector Requisition</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      Confidential & Proprietary. Reviewed exclusively by Qualispect Quality Management.
                    </p>
                  </div>

                </form>
              )}
            </div>
          )}

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CARD DETAIL MODAL                                     */}
      {/* ======================================================== */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-left animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="bg-[#08253E] px-6 py-4 flex items-center justify-between text-white border-b border-[#0D3B62]">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                  {selectedCard.category} • QUALISPECT SPECIFICATION
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedCard.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCard(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5">
              
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">
                  {selectedCard.modalDetails.heading}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedCard.modalDetails.description}
                </p>
              </div>

              {/* Key Specs */}
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 block mb-2">
                  Technical Specifications & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  {selectedCard.modalDetails.keySpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standards If present */}
              {selectedCard.modalDetails.applicableStandards && (
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 block mb-1.5">
                    Governing Industrial Standards:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCard.modalDetails.applicableStandards.map((std, stdIdx) => (
                      <span key={stdIdx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  Houston Desk: 281-764-6224
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCard(null);
                      openInspectorModal({ inspectionDiscipline: selectedCard.title });
                    }}
                    className="px-5 py-2 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider shadow"
                  >
                    Request Inspector
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
