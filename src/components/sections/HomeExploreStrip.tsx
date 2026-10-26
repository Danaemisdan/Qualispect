import React from 'react';
import { 
  Globe2, 
  Briefcase, 
  ShieldCheck, 
  Landmark, 
  ArrowRight,
  HardHat,
  ChevronRight
} from 'lucide-react';
import { PageId } from '../../types';
import { BjorkDecodeText } from '../ui/BjorkDecodeText';

interface HomeExploreStripProps {
  navigateTo: (page: PageId) => void;
}

export const HomeExploreStrip: React.FC<HomeExploreStripProps> = ({ navigateTo }) => {
  const portalCards = [
    {
      id: 'global-coverage' as PageId,
      icon: Globe2,
      tag: '45+ COUNTRIES',
      title: 'Global Coverage & Hubs',
      desc: 'Rapid 24–48 hour inspector mobilization across key manufacturing hubs in the Americas, Europe, Middle East, and Asia-Pacific.',
      action: 'Explore Global Network'
    },
    {
      id: 'projects' as PageId,
      icon: Briefcase,
      tag: 'PAST PERFORMANCE',
      title: 'Project Matrix & Scopes',
      desc: 'Proven track record safeguarding over $12B in critical capital equipment across offshore, LNG, pipeline, and refinery facilities.',
      action: 'View Project Matrix'
    },
    {
      id: 'quality' as PageId,
      icon: ShieldCheck,
      tag: 'ISO 17020 ALIGNED',
      title: 'Quality & Audit System',
      desc: 'Rigorous 9-step quality surveillance framework, strict MTR/PMI anti-counterfeit verification, and credential-vetted inspectors.',
      action: 'Review Quality System'
    },
    {
      id: 'government-contracting' as PageId,
      icon: Landmark,
      tag: 'CAGE: 7S2L7',
      title: 'Federal & Defense Desk',
      desc: 'Active SAM.gov registration, UEI: L3C9LLNA2KJ9, and defense-aligned technical inspection for federal contracting officers.',
      action: 'Federal Capability Sheet'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAF9] border-b border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/90 text-stone-700 text-xs font-mono font-medium tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>DEDICATED EXPLORATION HUBS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight uppercase font-sans">
              <BjorkDecodeText text="Technical Operations & Portals" />
            </h2>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Dive deeper into our international hub network, past performance case studies, quality compliance frameworks, and federal contracting credentials.
            </p>
          </div>

          <button
            onClick={() => navigateTo('about')}
            className="self-start md:self-auto text-xs font-mono font-medium text-stone-700 hover:text-stone-950 uppercase tracking-wider px-5 py-2.5 border border-stone-300 hover:border-stone-400 rounded-full bg-white hover:bg-stone-50 transition-all cursor-pointer shadow-2xs flex items-center gap-2"
          >
            <span>About Qualispect Inc.</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portalCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => navigateTo(card.id)}
                className="group p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-amber-50 border border-stone-200/80 group-hover:border-amber-200 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-stone-700 group-hover:text-amber-700 transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-stone-500 group-hover:text-amber-800 uppercase tracking-wider">
                      {card.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-stone-950 uppercase tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
                  <span>{card.action}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
