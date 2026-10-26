import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  FileCheck2, 
  Activity, 
  Layers, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  HardHat,
  Search,
  Check,
  Zap,
  Globe2,
  FileText
} from 'lucide-react';
import { PageId } from '../../types';
import { DecodeText } from '../ui/DecodeText';
import { BjorkDecodeText } from '../ui/BjorkDecodeText';
import UsageMeter from '../ui/isokit/aadil/UsageMeter';

interface FeaturesWithPanelProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
}

interface FeatureItem {
  id: string;
  step: string;
  title: string;
  shortDesc: string;
  alt: string;
  panelData: {
    category: string;
    headline: string;
    subheadline: string;
    specs: string[];
    metrics: { label: string; value: string }[];
    statusBadge: string;
    statusColor: string;
    interactiveType: 'itp' | 'pmi' | 'fat' | 'idr' | 'expediting';
  };
}

const featuresData: FeatureItem[] = [
  {
    id: 'itp-surveillance',
    step: '1',
    title: 'Critical ITP Hold-Point Surveillance',
    shortDesc: 'Mandatory witness & hold verification at vendor shops before stage advancement.',
    alt: 'Inspection and Test Plan hold point surveillance dashboard',
    panelData: {
      category: 'QUALITY ASSURANCE ARCHITECTURE',
      headline: 'Zero-Bypass Hold Point Enforcement',
      subheadline: 'Physical presence before pressure boundary closure, welding, or machining progression.',
      specs: ['ISO 17020 Compliant', 'ASME Sec VIII Div 1 & 2', 'API 650 / API 620', 'AWS D1.1 Structural'],
      metrics: [
        { label: 'Hold Point Clearance', value: '100% Verified' },
        { label: 'Average Mobilization', value: '24–48 Hours' }
      ],
      statusBadge: 'HOLD CLEARED',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      interactiveType: 'itp'
    }
  },
  {
    id: 'pmi-mtr',
    step: '2',
    title: 'PMI Verification & MTR Metallurgy Audits',
    shortDesc: 'Portable XRF alloy verification and EN 10204 3.1/3.2 mill certificate cross-checks.',
    alt: 'Positive material identification and mill test certificate verification',
    panelData: {
      category: 'METALLURGY & TRACEABILITY',
      headline: 'Defeating Counterfeit & Non-Spec Materials',
      subheadline: '100% positive alloy verification at receiving before torch touches metal.',
      specs: ['EN 10204 3.1 & 3.2', 'NACE MR0175 / ISO 15156', 'ASTM A182 / A350', 'XRF Spectrometry'],
      metrics: [
        { label: 'Heat No. Match', value: 'Verified 1:1' },
        { label: 'Chemical Elements', value: 'Cr, Ni, Mo, C, S' }
      ],
      statusBadge: 'MTR 3.1 AUTHENTICATED',
      statusColor: 'text-amber-800 bg-amber-50 border-amber-200',
      interactiveType: 'pmi'
    }
  },
  {
    id: 'fat-witnessing',
    step: '3',
    title: 'Factory Acceptance Testing (FAT) Witness',
    shortDesc: 'Independent witnessing of hydrostatic proofs, mechanical run tests (MRT), and trips.',
    alt: 'Factory acceptance testing hydrostatic and mechanical run witnessing',
    panelData: {
      category: 'DYNAMIC PERFORMANCE TESTING',
      headline: 'Full-Scope Test Stand Witnessing',
      subheadline: 'Verification of vibration FFT, bearing temps, hydrostatic shell pressure, and NPSH.',
      specs: ['API 610 12th Ed Pumps', 'API 617 Centrifugal Comp', 'API 6D Pipeline Valves', 'ASME B16.34'],
      metrics: [
        { label: 'Hydro Proof Hold', value: '1.5x MAWP (4h)' },
        { label: 'Vibration Velocity', value: '< 1.8 mm/s RMS' }
      ],
      statusBadge: 'FAT TEST WITNESSED',
      statusColor: 'text-sky-800 bg-sky-50 border-sky-200',
      interactiveType: 'fat'
    }
  },
  {
    id: 'idr-reporting',
    step: '4',
    title: '24-Hour Electronic IDR Flash Dossier',
    shortDesc: 'Digital Inspection Daily Reports with photo evidence and signed release certificates.',
    alt: '24-hour electronic inspection daily reporting and digital dossiers',
    panelData: {
      category: 'DIGITAL SURVEILLANCE TELEMETRY',
      headline: 'Rapid 24-Hour Field Intelligence',
      subheadline: 'Know vendor shop outcomes the same day with verified photographic punch lists.',
      specs: ['Same-Day Flash Notification', 'Instant NCR Log Triggers', 'GPS Timestamped Photos', 'Houston QA Desk Sign-off'],
      metrics: [
        { label: 'Report Turnaround', value: '< 24 Hours' },
        { label: 'Cloud Access SLA', value: 'Immediate' }
      ],
      statusBadge: 'IDR ISSUED & SYNCED',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      interactiveType: 'idr'
    }
  },
  {
    id: 'global-expediting',
    step: '5',
    title: 'Field & Desk Expediting Oversight',
    shortDesc: 'Proactive manufacturing schedule auditing to prevent late deliveries before they happen.',
    alt: 'Field expediting and critical path schedule recovery tracking',
    panelData: {
      category: 'SCHEDULE RECOVERY & EPC OVERSIGHT',
      headline: 'Direct Shop Floor Progress Audits',
      subheadline: 'Physical verification of sub-tier procurement, raw forgings, machining, and final test queues.',
      specs: ['Critical Path Method (CPM)', 'Tier-1 & Tier-2 Audits', 'Earned Value Tracking', 'Pre-Shipment Expediting'],
      metrics: [
        { label: 'Schedule Variance', value: '+4.2% Earned' },
        { label: 'Delivery Commitment', value: 'On Schedule' }
      ],
      statusBadge: 'SCHEDULE MONITORED',
      statusColor: 'text-purple-800 bg-purple-50 border-purple-200',
      interactiveType: 'expediting'
    }
  }
];

export const FeaturesWithPanel: React.FC<FeaturesWithPanelProps> = ({
  navigateTo,
  openInspectorModal
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = featuresData[activeIndex];

  // Helper to render interactive visual inside panel based on type
  const renderPanelVisual = (feature: FeatureItem) => {
    const { panelData } = feature;
    return (
      <div className="h-full flex flex-col justify-between p-6 sm:p-8 bg-white text-stone-900">
        
        {/* Top Header Bar of Panel */}
        <div className="space-y-3 pb-5 border-b border-stone-200">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-medium text-amber-700 tracking-wider uppercase">
              [{panelData.category}]
            </span>
            <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${panelData.statusColor}`}>
              <DecodeText text={panelData.statusBadge} trigger="mount" speed={20} />
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 uppercase">
              {panelData.headline}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-mono leading-relaxed">
              {panelData.subheadline}
            </p>
          </div>
        </div>

        {/* Center Dynamic Telemetry Card */}
        <div className="my-5 p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
          
          {/* Specific Visual Telemetry for Feature Type */}
          {panelData.interactiveType === 'itp' && (
            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between text-stone-500 text-[11px] pb-1 border-b border-stone-200">
                <span>ITP Activity Description</span>
                <span>Type</span>
                <span>Witness Status</span>
              </div>
              <div className="flex items-center justify-between text-stone-700">
                <span className="truncate max-w-[200px]">1. Visual Weld & Fit-up (WPS Review)</span>
                <span className="px-1.5 py-0.5 rounded bg-stone-200/60 text-[10px] text-stone-600">HOLD</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Cleared
                </span>
              </div>
              <div className="flex items-center justify-between text-stone-700">
                <span className="truncate max-w-[200px]">2. RT Radiographic Film Review</span>
                <span className="px-1.5 py-0.5 rounded bg-stone-200/60 text-[10px] text-stone-600">WITNESS</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Level II Sign-off
                </span>
              </div>
              <div className="flex items-center justify-between text-stone-700">
                <span className="truncate max-w-[200px]">3. Final Hydrostatic Shell Test</span>
                <span className="px-1.5 py-0.5 rounded bg-stone-200/60 text-[10px] text-stone-600">HOLD</span>
                <span className="text-amber-700 font-bold flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5" /> In Surveillance
                </span>
              </div>
            </div>
          )}

          {panelData.interactiveType === 'pmi' && (
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-500">Component: Flange 12" 600# WN</span>
                <span className="text-amber-700 font-bold">Grade: 316L SS</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 rounded bg-white border border-stone-200 shadow-sm">
                  <div className="text-[10px] text-stone-500">Cr (Chromium)</div>
                  <div className="text-stone-900 font-bold mt-0.5">17.2%</div>
                </div>
                <div className="p-2 rounded bg-white border border-stone-200 shadow-sm">
                  <div className="text-[10px] text-stone-500">Ni (Nickel)</div>
                  <div className="text-stone-900 font-bold mt-0.5">12.1%</div>
                </div>
                <div className="p-2 rounded bg-white border border-stone-200 shadow-sm">
                  <div className="text-[10px] text-stone-500">Mo (Moly)</div>
                  <div className="text-stone-900 font-bold mt-0.5">2.25%</div>
                </div>
                <div className="p-2 rounded bg-white border border-stone-200 shadow-sm">
                  <div className="text-[10px] text-stone-500">C (Carbon)</div>
                  <div className="text-emerald-700 font-bold mt-0.5">&lt;0.03%</div>
                </div>
              </div>
            </div>
          )}

          {panelData.interactiveType === 'fat' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-stone-700">
                <span>Hydrostatic Pressure Proof Test Stand:</span>
                <span className="text-amber-700 font-bold">API 598 Shell Proof</span>
              </div>
              <div className="w-full h-[320px] rounded-xl overflow-hidden border border-stone-200 bg-stone-50 shadow-xs">
                <UsageMeter />
              </div>
              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <span>Test Duration: 4 Hours Witnessed</span>
                <span className="text-emerald-700 font-bold">Zero Pressure Decay</span>
              </div>
            </div>
          )}

          {panelData.interactiveType === 'idr' && (
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span className="text-stone-900 font-bold">IDR-2026-TX-0891.pdf</span>
                </div>
                <span className="text-[10px] text-stone-500">Signed &amp; Stamped</span>
              </div>
              <div className="p-2.5 rounded bg-white border border-stone-200 text-[11px] text-stone-600 leading-relaxed shadow-sm">
                "All witness hold points under PO-44819 verified in compliance with ASME Sec VIII Div 1. No punchlist defects detected. Cleared for packaging."
              </div>
            </div>
          )}

          {panelData.interactiveType === 'expediting' && (
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-stone-700">
                <span>Fabrication Milestone Complete:</span>
                <span className="text-purple-700 font-bold">88% (Target: 85%)</span>
              </div>
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full w-[88%]" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <span>Shipping Queue: On-Track</span>
                <span className="text-emerald-700 font-bold">Estimated Dispatch: 12 Nov</span>
              </div>
            </div>
          )}

          {/* Metric Badges Strip */}
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-stone-200">
            {panelData.metrics.map((m, idx) => (
              <div key={idx}>
                <span className="text-[10px] font-mono text-stone-500 block uppercase">{m.label}</span>
                <span className="text-sm font-bold font-mono text-stone-900 mt-0.5 block">{m.value}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Panel Specifications & Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-stone-200 gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {panelData.specs.map((spec, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-stone-700"
              >
                {spec}
              </span>
            ))}
          </div>

          <button
            onClick={() => openInspectorModal({ inspectionDiscipline: feature.title })}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 px-4 py-2 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto shadow-sm"
          >
            <HardHat className="w-3.5 h-3.5 text-amber-400" />
            <span>Mobilize For Scope</span>
          </button>
        </div>

      </div>
    );
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAFAF9] text-stone-900 border-b border-stone-200/80 overflow-hidden">
      
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        
        {/* Section Eyebrow & Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            <span className="text-stone-700 uppercase font-semibold">
              <DecodeText text="[02 // TECHNICAL ASSURANCE ARCHITECTURE]" trigger="both" speed={24} />
            </span>
            <span className="text-stone-400">•</span>
            <span className="text-stone-500">FIELD SURVEILLANCE MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 uppercase font-sans">
            <BjorkDecodeText text="Inspection Capabilities." trigger="inView" charset="blocks" />
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            Precision third-party oversight from raw material receiving through final test stand acceptance. Select any capability to inspect our field verification protocol.
          </p>
        </div>

        {/* 2-Column Responsive Layout (@scrollxui/features-with-panel pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 lg:items-start">
          
          {/* Left Column: Interactive Feature Selector List */}
          <div className="lg:col-span-5 space-y-2">
            <ul className="flex flex-col gap-2">
              {featuresData.map((feature, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <motion.li
                    key={feature.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex flex-col p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                      isActive 
                        ? 'bg-white border-stone-400 shadow-[0_4px_20px_rgba(0,0,0,0.06)]' 
                        : 'bg-white/60 border-stone-200 hover:border-stone-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 w-full">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors duration-200 ${
                        isActive 
                          ? 'bg-stone-900 text-white' 
                          : 'bg-stone-100 text-stone-600'
                      }`}>
                        {feature.step}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-bold uppercase tracking-tight transition-colors duration-200 truncate ${
                            isActive ? 'text-stone-900' : 'text-stone-700'
                          }`}>
                            {feature.title}
                          </span>
                          <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                            isActive ? 'text-amber-600 translate-x-0.5' : 'text-stone-400'
                          }`} />
                        </div>
                        <p className="text-xs text-stone-500 font-mono mt-0.5 line-clamp-1 leading-relaxed">
                          {feature.shortDesc}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Dynamic Preview Panel */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl border border-stone-200 overflow-hidden shadow-lg bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  {renderPanelVisual(activeFeature)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
