import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ChevronRight,
  HardHat,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../../types';
import { BjorkDecodeText } from '../ui/BjorkDecodeText';

interface FinanceBentoSectionProps {
  navigateTo: (page: PageId) => void;
  openInspectorModal: (initialData?: any) => void;
}

type Period = '1M' | '3M' | '1Y' | 'All';
type Currency = 'USD' | 'EUR';

export const FinanceBentoSection: React.FC<FinanceBentoSectionProps> = ({
  navigateTo,
  openInspectorModal
}) => {
  const [period, setPeriod] = useState<Period>('1M');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const currencySymbol = currency === 'USD' ? '$' : '€';
  const currencyMultiplier = currency === 'USD' ? 1.0 : 0.92;

  // Chart data based on selected period
  const netWorthData: Record<Period, { value: number; change: string; points: number[] }> = {
    '1M': { value: 142850, change: '+14.2%', points: [20, 28, 45, 40, 65, 58, 85, 92, 110, 105, 128, 142] },
    '3M': { value: 384200, change: '+22.8%', points: [30, 48, 62, 78, 95, 120, 150, 185, 230, 275, 320, 384] },
    '1Y': { value: 1240000, change: '+38.5%', points: [40, 60, 85, 110, 150, 210, 290, 410, 560, 740, 980, 1240] },
    'All': { value: 4890000, change: '+112.4%', points: [10, 30, 70, 140, 260, 480, 820, 1350, 2200, 3100, 4100, 4890] }
  };

  const currentData = netWorthData[period];
  const formattedValue = (currentData.value * currencyMultiplier).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // Weekday stock/volume bar chart data
  const weekdayBars = [
    { day: 'Mon', value: 42, volume: '8.4K', count: 420 },
    { day: 'Tue', value: 68, volume: '13.6K', count: 680 },
    { day: 'Wed', value: 85, volume: '17.0K', count: 850 },
    { day: 'Thu', value: 54, volume: '10.8K', count: 540 },
    { day: 'Fri', value: 96, volume: '19.2K', count: 960 }
  ];

  // Asset breakdown items with mini sparkline coordinates
  const assetRows = [
    {
      name: 'Pressure Vessels & Piping',
      ticker: 'ASME Sec VIII',
      allocation: 54,
      amount: 77139 * currencyMultiplier,
      change: '+4.8%',
      sparkline: 'M0,18 Q15,8 30,14 T60,6 T90,2'
    },
    {
      name: 'Welding & Structural QA',
      ticker: 'AWS D1.1 / CWI',
      allocation: 32,
      amount: 45712 * currencyMultiplier,
      change: '+2.4%',
      sparkline: 'M0,14 Q20,20 40,10 T70,8 T90,4'
    },
    {
      name: 'Rotating Machinery & FAT',
      ticker: 'API 610 / 6D',
      allocation: 14,
      amount: 19999 * currencyMultiplier,
      change: '+8.1%',
      sparkline: 'M0,16 Q25,12 45,18 T75,8 T90,1'
    }
  ];

  // Normalize points for SVG path
  const pts = currentData.points;
  const minP = Math.min(...pts);
  const maxP = Math.max(...pts);
  const range = maxP - minP || 1;
  const svgWidth = 460;
  const svgHeight = 140;

  const pathCoords = pts.map((p, idx) => {
    const x = (idx / (pts.length - 1)) * svgWidth;
    const y = svgHeight - 15 - ((p - minP) / range) * (svgHeight - 35);
    return [x, y];
  });

  const dPath = pathCoords.reduce((acc, [x, y], idx) => {
    if (idx === 0) return `M${x},${y}`;
    const [prevX, prevY] = pathCoords[idx - 1];
    const midX = (prevX + x) / 2;
    return `${acc} C${midX},${prevY} ${midX},${y} ${x},${y}`;
  }, '');

  const lastCoord = pathCoords[pathCoords.length - 1];
  const areaPath = `${dPath} L${svgWidth},${svgHeight} L0,${svgHeight} Z`;

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FAFAF9] text-stone-900 border-b border-stone-200/80 overflow-hidden select-none">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative space-y-8">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-stone-200/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-stone-800 uppercase font-semibold">
                [03 // ROMAN VASNEV FINANCE BENTO]
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-500">REAL-TIME SURVEILLANCE TELEMETRY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-sans">
              <BjorkDecodeText text="Quality Capital Analytics." trigger="inView" />
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              Direct visibility into surveillance yield, capital preservation, vendor deviation mitigation, and global equipment sign-off streams.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => openInspectorModal()}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white bg-stone-900 hover:bg-black px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <HardHat className="w-3.5 h-3.5 text-amber-400" />
              <span>Deploy Inspector</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ROMAN VASNEV BENTO CONTAINER (Dark/Light Luxury Theme)   */}
        {/* ======================================================== */}
        <div className="rounded-3xl border border-stone-300/80 bg-white p-5 sm:p-7 shadow-[0_20px_70px_rgba(0,0,0,0.06)] space-y-5">
          
          {/* Top Control Bar: Title, Subtitle, Segmented Period, Currency */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900">
                  OVERVIEW
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs font-mono text-stone-500 mt-0.5">
                Updated today, 09:41 EST &bull; Live Houston Dispatch Desk
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              {/* Period Selector [1M] [3M] [1Y] [All] */}
              <div className="flex items-center p-1 rounded-xl bg-stone-100 border border-stone-200 text-xs font-mono">
                {(['1M', '3M', '1Y', 'All'] as Period[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      period === p 
                        ? 'bg-white text-stone-900 shadow-xs border border-stone-300/60 font-bold' 
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Currency Selector [USD] [EUR] */}
              <div className="flex items-center p-1 rounded-xl bg-stone-100 border border-stone-200 text-xs font-mono">
                {(['USD', 'EUR'] as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-2 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      currency === c 
                        ? 'bg-white text-stone-900 shadow-xs border border-stone-300/60 font-bold' 
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BENTO GRID (Roman Vasnev Asymmetric Layout)               */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* CARD 1 (7 cols): Net Worth / Capital Preservation Chart */}
            <div className="lg:col-span-7 rounded-2xl border border-stone-200 bg-stone-50/70 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider font-semibold">
                    CAPITAL SURVEILLANCE VALUE
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                    <span>{currentData.change}</span>
                  </span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
                    {currencySymbol}{formattedValue}
                  </span>
                  <span className="text-xs font-mono text-stone-500 font-normal">
                    this period
                  </span>
                </div>
              </div>

              {/* Smooth Bezier Line Chart with Gradient Sheen Area */}
              <div className="relative w-full h-36 sm:h-44 mt-4">
                <svg 
                  className="w-full h-full overflow-visible" 
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="rvNetWorthGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
                      <stop offset="60%" stopColor="#10B981" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.00" />
                    </linearGradient>
                    <linearGradient id="rvStrokeGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="70%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#34D399" />
                    </linearGradient>
                  </defs>

                  {/* Area Fill */}
                  <path d={areaPath} fill="url(#rvNetWorthGrad)" />

                  {/* Main Line Stroke */}
                  <path 
                    d={dPath} 
                    fill="none" 
                    stroke="url(#rvStrokeGrad)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />

                  {/* Glowing Endpoint Dot */}
                  <circle cx={lastCoord[0]} cy={lastCoord[1]} r="5" fill="#10B981" />
                  <circle cx={lastCoord[0]} cy={lastCoord[1]} r="9" fill="#10B981" fillOpacity="0.3" className="animate-ping" />
                </svg>
              </div>

              <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>Verified Independent Inspection Hold Points</span>
                <span className="text-stone-900 font-bold">100% Conflict-Free</span>
              </div>
            </div>

            {/* CARD 2 (5 cols): Weekday Stocks / Audits Bar Chart */}
            <div className="lg:col-span-5 rounded-2xl border border-stone-200 bg-stone-50/70 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider font-semibold">
                    DAILY SHOP SURVEILLANCE
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                    <span>+1.8% this week</span>
                  </span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                    {currencySymbol}{(58400 * currencyMultiplier).toLocaleString('en-US', { minimumFractionDigits: 0 })}
                  </span>
                  <span className="text-xs font-mono text-stone-500 font-normal">
                    volume
                  </span>
                </div>
              </div>

              {/* Vertical Pill Bar Chart with Track Pills */}
              <div className="grid grid-cols-5 gap-2.5 sm:gap-4 items-end h-36 my-3 pt-4">
                {weekdayBars.map((bar, idx) => (
                  <div 
                    key={bar.day}
                    onMouseEnter={() => setHoveredDay(idx)}
                    onMouseLeave={() => setHoveredDay(null)}
                    className="flex flex-col items-center h-full justify-end cursor-pointer group"
                  >
                    {/* Tooltip on hover */}
                    <div className={`text-[10px] font-mono font-bold mb-1 transition-all ${
                      hoveredDay === idx ? 'opacity-100 text-amber-700 -translate-y-0.5' : 'opacity-0'
                    }`}>
                      {bar.volume}
                    </div>

                    {/* Bar Track Pill */}
                    <div className="relative w-full max-w-[36px] h-28 rounded-full bg-stone-200/70 p-1 flex flex-col justify-end overflow-hidden">
                      {/* Active Colored Fill Pill */}
                      <div 
                        className={`w-full rounded-full transition-all duration-500 ${
                          idx === 4 
                            ? 'bg-amber-600' 
                            : hoveredDay === idx 
                            ? 'bg-stone-900' 
                            : 'bg-stone-700'
                        }`}
                        style={{ height: `${bar.value}%` }}
                      />
                    </div>

                    <span className="text-[11px] font-mono font-medium text-stone-600 mt-2">
                      {bar.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>Peak Volume: Friday (960 Holds)</span>
                <span className="text-amber-800 font-bold">24h SLA MET</span>
              </div>
            </div>

            {/* CARD 3 (12 cols): Asset Breakdown with Live Sparklines */}
            <div className="lg:col-span-12 rounded-2xl border border-stone-200 bg-stone-50/70 p-5 sm:p-6 space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-200/80">
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider font-semibold">
                    DISCIPLINE ALLOCATION &amp; LIVE SPARKLINES
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-mono text-2xl font-extrabold text-stone-900">
                      {currencySymbol}{(142850 * currencyMultiplier).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700">
                      ↑ 2.4% allocated
                    </span>
                  </div>
                </div>

                {/* Segmented Distribution Pill Bar */}
                <div className="w-full sm:w-72 space-y-1">
                  <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-stone-200">
                    <div className="bg-stone-900 h-full w-[54%]" />
                    <div className="bg-amber-600 h-full w-[32%]" />
                    <div className="bg-stone-400 h-full w-[14%]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-stone-500">
                    <span>Mech 54%</span>
                    <span>Weld 32%</span>
                    <span>FAT 14%</span>
                  </div>
                </div>
              </div>

              {/* 3 Asset Rows with Sparklines */}
              <div className="divide-y divide-stone-200/70">
                {assetRows.map((asset) => (
                  <div 
                    key={asset.ticker}
                    className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs hover:bg-white/80 p-2 rounded-xl transition-colors cursor-pointer"
                  >
                    {/* Left: Name and Ticker */}
                    <div className="flex items-center gap-3 min-w-[200px]">
                      <div className="w-8 h-8 rounded-lg bg-stone-200/80 text-stone-800 flex items-center justify-center font-bold text-xs">
                        {asset.ticker.slice(0, 3)}
                      </div>
                      <div>
                        <div className="text-stone-900 font-bold font-sans text-sm">
                          {asset.name}
                        </div>
                        <div className="text-[10px] text-stone-500">
                          {asset.ticker} &bull; 7d
                        </div>
                      </div>
                    </div>

                    {/* Center: Live Sparkline SVG */}
                    <div className="w-28 h-7 flex items-center">
                      <svg className="w-full h-full" viewBox="0 0 96 22">
                        <defs>
                          <linearGradient id={`sparkGrad-${asset.ticker}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d={`${asset.sparkline} L90,22 L0,22 Z`} fill={`url(#sparkGrad-${asset.ticker})`} />
                        <path d={asset.sparkline} fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="90" cy="2" r="2.5" fill="#10B981" />
                      </svg>
                    </div>

                    {/* Right: Value & Change Badge */}
                    <div className="text-right flex items-center justify-end gap-3 min-w-[130px]">
                      <span className="text-sm font-bold text-stone-900 font-mono">
                        {currencySymbol}{asset.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {asset.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
