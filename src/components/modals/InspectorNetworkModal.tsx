import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Briefcase, 
  MapPin, 
  User, 
  Mail, 
  Phone,
  Check
} from 'lucide-react';
import { inspectorDisciplinesList } from '../../data/careersData';

interface InspectorNetworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetJobTitle?: string;
}

export const InspectorNetworkModal: React.FC<InspectorNetworkModalProps> = ({
  isOpen,
  onClose,
  targetJobTitle
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: 'United States',
    primaryDiscipline: 'AWS CWI / SCWI Welding Inspector',
    yearsExperience: '5–10 Years',
    selectedCertifications: [] as string[],
    domesticTravel: '100% Available',
    internationalTravel: 'Available with Valid Passport',
    notes: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [candidateRef, setCandidateRef] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...names]);
    }
  };

  const toggleCert = (cert: string) => {
    setFormData(prev => {
      const exists = prev.selectedCertifications.includes(cert);
      return {
        ...prev,
        selectedCertifications: exists 
          ? prev.selectedCertifications.filter(c => c !== cert)
          : [...prev.selectedCertifications, cert]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setCandidateRef('NET-' + Math.floor(100000 + Math.random() * 900000));
    }, 1100);
  };

  const availableCerts = [
    'AWS CWI (Certified Welding Inspector)',
    'AWS SCWI (Senior CWI)',
    'CSWIP 3.1 / 3.2 Welding',
    'API 510 (Pressure Vessels)',
    'API 570 (Process Piping)',
    'API 653 (Aboveground Tanks)',
    'API 1169 (Pipeline Inspector)',
    'AMPP / NACE Coating Level II',
    'AMPP / NACE Coating Level III',
    'ASNT NDT Level II (VT/PT/MT/UT/RT)',
    'ASNT NDT Level III',
    'CompEx Electrical (Ex01-Ex04)',
    'TWIC Card (Transportation Worker)',
    'BOSIET / Offshore Survival'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-industrial-900 border border-steel-700 rounded-2xl shadow-2xl overflow-hidden my-6 animate-fade-in text-steel-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-industrial-950 via-industrial-900 to-industrial-950 px-6 py-5 border-b border-steel-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-safety-500/20 border border-safety-500/40 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-safety-400" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white tracking-tight">
                {targetJobTitle ? `APPLY: ${targetJobTitle}` : 'JOIN OUR INSPECTOR NETWORK'}
              </h3>
              <p className="text-xs text-steel-400">
                Register your technical qualifications for US & global inspection assignments
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-steel-400 hover:text-white rounded-lg hover:bg-industrial-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Anti-Fraud Notice Required by Prompt */}
        <div className="bg-industrial-950 px-6 py-2.5 border-b border-steel-800 text-[11px] text-amber-300 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Official Recruitment Notice:</strong> Qualispect does not require applicants to make any payment in exchange for assignments. All communications occur through verified @qualispect.com channels.
          </span>
        </div>

        {/* Body */}
        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold">REGISTRATION LOGGED</span>
              <h4 className="text-2xl font-bold text-white">Application Successfully Received</h4>
              <p className="text-steel-300 text-xs max-w-md mx-auto">
                Your credentials have been entered into our active technical talent repository. Our resource managers will reach out when an assignment matches your credentials and geographic availability.
              </p>
            </div>

            <div className="p-4 bg-industrial-950 rounded-xl border border-steel-800 max-w-sm mx-auto text-xs space-y-2 text-left">
              <div className="flex justify-between border-b border-steel-800 pb-2">
                <span className="text-steel-400">Candidate ID:</span>
                <span className="font-mono font-bold text-safety-400">{candidateRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Discipline:</span>
                <span className="font-semibold text-white">{formData.primaryDiscipline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Location:</span>
                <span className="font-semibold text-white">{formData.city}, {formData.state} ({formData.country})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Uploaded Records:</span>
                <span className="font-mono text-safety-400">{uploadedFiles.length} file(s)</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-safety-500 hover:bg-safety-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto text-xs">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-steel-400 mb-1 font-medium">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Michael R. Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="m.vance@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">Telephone / Mobile *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (713) 555-0144"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">City of Residence *</label>
                <input
                  type="text"
                  required
                  placeholder="Houston / Beaumont / Tulsa"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">State / Province *</label>
                <input
                  type="text"
                  required
                  placeholder="Texas / Alberta / Lombardy"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">Country *</label>
                <input
                  type="text"
                  required
                  placeholder="United States / Canada / UK"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-steel-400 mb-1 font-medium">Primary Discipline *</label>
                <select
                  value={formData.primaryDiscipline}
                  onChange={(e) => setFormData({ ...formData, primaryDiscipline: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                >
                  {inspectorDisciplinesList.map(disc => (
                    <option key={disc} value={disc}>{disc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">Years of Field Experience *</label>
                <select
                  value={formData.yearsExperience}
                  onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                >
                  <option value="3–5 Years">3–5 Years</option>
                  <option value="5–10 Years">5–10 Years</option>
                  <option value="10–15 Years">10–15 Years</option>
                  <option value="15+ Years (Senior Lead)">15+ Years (Senior Lead)</option>
                </select>
              </div>

              <div>
                <label className="block text-steel-400 mb-1 font-medium">Travel Availability *</label>
                <select
                  value={formData.domesticTravel}
                  onChange={(e) => setFormData({ ...formData, domesticTravel: e.target.value })}
                  className="w-full bg-industrial-950 border border-steel-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-safety-500"
                >
                  <option value="100% Nationwide Travel">100% Nationwide Travel</option>
                  <option value="Regional Only (< 150 miles)">Regional Only (&lt; 150 miles)</option>
                  <option value="Global / International Available">Global / International Available</option>
                </select>
              </div>
            </div>

            {/* Certifications Selector */}
            <div>
              <label className="block text-steel-400 mb-1 font-medium">
                Hold Active Industry Certifications (Click all that apply):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableCerts.map(cert => {
                  const selected = formData.selectedCertifications.includes(cert);
                  return (
                    <button
                      type="button"
                      key={cert}
                      onClick={() => toggleCert(cert)}
                      className={`text-left p-2 rounded-lg text-[11px] font-mono border transition-all flex items-center justify-between ${
                        selected 
                          ? 'bg-safety-500/20 border-safety-500 text-white font-bold' 
                          : 'bg-industrial-950 border-steel-800 text-steel-400 hover:border-steel-700'
                      }`}
                    >
                      <span className="truncate">{cert}</span>
                      {selected && <Check className="w-3.5 h-3.5 text-safety-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Document Upload for CV & Certs */}
            <div>
              <label className="block text-steel-400 mb-1 font-medium">
                Upload Resume / CV & Copies of Current Certifications *
              </label>
              <label className="border-2 border-dashed border-steel-700 hover:border-safety-500/60 rounded-xl p-4 bg-industrial-950 text-center cursor-pointer block transition-colors">
                <UploadCloud className="w-6 h-6 text-safety-400 mx-auto mb-1" />
                <span className="text-xs font-semibold text-white block">
                  Click to attach Resume / CV & Certificates
                </span>
                <span className="text-[10px] text-steel-500 block">PDF, DOCX, JPG, PNG (Max 25MB total)</span>
                <input type="file" multiple onChange={handleFileUpload} className="hidden" />
              </label>
              {uploadedFiles.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {uploadedFiles.map(f => (
                    <span key={f} className="bg-industrial-800 text-steel-200 px-2 py-0.5 rounded text-[11px] border border-steel-700 font-mono">
                      {f}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-steel-800 flex items-center justify-between">
              <span className="text-[11px] text-steel-500">
                Equal Opportunity Technical Employer
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-zinc-200 disabled:opacity-50 text-black font-mono font-medium text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg shadow-[0_1px_12px_rgba(255,255,255,0.12)] flex items-center gap-2 cursor-pointer transition-all"
              >
                {isSubmitting ? 'Registering...' : 'JOIN OUR INSPECTOR NETWORK'}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
