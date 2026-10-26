import React, { useState } from 'react';
import { KeyRound, ShieldCheck, Check, Sparkles, Fingerprint } from 'lucide-react';

export interface SecurityKeyGraphicProps {
  className?: string;
  inspectorId?: string;
  onVerify?: () => void;
}

export const SecurityKeyGraphic: React.FC<SecurityKeyGraphicProps> = ({
  className = '',
  inspectorId = 'AWS CWI #1904221',
  onVerify
}) => {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [signatureCount, setSignatureCount] = useState<number>(482);

  const handleTouch = () => {
    setIsTouched(true);
    setSignatureCount((prev) => prev + 1);
    if (onVerify) onVerify();

    setTimeout(() => {
      setIsTouched(false);
    }, 1400);
  };

  return (
    <div className={`relative rounded-2xl bg-white border border-stone-200/90 p-4 shadow-sm select-none ${className}`}>
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-100 text-[11px] font-mono">
        <div className="flex items-center gap-1.5 font-bold text-stone-900">
          <KeyRound className="w-3.5 h-3.5 text-amber-600" />
          <span>ISOKIT // SECURITY KEY</span>
        </div>
        <span className="text-[10px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200 font-semibold">
          FIPS 140-3
        </span>
      </div>

      {/* Isometric Hardware Security Key SVG */}
      <div className="relative w-full h-44 flex items-center justify-center overflow-hidden">
        
        <svg className="w-56 h-40 overflow-visible cursor-pointer group" viewBox="0 0 240 180" fill="none" onClick={handleTouch}>
          {/* Isometric Shadow */}
          <polygon points="40,140 170,165 200,135 70,110" fill="#E7E5E4" opacity="0.6" />

          {/* Key Metal Base Body (Isometric Chamfered Polygon) */}
          {/* Bottom Face */}
          <polygon points="50,115 160,135 190,110 80,90" fill="#78716C" />
          {/* Left Bevel */}
          <polygon points="50,115 50,105 80,80 80,90" fill="#A8A29E" />
          {/* Front Bevel */}
          <polygon points="50,115 160,135 160,125 50,105" fill="#D6D3D1" />
          {/* Right Bevel */}
          <polygon points="160,135 190,110 190,100 160,125" fill="#57534E" />

          {/* Top Surface Face (Anodized Dark Charcoal Slate) */}
          <polygon points="50,105 160,125 190,100 80,80" fill="#1C1917" stroke="#292524" strokeWidth="1.5" />

          {/* Gold Connector Contact Traces (Isometric USB-C Neck) */}
          <polygon points="40,100 65,105 75,97 50,92" fill="#E7E5E4" stroke="#78716C" strokeWidth="1" />
          <polygon points="42,99 50,100 52,98 44,97" fill="#F59E0B" />
          <polygon points="48,100 56,101 58,99 50,98" fill="#F59E0B" />
          <polygon points="54,101 62,102 64,100 56,99" fill="#F59E0B" />

          {/* Touchable Gold Sensor Disc (Center Pad) */}
          <g className={`transition-all duration-300 ${isTouched ? 'scale-105' : 'group-hover:scale-102'}`} transform="translate(0, 0)">
            {/* Gold Disc Rim */}
            <ellipse cx="125" cy="104" rx="26" ry="14" fill="#B45309" />
            <ellipse cx="125" cy="103" rx="24" ry="12.5" fill={isTouched ? '#FDE68A' : '#F59E0B'} stroke="#78350F" strokeWidth="1" />
            
            {/* Concentric Touch Rings */}
            <ellipse cx="125" cy="103" rx="16" ry="8" fill="none" stroke="#B45309" strokeWidth="1.2" strokeDasharray="2 2" />
            <ellipse cx="125" cy="103" rx="8" ry="4" fill="#FEF3C7" />
            
            {/* Fingerprint Glyph Outline */}
            <ellipse cx="125" cy="103" rx="3" ry="1.5" fill="#B45309" />
          </g>

          {/* Glowing Verification LED Indicator */}
          <ellipse cx="168" cy="109" rx="3.5" ry="2" fill={isTouched ? '#10B981' : '#059669'} />
          {isTouched && (
            <ellipse cx="168" cy="109" rx="8" ry="5" fill="#10B981" opacity="0.6" className="animate-ping" />
          )}

          {/* Laser-Engraved Key Label */}
          <text x="82" y="99" fill="#A8A29E" fontSize="7" fontFamily="monospace" transform="rotate(10, 82, 99)">
            QUALISPECT-QA
          </text>
        </svg>

        {/* Pulse / Touch Notification Banner */}
        <div className={`absolute top-2 right-2 px-2.5 py-1 rounded-xl text-[10px] font-mono shadow-md backdrop-blur-md transition-all ${
          isTouched 
            ? 'bg-emerald-600 text-white border border-emerald-400 scale-105' 
            : 'bg-white/95 text-stone-700 border border-stone-200'
        }`}>
          {isTouched ? (
            <span className="font-bold flex items-center gap-1">
              <Check className="w-3 h-3 text-white" /> SIGNED &amp; TIMESTAMPED
            </span>
          ) : (
            <span className="flex items-center gap-1 text-stone-500">
              <Fingerprint className="w-3 h-3 text-amber-600" /> TAP GOLD DISC
            </span>
          )}
        </div>

      </div>

      {/* Interactive Bottom Bar */}
      <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
        <div>
          <span className="text-[10px] text-stone-400 uppercase block">Inspector License</span>
          <span className="font-bold text-stone-900">{inspectorId}</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-stone-400 uppercase block">Signed Releases</span>
          <span className="font-bold text-amber-800">{signatureCount} Verified</span>
        </div>
      </div>

    </div>
  );
};
