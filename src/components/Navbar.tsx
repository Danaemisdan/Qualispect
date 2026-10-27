import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  HardHat, 
  FileText, 
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { all13PagesList } from '../data/pages13Data';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
  openQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  openInspectorModal,
  openQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 4 Top-level categories matching client mockups
  const navCategories = [
    {
      label: 'ABOUT',
      activeOn: ['about', 'quality-certifications', 'quality', 'careers-inspector-network', 'careers'],
      items: [
        { id: 'about' as PageId, num: '01', title: 'About Qualispect', desc: 'Our mission, approach, and engineering foundation' },
        { id: 'quality-certifications' as PageId, num: '08', title: 'Quality & Certifications', desc: 'ISO 9001/17020 QMS and inspector qualification' },
        { id: 'careers-inspector-network' as PageId, num: '10', title: 'Careers & Inspector Network', desc: 'Join our international roster of certified inspectors' }
      ]
    },
    {
      label: 'SERVICES',
      activeOn: ['services', 'third-party-inspection', 'vendor-inspection-source-surveillance', 'vendor-surveillance', 'government-contracting'],
      items: [
        { id: 'services' as PageId, num: '02', title: 'Services Overview', desc: 'Vendor surveillance, QA/QC, FAT, and expediting' },
        { id: 'third-party-inspection' as PageId, num: '03', title: 'Third-Party Inspection', desc: 'Independent shop floor verification & witness' },
        { id: 'vendor-inspection-source-surveillance' as PageId, num: '04', title: 'Vendor Inspection & Surveillance', desc: 'Your eyes at the vendor: 5-step surveillance' },
        { id: 'government-contracting' as PageId, num: '09', title: 'Government Contracting', desc: 'SAM.gov registered (CAGE 7S2L7, UEI L3C9LLNA2KJ9)' }
      ]
    },
    {
      label: 'INDUSTRIES',
      activeOn: ['industries', 'projects-past-performance', 'projects', 'global-coverage'],
      items: [
        { id: 'industries' as PageId, num: '05', title: 'Industries', desc: 'Oil & Gas, Power, Petrochemical, Infrastructure' },
        { id: 'projects-past-performance' as PageId, num: '07', title: 'Projects & Past Performance', desc: 'Verified case studies and project track record' },
        { id: 'global-coverage' as PageId, num: '06', title: 'Global Coverage', desc: 'Local accredited inspectors in 45+ countries' }
      ]
    },
    {
      label: 'CONTACT',
      activeOn: ['contact-request-a-quote', 'contact', 'request-an-inspector', 'request-inspector', 'request-quote'],
      items: [
        { id: 'contact-request-a-quote' as PageId, num: '11', title: 'Contact & Request a Quote', desc: 'Houston HQ coordination desk and 4h RFQ proposals' },
        { id: 'request-an-inspector' as PageId, num: '12', title: 'Request an Inspector', desc: 'Deploy an accredited inspector within 24–48 hours' }
      ]
    }
  ];

  return (
    <header ref={navRef} className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs font-sans">
      
      {/* Top Navigation Bar (Clean White Background strictly matching mockups) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => navigateTo('home')}
            className="cursor-pointer py-2 group flex items-center gap-3 select-none"
          >
            <Logo variant="light" size="md" />
          </div>

          {/* Desktop Navigation Links (HOME, ABOUT, SERVICES, INDUSTRIES, CONTACT) */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
            
            <button
              onClick={() => navigateTo('home')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                currentPage === 'home' 
                  ? 'text-[#F97316] bg-orange-50' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              HOME
            </button>

            {navCategories.map((cat) => {
              const isActive = cat.activeOn.includes(currentPage as string);
              const isOpen = activeDropdown === cat.label;

              return (
                <div key={cat.label} className="relative">
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : cat.label)}
                    onMouseEnter={() => setActiveDropdown(cat.label)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                      isActive 
                        ? 'text-[#F97316] bg-orange-50' 
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${isOpen ? 'rotate-180 text-[#F97316]' : 'text-slate-400'}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div 
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150"
                    >
                      <div className="px-3 py-2 border-b border-slate-100 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          QUALISPECT • {cat.label} PAGES
                        </span>
                      </div>
                      <div className="space-y-1">
                        {cat.items.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => navigateTo(item.id)}
                            className="p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group flex items-start gap-2.5"
                          >
                            <span className="text-[10px] font-bold text-[#F97316] bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100 shrink-0 mt-0.5">
                              {item.num}
                            </span>
                            <div>
                              <span className="text-xs font-bold text-slate-800 group-hover:text-[#F97316] transition-colors block">
                                {item.title}
                              </span>
                              <span className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                                {item.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          </nav>

          {/* Right: Primary Orange CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openInspectorModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold tracking-wider uppercase shadow-sm shadow-orange-950/20 transition-all cursor-pointer active:scale-[0.98]"
            >
              <HardHat className="w-3.5 h-3.5" />
              <span>REQUEST AN INSPECTOR</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => openInspectorModal()}
              className="px-3 py-1.5 rounded-lg bg-[#F97316] text-white text-[11px] font-bold uppercase shadow-sm"
            >
              DISPATCH
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slide-Down */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto text-left shadow-xl">
          <div className="text-xs font-bold uppercase text-slate-400 pb-2 border-b border-slate-100">
            Navigation Menu (13 Pages)
          </div>

          <div className="space-y-1">
            {all13PagesList.map((p) => (
              <button
                key={p.pageNumber}
                onClick={() => navigateTo(p.id)}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-bold text-left transition-colors ${
                  currentPage === p.id 
                    ? 'bg-orange-50 text-[#F97316]' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400">{p.pageNumber}</span>
                  <span>{p.pageTitle}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openInspectorModal();
              }}
              className="w-full py-3 rounded-lg bg-[#F97316] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
            >
              <HardHat className="w-4 h-4" />
              <span>Request an Inspector</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full py-3 rounded-lg bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote (RFQ)</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
