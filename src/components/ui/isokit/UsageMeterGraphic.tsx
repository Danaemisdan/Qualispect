import React, { useState, useEffect } from 'react';
import { Gauge, Check, ShieldCheck, Flame, ArrowUpRight } from 'lucide-react';

export interface UsageMeterGraphicProps {
  initialPressure?: number;
  className?: string;
  onPressureChange?: (pressure: number) => void;
}

export const UsageMeterGraphic: React.FC<UsageMeterGraphicProps> = ({
  initialPressure = 2250,
  className = '',
  onPressureChange
}) => {
  const [pressure, setPressure] = useState<number>(initialPressure);
  const [displayCounter, setDisplayCounter] = useState<number>(initialPressure);

  // Pressure stages
  const STAGES = [
    { label: '0 PSI', val: 0, desc: 'Depressurized' },
    { label: '1,500 PSI', val: 1500, desc: 'Nominal MAWP' },
    { label: '2,250 PSI', val: 2250, desc: '1.5x Shell Proof' },
    { label: '3,000 PSI', val: 3000, desc: 'Burst Limit' }
  ];

  // Smooth odometer count-up/down
  useEffect(() => {
    let current = displayCounter;
    if (current === pressure) return;

    const diff = pressure - current;
    const step = Math.sign(diff) * Math.max(25, Math.ceil(Math.abs(diff) / 10));

    const timer = setInterval(() => {
      current += step;
      if ((step > 0 && current >= pressure) || (step < 0 && current <= pressure)) {
        current = pressure;
        clearInterval(timer);
      }
      setDisplayCounter(current);
    }, 20);

    return () => clearInterval(timer);
  }, [pressure, displayCounter]);

  // Needle angle: -120 deg (at 0 PSI) to +120 deg (at 3000 PSI)
  const maxPSI = 3000;
  const needleAngle = -120 + (displayCounter / maxPSI) * 240;

  const handleSelectStage = (val: number) => {
    setPressure(val);
    if (onPressureChange) onPressureChange(val);
  };

  return (
    <div className={`relative rounded-2xl bg-white border border-stone-200/90 p-4 shadow-sm select-none ${className}`}>
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-100 text-[11px] font-mono">
        <div className="flex items-center gap-1.5 font-bold text-stone-900">
          <Gauge className="w-3.5 h-3.5 text-amber-600" />
          <span>ISOKIT // USAGE METER</span>
        </div>
        <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200 font-semibold">
          API 598 PROOF
        </span>
      </div>

      {/* Isometric 3D Mechanical Gauge SVG */}
      <div className="relative w-full h-44 flex items-center justify-center overflow-hidden">
        
        <svg className="w-56 h-40 overflow-visible" viewBox="0 0 240 180" fill="none">
          {/* Isometric Shadow */}
          <ellipse cx="120" cy="155" rx="85" ry="22" fill="#E7E5E4" opacity="0.6" />

          {/* Lower Cylindrical Body */}
          <path d="M 35 90 C 35 125, 205 125, 205 90 L 205 110 C 205 145, 35 145, 35 110 Z" fill="#D6D3D1" stroke="#A8A29E" strokeWidth="1.5" />
          <path d="M 40 95 C 40 128, 200 128, 200 95 L 200 112 C 200 145, 40 145, 40 112 Z" fill="#E7E5E4" />

          {/* Outer Chrome Bezel Ring */}
          <ellipse cx="120" cy="85" rx="85" ry="42" fill="#F5F5F4" stroke="#78716C" strokeWidth="2.5" />
          <ellipse cx="120" cy="84" rx="79" ry="38" fill="#FFFFFF" stroke="#D6D3D1" strokeWidth="1.5" />

          {/* Gauge Dial Face */}
          <ellipse cx="120" cy="84" rx="72" ry="34" fill="#FAFAF9" stroke="#E7E5E4" strokeWidth="1" />

          {/* Scale Markings & Arc */}
          {/* Nominal Arc */}
          <path d="M 60 92 C 55 70, 85 58, 120 58" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
          {/* Proof Arc (1,500 to 2,500 PSI) */}
          <path d="M 120 58 C 150 58, 180 70, 180 92" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
          {/* Danger Redline (2,500 to 3,000 PSI) */}
          <path d="M 180 92 C 182 98, 180 102, 175 106" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />

          {/* Major Calibration Ticks */}
          {[0, 500, 1000, 1500, 2000, 2500, 3000].map((psi) => {
            const angle = (-120 + (psi / 3000) * 240) * (Math.PI / 180);
            const x1 = 120 + 60 * Math.sin(angle);
            const y1 = 84 - 28 * Math.cos(angle);
            const x2 = 120 + 52 * Math.sin(angle);
            const y2 = 84 - 24 * Math.cos(angle);
            return (
              <line key={psi} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#57534E" strokeWidth={psi % 1000 === 0 ? "2" : "1"} />
            );
          })}

          {/* Sweeping Needle */}
          <g transform={`rotate(${needleAngle}, 120, 84)`} className="transition-transform duration-300 ease-out">
            {/* Needle Shadow */}
            <path d="M 118 84 L 119 50 L 121 50 L 122 84 Z" fill="#78716C" opacity="0.3" transform="translate(2, 3)" />
            {/* Precision Needle Blade */}
            <path d="M 118 84 L 120 46 L 122 84 Z" fill="#B45309" stroke="#78350F" strokeWidth="0.8" />
            <circle cx="120" cy="46" r="1.5" fill="#F59E0B" />
          </g>

          {/* Central Pivot Hub */}
          <ellipse cx="120" cy="84" rx="8" ry="4" fill="#1C1917" />
          <ellipse cx="120" cy="83" rx="5" ry="2.5" fill="#D97706" />

          {/* Rolling Mechanical Odometer Window */}
          <rect x="92" y="98" width="56" height="18" rx="3" fill="#1C1917" stroke="#78716C" strokeWidth="1" />
          <text x="120" y="111" fill="#FDE68A" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            {String(displayCounter).padStart(4, '0')}
          </text>
        </svg>

        {/* Dynamic Proof Hold Status Tag */}
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-white/95 border border-stone-200 shadow-xs text-[10px] font-mono">
          {displayCounter >= 2250 ? (
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <Check className="w-3 h-3 text-emerald-600" /> PROOF PASS
            </span>
          ) : displayCounter >= 1500 ? (
            <span className="text-amber-700 font-bold">OPERATING</span>
          ) : (
            <span className="text-stone-500">IDLE</span>
          )}
        </div>

      </div>

      {/* Interactive Pressable Stage Buttons (Exact Aadil Ghani isokit pattern) */}
      <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between gap-1.5">
        {STAGES.map((s) => {
          const isActive = pressure === s.val;
          return (
            <button
              key={s.val}
              onClick={() => handleSelectStage(s.val)}
              className={`flex-1 py-1.5 px-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer text-center border ${
                isActive
                  ? 'bg-stone-900 text-white border-stone-900 shadow-xs scale-102'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

    </div>
  );
};
