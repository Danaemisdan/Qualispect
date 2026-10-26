import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  UploadCloud, 
  HardHat, 
  Clock, 
  ArrowRight, 
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { careersData, inspectorDisciplinesList } from '../../data/careersData';
import { CareerItem } from '../../types';
import { DevBrijoshBanner } from '../ui/DevBrijoshBanner';

interface CareersSectionProps {
  openInspectorNetworkModal: (jobTitle?: string) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({
  openInspectorNetworkModal
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedVacancy, setExpandedVacancy] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedVacancy(prev => prev === id ? null : id);
  };

  const countriesList = ['All', 'United States', 'Germany', 'United Kingdom', 'United Arab Emirates', 'Italy'];
  const employmentTypesList = ['All', 'Contract / Assignment', 'Full-Time Project', 'Call-Out / Ad-Hoc'];
  const disciplinesFilterList = ['All', 'Welding Inspection', 'Mechanical Equipment', 'Coating & Corrosion', 'Pipeline Inspection', 'Rotating Equipment', 'Electrical & Instrumentation', 'Expediting'];

  const filteredJobs = careersData.filter((job) => {
    if (selectedDiscipline !== 'All' && job.discipline !== selectedDiscipline) return false;
    if (selectedCountry !== 'All' && job.country !== selectedCountry) return false;
    if (selectedType !== 'All' && job.employmentType !== selectedType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = job.title.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.requiredCerts.some(c => c.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  return (
    <section className="py-24 bg-[#FAFAF9] text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      {/* Background dot matrix */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-amber-700" />
              <span>TECHNICAL TALENT NETWORK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-sans uppercase">
              Build Your Inspection <br />
              <span className="text-amber-700">Career With Qualispect</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              Great inspection services depend upon great technical professionals. Qualispect continually develops relationships with experienced inspectors, engineers, expediters, and quality specialists who can support projects in the United States and internationally.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => openInspectorNetworkModal()}
              className="bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow flex items-center gap-2 transition-all cursor-pointer active:scale-95"
            >
              <HardHat className="w-3.5 h-3.5 text-amber-400" />
              <span>JOIN OUR INSPECTOR NETWORK</span>
            </button>
          </div>
        </div>

        {/* Anti-Fraud Recruitment Notice Banner */}
        <div className="mb-12 p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3.5 text-xs text-amber-950">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-0.5 font-mono">
            <span className="font-bold uppercase tracking-wider text-[11px] text-amber-900">
              IMPORTANT RECRUITMENT NOTICE
            </span>
            <p className="text-[11px] leading-relaxed text-stone-700">
              Qualispect Inc. does not require applicants to make any payments or fees in exchange for employment or inspection assignments. All legitimate correspondence originates exclusively from official <strong>@qualispect.com</strong> corporate email addresses.
            </p>
          </div>
        </div>

        {/* Vacancy Search & Filter Controls */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-stone-200 gap-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-stone-900">
              <Search className="w-4 h-4 text-amber-600" />
              <span>SEARCH OPEN OPPORTUNITIES</span>
              <span className="text-stone-500 font-normal">({filteredJobs.length} Active Postings)</span>
            </div>

            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search job title, city, cert..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-3 pr-3 py-1.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <label className="block text-stone-700 mb-1 uppercase font-bold text-[10px]">
                By Discipline:
              </label>
              <select
                value={selectedDiscipline}
                onChange={(e) => setSelectedDiscipline(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-800 focus:outline-none focus:border-amber-500"
              >
                {disciplinesFilterList.map(d => <option key={d} value={d} className="bg-white text-stone-900">{d}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-stone-700 mb-1 uppercase font-bold text-[10px]">
                By Country:
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-800 focus:outline-none focus:border-amber-500"
              >
                {countriesList.map(c => <option key={c} value={c} className="bg-white text-stone-900">{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-stone-700 mb-1 uppercase font-bold text-[10px]">
                By Engagement Type:
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-800 focus:outline-none focus:border-amber-500"
              >
                {employmentTypesList.map(t => <option key={t} value={t} className="bg-white text-stone-900">{t}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const isExpanded = expandedVacancy === job.id;
            return (
              <div 
                key={job.id}
                className="bg-white border border-stone-200 hover:border-stone-300 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all space-y-4 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-amber-800 font-mono text-[10px] font-bold uppercase">
                        {job.discipline}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-mono text-[10px] font-semibold border border-stone-200">
                        {job.employmentType}
                      </span>
                      <span className="text-[11px] text-stone-500 font-mono">
                        Experience: {job.experienceReq}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight uppercase group-hover:text-stone-950 transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        {job.location} ({job.country})
                      </span>
                      <span>•</span>
                      <span>Project: {job.projectType}</span>
                    </div>

                    <p className="text-stone-600 text-xs leading-relaxed pt-1">
                      {job.summary}
                    </p>
                  </div>

                  {/* Actions Right */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 shrink-0">
                    <button
                      onClick={() => openInspectorNetworkModal(job.title)}
                      className="bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase px-5 py-2.5 rounded-full shadow-sm cursor-pointer transition-all active:scale-95"
                    >
                      APPLY NOW
                    </button>

                    <button
                      onClick={() => toggleExpand(job.id)}
                      className="text-xs font-mono font-semibold text-stone-500 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Scope'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Required Certs Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-stone-100">
                  <span className="text-[10px] font-mono text-stone-500 font-bold uppercase mr-1 self-center">
                    Mandatory Certifications:
                  </span>
                  {job.requiredCerts.map(cert => (
                    <span key={cert} className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono text-[10px] border border-stone-200">
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Expanded Scope & Responsibilities */}
                {isExpanded && (
                  <div className="pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-700 animate-fade-in bg-stone-50 p-4 rounded-xl">
                    <span className="font-bold text-amber-800 block font-mono uppercase text-[11px]">
                      Key Field Responsibilities:
                    </span>
                    <ul className="space-y-1.5 text-stone-600 pl-4 list-disc font-mono">
                      {job.responsibilities.map((r, idx) => (
                        <li key={idx} className="leading-relaxed">{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Join Network Bottom CTA Banner (Dev Brijosh Style) */}
        <div className="mt-16">
          <DevBrijoshBanner
            eyebrow="DON'T SEE YOUR DISCIPLINE LISTED?"
            tag="Global QA Talent Roster"
            title="Submit Your Credentials for Future Global Assignments"
            description="We continually review AWS CWI, API 510/570/653/1169, AMPP, CSWIP, and NDT qualifications. When projects mobilize in your area, our technical coordination desk contacts you directly."
            primaryButtonText="REGISTER IN INSPECTOR NETWORK"
            primaryButtonAction={() => openInspectorNetworkModal()}
            layout="horizontal"
            accentColor="#EF4444"
          />
        </div>

      </div>
    </section>
  );
};
