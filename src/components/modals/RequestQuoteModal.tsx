import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  CheckCircle2, 
  Building2, 
  Mail, 
  Phone, 
  Send,
  UploadCloud
} from 'lucide-react';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestQuoteModal: React.FC<RequestQuoteModalProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectLocation: '',
    serviceRequired: 'Vendor Surveillance & Source Inspection',
    estimatedDuration: 'Multi-Month Capital Project',
    details: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqRef, setRfqRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setRfqRef('RFQ-' + Math.floor(100000 + Math.random() * 900000));
    }, 1000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...names]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-industrial-900 border border-steel-700 rounded-2xl shadow-2xl overflow-hidden my-8 animate-fade-in text-steel-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-industrial-950 via-industrial-900 to-industrial-950 px-6 py-5 border-b border-steel-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-industrial-800 border border-steel-700 flex items-center justify-center shadow-lg">
              <FileText className="w-6 h-6 text-safety-400" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white tracking-tight">
                REQUEST A FORMAL QUOTE / RFQ
              </h3>
              <p className="text-xs text-steel-400">
                Transparent day-rate and turnkey project surveillance proposals
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-steel-400 hover:text-white rounded-lg hover:bg-industrial-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold">RFQ CONFIRMED</span>
              <h4 className="text-2xl font-bold text-white">Quotation Request Received</h4>
              <p className="text-steel-300 text-xs max-w-md mx-auto">
                Our commercial estimates team will prepare a formal proposal and schedule of rates within 24 business hours.
              </p>
            </div>

            <div className="p-4 bg-industrial-950 rounded-xl border border-steel-800 max-w-sm mx-auto text-xs space-y-2 text-left">
              <div className="flex justify-between border-b border-steel-800 pb-2">
                <span className="text-steel-400">Reference Number:</span>
                <span className="font-mono font-bold text-safety-400">{rfqRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Company:</span>
                <span className="font-semibold text-white">{formData.company}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Selected Service:</span>
                <span className="font-semibold text-white">{formData.serviceRequired}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-safety-500 hover:bg-safety-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-steel-400 mb-1 font-medium">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller, QA Lead"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">Company / EPC Contractor *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. McDermott / TechnipFMC / Shell"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="j.miller@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (713) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">Service Required *</label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                >
                  <option value="Third-Party Inspection & Vendor Surveillance">Third-Party Inspection & Vendor Surveillance</option>
                  <option value="Welding & Fabrication QA/QC (AWS CWI)">Welding & Fabrication QA/QC (AWS CWI)</option>
                  <option value="Mechanical & Rotating Equipment Inspection">Mechanical & Rotating Equipment Inspection</option>
                  <option value="Electrical & Instrumentation (E&I)">Electrical & Instrumentation (E&I)</option>
                  <option value="Coating & Corrosion Inspection (AMPP)">Coating & Corrosion Inspection (AMPP)</option>
                  <option value="Pipeline & Piping (API 1169)">Pipeline & Piping (API 1169)</option>
                  <option value="Factory Acceptance Testing (FAT Witness)">Factory Acceptance Testing (FAT Witness)</option>
                  <option value="Field & Desk Expediting">Field & Desk Expediting</option>
                  <option value="Technical Staffing & Project Teams">Technical Staffing & Project Teams</option>
                  <option value="Government & Public-Sector Contract">Government & Public-Sector Contract</option>
                </select>
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">Project Location / Region *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Houston, TX / Northern Italy / Global Multi-Shop"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-steel-400 mb-1 font-medium">Project Scope & Estimated Schedule *</label>
              <textarea
                rows={3}
                required
                placeholder="Include estimated number of inspection visits, equipment items, standards required, or staffing requirements..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-industrial-950 border border-steel-700 rounded-lg p-3 text-white focus:outline-none focus:border-safety-500"
              ></textarea>
            </div>

            {/* Optional RFQ Document Attachment */}
            <div>
              <label className="block text-steel-400 mb-1 font-medium">Attach Tender Documents / RFQ Specifications (Optional)</label>
              <label className="border border-dashed border-steel-700 hover:border-steel-500 rounded-lg p-3 bg-industrial-950 flex items-center justify-center gap-2 cursor-pointer text-steel-400">
                <UploadCloud className="w-4 h-4 text-safety-400" />
                <span className="text-[11px]">Upload RFQ / Scope PDF (Max 25MB)</span>
                <input type="file" onChange={handleFileUpload} className="hidden" multiple />
              </label>
              {uploadedFiles.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-safety-400">
                  {uploadedFiles.map(f => <span key={f}>• {f}</span>)}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-steel-800 flex items-center justify-between">
              <span className="text-[11px] text-steel-400">
                Direct Houston Hotline: <a href="tel:2817646224" className="text-white font-bold hover:underline">281-764-6224</a>
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-zinc-200 disabled:opacity-50 text-black font-mono font-medium text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg shadow-[0_1px_12px_rgba(255,255,255,0.12)] flex items-center gap-2 cursor-pointer transition-all"
              >
                {isSubmitting ? 'Submitting RFQ...' : 'SUBMIT RFQ FOR PRICING'}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
