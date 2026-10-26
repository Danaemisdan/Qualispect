import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  HardHat, 
  Send, 
  CheckCircle2, 
  UploadCloud, 
  AlertCircle,
  FileText
} from 'lucide-react';

interface ContactSectionProps {
  openInspectorModal: (initialData?: any) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  openInspectorModal
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'United States',
    inquiryTopic: 'Third-Party Inspection',
    message: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...names]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-24 bg-white text-stone-900 border-b border-stone-200/80 relative overflow-hidden" id="contact-section">
      {/* Background dot matrix */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Urgent Callout Warning Banner */}
        <div className="mb-14 p-6 sm:p-7 bg-stone-50 text-stone-900 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="p-3 bg-amber-100 rounded-xl text-amber-800 shadow-sm shrink-0">
              <AlertCircle className="w-6 h-6 text-amber-800" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-widest block">
                EMERGENCY MOBILIZATION NOTICE
              </span>
              <h3 className="text-xl font-bold text-stone-900 uppercase tracking-tight">
                Urgent Inspection at a Vendor Facility?
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                Don't use the general contact form. Use our direct Inspector Dispatch portal for 24–48 hour shop attendance.
              </p>
            </div>
          </div>

          <button
            onClick={() => openInspectorModal()}
            className="bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow shrink-0 cursor-pointer flex items-center gap-2 relative z-10 active:scale-95 transition-all"
          >
            <HardHat className="w-3.5 h-3.5 text-amber-400" />
            <span>SUBMIT AN INSPECTION REQUEST</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & Houston HQ */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block">
                LET'S TALK ABOUT YOUR REQUIREMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight font-sans uppercase">
                Contact Qualispect Inc.
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                Whether you need an inspector tomorrow, support for an upcoming FAT, or a dedicated quality team for a major capital project, our Houston team is ready to discuss your requirements.
              </p>
            </div>

            {/* Structured HQ Details */}
            <div className="bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-6 text-xs font-mono">
              
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-stone-900 uppercase text-xs block">Corporate Headquarters:</span>
                  <p className="text-stone-700 font-sans">
                    QUALISPECT INC.<br />
                    9801 Westheimer Road, Suite 300<br />
                    Houston, Texas 77042, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-stone-200 pt-4">
                <Phone className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-stone-900 uppercase text-xs block">Direct Telephones:</span>
                  <div className="space-y-1 text-stone-700">
                    <div>
                      Primary: <a href="tel:2817646224" className="font-bold text-stone-900 hover:text-amber-700 hover:underline">281-764-6224</a>
                    </div>
                    <div>
                      Secondary: <a href="tel:2817641335" className="font-bold text-stone-900 hover:text-amber-700 hover:underline">281-764-1335</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-stone-200 pt-4">
                <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-stone-900 uppercase text-xs block">Official Email:</span>
                  <a href="mailto:info@qualispect.com" className="text-stone-900 font-bold hover:text-amber-700 hover:underline">
                    info@qualispect.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-stone-200 pt-4">
                <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-stone-900 uppercase text-xs block">Business Hours:</span>
                  <p className="text-stone-700 font-sans">
                    Monday – Friday: 9:00 AM – 5:00 PM Central Time<br />
                    <span className="text-[11px] text-stone-500 italic font-mono">24/7 Global Dispatch on standby for ongoing projects</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Federal CAGE & UEI Quick Reference */}
            <div className="p-5 bg-white text-stone-900 rounded-2xl text-xs space-y-1 font-mono border border-stone-200 shadow-sm">
              <div className="text-amber-800 font-bold text-[11px]">GOVERNMENT CONTRACTING CODES</div>
              <div className="text-stone-800">UEI: L3C9LLNA2KJ9 • CAGE: 7S2L7</div>
              <div className="text-stone-500 text-[10px]">NAICS: 213112 (Support Activities for Oil &amp; Gas)</div>
            </div>

          </div>

          {/* Right Column: General Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-stone-200 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 uppercase tracking-tight">Thank You for Reaching Out</h3>
                <p className="text-stone-600 text-xs max-w-md mx-auto leading-relaxed">
                  Your inquiry has been assigned to our Houston customer coordination team. We will review your message and reply within 1 business day.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase px-6 py-2.5 rounded-full cursor-pointer shadow-sm transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <h3 className="text-base font-bold text-stone-900 uppercase tracking-tight border-b border-stone-200 pb-3 font-sans">
                  General Inquiries &amp; Project Briefings
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chevron / Subsea7 / KBR"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="d.henderson@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 mb-1">Telephone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (281) 555-0182"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 mb-1">Country *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. United States, UK, UAE"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 mb-1">Inquiry Topic: *</label>
                    <select
                      value={formData.inquiryTopic}
                      onChange={(e) => setFormData({ ...formData, inquiryTopic: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-amber-500"
                    >
                      <option value="Third-Party Inspection">Third-Party Inspection</option>
                      <option value="Vendor Inspection">Vendor Inspection</option>
                      <option value="FAT">FAT (Factory Acceptance Testing)</option>
                      <option value="Expediting">Expediting</option>
                      <option value="QA/QC">QA/QC Surveillance</option>
                      <option value="Technical Staffing">Technical Staffing</option>
                      <option value="Government Contracting">Government Contracting</option>
                      <option value="Careers">Careers / Inspector Network</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project, target dates, equipment, or specific technical question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 font-sans text-xs"
                  />
                </div>

                {/* Upload Documents in Contact Form */}
                <div>
                  <label className="block text-stone-700 mb-1">Upload Documents / Attachments (Optional)</label>
                  <label className="border border-dashed border-stone-300 hover:border-amber-500 rounded-lg p-3 bg-stone-50 flex items-center justify-center gap-2 cursor-pointer text-stone-600 transition-colors">
                    <UploadCloud className="w-4 h-4 text-amber-700" />
                    <span className="text-[11px]">Attach PDF, DOCX, Specifications (Max 25MB)</span>
                    <input type="file" multiple onChange={handleFileUpload} className="hidden" />
                  </label>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-amber-800">
                      {uploadedFiles.map(f => <span key={f}>• {f}</span>)}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">
                    Strict privacy &amp; NDA protocol
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white font-mono font-medium text-xs uppercase tracking-wider px-6 py-2.5 rounded-full flex items-center gap-2 cursor-pointer shadow-sm active:scale-95 transition-all"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-amber-400" />
                        <span>SUBMIT INQUIRY</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
