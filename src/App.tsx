import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Client13PageTemplate } from './components/Client13PageTemplate';
import { pages13Data, Page13Data } from './data/pages13Data';

// Conversion Modals
import { RequestInspectorModal } from './components/modals/RequestInspectorModal';
import { RequestQuoteModal } from './components/modals/RequestQuoteModal';
import { CapabilityStatementModal } from './components/modals/CapabilityStatementModal';
import { InspectorNetworkModal } from './components/modals/InspectorNetworkModal';

// Floating UI Icons
import { ChevronUp } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Modal States
  const [isInspectorModalOpen, setIsInspectorModalOpen] = useState(false);
  const [inspectorModalInitial, setInspectorModalInitial] = useState<any>(undefined);
  
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCapabilityModalOpen, setIsCapabilityModalOpen] = useState(false);
  const [isInspectorNetworkModalOpen, setIsInspectorNetworkModalOpen] = useState(false);
  const [networkModalJobTitle, setNetworkModalJobTitle] = useState<string | undefined>(undefined);

  // Canonical mapping of all hash routes & aliases to the 13 exact pages
  const pageRouteMap: Record<string, string> = {
    // 00. Home
    '': 'home',
    'home': 'home',
    // 01. About
    'about': 'about',
    // 02. Services
    'services': 'services',
    // 03. Third-Party Inspection
    'third-party-inspection': 'third-party-inspection',
    // 04. Vendor Inspection & Source Surveillance
    'vendor-inspection-source-surveillance': 'vendor-inspection-source-surveillance',
    'vendor-surveillance': 'vendor-inspection-source-surveillance',
    // 05. Industries
    'industries': 'industries',
    // 06. Global Coverage
    'global-coverage': 'global-coverage',
    // 07. Projects & Past Performance
    'projects-past-performance': 'projects-past-performance',
    'projects': 'projects-past-performance',
    // 08. Quality & Certifications
    'quality-certifications': 'quality-certifications',
    'quality': 'quality-certifications',
    // 09. Government Contracting
    'government-contracting': 'government-contracting',
    // 10. Careers & Inspector Network
    'careers-inspector-network': 'careers-inspector-network',
    'careers': 'careers-inspector-network',
    // 11. Contact & Request a Quote
    'contact-request-a-quote': 'contact-request-a-quote',
    'contact': 'contact-request-a-quote',
    'request-quote': 'contact-request-a-quote',
    // 12. Request an Inspector
    'request-an-inspector': 'request-an-inspector',
    'request-inspector': 'request-an-inspector'
  };

  // Sync with window hash for seamless back/forward browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
      const mappedId = pageRouteMap[hash];
      if (mappedId) {
        setCurrentPage(mappedId as PageId);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when page changes
  const navigateTo = (page: PageId) => {
    const canonicalKey = pageRouteMap[page] || page;
    setCurrentPage(canonicalKey as PageId);
    window.location.hash = `/${canonicalKey === 'home' ? '' : canonicalKey}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openInspectorModal = (initialData?: any) => {
    setInspectorModalInitial(initialData);
    setIsInspectorModalOpen(true);
  };

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const openCapabilityModal = () => {
    setIsCapabilityModalOpen(true);
  };

  const openInspectorNetworkModal = (jobTitle?: string) => {
    setNetworkModalJobTitle(jobTitle);
    setIsInspectorNetworkModalOpen(true);
  };

  // Resolve canonical page data from pages13Data
  const activeCanonicalKey = pageRouteMap[currentPage] || 'home';
  const currentActivePageData: Page13Data = pages13Data[activeCanonicalKey] || pages13Data['home'];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FA] text-slate-900 selection:bg-amber-500 selection:text-white antialiased font-sans">
      
      {/* 1. Official White Header with 13-Page Navigation & Switcher */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        openInspectorModal={openInspectorModal}
        openQuoteModal={openQuoteModal}
      />

      {/* 2. Main Page Template Rendering the Selected Page (00 through 12) */}
      <main className="flex-grow">
        <Client13PageTemplate 
          pageData={currentActivePageData}
          navigateTo={navigateTo}
          openInspectorModal={openInspectorModal}
          openQuoteModal={openQuoteModal}
          openCapabilityModal={openCapabilityModal}
        />
      </main>

      {/* 3. Official Kedhareswer Naidu Light Beam Footer with Giant Wordmark & 13-Page Directory */}
      <Footer 
        setCurrentPage={navigateTo}
        openInspectorModal={openInspectorModal}
        openQuoteModal={openQuoteModal}
        openCapabilityModal={openCapabilityModal}
      />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-[#08253E] hover:bg-[#0D3B62] text-white border border-white/20 shadow-2xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Global Conversion Modals */}
      <RequestInspectorModal 
        isOpen={isInspectorModalOpen}
        onClose={() => setIsInspectorModalOpen(false)}
        initialDiscipline={inspectorModalInitial?.inspectionDiscipline}
      />

      <RequestQuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      <CapabilityStatementModal 
        isOpen={isCapabilityModalOpen}
        onClose={() => setIsCapabilityModalOpen(false)}
      />

      <InspectorNetworkModal 
        isOpen={isInspectorNetworkModalOpen}
        onClose={() => setIsInspectorNetworkModalOpen(false)}
        targetJobTitle={networkModalJobTitle}
      />

    </div>
  );
}

export default App;
