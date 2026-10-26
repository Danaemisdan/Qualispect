import React, { useState } from 'react';
import { 
  Briefcase, 
  Filter, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Lock, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Search,
  HardHat
} from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { ProjectItem } from '../../types';

interface FilterableProjectsProps {
  openInspectorModal: (initialData?: any) => void;
}

export const FilterableProjects: React.FC<FilterableProjectsProps> = ({
  openInspectorModal
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedEquipment, setSelectedEquipment] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const industriesList = ['All', 'Oil & Gas', 'Energy & Power', 'Petrochemical & Process', 'Manufacturing', 'Pipeline & Infrastructure', 'Mining & Heavy Industry', 'Construction'];
  const equipmentList = ['All', 'Rotating Equipment', 'Valves & Piping', 'Pressure Equipment', 'Electrical & Instrumentation', 'Pipeline', 'Coating', 'Structural & Fabrication', 'Factory Acceptance Testing', 'Expediting'];
  const regionsList = ['All', 'North America', 'Europe', 'Middle East', 'Asia-Pacific', 'South America', 'Africa'];
  const servicesList = ['All', 'Third-Party Inspection', 'Vendor Surveillance', 'Factory Acceptance Testing', 'Expediting', 'Construction QA/QC'];

  const filteredProjects = projectsData.filter((item) => {
    if (selectedIndustry !== 'All' && item.industry !== selectedIndustry) return false;
    if (selectedEquipment !== 'All' && item.equipment !== selectedEquipment) return false;
    if (selectedRegion !== 'All' && item.region !== selectedRegion) return false;
    if (selectedService !== 'All' && item.service !== selectedService) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.standardsVerified.some(s => s.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedIndustry('All');
    setSelectedEquipment('All');
    setSelectedRegion('All');
    setSelectedService('All');
    setSearchQuery('');
  };

  return (
    <section className="py-24 bg-white text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      {/* Background dot matrix */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-amber-700" />
            <span>PAST PERFORMANCE &amp; FIELD RECORD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-sans uppercase">
            Experience That Speaks Through the Work
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Qualispect supports inspection assignments across multiple equipment categories, technical disciplines and severe-service project environments worldwide.
          </p>

          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-center gap-2 max-w-xl">
            <Lock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong className="text-stone-800">Confidentiality Note:</strong> To respect client and vendor proprietary agreements, representative project cases are presented without restricted identifiers.
            </span>
          </div>
        </div>

        {/* Multi-Facet Filter Controls Console */}
        <div className="bg-stone-50/80 border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-sm mb-10 space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-stone-200 gap-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-stone-900 tracking-wider">
              <Filter className="w-4 h-4 text-amber-600" />
              <span>FILTER PROJECT MATRIX</span>
              <span className="text-stone-500 font-normal">({filteredProjects.length} Records Found)</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search equipment, standard..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-stone-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 font-mono shadow-sm"
                />
              </div>

              {(selectedIndustry !== 'All' || selectedEquipment !== 'All' || selectedRegion !== 'All' || selectedService !== 'All' || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="text-xs font-mono font-bold text-amber-700 hover:text-amber-800 underline shrink-0 cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <label className="block text-stone-700 mb-1 uppercase font-bold text-[10px]">
                By Industry:
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-stone-800 font-medium focus:outline-none focus:border-amber-500 shadow-sm"
              >
                {industriesList.map(ind => <option key={ind} value={ind} className="bg-white text-stone-900">{ind}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-stone-700 mb-1 uppercase font-bold text-[10px]">
                By Equipment Category:
              </label>
              <select
                value={selectedEquipment}
                onChange={(e) => setSelectedEquipment(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-stone-800 font-medium focus:outline-none focus:border-amber-500 shadow-sm"
              >
                {equipmentList.map(eq => <option key={eq} value={eq} className="bg-white text-stone-900">{eq}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-stone-700 mb-1 uppercase font-bold text-[10px]">
                By Geographic Region:
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-stone-800 font-medium focus:outline-none focus:border-amber-500 shadow-sm"
              >
                {regionsList.map(reg => <option key={reg} value={reg} className="bg-white text-stone-900">{reg}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-stone-700 mb-1 uppercase font-bold text-[10px]">
                By Inspection Service:
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-stone-800 font-medium focus:outline-none focus:border-amber-500 shadow-sm"
              >
                {servicesList.map(svc => <option key={svc} value={svc} className="bg-white text-stone-900">{svc}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-stone-50 rounded-2xl p-12 text-center border border-stone-200 text-stone-600 space-y-3">
            <ShieldCheck className="w-12 h-12 text-amber-600 mx-auto opacity-70" />
            <h4 className="text-lg font-bold text-stone-900 uppercase">No Projects Found Matching Selected Criteria</h4>
            <p className="text-xs max-w-md mx-auto">
              We have extensive unlisted project experience across specialized equipment categories. Submit an inquiry for customized past performance data.
            </p>
            <button
              onClick={resetFilters}
              className="mt-2 bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase px-5 py-2 rounded-full shadow-sm cursor-pointer transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isExpanded = !!expandedCards[project.id];
              return (
                <div 
                  key={project.id}
                  className="rounded-2xl border border-stone-200 hover:border-stone-300 bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6 space-y-4">
                    {/* Top Tags */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-stone-100 border border-stone-200 text-amber-800 font-mono text-[10px] font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-stone-600 font-semibold bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                        {project.region}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-stone-900 leading-snug tracking-tight uppercase group-hover:text-stone-950 transition-colors">
                      {project.title}
                    </h3>

                    {/* Meta Fields */}
                    <div className="p-3 bg-stone-50 rounded-xl space-y-1.5 text-xs border border-stone-200 font-mono">
                      <div className="flex items-center justify-between">
                        <span className="text-stone-500">Location:</span>
                        <span className="font-semibold text-stone-800 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-amber-600" />
                          {project.location}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-stone-500">Industry:</span>
                        <span className="font-semibold text-stone-800">{project.industry}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-stone-500">Equipment:</span>
                        <span className="font-semibold text-amber-700">{project.equipment}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-stone-500">Service Scope:</span>
                        <span className="font-semibold text-stone-800">{project.service}</span>
                      </div>
                    </div>

                    {/* Scope Items */}
                    <div className="space-y-1.5 text-xs text-stone-600">
                      <span className="font-mono text-[10px] uppercase font-bold text-stone-500 block">
                        Verified Scope Points:
                      </span>
                      {project.scope.slice(0, isExpanded ? project.scope.length : 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                          <span className="text-[11px] leading-tight text-stone-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    {project.scope.length > 3 && (
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-[11px] font-mono font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer pt-1"
                      >
                        <span>{isExpanded ? 'Show Less Scope' : `+ ${project.scope.length - 3} More Scope Points`}</span>
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    )}

                    {/* Result Box */}
                    <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-xl text-xs space-y-1">
                      <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider block">
                        Assignment Result &amp; Outcome:
                      </span>
                      <p className="text-stone-700 text-[11px] leading-relaxed">
                        {project.result}
                      </p>
                    </div>

                    {/* Standards Chips */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.standardsVerified.map(std => (
                        <span key={std} className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono text-[10px] border border-stone-200">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="p-4 bg-stone-50/60 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-500 uppercase">NDA Protected</span>
                    <button
                      onClick={() => openInspectorModal({ 
                        equipmentType: project.equipment,
                        inspectionDiscipline: project.service,
                        vendorCity: project.location
                      })}
                      className="text-xs font-mono font-bold text-stone-900 hover:text-amber-700 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Request Similar Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
