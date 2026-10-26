import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Modals
import { RequestInspectorModal } from './components/modals/RequestInspectorModal';
import { RequestQuoteModal } from './components/modals/RequestQuoteModal';
import { CapabilityStatementModal } from './components/modals/CapabilityStatementModal';
import { InspectorNetworkModal } from './components/modals/InspectorNetworkModal';

// Home Sections
import { HeroSection } from './components/sections/HeroSection';
import { MarketingStats } from './components/sections/MarketingStats';
import { FunctionsHubSection } from './components/sections/FunctionsHubSection';
import { FinanceBentoSection } from './components/sections/FinanceBentoSection';
import { CoreServicesBento } from './components/sections/CoreServicesBento';
import { FeaturesWithPanel } from './components/sections/FeaturesWithPanel';
import { HeroLiquidMetalSection } from './components/sections/HeroLiquidMetalSection';
import { DisciplinesMatrix } from './components/sections/DisciplinesMatrix';
import { WhyQualispect } from './components/sections/WhyQualispect';
import { GlobalInteractiveMap } from './components/sections/GlobalInteractiveMap';
import { FilterableProjects } from './components/sections/FilterableProjects';
import { QualitySystemSection } from './components/sections/QualitySystemSection';
import { GovernmentContractingSection } from './components/sections/GovernmentContractingSection';
import { CareersSection } from './components/sections/CareersSection';
import { GradientBlindsCTABanner } from './components/sections/GradientBlindsCTABanner';
import { ContactSection } from './components/sections/ContactSection';

// Dedicated Sub-Pages
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { VendorSurveillancePage } from './pages/VendorSurveillancePage';
import { IndustriesPage } from './pages/IndustriesPage';

// Floating Speed Dial Icons
import { Phone, MessageSquare, HardHat, FileText, ChevronUp } from 'lucide-react';

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

  // Sync with window hash for seamless back/forward browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages: PageId[] = [
        'home', 'about', 'services', 'vendor-surveillance', 'industries', 
        'global-coverage', 'projects', 'quality', 'government-contracting', 
        'careers', 'contact', 'request-inspector', 'request-quote'
      ];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
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
    setCurrentPage(page);
    window.location.hash = `/${page === 'home' ? '' : page}`;
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

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-stone-900 selection:bg-amber-500 selection:text-white antialiased">
      
      {/* Sticky Header */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        openInspectorModal={openInspectorModal}
        openQuoteModal={openQuoteModal}
      />

      {/* Main Page Rendering */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <HeroSection 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
              openQuoteModal={openQuoteModal}
            />
            <MarketingStats 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
              openQuoteModal={openQuoteModal}
            />
            <FunctionsHubSection 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
            />
            <FinanceBentoSection 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
            />
            <CoreServicesBento 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
            />
            <FeaturesWithPanel 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
            />
            <HeroLiquidMetalSection 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
              openQuoteModal={openQuoteModal}
            />
            <DisciplinesMatrix 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
            />
            <WhyQualispect 
              openInspectorModal={openInspectorModal}
              openQuoteModal={openQuoteModal}
            />
            <GlobalInteractiveMap 
              openInspectorModal={openInspectorModal}
            />
            <FilterableProjects 
              openInspectorModal={openInspectorModal}
            />
            <QualitySystemSection 
              openInspectorModal={openInspectorModal}
            />
            <GovernmentContractingSection 
              openCapabilityModal={openCapabilityModal}
              openQuoteModal={openQuoteModal}
            />
            <CareersSection 
              openInspectorNetworkModal={openInspectorNetworkModal}
            />
            <GradientBlindsCTABanner 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
              openQuoteModal={openQuoteModal}
            />
            <ContactSection 
              openInspectorModal={openInspectorModal}
            />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
            openQuoteModal={openQuoteModal}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
            openQuoteModal={openQuoteModal}
          />
        )}

        {currentPage === 'vendor-surveillance' && (
          <VendorSurveillancePage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
            openQuoteModal={openQuoteModal}
          />
        )}

        {currentPage === 'global-coverage' && (
          <div className="bg-white pt-24 sm:pt-28">
            <GlobalInteractiveMap openInspectorModal={openInspectorModal} />
          </div>
        )}

        {currentPage === 'projects' && (
          <div className="bg-white pt-24 sm:pt-28">
            <FilterableProjects openInspectorModal={openInspectorModal} />
          </div>
        )}

        {currentPage === 'quality' && (
          <div className="bg-white pt-24 sm:pt-28">
            <QualitySystemSection openInspectorModal={openInspectorModal} />
          </div>
        )}

        {currentPage === 'government-contracting' && (
          <div className="bg-white pt-24 sm:pt-28">
            <GovernmentContractingSection 
              openCapabilityModal={openCapabilityModal}
              openQuoteModal={openQuoteModal}
            />
          </div>
        )}

        {currentPage === 'careers' && (
          <div className="bg-white pt-24 sm:pt-28">
            <CareersSection openInspectorNetworkModal={openInspectorNetworkModal} />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="bg-white pt-24 sm:pt-28">
            <ContactSection openInspectorModal={openInspectorModal} />
          </div>
        )}

        {currentPage === 'request-inspector' && (
          <VendorSurveillancePage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
          />
        )}

        {currentPage === 'request-quote' && (
          <div className="bg-white py-16">
            <div className="max-w-3xl mx-auto px-4">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-black uppercase tracking-tight text-industrial-950">
                  Request a Formal Inspection Quotation (RFQ)
                </h1>
                <p className="text-sm text-steel-600 mt-2">
                  Complete the quick RFQ form or call our Houston office directly at 281-764-6224.
                </p>
              </div>
              <button
                onClick={() => openQuoteModal()}
                className="w-full py-4 bg-safety-500 hover:bg-safety-600 text-white font-bold text-sm uppercase rounded-xl shadow-lg"
              >
                Launch RFQ Modal Form
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer 
        setCurrentPage={navigateTo}
        openInspectorModal={openInspectorModal}
        openQuoteModal={openQuoteModal}
        openCapabilityModal={openCapabilityModal}
      />

      {/* Discreet Minimalist Scroll-to-Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-[#0B1528]/80 hover:bg-[#1E293B] text-zinc-300 hover:text-white border border-white/[0.12] shadow-2xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
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
