import React, { useState } from 'react';
import { GitCommit, CheckCircle2, RotateCcw, ArrowRight, Play, ShieldAlert, Sparkles } from 'lucide-react';

export interface DeployPipelineGraphicProps {
  className?: string;
  onStageChange?: (stage: number) => void;
}

const STAGES = [
  { id: 1, name: 'PO & ITP Audit', code: 'ITP-REV4', spec: 'Hold Point Specs Confirmed' },
  { id: 2, name: 'WPS Welder Fit-Up', code: 'WPS-401', spec: 'Root Pass Visual Pass' },
  { id: 3, name: 'Hydro 2,250 PSI', code: 'API-598', spec: 'Zero-Decay Shell Proof' },
  { id: 4, name: 'Release Dossier', code: '24H-IDR', spec: 'Houston Desk Signed' }
];

export const DeployPipelineGraphic: React.FC<DeployPipelineGraphicProps> = ({
  className = '',
  onStageChange
}) => {
  const [activeStage, setActiveStage] = useState<number>(3);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const handleNext = () => {
    const next = activeStage < 4 ? activeStage + 1 : 1;
    setActiveStage(next);
    if (onStageChange) onStageChange(next);
  };

  const handleRollback = () => {
    const prev = activeStage > 1 ? activeStage - 1 : 4;
    setActiveStage(prev);
    if (onStageChange) onStageChange(prev);
  };

  const runSimulation = () => {
    setIsSimulating(true);
    let step = 1;
    setActiveStage(1);

    const interval = setInterval(() => {
      step++;
      if (step > 4) {
        clearInterval(interval);
        setIsSimulating(false);
      } else {
        setActiveStage(step);
      }
    }, 700);
  };

  return (
    <div className={`relative rounded-2xl bg-white border border-stone-200/90 p-5 shadow-sm select-none ${className}`}>
      
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100 text-[11px] font-mono">
        <div className="flex items-center gap-2 font-bold text-stone-900">
          <GitCommit className="w-4 h-4 text-amber-600" />
          <span>ISOKIT // DEPLOY PIPELINE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200">
            HOLD ENFORCEMENT
          </span>
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="text-[10px] font-bold text-amber-800 hover:text-amber-950 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer"
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            <span>Simulate Cycle</span>
          </button>
        </div>
      </div>

      {/* Isometric 3D Industrial Pipeline Flow SVG */}
      <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
        
        <svg className="w-full max-w-[420px] h-44 overflow-visible" viewBox="0 0 380 160" fill="none">
          {/* Isometric Pipeline Conduit (Connecting 4 Nodes) */}
          <path d="M 40 85 L 130 85 L 230 85 L 330 85" stroke="#E7E5E4" strokeWidth="14" strokeLinecap="round" />
          <path d="M 40 85 L 130 85 L 230 85 L 330 85" stroke="#D6D3D1" strokeWidth="8" strokeLinecap="round" />

          {/* Active Flow Pulse Bar along Pipeline */}
          <path 
            d={`M 40 85 L ${40 + (activeStage - 1) * 96.6} 85`} 
            stroke="#D97706" 
            strokeWidth="4" 
            strokeLinecap="round"
            className="transition-all duration-500 ease-out" 
          />

          {/* Interconnecting Isometric Pipe Flanges */}
          {[85, 180, 280].map((fx, idx) => (
            <g key={idx}>
              <ellipse cx={fx} cy="85" rx="3.5" ry="8" fill="#78716C" />
              <ellipse cx={fx + 2} cy="85" rx="3.5" ry="8" fill="#A8A29E" />
            </g>
          ))}

          {/* 4 Isometric Stage Hubs / Valves */}
          {STAGES.map((s, idx) => {
            const cx = 40 + idx * 96.6;
            const cy = 85;
            const isPassed = activeStage > s.id;
            const isCurrent = activeStage === s.id;

            return (
              <g key={s.id} onClick={() => setActiveStage(s.id)} className="cursor-pointer group">
                {/* Node Base Shadow */}
                <ellipse cx={cx} cy={cy + 25} rx="24" ry="8" fill="#E7E5E4" opacity="0.6" />

                {/* Isometric Cylindrical Pedestal */}
                <path d={`M ${cx - 20} ${cy} C ${cx - 20} ${cy + 15}, ${cx + 20} ${cy + 15}, ${cx + 20} ${cy} L ${cx + 20} ${cy + 12} C ${cx + 20} ${cy + 27}, ${cx - 20} ${cy + 27}, ${cx - 20} ${cy + 12} Z`} fill="#D6D3D1" />
                
                {/* Upper Flange Rim */}
                <ellipse cx={cx} cy={cy} rx="20" ry="10" fill={isCurrent ? '#F59E0B' : isPassed ? '#10B981' : '#F5F5F4'} stroke="#78716C" strokeWidth="1.5" />
                <ellipse cx={cx} cy={cy - 1} rx="16" ry="8" fill={isCurrent ? '#FDE68A' : isPassed ? '#ECFDF5' : '#FFFFFF'} />

                {/* Top Glowing Indicator Sphere */}
                <circle 
                  cx={cx} 
                  cy={cy - 12} 
                  r={isCurrent ? "8" : "6"} 
                  fill={isCurrent ? '#D97706' : isPassed ? '#059669' : '#A8A29E'}
                  className={isCurrent ? "animate-pulse" : ""}
                />
                <circle cx={cx} cy={cy - 12} r={isCurrent ? "3" : "2"} fill="#FFFFFF" />

                {/* Stage Step Number Badge */}
                <text x={cx} y={cy + 38} fill="#1C1917" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  0{s.id}
                </text>
                <text x={cx} y={cy + 48} fill="#78716C" fontSize="7.5" fontFamily="monospace" textAnchor="middle">
                  {s.code}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Active Stage Inspector Callout */}
        <div className="absolute top-2 left-4 right-4 p-2.5 rounded-xl bg-white/95 border border-stone-200 shadow-sm backdrop-blur-md flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span className="font-bold text-stone-900">
              STAGE 0{activeStage}: {STAGES[activeStage - 1].name}
            </span>
          </div>
          <span className="text-[11px] text-stone-600 font-medium">
            {STAGES[activeStage - 1].spec}
          </span>
        </div>

      </div>

      {/* Pipeline Control Buttons */}
      <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between">
        <button
          onClick={handleRollback}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-mono cursor-pointer transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
          <span>Rollback Hold</span>
        </button>

        <span className="text-[11px] font-mono text-stone-500">
          Zero-Bypass Policy Enforced
        </span>

        <button
          onClick={handleNext}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-stone-900 hover:bg-black text-white text-xs font-mono font-medium cursor-pointer transition-colors shadow-xs"
        >
          <span>Advance Stage</span>
          <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
        </button>
      </div>

    </div>
  );
};
