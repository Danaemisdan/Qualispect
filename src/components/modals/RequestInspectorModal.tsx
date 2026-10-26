import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  HardHat, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Calendar, 
  MapPin, 
  Building2, 
  Phone, 
  Mail, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { inspectorDisciplinesList } from '../../data/careersData';

interface RequestInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDiscipline?: string;
}

export const RequestInspectorModal: React.FC<RequestInspectorModalProps> = ({
  isOpen,
  onClose,
  initialDiscipline = ''
}) => {
  const [formData, setFormData] = useState({
    projectName: '',
    clientName: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    vendorName: '',
    vendorAddress: '',
    vendorCity: '',
    vendorCountry: 'United States',
    equipmentType: '',
    poNumber: '',
    inspectionDiscipline: initialDiscipline || 'AWS CWI / SCWI Welding Inspector',
    targetDate: '',
    estimatedDuration: '1–2 Days',
    requiredCertifications: [] as string[],
    scopeDetails: '',
    isUrgent: false
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dispatchRef, setDispatchRef] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
    }
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles(prev => prev.filter(f => f !== fileName));
  };

  const toggleCert = (cert: string) => {
    setFormData(prev => {
      const exists = prev.requiredCertifications.includes(cert);
      return {
        ...prev,
        requiredCertifications: exists 
          ? prev.requiredCertifications.filter(c => c !== cert)
          : [...prev.requiredCertifications, cert]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomCode = 'QSP-' + Math.floor(100000 + Math.random() * 900000);
      setDispatchRef(randomCode);
    }, 1200);
  };

  const certOptions = [
    'AWS CWI / SCWI',
    'CSWIP 3.1 / 3.2',
    'API 510 Pressure Vessel',
    'API 570 Piping',
    'API 653 Storage Tank',
    'API 1169 Pipeline',
    'AMPP / NACE Coating L2/L3',
    'ASNT NDT Level II / III',
    'CompEx Electrical / ATEX'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-industrial-900 border border-steel-700 rounded-2xl shadow-2xl overflow-hidden my-8 animate-fade-in text-steel-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-industrial-950 via-industrial-900 to-industrial-950 px-6 py-5 border-b border-steel-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-safety-500 flex items-center justify-center shadow-lg shadow-safety-500/30">
              <HardHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-white tracking-tight">
                  REQUEST AN INSPECTOR
                </h3>
                <span className="text-[11px] bg-safety-500/20 text-safety-400 border border-safety-500/30 font-mono font-semibold px-2 py-0.5 rounded">
                  24–48HR DISPATCH
                </span>
              </div>
              <p className="text-xs text-steel-400">
                Source surveillance, vendor inspection & FAT witnessing worldwide
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

        {/* Content Body */}
        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">
                DISPATCH REQUEST LOGGED
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-white">
                Inspection Request Transmitted Successfully
              </h4>
              <p className="text-steel-300 text-sm max-w-xl mx-auto">
                Our Houston technical coordination team is reviewing your scope and matching certified personnel near the vendor location.
              </p>
            </div>

            <div className="p-4 bg-industrial-950 rounded-xl border border-steel-800 max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-steel-800 pb-2">
                <span className="text-steel-400">Dispatch Reference:</span>
                <span className="font-mono font-bold text-safety-400 text-sm">{dispatchRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Vendor Facility:</span>
                <span className="font-semibold text-white">{formData.vendorName || 'Designated Vendor'} ({formData.vendorCity})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Target Inspection Date:</span>
                <span className="font-semibold text-white">{formData.targetDate || 'TBD'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Required Discipline:</span>
                <span className="font-semibold text-safety-400">{formData.inspectionDiscipline}</span>
              </div>
              {uploadedFiles.length > 0 && (
                <div className="flex justify-between border-t border-steel-800 pt-2">
                  <span className="text-steel-400">Uploaded Documents:</span>
                  <span className="font-mono text-steel-200">{uploadedFiles.length} file(s) attached</span>
                </div>
              )}
            </div>

            <div className="p-4 bg-safety-500/10 border border-safety-500/30 rounded-xl max-w-md mx-auto text-left text-xs text-steel-300 flex items-start gap-3">
              <Phone className="w-5 h-5 text-safety-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Need emergency coordination?</p>
                <p className="text-steel-400 mt-0.5">
                  Call our Houston operations desk directly at <a href="tel:2817646224" className="text-safety-400 font-bold underline">281-764-6224</a> with your reference code.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-safety-500 hover:bg-safety-600 text-white font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-lg shadow-lg"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Urgent Notice Banner */}
            <div className="p-4 bg-industrial-950 border border-steel-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-safety-500/10 rounded-lg text-safety-400 border border-safety-500/30">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    WHERE • WHAT • WHEN
                  </h4>
                  <p className="text-[11px] text-steel-400">
                    Provide vendor details and ITP/PO documents. We handle inspector qualification and shop mobilization.
                  </p>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer bg-industrial-800/80 px-3 py-1.5 rounded-lg border border-steel-700 text-xs text-white">
                <input 
                  type="checkbox" 
                  checked={formData.isUrgent}
                  onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                  className="rounded text-safety-500 focus:ring-safety-500 accent-safety-500"
                />
                <span className="font-bold text-safety-400">URGENT CALLOUT (Next 24–48h)</span>
              </label>
            </div>

            {/* Section 1: Client & Contact Info */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-safety-400 font-mono flex items-center gap-2 border-b border-steel-800 pb-1.5">
                <Building2 className="w-4 h-4" /> 1. Client & Contact Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Project Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gulf Coast Expansion Phase 2"
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Client / Hiring Company *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bechtel / Fluor / ExxonMobil"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="First & Last Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Direct Telephone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 713-555-0199"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Purchase Order (PO) # *</label>
                  <input
                    type="text"
                    required
                    placeholder="PO-8829-REV3"
                    value={formData.poNumber}
                    onChange={(e) => setFormData({ ...formData, poNumber: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500 font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Vendor Facility & Equipment */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-safety-400 font-mono flex items-center gap-2 border-b border-steel-800 pb-1.5">
                <MapPin className="w-4 h-4" /> 2. Vendor Facility & Equipment
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Vendor / Fabricator Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flowserve / Sulzer / Cameron"
                    value={formData.vendorName}
                    onChange={(e) => setFormData({ ...formData, vendorName: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Vendor Address / Facility *</label>
                  <input
                    type="text"
                    required
                    placeholder="123 Industrial Parkway"
                    value={formData.vendorAddress}
                    onChange={(e) => setFormData({ ...formData, vendorAddress: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">City & State/Province *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Houston, TX or Milan, Italy"
                    value={formData.vendorCity}
                    onChange={(e) => setFormData({ ...formData, vendorCity: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Country *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States, Germany, South Korea"
                    value={formData.vendorCountry}
                    onChange={(e) => setFormData({ ...formData, vendorCountry: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-steel-400 mb-1 font-medium">Equipment Being Inspected *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. API 610 Centrifugal Injection Pumps / 24-inch Cryogenic Ball Valves"
                    value={formData.equipmentType}
                    onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Technical Discipline & Timing */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-safety-400 font-mono flex items-center gap-2 border-b border-steel-800 pb-1.5">
                <ShieldCheck className="w-4 h-4" /> 3. Discipline, Timing & Credentials
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Primary Inspection Discipline *</label>
                  <select
                    value={formData.inspectionDiscipline}
                    onChange={(e) => setFormData({ ...formData, inspectionDiscipline: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  >
                    {inspectorDisciplinesList.map(disc => (
                      <option key={disc} value={disc}>{disc}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Target Inspection Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.targetDate}
                    onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 mb-1 font-medium">Estimated Duration *</label>
                  <select
                    value={formData.estimatedDuration}
                    onChange={(e) => setFormData({ ...formData, estimatedDuration: e.target.value })}
                    className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                  >
                    <option value="Single FAT Witness (1 Day)">Single FAT Witness (1 Day)</option>
                    <option value="Short Term (2–5 Days)">Short Term (2–5 Days)</option>
                    <option value="Recurring Surveillance (Weekly)">Recurring Surveillance (Weekly)</option>
                    <option value="Full Project / Resident (30+ Days)">Full Project / Resident (30+ Days)</option>
                  </select>
                </div>
              </div>

              {/* Required Certifications Chips */}
              <div>
                <label className="block text-steel-400 mb-1.5 text-xs font-medium">
                  Select Required Personnel Credentials (if mandated by contract):
                </label>
                <div className="flex flex-wrap gap-2">
                  {certOptions.map(cert => {
                    const selected = formData.requiredCertifications.includes(cert);
                    return (
                      <button
                        type="button"
                        key={cert}
                        onClick={() => toggleCert(cert)}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                          selected 
                            ? 'bg-safety-500 text-white font-bold shadow' 
                            : 'bg-industrial-950 text-steel-400 border border-steel-800 hover:border-steel-700'
                        }`}
                      >
                        {selected && <Check className="w-3 h-3 text-white" />}
                        {cert}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Section 4: Scope & File Upload */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-safety-400 font-mono flex items-center gap-2 border-b border-steel-800 pb-1.5">
                <FileText className="w-4 h-4" /> 4. Detailed Scope & Document Attachments
              </h4>
              
              <div>
                <label className="block text-steel-400 mb-1 text-xs font-medium">
                  Inspection Scope & Hold/Witness Point Details *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Outline the specific witness points, hydrotest parameters, dimensional tolerances, or special procedures to be observed..."
                  value={formData.scopeDetails}
                  onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-safety-500"
                ></textarea>
              </div>

              {/* Upload Dropzone */}
              <div>
                <label className="block text-steel-400 mb-1 text-xs font-medium">
                  Upload PO, ITP, Drawings, Specifications & Inspection Notifications
                </label>
                <label className="border-2 border-dashed border-steel-700 hover:border-safety-500/60 rounded-xl p-5 bg-industrial-950/70 text-center cursor-pointer block transition-colors group">
                  <UploadCloud className="w-8 h-8 text-steel-500 group-hover:text-safety-400 mx-auto mb-2 transition-colors" />
                  <span className="text-xs font-semibold text-white block">
                    Click to browse or drag & drop files here
                  </span>
                  <span className="text-[11px] text-steel-400 block mt-0.5">
                    Supports PDF, DWG, DOCX, XLSX, ZIP (Max 50MB per file)
                  </span>
                  <input 
                    type="file" 
                    multiple 
                    onChange={handleFileUpload} 
                    className="hidden" 
                  />
                </label>

                {/* Uploaded file chips */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {uploadedFiles.map((file) => (
                      <span 
                        key={file} 
                        className="bg-industrial-800 border border-steel-700 text-steel-200 text-xs px-2.5 py-1 rounded flex items-center gap-2 font-mono"
                      >
                        <FileText className="w-3.5 h-3.5 text-safety-400" />
                        <span className="max-w-[200px] truncate">{file}</span>
                        <button 
                          type="button" 
                          onClick={() => removeFile(file)} 
                          className="text-steel-400 hover:text-red-400"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-steel-400">
                <span className="text-safety-400 font-semibold">Confidentiality Guarantee:</span> All uploaded specifications and PO details remain strictly proprietary.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg border border-steel-700 text-steel-300 hover:bg-industrial-800 text-xs font-bold uppercase transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 sm:w-auto bg-white hover:bg-zinc-200 disabled:opacity-50 text-black font-mono font-medium text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg shadow-[0_1px_12px_rgba(255,255,255,0.12)] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Mobilizing...</span>
                    </>
                  ) : (
                    <>
                      <HardHat className="w-3.5 h-3.5 text-black" />
                      <span>SUBMIT INSPECTION REQUEST</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
