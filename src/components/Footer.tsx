import React, { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  openInspectorModal: () => void;
  openQuoteModal: () => void;
  openCapabilityModal: () => void;
}

interface SocialItem {
  label: string;
  href?: string;
  icon: 'linkedin' | 'mail' | 'phone' | 'mapPin';
}

interface LinkItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface ColumnItem {
  title: string;
  links: LinkItem[];
}

interface CreditItem {
  lead: string;
  label?: string;
  href?: string;
  onClick?: () => void;
  tail?: string;
}

const BWF_STYLES = `
.bwf {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  container-type: inline-size;
  background: var(--bwf-bg);
  color: var(--bwf-ink);
  font-family: var(--bwf-sans);
  -webkit-font-smoothing: antialiased;
  touch-action: pan-y;
}
:where(.bwf) a {
  color: inherit;
  text-decoration: none;
}
:where(.bwf) button {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: left;
}
:where(.bwf) ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
:where(.bwf) p {
  margin: 0;
}
.bwf svg {
  max-width: none;
  display: block;
}
.bwf .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.bwf-rule {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  z-index: 3;
  background: linear-gradient(
    90deg,
    rgba(var(--bwf-acc), 0.15),
    rgba(var(--bwf-acc), 0.55) var(--bwf-b),
    rgba(var(--bwf-acc), 0.15)
  );
}
.bwf-sky {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.bwf-wash {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(120% 90% at 8% 0%, rgba(var(--bwf-acc), 0.2), transparent 55%),
    radial-gradient(90% 70% at 92% 8%, rgba(var(--bwf-acc), 0.14), transparent 60%),
    linear-gradient(180deg, rgba(var(--bwf-acc), 0.06), transparent 70%);
}
.bwf-bands {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    rgba(var(--bwf-acc), 0.05) 0 1.6cqw,
    transparent 1.6cqw 4.2cqw
  );
  -webkit-mask-image: linear-gradient(100deg, #000 0%, transparent 55%);
  mask-image: linear-gradient(100deg, #000 0%, transparent 55%);
  opacity: 0.9;
}
.bwf-beam {
  position: absolute;
  inset: 0;
  filter: blur(calc(1px + 1.6cqw));
  background:
    linear-gradient(
      var(--bwf-ang),
      transparent calc(var(--bwf-b) - 11%),
      rgba(var(--bwf-acc), 0.10) calc(var(--bwf-b) - 5%),
      rgba(var(--bwf-acc), 0.34) var(--bwf-b),
      rgba(var(--bwf-acc), 0.08) calc(var(--bwf-b) + 4%),
      transparent calc(var(--bwf-b) + 9%)
    ),
    linear-gradient(
      var(--bwf-ang),
      transparent calc(var(--bwf-b) - 34%),
      rgba(var(--bwf-acc), 0.10) calc(var(--bwf-b) - 27%),
      transparent calc(var(--bwf-b) - 20%)
    );
}
.bwf-glow {
  position: absolute;
  inset: 0;
  opacity: var(--bwf-g);
  background: radial-gradient(
    circle 26cqw at var(--bwf-px) var(--bwf-py),
    rgba(var(--bwf-acc), 0.16),
    transparent 70%
  );
}
.bwf-grain {
  position: absolute;
  inset: 0;
  opacity: 0.14;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}
.bwf-inner {
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(48px, 8.5cqw, 104px) clamp(20px, 6cqw, 88px) 0;
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) repeat(3, minmax(0, 0.85fr));
  column-gap: clamp(24px, 4cqw, 48px);
  row-gap: 44px;
}
.bwf-label {
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.05em;
  color: rgb(var(--bwf-acc));
  padding-bottom: 13px;
  position: relative;
  display: block;
  text-transform: uppercase;
  font-weight: 600;
}
.bwf-label::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, rgba(var(--bwf-acc), 0.55), rgba(var(--bwf-acc), 0.28));
  transform-origin: 0 50%;
  transform: scaleX(var(--bwf-line, 1));
  transition: transform 1.1s cubic-bezier(0.2, 0.7, 0.1, 1) var(--bwf-d, 0ms);
}
.bwf[data-in='false'] .bwf-label::after {
  --bwf-line: 0;
}
.bwf-col {
  min-width: 0;
}
.bwf-col:nth-child(1) {
  max-width: 440px;
}
.bwf-fade {
  transition: opacity 0.9s ease var(--bwf-d, 0ms), translate 0.9s cubic-bezier(0.2, 0.7, 0.1, 1) var(--bwf-d, 0ms);
}
.bwf[data-in='false'] .bwf-fade {
  opacity: 0;
  translate: 0 14px;
}
.bwf-socials {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
}
.bwf-soc {
  position: relative;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 6px;
  color: rgba(var(--bwf-ink-rgb), 0.65);
  background: linear-gradient(180deg, rgba(var(--bwf-ink-rgb), 0.09), rgba(var(--bwf-ink-rgb), 0.025));
  box-shadow: inset 0 0 0 1px rgba(var(--bwf-ink-rgb), 0.16), inset 0 1px 0 rgba(var(--bwf-ink-rgb), 0.14), 0 6px 14px -8px rgba(0, 0, 0, 0.8);
  transition: color 0.25s, box-shadow 0.35s, translate 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.35s;
  cursor: pointer;
}
.bwf-soc svg {
  width: 16px;
  height: 16px;
}
.bwf-soc:hover,
.bwf-soc:focus-visible {
  color: var(--bwf-ink);
  translate: 0 -2px;
  background: linear-gradient(180deg, rgba(var(--bwf-acc), 0.32), rgba(var(--bwf-acc), 0.08));
  box-shadow: inset 0 0 0 1px rgba(var(--bwf-acc), 0.75), inset 0 1px 0 rgba(var(--bwf-ink-rgb), 0.3), 0 10px 26px -8px rgba(var(--bwf-acc), 0.75);
}
.bwf-soc:focus-visible {
  outline: none;
}
.bwf-tip {
  position: absolute;
  z-index: 10;
  left: 50%;
  top: calc(100% + 9px);
  translate: -50% -4px;
  white-space: nowrap;
  font-size: 11px;
  line-height: 1;
  padding: 6px 8px;
  border-radius: 4px;
  background: rgba(var(--bwf-acc), 0.95);
  color: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, translate 0.25s;
}
.bwf-tip::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 100%;
  margin-left: -4px;
  border: 4px solid transparent;
  border-bottom-color: rgba(var(--bwf-acc), 0.95);
}
.bwf-soc:hover .bwf-tip,
.bwf-soc:focus-visible .bwf-tip {
  opacity: 1;
  translate: -50% 0;
}
.bwf-credits {
  margin-top: 22px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--bwf-muted);
}
.bwf-credits p + p {
  margin-top: 4px;
}
.bwf-credits b {
  font-weight: 500;
  color: var(--bwf-ink);
}
.bwf-credits a {
  color: var(--bwf-ink);
  background: linear-gradient(rgb(var(--bwf-acc)), rgb(var(--bwf-acc))) 0 100% / 0 1px no-repeat;
  transition: background-size 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.25s;
  cursor: pointer;
}
.bwf-credits a:hover,
.bwf-credits a:focus-visible {
  background-size: 100% 1px;
  color: #fff;
  outline: none;
}
.bwf-links {
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.bwf-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  font-size: 14px;
  line-height: 20px;
  color: rgba(var(--bwf-ink-rgb), 0.78);
  transition: color 0.25s;
  cursor: pointer;
  width: 100%;
  text-align: left;
}
.bwf-link-t {
  display: inline-block;
  transition: translate 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.bwf-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 6px;
  height: 1px;
  margin-top: 0;
  background: rgb(var(--bwf-acc));
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.bwf-link svg {
  width: 12px;
  height: 12px;
  opacity: 0;
  translate: -6px 0;
  color: rgb(var(--bwf-acc));
  transition: opacity 0.25s, translate 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  flex-shrink: 0;
}
.bwf-link:hover,
.bwf-link:focus-visible {
  color: #fff;
  outline: none;
}
.bwf-link:hover::before,
.bwf-link:focus-visible::before {
  transform: scaleX(1);
}
.bwf-link:hover .bwf-link-t,
.bwf-link:focus-visible .bwf-link-t {
  translate: 12px 0;
}
.bwf-link:hover svg,
.bwf-link:focus-visible svg {
  opacity: 1;
  translate: 10px 0;
}
.bwf-link:focus-visible .bwf-link-t {
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: rgba(var(--bwf-acc), 0.8);
}
.bwf-word {
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-top: clamp(32px, 8cqw, 100px);
}
.bwf-word-box {
  padding: 0 clamp(20px, 6cqw, 88px);
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.bwf-word-in {
  display: inline-flex;
  white-space: nowrap;
  font-weight: var(--bwf-ww);
  line-height: 1;
  letter-spacing: -0.045em;
  user-select: none;
  -webkit-user-select: none;
}
.bwf-lw {
  display: inline-block;
  translate: 0 0;
  transition: translate 1.25s cubic-bezier(0.16, 0.84, 0.2, 1) var(--bwf-d, 0ms);
}
.bwf[data-in='false'] .bwf-lw {
  translate: 0 85%;
}
.bwf-l {
  display: inline-block;
  cursor: pointer;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-repeat: no-repeat;
  background-size: var(--bwf-rw) var(--bwf-rh);
  background-position: calc(var(--bwf-x) * -1) calc(var(--bwf-y) * -1);
  background-image:
    radial-gradient(
      circle 22cqw at var(--bwf-px) var(--bwf-py),
      rgba(var(--bwf-lit), calc(var(--bwf-g) * 0.85)),
      transparent 70%
    ),
    linear-gradient(
      var(--bwf-ang),
      transparent calc(var(--bwf-b) - 9%),
      rgba(var(--bwf-lit), 0.55) calc(var(--bwf-b) - 1.5%),
      rgba(var(--bwf-lit), 0.7) var(--bwf-b),
      rgba(var(--bwf-lit), 0.2) calc(var(--bwf-b) + 3.5%),
      transparent calc(var(--bwf-b) + 8%)
    ),
    linear-gradient(180deg, var(--bwf-wt) var(--bwf-top), var(--bwf-wf) var(--bwf-bot));
  transition: transform 0.5s cubic-bezier(0.2, 0.9, 0.25, 1.2), filter 0.4s;
  transform-origin: 50% 100%;
}
.bwf-l:hover {
  transform: translateY(-0.045em);
  filter: brightness(1.35) saturate(1.1);
}
.bwf-l.is-hop {
  animation: bwf-hop 0.75s cubic-bezier(0.2, 0.8, 0.2, 1);
}
@keyframes bwf-hop {
  0% { transform: translateY(0) scale(1, 1); }
  18% { transform: translateY(0.02em) scale(1.06, 0.9); }
  45% { transform: translateY(-0.14em) scale(0.97, 1.05); }
  70% { transform: translateY(0.01em) scale(1.02, 0.97); }
  100% { transform: translateY(-0.045em) scale(1, 1); }
}
.bwf-foot {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 34%;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(180deg, transparent, rgba(var(--bwf-bg-rgb), 0.55) 55%, var(--bwf-bg));
}
@container (max-width: 860px) {
  .bwf-inner {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    row-gap: 40px;
  }
  .bwf-col:nth-child(1) {
    grid-column: 1 / -1;
    max-width: none;
  }
}
@container (max-width: 520px) {
  .bwf-inner {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 36px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .bwf .bwf-lw,
  .bwf .bwf-fade,
  .bwf .bwf-label::after,
  .bwf .bwf-l,
  .bwf .bwf-soc,
  .bwf .bwf-link-t,
  .bwf .bwf-link svg {
    transition: none !important;
    animation: none !important;
  }
  .bwf[data-in='false'] .bwf-lw,
  .bwf[data-in='false'] .bwf-fade {
    translate: none;
    opacity: 1;
  }
  .bwf[data-in='false'] .bwf-label::after {
    --bwf-line: 1;
  }
}
`;

// Math & Utility Functions
const clamp = (val: number, min: number, max: number) => (val < min ? min : val > max ? max : val);

const hexToRgb = (hex: string, fallback = '61, 107, 255') => {
  const match = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec((hex || '').trim());
  if (!match) return fallback;
  const v = match[1].length === 3 ? match[1].replace(/./g, (ch) => ch + ch) : match[1];
  const num = parseInt(v, 16);
  return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
};

const fitSize = (offsetWidth: number, containerWidth: number, maxFontSize: number) => {
  if (!(offsetWidth > 0) || !(containerWidth > 0)) return 0;
  const calculated = (100 * containerWidth) / offsetWidth;
  return maxFontSize > 0 ? Math.min(calculated, maxFontSize) : calculated;
};

const beamTarget = (progress: number, min = 30, max = 82) =>
  min + (max - min) * clamp(Number.isFinite(progress) ? progress : 0.5, 0, 1);

const drift = (time: number, center = 58, amplitude = 9) =>
  center + amplitude * (0.7 * Math.sin(time * 0.21) + 0.3 * Math.sin(time * 0.077 + 1.3));

const approach = (current: number, target: number, speed: number, dt: number) =>
  target + (current - target) * Math.pow(1 - clamp(speed, 0, 1), clamp(dt, 0, 0.1) * 60);

const baselineAt = (ascent: number, descent: number) =>
  !(ascent > 0) || !(descent >= 0)
    ? 0.8
    : clamp(((100 - ascent - descent) / 2 + ascent) / 100, 0.5, 1.2);

const wordHeight = (fontSize: number, baselineRatio: number, cut: number) =>
  Math.max(0, fontSize * (baselineRatio + clamp(Number.isFinite(cut) ? cut : 0, -0.4, 0.4)));

const measureBaseline = (fontFamily: string, weight: number | string, text: string) => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return 0.8;
    ctx.font = `${weight} 100px ${fontFamily}`;
    const metrics = ctx.measureText(text);
    return baselineAt(
      (metrics as any).fontBoundingBoxAscent ?? 80,
      (metrics as any).fontBoundingBoxDescent ?? 20
    );
  } catch {
    return 0.8;
  }
};

// SVG Icons matching 21st.dev Kedhareswer component
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  linkedin: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V16M12 16v-5.5M12 13c0-1.6 1-2.6 2.4-2.6s2.1.9 2.1 2.4V16" />
      <circle cx="8" cy="7.7" r=".55" fill="currentColor" />
    </g>
  ),
  mail: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </g>
  ),
  phone: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </g>
  ),
  mapPin: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </g>
  ),
};

const ArrowIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true">
    <path
      d="M2.5 9.5l7-7M4 2.5h5.5V8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  openInspectorModal,
  openQuoteModal,
  openCapabilityModal
}) => {
  const brand = 'QUALISPECT';
  const wordmark = 'QUALISPECT';
  const company = 'Qualispect, Inc.';
  const year = new Date().getFullYear();
  const cut = 0.14;
  const background = '#02040b';
  const ink = '#eef1f8';
  const muted = '#8a91a6';
  const accent = '#3d6bff'; // Official Kedhareswer electric sapphire
  const wordTop = '#1d3fa3';
  const wordFoot = '#060b22';
  const wordWeight = 800;
  const fontSans = '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const animate = true;

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials: SocialItem[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/qualispect', icon: 'linkedin' },
    { label: 'info@qualispect.com', href: 'mailto:info@qualispect.com', icon: 'mail' },
    { label: '281-764-6224', href: 'tel:2817646224', icon: 'phone' },
    { label: 'Houston, TX HQ', href: '#hq', icon: 'mapPin' },
  ];

  const columns: ColumnItem[] = [
    {
      title: 'Services',
      links: [
        { label: 'Vendor Surveillance', onClick: () => navigateTo('vendor-surveillance') },
        { label: 'Third-Party QA/QC', onClick: () => navigateTo('services') },
        { label: 'Welding & CWI', onClick: () => navigateTo('services') },
        { label: 'Hydrostatic FAT', onClick: () => navigateTo('services') },
        { label: 'Rotating Equipment', onClick: () => navigateTo('services') },
        { label: 'Field Expediting', onClick: () => navigateTo('services') },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Qualispect', onClick: () => navigateTo('about') },
        { label: '45+ Countries Hub', onClick: () => navigateTo('global-coverage') },
        { label: 'Industries We Support', onClick: () => navigateTo('industries') },
        { label: 'Project Experience Matrix', onClick: () => navigateTo('projects') },
        { label: 'Quality System', onClick: () => navigateTo('quality') },
        { label: 'Careers & Inspector Network', onClick: () => navigateTo('careers') },
      ],
    },
    {
      title: 'Government & Dispatch',
      links: [
        { label: 'Federal Contracting Desk', onClick: () => navigateTo('government-contracting') },
        { label: 'Download Capability Sheet', onClick: openCapabilityModal },
        { label: 'Request Inspector Mobilization', onClick: openInspectorModal },
        { label: 'Request RFQ / Pricing', onClick: openQuoteModal },
        { label: 'Contact Houston HQ', onClick: () => navigateTo('contact') },
        { label: 'Privacy & Terms of Service', onClick: () => navigateTo('contact') },
      ],
    },
  ];

  const credits: CreditItem[] = [
    { lead: 'Headquarters: ', label: '9801 Westheimer Rd, Suite 300, Houston, TX 77042' },
    { lead: 'Federal Contracting: ', label: 'CAGE: 7S2L7  •  UEI: L3C9LLNA2KJ9  •  SAM.gov Verified' },
    { lead: 'Quality Framework: ', label: 'Independent Technical Surveillance Aligned with ISO 17020' },
  ];

  const letters = useMemo(() => Array.from(wordmark), [wordmark]);

  const rootRef = useRef<HTMLElement>(null);
  const wordWrapRef = useRef<HTMLDivElement>(null);
  const wordInnerRef = useRef<HTMLDivElement>(null);

  const [fontSize, setFontSize] = useState(0);
  const [baselineRatio, setBaselineRatio] = useState(0.8);
  const [hasEntered, setHasEntered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const cursorRef = useRef({ u: 0.5, x: 0, y: 0, inside: false });

  // Listen for reduced motion preference
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  // IntersectionObserver for entrance stagger
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  // Responsive Font Fitting & Letter Mapping
  useLayoutEffect(() => {
    const root = rootRef.current;
    const wordWrap = wordWrapRef.current;
    const wordInner = wordInnerRef.current;
    if (!root || !wordWrap || !wordInner) return;

    let rafId = 0;

    const place = () => {
      const rect = root.getBoundingClientRect();
      root.style.setProperty('--bwf-rw', rect.width + 'px');
      root.style.setProperty('--bwf-rh', rect.height + 'px');

      const letterEls = wordInner.querySelectorAll<HTMLElement>('.bwf-l');
      let firstLetterTop = 0;
      letterEls.forEach((letter, idx) => {
        let x = 0;
        let y = 0;
        let curr: HTMLElement | null = letter;
        while (curr && curr !== root) {
          x += curr.offsetLeft;
          y += curr.offsetTop;
          curr = curr.offsetParent as HTMLElement | null;
        }
        letter.style.setProperty('--bwf-x', x + 'px');
        letter.style.setProperty('--bwf-y', y + 'px');
        if (idx === 0) firstLetterTop = y;
      });

      root.style.setProperty('--bwf-top', firstLetterTop + 'px');
      const fs = parseFloat(wordInner.style.fontSize) || 0;
      root.style.setProperty('--bwf-bot', firstLetterTop + fs * 0.92 + 'px');
    };

    const fit = () => {
      const parent = wordInner.parentElement ?? wordWrap;
      const padLeft = parseFloat(getComputedStyle(parent).paddingLeft) || 0;
      const availableWidth = parent.clientWidth - padLeft * 2;

      wordInner.style.fontSize = '100px';
      const testWidth = wordInner.offsetWidth;
      const measuredBaseline = measureBaseline(getComputedStyle(wordInner).fontFamily, wordWeight, wordmark);
      setBaselineRatio(measuredBaseline);

      const calculatedFontSize = fitSize(testWidth, availableWidth, availableWidth * 0.42);
      wordInner.style.fontSize = calculatedFontSize + 'px';
      setFontSize(calculatedFontSize);
      place();
    };

    const schedule = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(fit);
    };

    fit();
    const ro = new ResizeObserver(schedule);
    ro.observe(root);

    let active = true;
    (document as any).fonts?.ready?.then(() => active && schedule());

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [wordmark, fontSans, wordWeight]);

  // Beam and Pointer Glow Animation Loop
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const setProperties = (beamPercent: number, px: number, py: number, glow: number) => {
      root.style.setProperty('--bwf-b', beamPercent.toFixed(2) + '%');
      root.style.setProperty('--bwf-px', px.toFixed(1) + 'px');
      root.style.setProperty('--bwf-py', py.toFixed(1) + 'px');
      root.style.setProperty('--bwf-g', glow.toFixed(3));
    };

    const isReduced = reducedMotion || !animate;
    if (isReduced || !isInView) {
      const c = cursorRef.current;
      setProperties(58, c.x, c.y, c.inside ? 1 : 0);
      if (!isReduced) return;
      const onMove = () =>
        setProperties(58, cursorRef.current.x, cursorRef.current.y, cursorRef.current.inside ? 1 : 0);
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerleave', onMove);
      return () => {
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerleave', onMove);
      };
    }

    let rafId = 0;
    let lastTime = performance.now();
    let accumulatedTime = lastTime / 1000;
    let currentBeam = 58;
    let currentPx = cursorRef.current.x;
    let currentPy = cursorRef.current.y;
    let currentGlow = 0;

    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - lastTime) / 1000);
      lastTime = now;
      accumulatedTime += dt;

      const c = cursorRef.current;
      const driftedBeam = drift(accumulatedTime);
      const targetBeam = c.inside ? beamTarget(c.u) * 0.75 + driftedBeam * 0.25 : driftedBeam;

      currentBeam = approach(currentBeam, targetBeam, 0.035, dt);
      currentPx = approach(currentPx, c.x, 0.16, dt);
      currentPy = approach(currentPy, c.y, 0.16, dt);
      currentGlow = approach(currentGlow, c.inside ? 1 : 0, 0.06, dt);

      setProperties(currentBeam, currentPx, currentPy, currentGlow);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [reducedMotion, animate, isInView]);

  // Pointer event handlers
  const handlePointer = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const c = cursorRef.current;
    c.x = e.clientX - rect.left;
    c.y = e.clientY - rect.top;
    c.u = rect.width ? c.x / rect.width : 0.5;
    c.inside = e.type !== 'pointerleave';
  };

  // Letter Hop Interaction on Click
  const handleLetterHop = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const target = e.currentTarget;
    target.classList.remove('is-hop');
    void target.offsetWidth; // trigger reflow
    target.classList.add('is-hop');
  };

  // Dynamic inline styles for container variables
  const containerStyle: React.CSSProperties = {
    '--bwf-bg': background,
    '--bwf-bg-rgb': hexToRgb(background, '2, 4, 11'),
    '--bwf-ink': ink,
    '--bwf-ink-rgb': hexToRgb(ink, '238, 241, 248'),
    '--bwf-muted': muted,
    '--bwf-acc': hexToRgb(accent, '61, 107, 255'),
    '--bwf-lit': hexToRgb(accent, '61, 107, 255'),
    '--bwf-wt': wordTop,
    '--bwf-wf': wordFoot,
    '--bwf-sans': fontSans,
    '--bwf-ww': String(wordWeight),
    '--bwf-ang': '118deg',
    '--bwf-b': '58%',
    '--bwf-px': '50%',
    '--bwf-py': '50%',
    '--bwf-g': '0',
    '--bwf-top': '0px',
    '--bwf-bot': '100%',
  } as React.CSSProperties;

  let delayCounter = 0;
  const getNextDelay = () => ({ '--bwf-d': `${(delayCounter += 65)}ms` } as React.CSSProperties);

  return (
    <footer
      ref={rootRef}
      className="bwf"
      style={containerStyle}
      data-in={hasEntered || reducedMotion ? 'true' : 'false'}
      onPointerMove={handlePointer}
      onPointerEnter={handlePointer}
      onPointerLeave={handlePointer}
    >
      <style>{BWF_STYLES}</style>

      {/* Top Border Rule with Synchronized Beam Highlight */}
      <div className="bwf-rule" aria-hidden="true" />

      {/* Ambient Celestial Backdrop (Wash, Stripes, Beam, Radial Cursor Glow, Noise Grain) */}
      <div className="bwf-sky" aria-hidden="true">
        <div className="bwf-wash" />
        <div className="bwf-bands" />
        <div className="bwf-beam" />
        <div className="bwf-glow" />
        <div className="bwf-grain" />
      </div>

      {/* Main Content Columns */}
      <div className="bwf-inner">
        {/* Brand & Socials Column */}
        <div className="bwf-col">
          <div
            onClick={() => navigateTo('home')}
            className="cursor-pointer group inline-block mb-3 select-none"
          >
            <Logo size="md" variant="dark" />
          </div>

          <p className="bwf-label" style={getNextDelay()}>
            © {year} {company}
          </p>

          <p
            className="bwf-fade text-sm leading-relaxed"
            style={{ ...getNextDelay(), color: 'var(--bwf-muted)', maxWidth: '380px' }}
          >
            Independent third-party technical inspection, vendor surveillance, and field expediting across 45+ industrial countries worldwide.
          </p>

          {/* Glassy Embossed Social Icons with Hover Tooltips */}
          <ul className="bwf-socials">
            {socials.map((soc, idx) => (
              <li key={soc.label + idx} className="bwf-fade" style={getNextDelay()}>
                <a
                  className="bwf-soc"
                  href={soc.href || '#'}
                  aria-label={soc.label}
                  target={soc.href && /^https?:/.test(soc.href) ? '_blank' : undefined}
                  rel={soc.href && /^https?:/.test(soc.href) ? 'noreferrer' : undefined}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {SOCIAL_ICONS[soc.icon]}
                  </svg>
                  <span className="bwf-tip" aria-hidden="true">
                    {soc.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Credits & Credentials Row */}
          <div className="bwf-credits">
            {credits.map((cr, idx) => (
              <p key={idx} className="bwf-fade" style={getNextDelay()}>
                {cr.lead}
                {cr.onClick ? (
                  <a onClick={cr.onClick}>{cr.label}</a>
                ) : (
                  <b>{cr.label}</b>
                )}
                {cr.tail}
              </p>
            ))}
          </div>
        </div>

        {/* Navigation Link Columns */}
        {columns.map((col, colIdx) => (
          <nav key={col.title + colIdx} className="bwf-col" aria-label={col.title}>
            <p className="bwf-label" style={getNextDelay()}>
              {col.title}
            </p>
            <ul className="bwf-links">
              {col.links.map((link, linkIdx) => (
                <li key={link.label + linkIdx} className="bwf-fade" style={getNextDelay()}>
                  {link.onClick ? (
                    <button type="button" className="bwf-link" onClick={link.onClick}>
                      <span className="bwf-link-t">{link.label}</span>
                      <ArrowIcon />
                    </button>
                  ) : (
                    <a className="bwf-link" href={link.href || '#'}>
                      <span className="bwf-link-t">{link.label}</span>
                      <ArrowIcon />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* 21ST.DEV Kedhareswer Naidu: Giant Animated Wordmark with Dynamic Continuous Illumination */}
      <div
        ref={wordWrapRef}
        className="bwf-word"
        style={{
          height: fontSize ? wordHeight(fontSize, baselineRatio, cut) : `calc(${(0.8 + cut) * 26}cqw)`,
        }}
      >
        <p className="sr-only">{brand}</p>
        <div className="bwf-word-box">
          <div ref={wordInnerRef} className="bwf-word-in" aria-hidden="true">
            {letters.map((char, charIdx) => (
              <span
                key={charIdx}
                className="bwf-lw"
                style={{ '--bwf-d': `${260 + charIdx * 75}ms` } as React.CSSProperties}
              >
                <span
                  className="bwf-l"
                  onClick={handleLetterHop}
                  onAnimationEnd={(e) => e.currentTarget.classList.remove('is-hop')}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              </span>
            ))}
          </div>
        </div>
        {/* Bottom Soft Edge Blending Shield */}
        <div className="bwf-foot" aria-hidden="true" />
      </div>
    </footer>
  );
};
