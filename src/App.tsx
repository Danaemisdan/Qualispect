import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Modals
import { RequestInspectorModal } from './components/modals/RequestInspectorModal';
import { RequestQuoteModal } from './components/modals/RequestQuoteModal';
import { CapabilityStatementModal } from './components/modals/CapabilityStatementModal';
import { InspectorNetworkModal } from './components/modals/InspectorNetworkModal';

// Home Landing Page Sections (Streamlined, Punchy, High-Impact)
import { HeroSection } from './components/sections/HeroSection';
import { MarketingStats } from './components/sections/MarketingStats';
import { FunctionsHubSection } from './components/sections/FunctionsHubSection';
import { FinanceBentoSection } from './components/sections/FinanceBentoSection';
import { HeroLiquidMetalSection } from './components/sections/HeroLiquidMetalSection';
import { HomeExploreStrip } from './components/sections/HomeExploreStrip';
import { GradientBlindsCTABanner } from './components/sections/GradientBlindsCTABanner';

// Dedicated Sub-Pages
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { VendorSurveillancePage } from './pages/VendorSurveillancePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { GlobalCoveragePage } from './pages/GlobalCoveragePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { QualityPage } from './pages/QualityPage';
import { GovernmentContractingPage } from './pages/GovernmentContractingPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

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
        {/* ======================================================== */}
        {/* 1. STREAMLINED HOME LANDING PAGE                        */}
        {/* ======================================================== */}
        {currentPage === 'home' && (
          <>
            {/* 1. Hero with Sapphire GlassFold & Isaiah Bjork badges */}
            <HeroSection 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
              openQuoteModal={openQuoteModal}
            />

            {/* 2. Key Metrics + Aadil Ghani Webhook Relay Graphic */}
            <MarketingStats 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
              openQuoteModal={openQuoteModal}
            />

            {/* 3. Lucas Markes 8-Node Hub + Aadil Ghani Deploy Pipeline */}
            <FunctionsHubSection 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
            />

            {/* 4. Roman Vasnev Finance Bento (Industrial Speed & Quality) */}
            <FinanceBentoSection 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
            />

            {/* 5. Liquid Metal Metallurgy & Testing Rigor Terminal */}
            <HeroLiquidMetalSection 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
              openQuoteModal={openQuoteModal}
            />

            {/* 6. Executive Portals Strip (Coverage, Projects, Quality, Government) */}
            <HomeExploreStrip 
              navigateTo={navigateTo}
            />

            {/* 7. Dev Brijosh Crimson WebGL Blinds Final CTA Banner */}
            <GradientBlindsCTABanner 
              navigateTo={navigateTo}
              openInspectorModal={openInspectorModal}
              openQuoteModal={openQuoteModal}
            />
          </>
        )}

        {/* ======================================================== */}
        {/* 2. DEDICATED SUB-PAGES                                  */}
        {/* ======================================================== */}
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
          <GlobalCoveragePage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
            openQuoteModal={openQuoteModal}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
            openQuoteModal={openQuoteModal}
          />
        )}

        {currentPage === 'quality' && (
          <QualityPage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
            openQuoteModal={openQuoteModal}
          />
        )}

        {currentPage === 'government-contracting' && (
          <GovernmentContractingPage 
            navigateTo={navigateTo}
            openCapabilityModal={openCapabilityModal}
            openQuoteModal={openQuoteModal}
          />
        )}

        {currentPage === 'careers' && (
          <CareersPage 
            navigateTo={navigateTo}
            openInspectorNetworkModal={openInspectorNetworkModal}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
            openQuoteModal={openQuoteModal}
          />
        )}

        {currentPage === 'request-inspector' && (
          <VendorSurveillancePage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
          />
        )}

        {currentPage === 'request-quote' && (
          <ContactPage 
            navigateTo={navigateTo}
            openInspectorModal={openInspectorModal}
            openQuoteModal={openQuoteModal}
          />
        )}
      </main>

      {/* 21st.dev Kedhareswer Naidu: Light Beam Footer with Giant Wordmark */}
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
