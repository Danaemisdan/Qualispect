import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck2, 
  Layers, 
  ArrowRight, 
  AlertCircle, 
  BookOpen, 
  Check, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { qualityNineSteps, standardsGroups } from '../../data/standardsData';
import VaultDoor from '../ui/isokit/aadil/VaultDoor';
import SecurityKey from '../ui/isokit/aadil/SecurityKey';
import { BjorkDecodeText } from '../ui/BjorkDecodeText';
import { DevBrijoshBanner } from '../ui/DevBrijoshBanner';

interface QualitySystemSectionProps {
  openInspectorModal: (initialData?: any) => void;
}

export const QualitySystemSection: React.FC<QualitySystemSectionProps> = ({
  openInspectorModal
}) => {
  const [activeTab, setActiveTab] = useState<'system' | 'inspector-certs' | 'standards'>('system');
  const [selectedOrg, setSelectedOrg] = useState<string>('API');

  const currentGroup = standardsGroups.find(g => g.org === selectedOrg) || standardsGroups[0];

  return (
    <section className="py-24 bg-[#FAFAF9] text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      {/* Background dot matrix */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>RIGOROUS SURVEILLANCE PROTOCOLS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-sans uppercase">
            <BjorkDecodeText text="Quality is Not a Slogan." trigger="inView" charset="blocks" /> <br />
            <span className="text-amber-700">It is a System.</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Clients engage third-party inspectors because independent quality verification matters. Qualispect's quality approach begins long before an inspector reaches the vendor facility.
          </p>

          <p className="text-xs text-stone-600 font-mono">
            <strong className="text-amber-800">COMPLIANCE NOTICE:</strong> Individual technical certifications (AWS CWI, API, AMPP) belong to assigned personnel. Corporate quality processes are aligned with ISO 9001:2015 management standards.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex border-b border-stone-200 mb-10 overflow-x-auto gap-4">
          <button
            onClick={() => setActiveTab('system')}
            className={`pb-4 px-2 text-xs font-mono font-bold tracking-wider uppercase transition-colors border-b-2 flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'system'
                ? 'border-amber-600 text-stone-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-600" />
            <span>The 9-Stage Quality System</span>
          </button>

          <button
            onClick={() => setActiveTab('inspector-certs')}
            className={`pb-4 px-2 text-xs font-mono font-bold tracking-wider uppercase transition-colors border-b-2 flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'inspector-certs'
                ? 'border-amber-600 text-stone-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Inspector Qualifications</span>
          </button>

          <button
            onClick={() => setActiveTab('standards')}
            className={`pb-4 px-2 text-xs font-mono font-bold tracking-wider uppercase transition-colors border-b-2 flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'standards'
                ? 'border-amber-600 text-stone-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Codes &amp; Standards Explorer</span>
          </button>
        </div>

        {/* TAB 1: 9-Stage Quality Workflow */}
        {activeTab === 'system' && (
          <div className="space-y-10 animate-fade-in">
            
            {/* Zero-Bypass Hold-Point Vault Showcase (@aadilghani1/vault-door) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>ZERO-BYPASS HOLD GATE POLICY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                  No Equipment Ships Without Physical Witness Sign-Off.
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  Our surveillance protocols act as an impenetrable quality gate at vendor facilities. If an ASME hydrostatic proof or API functional test point fails, the release certificate remains mechanically locked until an official NCR resolution is verified.
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-mono text-stone-500">
                  <span>100% Independent Witness</span>
                  <span>&bull;</span>
                  <span>24h Flash Reporting</span>
                  <span>&bull;</span>
                  <span className="text-emerald-700 font-bold">Zero NCR Gaps</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[420px] h-[360px] rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm">
                  <VaultDoor />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualityNineSteps.map((step) => (
                <div 
                  key={step.step}
                  className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <span className="text-2xl font-bold font-mono text-amber-700 block">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-stone-900 uppercase tracking-tight group-hover:text-stone-950 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                    <span>Stage {step.step} of 09</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                </div>
              ))}
            </div>

            {/* ISO 9001:2015 Management System Banner (Dev Brijosh Style) */}
            <DevBrijoshBanner
              eyebrow="MANAGEMENT FRAMEWORK"
              tag="ISO 9001:2015 Aligned Processes"
              title="Audited Inspection & Test Plan (ITP) Execution"
              description="Our corporate operations mandate structured assignment reviews, standardized NCR workflows, verified calibration logs, and full record archiving for the lifetime of your capital project."
              primaryButtonText="Request Quality Briefing"
              primaryButtonAction={() => openInspectorModal({ inspectionDiscipline: 'Quality Management & ITP Execution' })}
              layout="horizontal"
              accentColor="#EF4444"
            />
          </div>
        )}

        {/* TAB 2: Inspector Qualifications */}
        {activeTab === 'inspector-certs' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Security Key Inspector Sign-off Showcase (@aadilghani1/security-key) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>CRYPTOGRAPHIC INSPECTOR SIGN-OFF</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                  Authenticated Technical Release Signatures.
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  Every Daily Inspection Report (IDR), punch list, and certificate of release is cryptographically signed by assigned accredited personnel (AWS CWI, API 510/570, CSWIP, NACE).
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-mono text-stone-500">
                  <span>FIPS 140-3 Compliant</span>
                  <span>&bull;</span>
                  <span>GPS Timestamped Photos</span>
                  <span>&bull;</span>
                  <span className="text-emerald-700 font-bold">1:1 Inspector Accountability</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[420px] h-[360px] rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm">
                  <SecurityKey />
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm text-left">
              <h3 className="text-lg font-bold text-stone-900 mb-2 uppercase">
                Industry-Recognized Technical Credentials
              </h3>
              <p className="text-xs text-stone-600 max-w-2xl leading-relaxed">
                Depending upon assignment specifications, our professionals hold active credentials issued by recognized accreditation bodies:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-3 transition-all">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">WELDING QA/QC</span>
                <h4 className="text-base font-bold text-stone-900 uppercase">AWS CWI / SCWI &amp; CSWIP</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  American Welding Society Certified Welding Inspectors (CWI) and CSWIP 3.1/3.2 specialists qualified for structural steel, pressure vessels, and piping.
                </p>
                <div className="pt-2 text-[11px] font-mono text-stone-500">AWS QC1 • CSWIP Scheme</div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-3 transition-all">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">PRESSURE EQUIPMENT</span>
                <h4 className="text-base font-bold text-stone-900 uppercase">API 510, 570, 653, 1169</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  American Petroleum Institute certified inspectors specializing in pressure vessels (510), piping (570), aboveground tanks (653), and pipeline construction (1169).
                </p>
                <div className="pt-2 text-[11px] font-mono text-stone-500">API Individual Certification Programs</div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-3 transition-all">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">PROTECTIVE COATINGS</span>
                <h4 className="text-base font-bold text-stone-900 uppercase">AMPP / NACE Levels II &amp; III</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Association for Materials Protection and Performance (formerly NACE) certified coating inspectors for abrasive blasting, holiday detection, and DFT compliance.
                </p>
                <div className="pt-2 text-[11px] font-mono text-stone-500">AMPP SP0188 • SSPC SP-10</div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-3 transition-all">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">NON-DESTRUCTIVE EXAMINATION</span>
                <h4 className="text-base font-bold text-stone-900 uppercase">ASNT &amp; PCN Level II / III</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Certified technicians for radiographic film review (RT), ultrasonic testing (UT), phased array (PAUT), magnetic particle (MT), and liquid penetrant (PT).
                </p>
                <div className="pt-2 text-[11px] font-mono text-stone-500">ASNT SNT-TC-1A • ISO 9712</div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-3 transition-all">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">ELECTRICAL &amp; HAZARDOUS</span>
                <h4 className="text-base font-bold text-stone-900 uppercase">CompEx &amp; IEEE E&amp;I Leads</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Hazardous area certified inspectors (CompEx 01–04) verifying ATEX / IECEx compliant switchgear, loop calibration, and electrical FAT protocols.
                </p>
                <div className="pt-2 text-[11px] font-mono text-stone-500">IEC 60079 • NFPA 70</div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm space-y-3 transition-all">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">ENGINEERING &amp; PROJECT</span>
                <h4 className="text-base font-bold text-stone-900 uppercase">Degreed Engineers &amp; Specialists</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Mechanical, metallurgical, and civil engineers supporting complex test witnessing, root cause failure analysis, and supplier quality audits.
                </p>
                <div className="pt-2 text-[11px] font-mono text-stone-500">B.S. / Professional Engineers (PE)</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Codes & Standards Explorer */}
        {activeTab === 'standards' && (
          <div className="space-y-8 animate-fade-in">
            {/* Standards Org Selector */}
            <div className="flex flex-wrap gap-2">
              {standardsGroups.map(group => (
                <button
                  key={group.org}
                  onClick={() => setSelectedOrg(group.org)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer shadow-sm ${
                    selectedOrg === group.org
                      ? 'bg-stone-900 text-white'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {group.org}
                </button>
              ))}
            </div>

            {/* Standards Details Table */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 uppercase font-sans">
                    {currentGroup.fullName} ({currentGroup.org})
                  </h3>
                  <p className="text-xs text-stone-600">
                    Project inspection criteria and test protocols routinely audited by Qualispect personnel.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {currentGroup.commonStandards.length} Codes Cataloged
                </span>
              </div>

              <div className="divide-y divide-stone-100">
                {currentGroup.commonStandards.map(std => (
                  <div key={std.code} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="space-y-0.5 sm:max-w-xs">
                      <span className="font-mono font-bold text-stone-900 text-sm block">
                        {std.code}
                      </span>
                      <span className="text-stone-700 text-xs">
                        {std.title}
                      </span>
                    </div>

                    <div className="text-stone-600 text-xs font-mono sm:text-right bg-stone-50 sm:bg-transparent p-2 sm:p-0 rounded border sm:border-none border-stone-200">
                      <span className="text-[10px] text-stone-500 uppercase block sm:hidden">Application:</span>
                      {std.application}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-stone-500 italic font-mono">
              Actual applicable codes, editions, and project-specific addenda are governed strictly by the client's purchase order and approved ITP.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
