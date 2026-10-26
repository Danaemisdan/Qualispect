import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  HardHat, 
  FileText, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { servicesData } from '../data/servicesData';
import { BjorkDecodeText } from './ui/BjorkDecodeText';

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
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navQuoteHovered, setNavQuoteHovered] = useState(false);
  const [navInspectorHovered, setNavInspectorHovered] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Auto-hide navbar when scrolling down on desktop/laptop; reveal when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const diff = latest - previous;
    
    // Near top: always visible
    if (latest < 40) {
      setIsVisible(true);
    } 
    // Scrolling down by more than 8px past the hero header: slide out of view
    else if (diff > 8 && latest > 80) {
      setIsVisible(false);
      setServicesDropdownOpen(false);
    } 
    // Scrolling up by more than 8px: reveal navbar
    else if (diff < -8) {
      setIsVisible(true);
    }
    
    lastScrollY.current = latest;
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryNavLinks: { id: PageId; label: string }[] = [
    { id: 'industries', label: 'Industries' },
    { id: 'global-coverage', label: 'Coverage' },
    { id: 'about', label: 'About' },
    { id: 'quality', label: 'Quality' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Fixed Header Container with Smart Auto-Hide Slide Transition */}
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          duration: 0.28,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none"
      >
        {/* Floating Capsule Bar */}
        <nav className="pointer-events-auto relative flex items-center justify-between rounded-full border border-stone-200/90 bg-white/95 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-4 sm:px-5 py-2 max-w-6xl w-full transition-all">

          {/* ======================================================== */}
          {/* 1. BRAND LOGO (Left)                                     */}
          {/* ======================================================== */}
          <div 
            onClick={() => navigateTo('home')} 
            className="flex items-center cursor-pointer shrink-0 select-none py-0.5"
          >
            <Logo size="sm" variant="light" />
          </div>

          {/* ======================================================== */}
          {/* 2. CENTER DESKTOP NAVIGATION LINKS (Hidden on Mobile)   */}
          {/* ======================================================== */}
          <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-stone-600">
            
            {/* Services with Mega Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  currentPage === 'services' || currentPage === 'vendor-surveillance'
                    ? 'text-stone-900 bg-stone-100 font-semibold' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-amber-700' : 'text-stone-400'
                }`} />
              </button>

              {/* Glass Mega Dropdown */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-[320px] pt-2.5 z-50"
                  >
                    <div className="bg-white/95 border border-stone-200 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-2 backdrop-blur-2xl divide-y divide-stone-100 text-stone-800">
                      
                      <div className="p-1.5">
                        <button
                          onClick={() => navigateTo('services')}
                          className="w-full text-left px-3 py-2 text-xs font-bold text-amber-800 hover:bg-stone-50 rounded-xl flex items-center justify-between transition-colors font-mono"
                        >
                          <span>ALL 10 TECHNICAL SERVICES</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="py-1 max-h-[300px] overflow-y-auto space-y-0.5">
                        {servicesData.slice(0, 6).map((svc) => (
                          <button
                            key={svc.id}
                            onClick={() => {
                              if (svc.id === 'third-party-inspection') {
                                navigateTo('vendor-surveillance');
                              } else {
                                navigateTo('services');
                              }
                            }}
                            className="w-full text-left px-3 py-2 text-xs text-stone-700 hover:text-stone-950 hover:bg-stone-50 rounded-xl flex items-center justify-between transition-colors group cursor-pointer"
                          >
                            <span className="truncate">{svc.title}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-stone-400 group-hover:translate-x-0.5 transition-all" />
                          </button>
                        ))}
                      </div>

                      <div className="p-2 bg-stone-50/60 rounded-b-xl flex items-center justify-between text-[11px] font-mono text-stone-500">
                        <span>Houston Technical Desk</span>
                        <a href="tel:2817646224" className="text-stone-900 font-semibold hover:underline">
                          281-764-6224
                        </a>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Primary Nav Links */}
            {primaryNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  currentPage === link.id
                    ? 'text-stone-950 bg-stone-100 font-semibold' 
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => navigateTo('projects')}
              className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                currentPage === 'projects'
                  ? 'text-stone-950 bg-stone-100 font-semibold' 
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
              }`}
            >
              Projects
            </button>

          </div>

          {/* ======================================================== */}
          {/* 3. DESKTOP ACTION BUTTONS (Right - Hidden on Mobile)     */}
          {/* ======================================================== */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            
            {/* Direct Houston Phone Icon Pill */}
            <a
              href="tel:2817646224"
              title="Call Houston Operations Desk: 281-764-6224"
              className="flex items-center justify-center w-8.5 h-8.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-stone-700" />
            </a>

            {/* Request a Quote Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                openQuoteModal();
              }}
              onMouseEnter={() => setNavQuoteHovered(true)}
              onMouseLeave={() => setNavQuoteHovered(false)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-all whitespace-nowrap cursor-pointer group"
            >
              <FileText className="w-3.5 h-3.5 text-stone-500" />
              <BjorkDecodeText 
                text="Quote" 
                isHovered={navQuoteHovered}
                charset="matrix"
                speed={16}
                accentColor="#D97706"
              />
            </button>

            {/* Primary Action Button (Generously Padded) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                openInspectorModal();
              }}
              onMouseEnter={() => setNavInspectorHovered(true)}
              onMouseLeave={() => setNavInspectorHovered(false)}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-stone-900 hover:bg-black transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-sm hover:shadow active:scale-95 tracking-wide group"
            >
              <BjorkDecodeText 
                text="Request an Inspector" 
                isHovered={navInspectorHovered}
                charset="matrix"
                speed={16}
                accentColor="#F59E0B"
              />
              <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

          </div>

          {/* ======================================================== */}
          {/* 4. SIMPLE MOBILE MENU ICON (Right Side on Mobile Only)   */}
          {/* ======================================================== */}
          <div className="flex lg:hidden items-center shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4.5 h-4.5 text-stone-900" />
              ) : (
                <Menu className="w-4.5 h-4.5 text-stone-900" />
              )}
            </button>
          </div>

        </nav>
      </motion.header>

      {/* ======================================================== */}
      {/* 5. MOBILE RESPONSIVE DRAWER                              */}
      {/* ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-stone-900/30 backdrop-blur-sm"
            />

            {/* Light Glass Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-18 left-4 right-4 max-w-lg mx-auto bg-white/95 border border-stone-200 rounded-3xl p-5 shadow-[0_24px_70px_rgba(0,0,0,0.15)] backdrop-blur-3xl text-stone-900 space-y-4"
            >
              
              {/* Quick Dual Actions */}
              <div className="grid grid-cols-2 gap-2.5 pb-3 border-b border-stone-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openInspectorModal();
                  }}
                  className="w-full bg-stone-900 text-white hover:bg-black font-medium text-xs tracking-wide uppercase py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                >
                  <HardHat className="w-3.5 h-3.5 text-amber-400" />
                  <span>Inspector</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 font-medium text-xs tracking-wide uppercase py-3 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <FileText className="w-3.5 h-3.5 text-stone-600" />
                  <span>Quote (RFQ)</span>
                </button>
              </div>

              {/* Navigation Links Grid */}
              <div className="grid grid-cols-2 gap-1 text-sm font-medium">
                <button
                  onClick={() => navigateTo('home')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                    currentPage === 'home' ? 'bg-stone-100 text-stone-950 font-semibold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  Home
                </button>

                <button
                  onClick={() => navigateTo('services')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                    currentPage === 'services' ? 'bg-stone-100 text-stone-950 font-semibold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  10 Services
                </button>

                <button
                  onClick={() => navigateTo('vendor-surveillance')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                    currentPage === 'vendor-surveillance' ? 'bg-stone-100 text-stone-950 font-semibold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  Vendor Surveillance
                </button>

                <button
                  onClick={() => navigateTo('industries')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                    currentPage === 'industries' ? 'bg-stone-100 text-stone-950 font-semibold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  Industries
                </button>

                <button
                  onClick={() => navigateTo('global-coverage')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                    currentPage === 'global-coverage' ? 'bg-stone-100 text-stone-950 font-semibold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  Coverage
                </button>

                <button
                  onClick={() => navigateTo('about')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                    currentPage === 'about' ? 'bg-stone-100 text-stone-950 font-semibold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  About
                </button>

                <button
                  onClick={() => navigateTo('quality')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                    currentPage === 'quality' ? 'bg-stone-100 text-stone-950 font-semibold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  Quality
                </button>

                <button
                  onClick={() => navigateTo('contact')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                    currentPage === 'contact' ? 'bg-stone-100 text-stone-950 font-semibold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  Contact
                </button>
              </div>

              {/* Bottom Hotline in Drawer */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
                <a 
                  href="tel:2817646224" 
                  className="text-stone-900 font-bold flex items-center gap-1.5 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-600" />
                  <span>Houston: 281-764-6224</span>
                </a>
                <span className="text-[11px] text-stone-400">24/7 Global Dispatch</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
