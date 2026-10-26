import React from 'react';
import { 
  Globe2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  HardHat,
  Phone,
  Mail
} from 'lucide-react';
import { PageId } from '../types';
import { GlobalInteractiveMap } from '../components/sections/GlobalInteractiveMap';
import { DevBrijoshBanner } from '../components/ui/DevBrijoshBanner';
import { BjorkDecodeText } from '../components/ui/BjorkDecodeText';

interface GlobalCoveragePageProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const GlobalCoveragePage: React.FC<GlobalCoveragePageProps> = ({
  navigateTo,
  openInspectorModal,
  openQuoteModal
}) => {
  const regionalHubs = [
    {
      region: 'Americas (Headquarters)',
      city: 'Houston, Texas, USA',
      address: '9801 Westheimer Road, Suite 300, Houston, TX 77042',
      focus: 'Gulf Coast Fabrication, Permian Equipment, Offshore Hubs, Mexico & Canada',
      sla: '24-Hour Dispatch'
    },
    {
      region: 'Europe & North Sea',
      city: 'London / Aberdeen / Milan',
      address: 'Serving United Kingdom, Italy, Germany, France, Norway',
      focus: 'High-Pressure Valves, Subsea Trees, Heavy Forgings & Turbomachinery',
      sla: '24–48 Hour Dispatch'
    },
    {
      region: 'Middle East',
      city: 'Dubai / Abu Dhabi / Dammam',
      address: 'Serving UAE, Saudi Arabia, Qatar, Oman, Kuwait',
      focus: 'Downstream Refineries, Offshore Wellheads, Line Pipe & Pressure Vessels',
      sla: '24–48 Hour Dispatch'
    },
    {
      region: 'Asia-Pacific',
      city: 'Singapore / Seoul / Tokyo / Shanghai',
      address: 'Serving Singapore, South Korea, Japan, China, Malaysia',
      focus: 'Shipyard Construction, FPSO Topside Modules, Mill Pipe & Rotating Gear',
      sla: '24–48 Hour Dispatch'
    }
  ];

  return (
    <div className="bg-[#FAFAF9] text-stone-900">
      
      {/* Hero Header */}
      <div className="bg-[#FAFAF9] pt-28 sm:pt-36 pb-16 relative overflow-hidden border-b border-stone-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-amber-600" />
              <span>PAGE 06 // WORLDWIDE TECHNICAL NETWORK</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans uppercase text-stone-900">
              <BjorkDecodeText text="Global Coverage & Hubs" />
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal">
              Equipment does not have to be manufactured nearby for you to maintain total quality visibility. Qualispect mobilizes certified inspectors to manufacturing facilities across 45+ industrial nations.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-800 font-mono text-xs">
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Active Reach</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">45+ Nations</span>
                <span className="text-emerald-700 text-[11px]">Direct Shop Attendance</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Mobilization SLA</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">24–48 Hours</span>
                <span className="text-amber-700 text-[11px]">Emergency Dispatch</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Network Capacity</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">1,200+ Techs</span>
                <span className="text-stone-600 text-[11px]">AWS, API, NACE Vetted</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-stone-400 block text-[10px] uppercase">Corporate HQ</span>
                <span className="text-xl font-bold text-stone-900 block mt-0.5">Houston, TX</span>
                <span className="text-stone-600 text-[11px]">Global Dispatch Desk</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Interactive Global Coverage Map Section */}
      <GlobalInteractiveMap openInspectorModal={openInspectorModal} />

      {/* Regional Operational Hubs */}
      <div className="py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block mb-2">
              COORDINATION ARCHITECTURE
            </span>
            <h2 className="text-3xl font-bold text-stone-900 uppercase tracking-tight font-sans">
              Primary Regional Hubs &amp; Coverage Centers
            </h2>
            <p className="text-stone-600 text-sm max-w-2xl mt-2 leading-relaxed">
              Our regional coordination teams handle time-zone alignment, vendor communications, document reviews, and local inspector dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalHubs.map((hub) => (
              <div 
                key={hub.city}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-stone-900 uppercase">{hub.region}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-800">
                      {hub.sla}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-stone-900 uppercase">
                    {hub.city}
                  </h3>
                  
                  <p className="text-xs text-stone-500 leading-relaxed font-mono">
                    {hub.address}
                  </p>

                  <div className="pt-2 text-xs text-stone-600">
                    <strong className="text-stone-800 block text-[11px] uppercase font-mono mb-1">Equipment Focus:</strong>
                    <span>{hub.focus}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <button
                    onClick={() => openInspectorModal({ location: hub.city })}
                    className="w-full text-center text-xs font-mono font-medium text-stone-800 hover:text-stone-950 uppercase tracking-wider py-2 bg-white rounded-lg border border-stone-300 hover:border-stone-400 transition-all shadow-2xs"
                  >
                    Dispatch In This Region
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dedicated Dev Brijosh Crimson CTA Banner */}
      <div className="py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DevBrijoshBanner 
            badgeText="RAPID INTERNATIONAL MOBILIZATION"
            headline="Need an Inspector on Site Tomorrow?"
            description="Our Houston dispatch team coordinates assignments 24/7 across 45+ countries. Connect with our technical coordinators for immediate mobilization."
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
