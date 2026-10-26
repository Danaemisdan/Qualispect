import React, { useState } from 'react';
import { 
  Globe2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Building2,
  HardHat
} from 'lucide-react';
import { regionsCoverageData, seoLocationsData } from '../../data/globalCoverageData';
import { RegionCoverage } from '../../types';

interface GlobalInteractiveMapProps {
  openInspectorModal: (initialData?: any) => void;
}

export const GlobalInteractiveMap: React.FC<GlobalInteractiveMapProps> = ({
  openInspectorModal
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('north-america');
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [coverageResult, setCoverageResult] = useState<string | null>(null);

  const currentRegion = regionsCoverageData.find(r => r.id === selectedRegionId) || regionsCoverageData[0];

  const handleCoverageSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchLocation.trim()) return;
    
    const term = searchLocation.toLowerCase();
    const matchedSeo = seoLocationsData.find(l => 
      l.name.toLowerCase().includes(term) ||
      l.country.toLowerCase().includes(term) ||
      l.state.toLowerCase().includes(term)
    );

    if (matchedSeo) {
      setCoverageResult(`ACTIVE NETWORK COVERAGE VERIFIED for ${matchedSeo.name}: Typical dispatch response 24–48 hours for ${matchedSeo.focus}.`);
    } else {
      setCoverageResult(`INSPECTION COVERAGE AVAILABLE in "${searchLocation}" through our international associate network. Submit vendor details for instant mobilization timeline.`);
    }
  };

  return (
    <div className="bg-[#FAFAF9] text-stone-900 py-24 relative overflow-hidden border-b border-stone-200/80">
      
      {/* Background blueprint details */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5 text-amber-700" />
            <span>GLOBAL COVERAGE &amp; FABRICATION HUBS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-sans uppercase">
            Global Projects Require Local Eyes.
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Industrial supply chains no longer stop at national borders. Qualispect supports clients whose equipment, vendors and projects are distributed across multiple geographic regions.
          </p>

          <p className="text-sm text-stone-600">
            Our model allows us to identify technical professionals near the location where inspection is required, helping clients reduce unnecessary travel overhead while maintaining rigorous, independent quality surveillance.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="flex flex-wrap items-center gap-2.5 pb-6 border-b border-stone-200">
          {regionsCoverageData.map((reg) => (
            <button
              key={reg.id}
              onClick={() => {
                setSelectedRegionId(reg.id);
                setCoverageResult(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                selectedRegionId === reg.id
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-700 hover:text-stone-950 border border-stone-200 hover:border-stone-300'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${selectedRegionId === reg.id ? 'text-amber-400' : 'text-stone-400'}`} />
              <span>{reg.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Region Detailed Console */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Region Deep Dive */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-800 font-bold tracking-widest block">
                  ACTIVE REGIONAL PROFILE
                </span>
                <h3 className="text-2xl font-bold text-stone-900 tracking-tight uppercase">
                  {currentRegion.name}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-right">
                  <span className="text-[10px] font-mono text-stone-500 block">Typical Mobilization:</span>
                  <span className="text-xs font-mono font-bold text-amber-700 flex items-center justify-end gap-1">
                    <Clock className="w-3 h-3" /> {currentRegion.averageMobilization}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed">
              {currentRegion.description}
            </p>

            {/* Countries Covered */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block">
                Primary Operational Countries:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentRegion.countries.map(c => (
                  <span key={c} className="px-3 py-1 bg-stone-100 rounded-lg text-xs font-mono font-semibold text-stone-800 border border-stone-200">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Major Manufacturing & Fabrication Hubs */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block">
                Key Industrial &amp; Fabrication Hubs:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 font-mono">
                {currentRegion.majorManufacturingHubs.map(hub => (
                  <div key={hub} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                    <span>{hub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disciplines Available */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block">
                Key Inspector Credentials In Region:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-600 font-mono">
                {currentRegion.disciplinesAvailable.map((disc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>{disc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA in card */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-stone-500">
                HQ: Houston, TX • Operational Hubs worldwide
              </span>
              <button
                onClick={() => openInspectorModal({ vendorCountry: currentRegion.countries[0] })}
                className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase px-5 py-2.5 rounded-full flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                <HardHat className="w-3.5 h-3.5 text-amber-400" />
                <span>Request Inspector in {currentRegion.name}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Check Inspector Coverage Interactive Tool */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Coverage Query Card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-900 uppercase tracking-tight">
                    Check Inspector Coverage
                  </h4>
                  <p className="text-xs text-stone-500">
                    Need inspection in a specific city or industrial corridor?
                  </p>
                </div>
              </div>

              <form onSubmit={handleCoverageSearch} className="space-y-3 font-mono">
                <div>
                  <label className="text-[11px] uppercase text-stone-600 block mb-1">
                    Enter City, State, or Country:
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Houston, Milan, Batam, Jubail, Birmingham"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-9 pr-3 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Search className="w-3.5 h-3.5 text-amber-400" />
                  <span>Check Inspector Availability</span>
                </button>
              </form>

              {/* Search Result Feedback */}
              {coverageResult && (
                <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-stone-800 space-y-3 animate-fade-in font-mono">
                  <div className="flex items-start gap-2 text-amber-900 font-semibold">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-amber-700" />
                    <span>{coverageResult}</span>
                  </div>

                  <button
                    onClick={() => openInspectorModal({ vendorCity: searchLocation })}
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-mono font-medium text-xs uppercase py-2.5 rounded-full flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-all"
                  >
                    <span>Proceed to Dispatch Request</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                  </button>
                </div>
              )}
            </div>

            {/* Quick SEO Locations Hub Matrix */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 space-y-3 shadow-sm">
              <span className="text-[11px] font-mono uppercase text-stone-600 font-bold tracking-wider block">
                Popular Regional Hubs:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono">
                {seoLocationsData.slice(0, 10).map((loc) => (
                  <button
                    key={loc.slug}
                    onClick={() => {
                      setSearchLocation(loc.name);
                      setCoverageResult(`ACTIVE NETWORK COVERAGE in ${loc.name} (${loc.country}): ${loc.focus}. Dispatch in 24–48 hours.`);
                    }}
                    className="text-[11px] bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 px-2.5 py-1 rounded-md border border-stone-200 transition-colors cursor-pointer"
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-stone-500 pt-1 italic font-mono">
                Services delivered through our vetted technical inspector network. Houston, Texas corporate headquarters.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
