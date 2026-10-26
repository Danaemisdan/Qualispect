import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  HardHat, 
  FileText, 
  UploadCloud, 
  Phone, 
  Clock, 
  Search,
  Check
} from 'lucide-react';
import { inspectorDisciplinesList } from '../data/careersData';
import { PageId } from '../types';

interface VendorSurveillancePageProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
}

export const VendorSurveillancePage: React.FC<VendorSurveillancePageProps> = ({
  navigateTo,
  openInspectorModal
}) => {
  const [formData, setFormData] = useState({
    clientName: '',
    vendorName: '',
    vendorAddress: '',
    vendorCity: '',
    vendorCountry: 'United States',
    poNumber: '',
    equipment: '',
    inspectionDiscipline: 'Welding & Fabrication',
    requiredCert: '',
    targetDate: '',
    estimatedDuration: '1 Day (Single FAT Witness)',
    scope: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
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
    }, 1200);
  };

  const steps = [
    {
      num: '01',
      title: 'Assignment Submittal',
      desc: 'The client provides the purchase order, approved ITP, drawings, specifications, vendor location, and target inspection dates.'
    },
    {
      num: '02',
      title: 'Inspector Selection',
      desc: 'Qualispect matches the scope with a credentialed inspector (AWS CWI, API, AMPP, CSWIP) vetted for the specific equipment type.'
    },
    {
      num: '03',
      title: 'Coordination & Briefing',
      desc: 'Pre-inspection review aligns hold points, client expectations, safety requirements, and vendor shop contacts.'
    },
    {
      num: '04',
      title: 'Field Execution',
      desc: 'The inspector attends the vendor shop, verifies ITP hold/witness points, examines materials, and observes required testing.'
    },
    {
      num: '05',
      title: 'Daily & Final Reporting',
      desc: 'A flash notification is issued within 24 hours followed by comprehensive final reports with photographic evidence.'
    }
  ];

  return (
    <div className="bg-[#FAFAF9] text-stone-900">
      
      {/* Hero */}
      <div className="bg-[#FAFAF9] pt-28 sm:pt-36 pb-20 relative overflow-hidden border-b border-stone-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block">
              PAGE 4 — VENDOR INSPECTION &amp; SOURCE SURVEILLANCE
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              Your Equipment. Your Requirements. <br />
              <span className="text-amber-700">Our Eyes at the Vendor.</span>
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal">
              Equipment does not have to be manufactured nearby for you to maintain quality visibility. Qualispect provides independent vendor inspection and source surveillance at manufacturing and fabrication locations worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works (5-Step Workflow) */}
      <div className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
              STANDARDIZED WORKFLOW
            </span>
            <h2 className="text-3xl font-bold text-stone-900 uppercase tracking-tight">
              How Vendor Surveillance Works
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm font-normal">
              From assignment submittal to certified report delivery in five clear steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((st) => (
              <div 
                key={st.num}
                className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-2.5 flex flex-col justify-between group transition-all"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-amber-700 block">
                    {st.num}
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 uppercase group-hover:text-stone-950 transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-[11px] text-stone-600 leading-relaxed pt-1 font-normal">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500 font-mono">
                  <span>Step {st.num}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Full Inspection Request Form */}
      <div className="py-20 bg-[#FAFAF9]" id="inspection-request-form">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block">
                  SOURCE INSPECTION ASSIGNMENT INTAKE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 uppercase tracking-tight">
                  Inspection Request Form
                </h2>
                <p className="text-xs text-stone-600 mt-0.5">
                  Submit your PO, ITP, and vendor details. Our coordination desk will confirm inspector assignment.
                </p>
              </div>

              <div className="p-3 bg-stone-50 text-stone-900 rounded-xl text-xs space-y-1 shrink-0 font-mono border border-stone-200">
                <div className="text-amber-800 font-bold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-700" /> URGENT REQUIREMENT?
                </div>
                <div>Call Houston: <a href="tel:2817646224" className="text-stone-900 font-bold underline">281-764-6224</a></div>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 bg-stone-50 rounded-2xl border border-stone-200 p-8">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 uppercase">
                  Inspection Assignment Submitted
                </h3>
                <p className="text-stone-600 text-xs max-w-md mx-auto leading-relaxed">
                  Your request has been routed to our technical coordination team. A lead inspector will be assigned and confirmed with the vendor.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase px-6 py-2.5 rounded-full cursor-pointer shadow-sm transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono">
                
                {/* 1. Client & Vendor Details */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase text-amber-800 tracking-wider">
                    1. Client &amp; Vendor Facility Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-stone-700 mb-1">Project / Client *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sabine Pass Expansion / Kiewit"
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 mb-1">Vendor Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Cameron Valves &amp; Measurement"
                        value={formData.vendorName}
                        onChange={(e) => setFormData({ ...formData, vendorName: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 mb-1">Vendor Facility Address *</label>
                      <input
                        type="text"
                        required
                        placeholder="Facility Street Address"
                        value={formData.vendorAddress}
                        onChange={(e) => setFormData({ ...formData, vendorAddress: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 mb-1">City &amp; State/Province *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Houston, TX or Milan"
                        value={formData.vendorCity}
                        onChange={(e) => setFormData({ ...formData, vendorCity: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 mb-1">Country *</label>
                      <input
                        type="text"
                        required
                        placeholder="United States, Italy, etc."
                        value={formData.vendorCountry}
                        onChange={(e) => setFormData({ ...formData, vendorCountry: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 mb-1">Purchase Order (PO) # *</label>
                      <input
                        type="text"
                        required
                        placeholder="PO-99482-REV2"
                        value={formData.poNumber}
                        onChange={(e) => setFormData({ ...formData, poNumber: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 font-mono placeholder-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Equipment & Scope */}
                <div className="space-y-3 pt-3 border-t border-stone-200">
                  <h3 className="font-mono text-xs font-bold uppercase text-amber-800 tracking-wider">
                    2. Equipment &amp; Technical Scope
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-stone-700 mb-1">Equipment Description *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Cryogenic Gate Valves / Pump Skid"
                        value={formData.equipment}
                        onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 mb-1">Inspection Discipline *</label>
                      <select
                        value={formData.inspectionDiscipline}
                        onChange={(e) => setFormData({ ...formData, inspectionDiscipline: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-amber-500"
                      >
                        {inspectorDisciplinesList.map(d => <option key={d} value={d} className="bg-white text-stone-900">{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-stone-700 mb-1">Required Certification</label>
                      <input
                        type="text"
                        placeholder="e.g. AWS CWI, API 598, AMPP Level 2"
                        value={formData.requiredCert}
                        onChange={(e) => setFormData({ ...formData, requiredCert: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 mb-1">Inspection Target Date *</label>
                      <input
                        type="date"
                        required
                        value={formData.targetDate}
                        onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 font-mono focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 mb-1">Estimated Duration *</label>
                      <select
                        value={formData.estimatedDuration}
                        onChange={(e) => setFormData({ ...formData, estimatedDuration: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-amber-500"
                      >
                        <option value="1 Day (Single FAT Witness)">1 Day (Single FAT Witness)</option>
                        <option value="2–5 Days">2–5 Days</option>
                        <option value="Recurring Weekly Surveillance">Recurring Weekly Surveillance</option>
                        <option value="Resident / Full Project">Resident / Full Project</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-stone-700 mb-1">Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="Coordinator Name"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-700 mb-1">Detailed Inspection Scope &amp; Specific Instructions *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Specify ITP hold points, hydrostatic pressures, calibration tolerances, or special procedures..."
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 font-sans"
                    />
                  </div>
                </div>

                {/* 3. Document Upload */}
                <div className="space-y-2 pt-3 border-t border-stone-200">
                  <label className="block text-stone-700 mb-1">
                    Upload: Purchase Order, ITP, Drawings, Specifications, Inspection Notification *
                  </label>
                  <label className="border-2 border-dashed border-stone-300 hover:border-amber-500 rounded-2xl p-6 bg-stone-50 text-center cursor-pointer block transition-colors">
                    <UploadCloud className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                    <span className="font-semibold text-stone-900 block uppercase font-mono text-xs">Click to upload inspection documentation</span>
                    <span className="text-[11px] text-stone-500 block mt-0.5">PO, ITP, Specifications, Drawings, Notifications (Max 50MB)</span>
                    <input type="file" multiple onChange={handleFileUpload} className="hidden" />
                  </label>
                  {uploadedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {uploadedFiles.map(f => (
                        <span key={f} className="px-2.5 py-1 bg-amber-50 rounded border border-amber-200 text-amber-800 font-mono text-[11px]">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-stone-600">
                    <span className="font-bold text-stone-900">Urgent Mobilization?</span> Call Houston operations directly at 281-764-6224.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white font-mono font-medium text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <HardHat className="w-3.5 h-3.5 text-amber-400" />
                        <span>SUBMIT INSPECTION REQUEST</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>

    </div>
  );
};
