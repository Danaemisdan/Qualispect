import React, { useState, useRef } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Flame, 
  Wrench, 
  FileCheck2, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  HardHat,
  Search,
  Zap,
  Radio,
  ExternalLink,
  Sparkles,
  Layers
} from 'lucide-react';
import { Hub } from '@lucasmarkes/hairline/react';
import { DecodeText } from '../ui/DecodeText';
import { BjorkDecodeText } from '../ui/BjorkDecodeText';
import DeployPipeline from '../ui/isokit/aadil/DeployPipeline';
import { PageId } from '../../types';

interface FunctionsHubSectionProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
}

interface SurveillanceFunction {
  id: number;
  title: string;
  shortTitle: string;
  spec: string;
  desc: string;
  badge: string;
  status: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  nodeX: number;
  nodeY: number;
  pctX: number;
  pctY: number;
}

const SURVEILLANCE_FUNCTIONS: SurveillanceFunction[] = [
  {
    id: 1,
    title: 'Vendor Shop Surveillance',
    shortTitle: 'Shop Surveillance',
    spec: 'ASME Sec VIII / Client PO',
    desc: 'Independent physical presence at vendor facilities auditing fabrication, fit-up, and dimensional compliance.',
    badge: 'STAGE HOLD WITNESS',
    status: 'ACTIVE SLA',
    icon: ShieldCheck,
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    nodeX: 205,
    nodeY: 112,
    pctX: 51.25,
    pctY: 35.0
  },
  {
    id: 2,
    title: 'Factory Acceptance Testing (FAT)',
    shortTitle: 'Hydrostatic FAT',
    spec: 'API 610 / API 6D Test Stand',
    desc: 'Witnessing hydrostatic proofs, mechanical run tests (MRT), vibration FFT, and functional trip curves.',
    badge: 'PROOF CLEARANCE',
    status: 'ZERO DECAY',
    icon: Activity,
    color: 'text-sky-700 bg-sky-50 border-sky-200',
    nodeX: 260,
    nodeY: 144,
    pctX: 65.0,
    pctY: 45.0
  },
  {
    id: 3,
    title: 'Welding & Fabrication QA/QC',
    shortTitle: 'Welding QA/QC',
    spec: 'AWS D1.1 / ASME Sec IX',
    desc: 'Certified AWS CWI and CSWIP personnel auditing joint fit-up, root passes, WPS/PQR, and welder qualification.',
    badge: 'AWS CWI AUDIT',
    status: 'ZERO NCR',
    icon: Flame,
    color: 'text-amber-800 bg-amber-50 border-amber-200',
    nodeX: 328,
    nodeY: 179,
    pctX: 82.0,
    pctY: 55.9
  },
  {
    id: 4,
    title: 'Mechanical & Rotating Equipment',
    shortTitle: 'Rotating Equipment',
    spec: 'Centrifugal Pumps & Turbines',
    desc: 'Precision shaft alignment, dynamic balancing verification, impeller clearances, and skid assembly audits.',
    badge: 'ROTATING QA',
    status: 'VERIFIED',
    icon: Wrench,
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    nodeX: 263,
    nodeY: 207,
    pctX: 65.75,
    pctY: 64.7
  },
  {
    id: 5,
    title: 'Volumetric NDT Examination',
    shortTitle: 'Volumetric NDT',
    spec: 'ASNT Level III / PAUT / RT Film',
    desc: 'Independent radiographic film interpretation, ultrasonic wall thickness scans, MT, and PT witness sign-off.',
    badge: 'VOLUMETRIC PASS',
    status: '100% AUDIT',
    icon: Search,
    color: 'text-purple-700 bg-purple-50 border-purple-200',
    nodeX: 201,
    nodeY: 243,
    pctX: 50.25,
    pctY: 75.9
  },
  {
    id: 6,
    title: 'PMI Metallurgy & MTR 3.1 Reviews',
    shortTitle: 'PMI Metallurgy',
    spec: 'EN 10204 3.1 / Handheld XRF',
    desc: 'Positive Material Identification cross-referencing mill test certificates to defeat counterfeit or non-spec alloys.',
    badge: 'HEAT TRACE 1:1',
    status: 'ALLOY MATCH',
    icon: FileCheck2,
    color: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    nodeX: 131,
    nodeY: 209,
    pctX: 32.75,
    pctY: 65.3
  },
  {
    id: 7,
    title: 'Field & Desk Expediting',
    shortTitle: 'Field Expediting',
    spec: 'CPM Critical Path Recovery',
    desc: 'Direct shop-floor manufacturing progress tracking to uncover sub-tier bottlenecks before delays occur.',
    badge: 'SCHEDULE AUDIT',
    status: 'ON-TIME DELIVERY',
    icon: Clock,
    color: 'text-stone-700 bg-stone-100 border-stone-200',
    nodeX: 76,
    nodeY: 177,
    pctX: 19.0,
    pctY: 55.3
  },
  {
    id: 8,
    title: '24-Hour Electronic IDR Flash',
    shortTitle: '24h IDR Flash',
    spec: 'GPS Timestamped Field Dossiers',
    desc: 'Inspection Daily Reports with verified photo evidence, defect punch lists, and signed release certificates.',
    badge: 'SAME-DAY SYNC',
    status: '< 24H TRANSMITTAL',
    icon: CheckCircle2,
    color: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    nodeX: 136,
    nodeY: 141,
    pctX: 34.0,
    pctY: 44.0
  }
];

export const FunctionsHubSection: React.FC<FunctionsHubSectionProps> = ({
  navigateTo,
  openInspectorModal
}) => {
  const [activeFunction, setActiveFunction] = useState<number>(1);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [deployHovered, setDeployHovered] = useState(false);
  const hubRef = useRef<HTMLDivElement>(null);

  const selected = SURVEILLANCE_FUNCTIONS.find(f => f.id === activeFunction) || SURVEILLANCE_FUNCTIONS[0];
  const IconComponent = selected.icon;

  // Dispatch synthetic pointermove to trigger Hairline tile elevation
  const handleSelectNode = (id: number) => {
    setActiveFunction(id);
    const targetFunc = SURVEILLANCE_FUNCTIONS.find(f => f.id === id);
    if (targetFunc && hubRef.current) {
      const stage = hubRef.current.querySelector('svg') || hubRef.current;
      const rect = stage.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const clientX = rect.left + (targetFunc.nodeX / 400) * rect.width;
        const clientY = rect.top + (targetFunc.nodeY / 320) * rect.height;
        const evt = new PointerEvent('pointermove', {
          clientX,
          clientY,
          bubbles: true,
          cancelable: true
        });
        stage.dispatchEvent(evt);
      }
    }
  };

  const leftFunctions = SURVEILLANCE_FUNCTIONS.slice(0, 4);
  const rightFunctions = SURVEILLANCE_FUNCTIONS.slice(4, 8);

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FAFAF9] text-stone-900 border-b border-stone-200/80 overflow-hidden">
      
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative space-y-12">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-stone-200/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-stone-800 uppercase font-semibold">
                <DecodeText text="[01 // CORE QUALITY FUNCTIONS]" trigger="both" speed={25} />
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-500">CENTRALIZED TECHNICAL HUB</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-sans">
              <BjorkDecodeText text="Eight Technical Functions." trigger="inView" charset="blocks" /> <br />
              <span className="text-stone-500 font-normal">One Connected Quality Hub.</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              Qualispect coordinates vendor quality surveillance, hydrostatic FAT proofing, and metallurgical audits across international supply chains through our centralized Houston technical desk.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => navigateTo('services')}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 px-5 py-2.5 rounded-full shadow-xs transition-all cursor-pointer"
            >
              <span>Explore All 10 Services</span>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* UNIFIED DIRECTLY INTEGRATED HUB & SURVEILLANCE STATIONS  */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-5 sm:p-8 shadow-[0_12px_45px_rgba(0,0,0,0.04)] relative overflow-hidden space-y-6">
          
          {/* Architectural Corner Alignment Marks */}
          <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-stone-400 pointer-events-none z-20" />
          <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-stone-400 pointer-events-none z-20" />
          <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-stone-400 pointer-events-none z-20" />
          <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-stone-400 pointer-events-none z-20" />

          {/* Top Live Technical Desk Telemetry Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-200 text-[11px] font-mono text-stone-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-stone-900 uppercase">
                HOUSTON TECHNICAL DESK // 8 SYNCHRONIZED SURVEILLANCE NODES
              </span>
            </div>

            <div className="flex items-center gap-3 text-[10px]">
              <span className="text-stone-400">CARRIER LATENCY: <strong className="text-stone-800">14ms</strong></span>
              <span className="text-stone-300">•</span>
              <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200 font-semibold">
                ISO/IEC 17020 ACCREDITED
              </span>
            </div>
          </div>

          {/* Core Interactive Layout: Left Functions (4) | Central Hairline Hub Graphic (with Hotspot Overlay) | Right Functions (4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* LEFT RAIL: Functions 01 to 04 */}
            <div className="lg:col-span-3 space-y-2.5">
              <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider pb-1 px-1 flex items-center justify-between">
                <span>[NODES 01 — 04]</span>
                <span>SHOP &amp; PROOF</span>
              </div>

              {leftFunctions.map((f) => {
                const isActive = activeFunction === f.id;
                const isHovered = hoveredNode === f.id;
                const Icon = f.icon;

                return (
                  <button
                    key={f.id}
                    onClick={() => handleSelectNode(f.id)}
                    onMouseEnter={() => {
                      setHoveredNode(f.id);
                      handleSelectNode(f.id);
                    }}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group ${
                      isActive
                        ? 'bg-stone-900 text-white border-stone-900 shadow-md translate-x-1'
                        : 'bg-[#FAFAF9] text-stone-800 border-stone-200 hover:bg-stone-100/80 hover:border-stone-300'
                    }`}
                  >
                    {/* Active highlight side line */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
                    )}

                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className={`font-bold ${isActive ? 'text-amber-400' : 'text-stone-400'}`}>
                        0{f.id} //
                      </span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-semibold ${
                        isActive ? 'bg-stone-800 text-stone-300' : 'bg-stone-200/60 text-stone-600'
                      }`}>
                        {f.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-stone-800 text-amber-400' : 'bg-white text-stone-700 border border-stone-200'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="font-bold text-xs truncate font-sans">
                          {f.shortTitle}
                        </div>
                        <div className={`text-[10px] font-mono truncate ${
                          isActive ? 'text-stone-400' : 'text-stone-500'
                        }`}>
                          {f.spec}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CENTER STAGE: Central Hairline Hub Graphic with Connected Hotspot Overlays */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-[#FAFAF9] border border-stone-200/90 shadow-inner">
              
              {/* Active Hub Node Header Indicator */}
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-stone-600 pb-2 mb-2 border-b border-stone-200">
                <span className="text-amber-800 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  <span>ACTIVE NODE // 0{selected.id}</span>
                </span>
                <span className="text-[10px] bg-white text-stone-800 px-2 py-0.5 rounded border border-stone-200 font-semibold">
                  {selected.spec}
                </span>
              </div>

              {/* The Lucas Markes Hairline Interactive Hub Graphic */}
              <div 
                ref={hubRef}
                className="w-full max-w-[440px] aspect-[5/4] relative flex items-center justify-center select-none"
                style={{
                  // Hairline custom palette
                  // @ts-ignore
                  '--hairline-hi': '#0C0A09',
                  '--hairline-edge': '#D97706',
                  '--hairline-mid': '#D6D3D1',
                  '--hairline-lo': '#E7E5E4',
                  '--hairline-stroke': '1.15'
                }}
              >
                <Hub 
                  intensity={0.9}
                  play={true}
                  theme="light"
                  label="Qualispect 8-function interactive surveillance hub network"
                  className="w-full h-full cursor-crosshair"
                />

                {/* Overlaid Interactive Hotspot Node Pins (Anchored to exact Hairline tour coordinates) */}
                {SURVEILLANCE_FUNCTIONS.map((f) => {
                  const isActive = activeFunction === f.id;
                  const isHovered = hoveredNode === f.id;

                  return (
                    <button
                      key={f.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectNode(f.id);
                      }}
                      onMouseEnter={() => {
                        setHoveredNode(f.id);
                        handleSelectNode(f.id);
                      }}
                      onMouseLeave={() => setHoveredNode(null)}
                      title={`${f.title} (${f.spec})`}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-30 transition-transform active:scale-95"
                      style={{
                        left: `${f.pctX}%`,
                        top: `${f.pctY}%`
                      }}
                    >
                      {/* Outer pulse ring when active */}
                      {isActive && (
                        <span className="absolute -inset-2 rounded-full bg-amber-500/30 animate-ping pointer-events-none" />
                      )}

                      {/* Node Button Tag */}
                      <div className={`px-1.5 py-0.5 rounded-md font-mono text-[9px] font-bold shadow-xs flex items-center gap-1 border transition-all ${
                        isActive
                          ? 'bg-stone-900 text-amber-400 border-amber-500 scale-110 shadow-md ring-2 ring-amber-400/30'
                          : isHovered
                          ? 'bg-stone-800 text-white border-stone-600 scale-105'
                          : 'bg-white/95 text-stone-700 border-stone-300 hover:border-stone-400 backdrop-blur-xs'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-amber-400 animate-pulse' : 'bg-stone-400'}`} />
                        <span>0{f.id}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Hub Pointer Guidance */}
              <div className="w-full pt-2 border-t border-stone-200 flex items-center justify-between text-[10px] font-mono text-stone-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>CLICK ANY NODE PIN ON THE GRAPHIC OR SIDE TILES</span>
                </span>
                <span className="text-stone-700 font-bold">8 NODES LINKED</span>
              </div>

            </div>

            {/* RIGHT RAIL: Functions 05 to 08 */}
            <div className="lg:col-span-3 space-y-2.5">
              <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider pb-1 px-1 flex items-center justify-between">
                <span>[NODES 05 — 08]</span>
                <span>METALLURGY &amp; FIELD</span>
              </div>

              {rightFunctions.map((f) => {
                const isActive = activeFunction === f.id;
                const isHovered = hoveredNode === f.id;
                const Icon = f.icon;

                return (
                  <button
                    key={f.id}
                    onClick={() => handleSelectNode(f.id)}
                    onMouseEnter={() => {
                      setHoveredNode(f.id);
                      handleSelectNode(f.id);
                    }}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group ${
                      isActive
                        ? 'bg-stone-900 text-white border-stone-900 shadow-md -translate-x-1'
                        : 'bg-[#FAFAF9] text-stone-800 border-stone-200 hover:bg-stone-100/80 hover:border-stone-300'
                    }`}
                  >
                    {/* Active highlight side line */}
                    {isActive && (
                      <span className="absolute right-0 top-0 bottom-0 w-1 bg-amber-500" />
                    )}

                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className={`font-bold ${isActive ? 'text-amber-400' : 'text-stone-400'}`}>
                        0{f.id} //
                      </span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-semibold ${
                        isActive ? 'bg-stone-800 text-stone-300' : 'bg-stone-200/60 text-stone-600'
                      }`}>
                        {f.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-stone-800 text-amber-400' : 'bg-white text-stone-700 border border-stone-200'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="font-bold text-xs truncate font-sans">
                          {f.shortTitle}
                        </div>
                        <div className={`text-[10px] font-mono truncate ${
                          isActive ? 'text-stone-400' : 'text-stone-500'
                        }`}>
                          {f.spec}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* ======================================================== */}
          {/* ACTIVE FUNCTION LIVE DOSSIER & DEPLOYMENT BAR            */}
          {/* ======================================================== */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAFAF9] border border-stone-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Function Identity */}
            <div className="md:col-span-4 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 text-stone-900 flex items-center justify-center shadow-xs shrink-0">
                <IconComponent className="w-6 h-6 text-amber-700" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider flex items-center gap-2">
                  <span>NODE 0{selected.id} OF 08</span>
                  <span className="text-stone-300">•</span>
                  <span className="text-amber-700 font-bold">{selected.badge}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight truncate">
                  {selected.title}
                </h3>
                <span className="text-xs font-mono text-amber-800 font-semibold">
                  Standard: {selected.spec}
                </span>
              </div>
            </div>

            {/* Function Description & Scope */}
            <div className="md:col-span-5 text-sm text-stone-600 leading-relaxed font-normal">
              <p>{selected.desc}</p>
              <div className="mt-1 flex items-center gap-2 text-[11px] font-mono text-stone-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Houston Quality Desk 24-Hour IDR Verification Transmittal</span>
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="md:col-span-3 flex md:justify-end items-center gap-3">
              <button
                onClick={() => openInspectorModal({ inspectionDiscipline: selected.title })}
                onMouseEnter={() => setDeployHovered(true)}
                onMouseLeave={() => setDeployHovered(false)}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-stone-900 hover:bg-black shadow-sm cursor-pointer transition-all active:scale-95 group"
              >
                <HardHat className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <BjorkDecodeText 
                  text="Deploy Inspector" 
                  isHovered={deployHovered}
                  charset="matrix"
                  speed={15}
                  accentColor="#F59E0B"
                />
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE HOLD POINT DISPATCH PIPELINE (@aadilghani1)  */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-[0_12px_45px_rgba(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-stone-800 uppercase font-bold">[SURVEILLANCE DISPATCH PIPELINE]</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-sans">
              Automated Hold Point &amp; FAT Dispatch Pipeline.
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed font-normal">
              Press <strong>Deploy</strong> to simulate our automated inspection pipeline: spinning up shop-floor verification fans, auditing WPS/PQR procedures, triggering test-stand relays, and throwing production over to the cleared release state.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500">
              <span>Stage 1: WPS Review</span>
              <span>&bull;</span>
              <span>Stage 2: Witness FAT</span>
              <span>&bull;</span>
              <span className="text-emerald-700 font-bold">Stage 3: Ship Sign-Off</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[480px] h-[380px] rounded-2xl overflow-hidden border border-stone-200 bg-stone-50/50 shadow-sm flex items-center justify-center">
              <DeployPipeline />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
