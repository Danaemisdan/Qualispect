import React, { useState } from 'react';
import { Lock, Unlock, ShieldCheck, CheckCircle2, RotateCw } from 'lucide-react';

export interface VaultDoorGraphicProps {
  className?: string;
  onToggleLock?: (isLocked: boolean) => void;
}

export const VaultDoorGraphic: React.FC<VaultDoorGraphicProps> = ({
  className = '',
  onToggleLock
}) => {
  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [wheelRotation, setWheelRotation] = useState<number>(0);

  const toggleLock = () => {
    setWheelRotation((prev) => prev + (isLocked ? 120 : -120));
    const next = !isLocked;
    setIsLocked(next);
    if (onToggleLock) onToggleLock(next);
  };

  return (
    <div className={`relative rounded-2xl bg-white border border-stone-200/90 p-5 shadow-sm select-none ${className}`}>
      
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100 text-[11px] font-mono">
        <div className="flex items-center gap-2 font-bold text-stone-900">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span>ISOKIT // VAULT DOOR</span>
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
          isLocked 
            ? 'bg-amber-50 text-amber-800 border-amber-200' 
            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }`}>
          {isLocked ? 'ZERO-BYPASS ENGAGED' : 'STAGE CLEARED'}
        </span>
      </div>

      {/* Isometric Heavy Mechanical Vault Door SVG */}
      <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
        
        <svg 
          className="w-56 h-44 overflow-visible cursor-pointer group" 
          viewBox="0 0 240 180" 
          fill="none"
          onClick={toggleLock}
        >
          {/* Isometric Shadow */}
          <ellipse cx="120" cy="155" rx="85" ry="24" fill="#E7E5E4" opacity="0.6" />

          {/* Outer Heavy Steel Door Casing Flange */}
          <ellipse cx="120" cy="90" rx="82" ry="42" fill="#D6D3D1" stroke="#78716C" strokeWidth="2.5" />
          <ellipse cx="120" cy="87" rx="76" ry="38" fill="#E7E5E4" stroke="#A8A29E" strokeWidth="1.5" />

          {/* Bolt Circle Ticks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const bx = 120 + 70 * Math.cos(rad);
            const by = 87 + 34 * Math.sin(rad);
            return (
              <circle key={deg} cx={bx} cy={by} r="2.2" fill="#57534E" />
            );
          })}

          {/* 8 Radial Locking Lugs (Pin Mechanism) */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const lugDist = isLocked ? 58 : 46;
            const lx = 120 + lugDist * Math.cos(rad);
            const ly = 87 + (lugDist * 0.5) * Math.sin(rad);
            return (
              <ellipse 
                key={deg} 
                cx={lx} 
                cy={ly} 
                rx={isLocked ? "6" : "4"} 
                ry={isLocked ? "3.5" : "2.5"} 
                fill={isLocked ? "#D97706" : "#059669"} 
                stroke="#1C1917"
                strokeWidth="1"
                className="transition-all duration-500 ease-out"
              />
            );
          })}

          {/* Inner Vault Pressure Plate Face */}
          <ellipse cx="120" cy="86" rx="55" ry="28" fill="#1C1917" stroke="#292524" strokeWidth="2" />
          <ellipse cx="120" cy="85" rx="46" ry="22" fill="#292524" />

          {/* Rotating 3-Spoke Vault Handwheel */}
          <g 
            transform={`rotate(${wheelRotation}, 120, 85)`} 
            className="transition-transform duration-700 ease-out"
          >
            {/* Outer Wheel Ring */}
            <circle cx="120" cy="85" r="28" fill="none" stroke="#D97706" strokeWidth="4" />
            <circle cx="120" cy="85" r="24" fill="none" stroke="#B45309" strokeWidth="1.5" />

            {/* 3 Spokes */}
            <line x1="120" y1="85" x2="120" y2="57" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="120" y1="85" x2="144" y2="99" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="120" y1="85" x2="96" y2="99" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />

            {/* Center Hub */}
            <circle cx="120" cy="85" r="8" fill="#1C1917" stroke="#FDE68A" strokeWidth="1.5" />
            <circle cx="120" cy="85" r="3.5" fill="#F59E0B" />
          </g>

          {/* Status LED Pin */}
          <circle cx="120" cy="120" r="3" fill={isLocked ? '#F59E0B' : '#10B981'} />
        </svg>

        {/* Dynamic Interactive Callout */}
        <div className="absolute top-2 right-2 px-2.5 py-1 rounded-xl bg-white/95 border border-stone-200 shadow-xs text-[10px] font-mono flex items-center gap-1.5">
          <RotateCw className="w-3 h-3 text-stone-500" />
          <span className="text-stone-700 font-semibold">CLICK WHEEL TO {isLocked ? 'CLEAR' : 'LOCK'}</span>
        </div>

      </div>

      {/* Footer Info */}
      <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-600">
        <span className="flex items-center gap-1">
          {isLocked ? <Lock className="w-3.5 h-3.5 text-amber-600" /> : <Unlock className="w-3.5 h-3.5 text-emerald-600" />}
          <span>{isLocked ? 'ASME Hold Gate Armed' : 'Cleared for Release'}</span>
        </span>
        <span className="text-stone-900 font-bold">100% WITNESS VERIFIED</span>
      </div>

    </div>
  );
};
