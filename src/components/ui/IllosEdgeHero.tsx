import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Crosshair, 
  CheckCircle2, 
  Sparkles,
  Layers,
  FileCheck2
} from 'lucide-react';
import { BjorkDecodeText } from './BjorkDecodeText';

export const IllosEdgeHero: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number>(2);

  return (
    <div className="relative w-full max-w-[500px] rounded-3xl border border-white/20 bg-stone-900/90 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl group select-none text-white">
      
      {/* Precision Corner Optical Calibration Brackets (Naved @navedux/illos-edge-hero HUD style) */}
      <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-amber-400 pointer-events-none z-30" />
      <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-amber-400 pointer-events-none z-30" />
      <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-amber-400 pointer-events-none z-30" />
      <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-amber-400 pointer-events-none z-30" />

      {/* Terminal Top Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] font-mono text-stone-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-bold text-white tracking-wider uppercase">
            <BjorkDecodeText text="ILLOS // 3D QUALITY INSPECTION TERMINAL" trigger="inView" accentColor="#F59E0B" />
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/30 font-semibold">
            REV 2026.4
          </span>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-stone-950/80 border border-white/10 flex items-center justify-center p-2">
        
        {/* Technical Radial Grid Background */}
        <div className="absolute inset-0 bg-dot-grid-dark opacity-60 pointer-events-none" />

        {/* Concentric Calibration Reticles */}
        <div className="absolute w-64 h-64 border border-white/10 rounded-full pointer-events-none" />
        <div className="absolute w-48 h-48 border border-dashed border-amber-500/20 rounded-full pointer-events-none animate-spin-slow" />
        <div className="absolute w-32 h-32 border border-amber-400/30 rounded-full pointer-events-none" />

        {/* Axis Crosshairs */}
        <div className="absolute inset-x-4 top-1/2 h-px bg-white/10 pointer-events-none" />
        <div className="absolute inset-y-4 left-1/2 w-px bg-white/10 pointer-events-none" />

        {/* Laser Sweep Scanner Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/15 to-transparent h-12 w-full animate-laser-scan pointer-events-none" />

        {/* Isometric Vector CAD Model (Subsea Valve & Pressure Vessel) */}
        <svg className="w-64 h-64 relative z-10 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]" viewBox="0 0 240 240" fill="none">
          {/* Main Body Cylindrical Pressure Shell */}
          <ellipse cx="120" cy="80" rx="60" ry="24" stroke="#F59E0B" strokeWidth="1.8" strokeDasharray="3 3" />
          <ellipse cx="120" cy="150" rx="60" ry="24" stroke="#FFFFFF" strokeWidth="2.2" />
          <path d="M60 80 V150" stroke="#FFFFFF" strokeWidth="2.2" />
          <path d="M180 80 V150" stroke="#FFFFFF" strokeWidth="2.2" />

          {/* Top Flange Neck & Bolt Holes */}
          <ellipse cx="120" cy="50" rx="45" ry="16" stroke="#FBBF24" strokeWidth="2" />
          <path d="M75 50 V70" stroke="#FBBF24" strokeWidth="1.8" />
          <path d="M165 50 V70" stroke="#FBBF24" strokeWidth="1.8" />

          {/* Flange Bolt Circle Dots */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const bx = 120 + 38 * Math.cos(rad);
            const by = 50 + 13 * Math.sin(rad);
            return (
              <circle key={idx} cx={bx} cy={by} r="2.2" fill="#F59E0B" />
            );
          })}

          {/* Lateral Nozzles (Left & Right Ports) */}
          <ellipse cx="40" cy="115" rx="12" ry="22" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M40 93 L60 102" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M40 137 L60 128" stroke="#FFFFFF" strokeWidth="1.8" />

          <ellipse cx="200" cy="115" rx="12" ry="22" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M180 102 L200 93" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M180 128 L200 137" stroke="#FFFFFF" strokeWidth="1.8" />

          {/* Caliper Measurement Callout */}
          <path d="M216 93 H228" stroke="#94A3B8" strokeWidth="1" />
          <path d="M216 137 H228" stroke="#94A3B8" strokeWidth="1" />
          <path d="M224 93 V137" stroke="#94A3B8" strokeWidth="1" />
          <text x="228" y="118" fill="#FBBF24" fontSize="8" fontFamily="monospace">Ø 600</text>
        </svg>

        {/* Clickable Hold Point Buttons on Model */}
        <button
          onClick={() => setActivePoint(1)}
          className={`absolute top-6 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg transition-all cursor-pointer ${
            activePoint === 1 
              ? 'bg-amber-500 text-stone-950 ring-4 ring-amber-500/30 scale-105' 
              : 'bg-stone-900/90 text-white/80 border border-white/20 hover:bg-stone-800'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping" />
          <span>HOLD 01: FLANGE RTJ</span>
        </button>

        <button
          onClick={() => setActivePoint(2)}
          className={`absolute bottom-16 right-4 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg transition-all cursor-pointer ${
            activePoint === 2 
              ? 'bg-emerald-500 text-stone-950 ring-4 ring-emerald-500/30 scale-105' 
              : 'bg-stone-900/90 text-white/80 border border-white/20 hover:bg-stone-800'
          }`}
        >
          <CheckCircle2 className="w-3 h-3 text-emerald-950" />
          <span>HOLD 02: HYDRO 2,250 PSI</span>
        </button>

        <button
          onClick={() => setActivePoint(3)}
          className={`absolute bottom-16 left-4 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg transition-all cursor-pointer ${
            activePoint === 3 
              ? 'bg-sky-500 text-stone-950 ring-4 ring-sky-500/30 scale-105' 
              : 'bg-stone-900/90 text-white/80 border border-white/20 hover:bg-stone-800'
          }`}
        >
          <Activity className="w-3 h-3 text-sky-950" />
          <span>HOLD 03: UT 34.2mm</span>
        </button>

        {/* Live Holographic Telemetry Dossier Tag */}
        <div className="absolute bottom-2 left-3 right-3 p-2.5 rounded-xl bg-stone-900/90 border border-white/15 shadow-md backdrop-blur-md font-mono text-[10px] space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-amber-400 font-bold flex items-center gap-1.5 min-w-0">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">
                {activePoint === 1 && 'POINT 01: ASME B16.5 Serrated Finish 125 AARH'}
                {activePoint === 2 && 'POINT 02: API 598 Shell Proof 4h Zero-Decay Hold'}
                {activePoint === 3 && 'POINT 03: Ultrasonic Thickness Scan 34.0mm'}
              </span>
            </span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0">
              CLEARED
            </span>
          </div>
          <div className="flex items-center justify-between text-stone-400 text-[9px] pt-0.5 border-t border-white/10">
            <span>Inspector: <strong className="text-white">AWS CWI #1904221</strong></span>
            <span className="text-amber-400 font-semibold">24h Flash IDR Synced</span>
          </div>
        </div>

      </div>

      {/* Terminal Footer Information Strip */}
      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-stone-400">
        <span className="flex items-center gap-1.5">
          <Crosshair className="w-3.5 h-3.5 text-amber-400" />
          <span>ASME Sec VIII Div 1 &bull; API 598</span>
        </span>
        <span className="text-white font-bold">100% WITNESS VERIFIED</span>
      </div>

    </div>
  );
};
