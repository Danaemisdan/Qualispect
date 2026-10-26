import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck2, 
  Activity, 
  Zap, 
  Flame, 
  Check, 
  Crosshair,
  Layers,
  Clock,
  Compass,
  Radar
} from 'lucide-react';
import { DecodeText } from './DecodeText';

export const HeroInspectionGraphic: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  // Auto-cycle active inspection hold points
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePoint((prev) => (prev % 4) + 1);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[500px] rounded-3xl border border-stone-200 bg-white/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl group select-none">
      
      {/* Precision Corner Calibration Brackets */}
      <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-stone-400 pointer-events-none z-30" />
      <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-stone-400 pointer-events-none z-30" />
      <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-stone-400 pointer-events-none z-30" />
      <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-stone-400 pointer-events-none z-30" />

      {/* Terminal Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100 text-[11px] font-mono text-stone-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-bold text-stone-900 tracking-wider uppercase">
            <DecodeText text="3D CAD SURVEILLANCE • ITP TELEMETRY" trigger="both" speed={25} />
          </span>
        </div>
        <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200 font-semibold">
          REV 4.2
        </span>
      </div>

      {/* Central CAD Blueprint & Holographic Wireframe Viewport */}
      <div className="relative w-full h-72 sm:h-84 rounded-2xl overflow-hidden bg-[#FAFAF9] border border-stone-200 flex items-center justify-center">
        
        {/* Subtle Technical Radial Grid Background */}
        <div className="absolute inset-0 bg-dot-grid-light opacity-80" />

        {/* Concentric Calibration Reticles */}
        <div className="absolute w-64 h-64 border border-stone-200 rounded-full pointer-events-none" />
        <div className="absolute w-48 h-48 border border-dashed border-stone-300 rounded-full pointer-events-none animate-spin-slow" />
        <div className="absolute w-32 h-32 border border-amber-300/60 rounded-full pointer-events-none" />

        {/* Axis Crosshairs */}
        <div className="absolute inset-x-4 top-1/2 h-px bg-stone-200/80 pointer-events-none" />
        <div className="absolute inset-y-4 left-1/2 w-px bg-stone-200/80 pointer-events-none" />

        {/* Laser Sweep Scanner Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/10 to-transparent h-12 w-full animate-laser-scan pointer-events-none" />

        {/* High-Precision Isometric Vector CAD Model (Subsea Valve & Pressure Vessel) */}
        <svg className="w-64 h-64 relative z-10 drop-shadow-sm" viewBox="0 0 240 240" fill="none">
          {/* Main Body Cylindrical Pressure Shell */}
          <ellipse cx="120" cy="80" rx="60" ry="24" stroke="#1C1917" strokeWidth="2" strokeDasharray="3 3" />
          <ellipse cx="120" cy="150" rx="60" ry="24" stroke="#1C1917" strokeWidth="2.5" />
          <path d="M60 80 V150" stroke="#1C1917" strokeWidth="2.5" />
          <path d="M180 80 V150" stroke="#1C1917" strokeWidth="2.5" />

          {/* Top Flange Neck & Bolt Holes */}
          <ellipse cx="120" cy="50" rx="45" ry="16" stroke="#B45309" strokeWidth="2.2" />
          <path d="M75 50 V70" stroke="#B45309" strokeWidth="1.8" />
          <path d="M165 50 V70" stroke="#B45309" strokeWidth="1.8" />

          {/* Flange Bolt Circle Dots */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const bx = 120 + 38 * Math.cos(rad);
            const by = 50 + 13 * Math.sin(rad);
            return (
              <circle key={idx} cx={bx} cy={by} r="2.2" fill="#D97706" />
            );
          })}

          {/* Lateral Nozzles (Left & Right Ports) */}
          <ellipse cx="40" cy="115" rx="12" ry="22" stroke="#1C1917" strokeWidth="2" />
          <path d="M40 93 L60 102" stroke="#1C1917" strokeWidth="2" />
          <path d="M40 137 L60 128" stroke="#1C1917" strokeWidth="2" />

          <ellipse cx="200" cy="115" rx="12" ry="22" stroke="#1C1917" strokeWidth="2" />
          <path d="M180 102 L200 93" stroke="#1C1917" strokeWidth="2" />
          <path d="M180 128 L200 137" stroke="#1C1917" strokeWidth="2" />

          {/* Internal Seating & Trim Cutaway Geometry */}
          <path d="M100 115 Q120 125 140 115" stroke="#D97706" strokeWidth="1.8" strokeDasharray="2 2" />
          <path d="M100 120 Q120 130 140 120" stroke="#D97706" strokeWidth="1.8" strokeDasharray="2 2" />
          
          {/* Caliper Measurement Dimension Arrows */}
          <path d="M216 93 H228" stroke="#78716C" strokeWidth="1" />
          <path d="M216 137 H228" stroke="#78716C" strokeWidth="1" />
          <path d="M224 93 V137" stroke="#78716C" strokeWidth="1" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
          <text x="230" y="118" fill="#57534E" fontSize="8" fontFamily="monospace">Ø 600</text>
        </svg>

        {/* Dynamic Hold Point Indicators on CAD Model */}
        {/* Point 1: Top Flange RTJ Face */}
        <button
          onClick={() => setActivePoint(1)}
          className={`absolute top-10 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 shadow-md transition-all cursor-pointer ${
            activePoint === 1 
              ? 'bg-amber-600 text-white ring-4 ring-amber-500/20 scale-105' 
              : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping" />
          <span>HOLD 01: FLANGE RTJ</span>
        </button>

        {/* Point 2: Shell Hydro Proof */}
        <button
          onClick={() => setActivePoint(2)}
          className={`absolute bottom-16 right-4 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 shadow-md transition-all cursor-pointer ${
            activePoint === 2 
              ? 'bg-emerald-600 text-white ring-4 ring-emerald-500/20 scale-105' 
              : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
          }`}
        >
          <Check className="w-3 h-3 text-emerald-300" />
          <span>HOLD 02: HYDRO 2,250 PSI</span>
        </button>

        {/* Point 3: Wall Thickness UT */}
        <button
          onClick={() => setActivePoint(3)}
          className={`absolute bottom-16 left-4 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 shadow-md transition-all cursor-pointer ${
            activePoint === 3 
              ? 'bg-sky-600 text-white ring-4 ring-sky-500/20 scale-105' 
              : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
          }`}
        >
          <Activity className="w-3 h-3 text-sky-300" />
          <span>HOLD 03: UT 34.2mm</span>
        </button>

        {/* Dynamic Telemetry Floating Dossier Tag */}
        <div className="absolute bottom-2 left-3 right-3 p-2.5 rounded-xl bg-white/95 border border-stone-200 shadow-md backdrop-blur-md font-mono text-[10px] space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-amber-800 font-bold flex items-center gap-1 min-w-0">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <DecodeText 
                text={
                  activePoint === 1 ? 'POINT 01: ASME B16.5 Serrated Finish 125 AARH' :
                  activePoint === 2 ? 'POINT 02: API 598 Shell Proof 4h Zero-Decay Hold' :
                  activePoint === 3 ? 'POINT 03: Ultrasonic Thickness Scan 34.0mm' :
                  'POINT 04: Positive Material Identification XRF 316L'
                }
                trigger="mount"
                speed={16}
                scrambleSteps={2}
                className="truncate"
              />
            </span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 shrink-0">
              CLEARED
            </span>
          </div>

          <div className="flex items-center justify-between text-stone-500 text-[9px] pt-0.5 border-t border-stone-100">
            <span>Inspector: <DecodeText text="AWS CWI #1904221" trigger="hover" speed={22} /></span>
            <span className="text-stone-800 font-semibold">24h Flash IDR Synced</span>
          </div>
        </div>

      </div>

      {/* Terminal Footer Information Strip */}
      <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-600">
        <span className="flex items-center gap-1">
          <Crosshair className="w-3.5 h-3.5 text-amber-600" />
          <span>Laser Calibrated &bull; ASME Sec VIII Div 1</span>
        </span>
        <span className="text-stone-900 font-bold">100% WITNESS VERIFIED</span>
      </div>

    </div>
  );
};
