import React, { useState, useEffect } from 'react';
import { Flame, Activity, ShieldCheck, Zap, Sliders, Check, RefreshCw, Crosshair, AlertCircle } from 'lucide-react';

type Mode = 'thermal' | 'paut' | 'passes';

export const MetallurgyGraphicTerminal: React.FC = () => {
  const [mode, setMode] = useState<Mode>('thermal');
  const [activePass, setActivePass] = useState<number>(1);
  const [tempProbe, setTempProbe] = useState({ x: 210, y: 130, temp: 1482 });
  const [isScanning, setIsScanning] = useState(true);
  const [tick, setTick] = useState(0);

  // Animated sweep tick
  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => (t + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Passes data for WPS cross section
  const passesData = [
    { id: 1, name: 'Root Pass (GTAW)', process: 'ER70S-6 Ar/CO2', amps: '110A', volts: '12.5V', heat: '0.85 kJ/mm', status: '100% Penetration' },
    { id: 2, name: 'Hot Pass (GTAW)', process: 'ER70S-6 Stringer', amps: '135A', volts: '13.0V', heat: '0.98 kJ/mm', status: 'Zero Slag Inclusions' },
    { id: 3, name: 'Fill 1 & 2 (SMAW)', process: 'E7018-1 Low H2', amps: '160A', volts: '22.0V', heat: '1.42 kJ/mm', status: 'Interpass 210°C OK' },
    { id: 4, name: 'Fill 3 & 4 (SMAW)', process: 'E7018-1 Low H2', amps: '165A', volts: '22.5V', heat: '1.48 kJ/mm', status: 'HAZ Toughness -46°C' },
    { id: 5, name: 'Cap Reinforce', process: 'E7018-1 Weave', amps: '150A', volts: '21.0V', heat: '1.30 kJ/mm', status: '2.1mm Flush Crown' },
  ];

  const selectedPass = passesData.find((p) => p.id === activePass) || passesData[0];

  return (
    <div className="relative w-full rounded-2xl border border-stone-800 bg-[#090B14] p-4 sm:p-5 text-white shadow-2xl overflow-hidden font-mono select-none">
      
      {/* Top Industrial Header & Spec Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-800 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          <span className="text-amber-400 font-bold uppercase tracking-wider">
            [WELD LAB // NDT SIMULATOR]
          </span>
          <span className="text-stone-600 hidden sm:inline">•</span>
          <span className="text-stone-400 text-[10px] hidden sm:inline">SA-516 GR 70 HEAVY WALL</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
            WPS-401 REV 4
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold flex items-center gap-1">
            <Check className="w-2.5 h-2.5" />
            <span>QUALIFIED</span>
          </span>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="grid grid-cols-3 gap-1.5 my-3 bg-stone-900/90 p-1 rounded-xl border border-stone-800 text-[11px]">
        <button
          onClick={() => setMode('thermal')}
          className={`py-1.5 px-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            mode === 'thermal'
              ? 'bg-amber-500 text-stone-950 shadow-sm'
              : 'text-stone-400 hover:text-white hover:bg-stone-800/60'
          }`}
        >
          <Flame className="w-3.5 h-3.5" />
          <span>HAZ THERMAL</span>
        </button>

        <button
          onClick={() => setMode('paut')}
          className={`py-1.5 px-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            mode === 'paut'
              ? 'bg-amber-500 text-stone-950 shadow-sm'
              : 'text-stone-400 hover:text-white hover:bg-stone-800/60'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>PAUT BEAM</span>
        </button>

        <button
          onClick={() => setMode('passes')}
          className={`py-1.5 px-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            mode === 'passes'
              ? 'bg-amber-500 text-stone-950 shadow-sm'
              : 'text-stone-400 hover:text-white hover:bg-stone-800/60'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>WELD PASSES</span>
        </button>
      </div>

      {/* Main Vector / Isometric Diagnostic Display Screen */}
      <div className="relative w-full h-64 sm:h-72 rounded-xl bg-[#060811] border border-stone-800/90 overflow-hidden flex flex-col justify-between p-3">
        
        {/* Background Engineering Calibration Grid */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Reticle Overlay Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-amber-500/20 dashed" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-amber-500/20 dashed" />
        </div>

        {/* Top Screen HUD Readouts */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-stone-400">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">MODE:</span>
            <span className="uppercase text-white">
              {mode === 'thermal' && 'Isotherm Molten Solidification'}
              {mode === 'paut' && '64-Element Phased Array Sectorial'}
              {mode === 'passes' && 'Joint Bevel Layer Verification'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-stone-500">SCAN RATE:</span>
            <span className="text-emerald-400 font-bold">120 Hz</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MODE 1: THERMAL HAZ ISOTHERM DIAGRAM                     */}
        {/* ======================================================== */}
        {mode === 'thermal' && (
          <div className="relative flex-1 flex items-center justify-center">
            
            <svg className="w-full max-w-[380px] h-[180px]" viewBox="0 0 380 180" fill="none">
              <defs>
                {/* Radial gradient for molten weld pool */}
                <radialGradient id="moltenGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFBEB" stopOpacity="1" />
                  <stop offset="25%" stopColor="#FDE047" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.85" />
                  <stop offset="85%" stopColor="#DC2626" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="baseMetalLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="80%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>

                <linearGradient id="baseMetalRight" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="80%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Base Metal Plate Left (SA-516 Gr 70) */}
              <polygon points="10,40 140,40 160,140 10,140" fill="url(#baseMetalLeft)" stroke="#64748B" strokeWidth="1.5" />
              <text x="30" y="95" fill="#94A3B8" fontSize="10" fontFamily="monospace">BASE METAL (LEFT)</text>
              <text x="30" y="110" fill="#64748B" fontSize="8" fontFamily="monospace">SA-516 GR 70</text>

              {/* Base Metal Plate Right */}
              <polygon points="240,40 370,40 370,140 220,140" fill="url(#baseMetalRight)" stroke="#64748B" strokeWidth="1.5" />
              <text x="260" y="95" fill="#94A3B8" fontSize="10" fontFamily="monospace">BASE METAL (RIGHT)</text>
              <text x="260" y="110" fill="#64748B" fontSize="8" fontFamily="monospace">t = 38.1 mm</text>

              {/* HAZ Heat-Affected Zone Gradient Shells */}
              <path 
                d="M130,40 Q190,120 250,40 L230,140 Q190,165 150,140 Z" 
                fill="#B45309" 
                opacity="0.35"
                filter="url(#glow)"
              />
              <path 
                d="M140,40 Q190,115 240,40 L225,140 Q190,160 155,140 Z" 
                fill="#D97706" 
                opacity="0.5"
              />

              {/* Molten Weld Puddle Center */}
              <ellipse 
                cx="190" 
                cy="85" 
                rx="35" 
                ry="45" 
                fill="url(#moltenGrad)" 
                filter="url(#glow)"
                className="animate-pulse"
              />

              {/* Solidification Ripple Fronts */}
              <path d="M165,65 Q190,80 215,65" stroke="#FEF08A" strokeWidth="1.2" opacity="0.8" fill="none" />
              <path d="M168,80 Q190,95 212,80" stroke="#FDE047" strokeWidth="1.2" opacity="0.8" fill="none" />
              <path d="M172,95 Q190,110 208,95" stroke="#F59E0B" strokeWidth="1.2" opacity="0.7" fill="none" />
              <path d="M177,110 Q190,125 203,110" stroke="#D97706" strokeWidth="1.2" opacity="0.6" fill="none" />

              {/* Root Gap & Backing Ring */}
              <rect x="175" y="142" width="30" height="8" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
              <text x="162" y="162" fill="#FBBF24" fontSize="8" fontFamily="monospace">ROOT PASS 3.2mm</text>

              {/* Interactive Target Indicator Pin */}
              <g transform="translate(190, 85)">
                <circle r="18" stroke="#F59E0B" strokeWidth="1" fill="none" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: '8s' }} />
                <circle r="4" fill="#FFFFFF" />
                <line x1="-8" y1="0" x2="8" y2="0" stroke="#FFFFFF" strokeWidth="1.5" />
                <line x1="0" y1="-8" x2="0" y2="8" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>

              {/* Real-time Dynamic Probe Callout */}
              <g transform="translate(250, 48)">
                <line x1="0" y1="15" x2="-35" y2="35" stroke="#FBBF24" strokeWidth="1" strokeDasharray="2 2" />
                <rect x="0" y="0" width="105" height="32" rx="4" fill="#0F172A" stroke="#F59E0B" strokeWidth="1" />
                <text x="8" y="13" fill="#FBBF24" fontSize="9" fontWeight="bold" fontFamily="monospace">T = 1,482°C</text>
                <text x="8" y="25" fill="#34D399" fontSize="8" fontFamily="monospace">Δt 8/5 = 8.4s [OK]</text>
              </g>
            </svg>

          </div>
        )}

        {/* ======================================================== */}
        {/* MODE 2: PHASED ARRAY ULTRASONIC (PAUT) BEAM             */}
        {/* ======================================================== */}
        {mode === 'paut' && (
          <div className="relative flex-1 flex flex-col items-center justify-center">
            
            <svg className="w-full max-w-[380px] h-[140px]" viewBox="0 0 380 140" fill="none">
              <defs>
                <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Steel Plate Cross Section */}
              <rect x="20" y="40" width="340" height="70" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />

              {/* Weld Groove Center */}
              <polygon points="170,40 210,40 200,110 180,110" fill="#334155" stroke="#64748B" strokeWidth="1" />
              <text x="175" y="80" fill="#94A3B8" fontSize="8" fontFamily="monospace">SEAM</text>

              {/* PAUT Wedge & 64-Element Transducer on Left */}
              <polygon points="50,15 110,15 125,40 65,40" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
              <text x="62" y="30" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">PAUT 5.0 MHz</text>

              {/* Multi-angle Sectorial Ultrasound Sound Beams (45° to 70°) */}
              <polygon points="95,40 170,95 210,105 190,40" fill="url(#beamGrad)" />
              
              {/* Individual Beam Rays */}
              <line x1="95" y1="40" x2="180" y2="110" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="95" y1="40" x2="190" y2="75" stroke="#60A5FA" strokeWidth="1.2" />
              <line x1="95" y1="40" x2="205" y2="45" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />

              {/* Reflected Sound Beam */}
              <line x1="180" y1="110" x2="235" y2="40" stroke="#F43F5E" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />

              {/* Calibrated Gate Target */}
              <rect x="165" y="88" width="30" height="24" rx="2" fill="none" stroke="#34D399" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="135" y="125" fill="#34D399" fontSize="8" fontFamily="monospace">ROOT FUSION GATE</text>
            </svg>

            {/* Live Oscilloscope A-Scan Waveform Strip */}
            <div className="w-full bg-stone-900/90 rounded-lg border border-stone-800 p-2 flex items-center justify-between gap-3 text-[10px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-bold">A-SCAN ECHO:</span>
                <span className="text-stone-300">0% DAC (NO FLAWS)</span>
              </div>

              {/* Oscillating SVG Line Wave */}
              <svg className="w-32 h-5 text-emerald-400" viewBox="0 0 120 20" fill="none">
                <path 
                  d={`M0 10 L25 10 L30 8 L35 ${5 + (tick % 5)} L40 10 L65 10 L70 3 L75 17 L80 10 L120 10`} 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                />
              </svg>

              <span className="text-stone-400 font-bold text-[9px]">100% CLEARANCE</span>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* MODE 3: JOINT BEVEL & PASS-BY-PASS AUDIT                */}
        {/* ======================================================== */}
        {mode === 'passes' && (
          <div className="relative flex-1 flex flex-col items-center justify-center">
            
            {/* Interactive Weld Pass Cross Section Selector */}
            <div className="flex items-center justify-center gap-1.5 py-1">
              {passesData.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePass(p.id)}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-bold border transition-all cursor-pointer ${
                    activePass === p.id
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-sm'
                      : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'
                  }`}
                >
                  P0{p.id}
                </button>
              ))}
            </div>

            {/* Selected Pass Live Specification Card */}
            <div className="w-full max-w-[360px] bg-stone-900/95 border border-stone-700/80 rounded-xl p-3 my-1 space-y-1.5 shadow-md">
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-stone-800">
                <span className="font-bold text-amber-400">{selectedPass.name}</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
                  {selectedPass.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div>
                  <span className="text-stone-500 block">FILLER METAL / WIRE:</span>
                  <span className="text-white font-bold">{selectedPass.process}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">HEAT INPUT (kJ/mm):</span>
                  <span className="text-amber-300 font-bold">{selectedPass.heat}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">WELDING CURRENT:</span>
                  <span className="text-white font-bold">{selectedPass.amps} // {selectedPass.volts}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">INSPECTION CHECK:</span>
                  <span className="text-emerald-400 font-bold">ASME Sec IX PASS</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Bottom Screen Live Status Bar */}
        <div className="relative z-10 pt-2 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400">
          <div className="flex items-center gap-1.5 text-stone-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>METALLURGICAL ACCEPTANCE: 100%</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-stone-500">ASNT LEVEL III:</span>
            <span className="text-amber-400 font-bold">ACTIVE AUDIT</span>
          </div>
        </div>

      </div>

      {/* Hardware-Grade Telemetry Dial Gauges */}
      <div className="grid grid-cols-3 gap-2 mt-3 text-center text-[10px]">
        <div className="p-2 rounded-xl bg-stone-900/80 border border-stone-800">
          <span className="text-stone-500 block text-[9px]">PREHEAT</span>
          <span className="text-amber-400 font-bold text-xs">150°C</span>
          <span className="text-[8px] text-emerald-400 block">QUALIFIED</span>
        </div>

        <div className="p-2 rounded-xl bg-stone-900/80 border border-stone-800">
          <span className="text-stone-500 block text-[9px]">INTERPASS</span>
          <span className="text-amber-400 font-bold text-xs">220°C MAX</span>
          <span className="text-[8px] text-emerald-400 block">WITHIN LIMIT</span>
        </div>

        <div className="p-2 rounded-xl bg-stone-900/80 border border-stone-800">
          <span className="text-stone-500 block text-[9px]">PWHT STATUS</span>
          <span className="text-white font-bold text-xs">620°C ±10°</span>
          <span className="text-[8px] text-emerald-400 block">SCHEDULED</span>
        </div>
      </div>

    </div>
  );
};
