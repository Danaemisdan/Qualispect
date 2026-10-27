import { PageId } from '../types';

export interface Page13Card {
  id: string;
  title: string;
  category: string;
  summary: string;
  bullets: string[];
  actionLabel?: string;
  iconName?: string;
  modalDetails: {
    heading: string;
    description: string;
    keySpecs: string[];
    applicableStandards?: string[];
    actionType?: 'request-inspector' | 'contact' | 'quote' | 'apply' | 'download-capability';
  };
}

export interface Page13Data {
  index: number;
  id: PageId;
  pageNumber: string;
  slug: string;
  navLabel: string;
  pageTitle: string;
  eyebrow: string;
  heroHeadline: string;
  heroSubtitle: string;
  ctaText: string;
  cards: Page13Card[];
}

export const pages13Data: Record<string, Page13Data> = {
  // =========================================================================
  // 00. HOME
  // =========================================================================
  'home': {
    index: 0,
    id: 'home',
    pageNumber: '00',
    slug: '',
    navLabel: 'Home',
    pageTitle: 'HOME',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'QUALITY ASSURANCE WHEREVER YOUR PROJECT TAKES YOU',
    heroSubtitle: 'Global third-party inspection and QA/QC',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'home-overview',
        title: 'OVERVIEW',
        category: 'FOUNDATION',
        summary: 'Independent technical inspection and quality assurance deployed directly to vendor fabrication shops and industrial jobsites worldwide.',
        bullets: [
          'Unbiased third-party source surveillance',
          '45+ countries covered with local accredited inspectors',
          '24–48h rapid mobilization SLA',
          'Headquarters: 2703 Highway 6 S, Suite 159, Houston, TX'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Executive Overview — Qualispect Inc.',
          description: 'Qualispect provides rigorous independent quality control, vendor surveillance, and engineering inspection services for asset owners, EPC contractors, and equipment manufacturers. We act as your eyes and ears on the shop floor, preventing costly equipment failures, schedule overruns, and non-compliance.',
          keySpecs: [
            'Houston Corporate Operations Hub',
            'SAM.gov Registered Federal Contractor (CAGE 7S2L7, UEI L3C9LLNA2KJ9)',
            'Certified across AWS, API, NACE/AMPP, ASNT, and ISO frameworks',
            'Complete transparency with zero vendor conflict of interest'
          ],
          applicableStandards: ['ISO 9001:2015', 'ISO 17020', 'ASME Section VIII/B31.3', 'API 510/570/653'],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'home-capabilities',
        title: 'CAPABILITIES',
        category: 'TECHNICAL SCOPE',
        summary: 'Multi-discipline inspection capabilities across mechanical, pressure equipment, welding, non-destructive examination (NDE), and coating.',
        bullets: [
          'AWS CWI certified welding surveillance',
          'API 510/570/653 in-service and fabrication inspection',
          'NACE / AMPP Level II & III protective coatings witness',
          'ASNT Level II / III NDT audit (UT, RT, MT, PT)'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Technical Inspection Disciplines',
          description: 'Our accredited inspectors verify fabrication at every milestone. Whether witnessing Factory Acceptance Tests (FAT) on high-pressure rotating pumps or verifying cryogenic valve seat leakage, Qualispect brings deep technical discipline to the shop floor.',
          keySpecs: [
            'Factory Acceptance Testing (FAT) witness & sign-off',
            'Pressure vessel & heat exchanger fabrication surveillance',
            'Hydrostatic and pneumatic proof test witnessing',
            'Dimensional inspection & flange face tolerance verification'
          ],
          applicableStandards: ['API 598', 'API 610/617', 'ASME B16.5 / B16.34', 'AWS D1.1 / D1.6'],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'home-process',
        title: 'OUR PROCESS',
        category: 'METHODOLOGY',
        summary: 'Systematic 5-step quality verification process designed for zero bypass of critical client inspection hold points.',
        bullets: [
          'Step 1: Scope & ITP alignment review',
          'Step 2: Inspector assignment & Pre-Inspection Meeting (PIM)',
          'Step 3: Physical witness at designated hold points',
          'Step 4: Same-day Flash IDR reporting with photo evidence',
          'Step 5: Final punch list closure and release certificate'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Standard Quality Assurance Workflow',
          description: 'We integrate directly into your project schedule. Every assignment begins with a formal review of the client Purchase Order and approved Inspection and Test Plan (ITP), followed by strict physical witness at fabrication milestones.',
          keySpecs: [
            'Zero hold-point bypass guarantee',
            'Daily Inspection Reports (IDR) transmitted within 24 hours',
            'Immediate notification of Non-Conformance (NCR)',
            'Digital transmittal package with high-resolution photo logs'
          ],
          applicableStandards: ['Client ITP', 'Project Quality Plan (PQP)', 'ISO 9001:2015 Clause 8.5'],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'home-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'VALUE PROPOSITION',
        summary: 'Local billing rates in 45+ countries, eliminating exorbitant overseas travel markups and visa delay friction.',
        bullets: [
          '45+ countries with locally resident inspectors',
          'Zero excessive international travel billings',
          'Direct reporting line to the asset owner / buyer',
          'Rapid response mobilization within 24–48 hours'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Why Leading Asset Owners Trust Qualispect',
          description: 'Traditional agencies dispatch personnel across oceans at immense travel expense and visa risk. Qualispect maintains a verified global network of local inspectors stationed near major industrial manufacturing hubs in North America, Europe, Asia, and the Middle East.',
          keySpecs: [
            'Significant reduction in project travel budget',
            'Instant cultural and language fluency at overseas vendor shops',
            'Uncompromising ethical standing and independent fiduciary duty',
            'Dedicated technical coordinator assigned to each project'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'home-get-started',
        title: 'GET STARTED',
        category: 'ONBOARDING',
        summary: 'Deploy an inspector or request an itemized quotation for upcoming vendor hold point surveillance in three easy steps.',
        bullets: [
          'Upload Purchase Order (PO) or Inspection Test Plan (ITP)',
          'Receive confirmed quotation within 4 business hours',
          'Inspector credential review and assignment confirmation',
          'Kickoff Pre-Inspection Meeting (PIM) coordination'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'How to Mobilize Qualispect',
          description: 'Getting an inspector on-site is fast and seamless. Send us your vendor location, equipment specifications, and expected hold point dates. Our technical dispatch desk will review your scope and issue a formal proposal with CVs of qualified inspectors.',
          keySpecs: [
            'Fast-track 24h emergency dispatch available',
            'Comprehensive rate sheet with no hidden fees',
            'Master Service Agreement (MSA) or PO-based engagement',
            'Full onboarding packet with insurance certificates and CAGE credentials'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'home-contact',
        title: 'CONTACT',
        category: 'COORDINATION',
        summary: 'Direct telephone and digital communication lines to our Houston headquarters operations coordination desk.',
        bullets: [
          'Corporate HQ: 2703 Highway 6 S, Suite 159, Houston, TX',
          'Direct Phone: 281-764-6224 / 281-764-1335',
          'Operations Email: info@qualispect.com',
          '24/7 Global Dispatch Hotline for active assignments'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Contact Qualispect Operations',
          description: 'Our technical dispatch team is headquartered in Houston, Texas, operating across global time zones to coordinate assignments in the Americas, Europe, Middle East, and Asia.',
          keySpecs: [
            'Headquarters: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
            'Phone: 281-764-6224 | 281-764-1335',
            'Email: info@qualispect.com',
            'Operating Hours: 24/7 Operations Support for Active Vendor Surveillance'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 01. ABOUT QUALISPECT
  // =========================================================================
  'about': {
    index: 1,
    id: 'about',
    pageNumber: '01',
    slug: 'about',
    navLabel: 'About Qualispect',
    pageTitle: 'ABOUT QUALISPECT',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'TECHNICAL INSPECTION BUILT ON TRUST',
    heroSubtitle: 'Our mission • Our approach • Our values',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'about-overview',
        title: 'OVERVIEW',
        category: 'WHO WE ARE',
        summary: 'Qualispect Inc. is a Houston-based global technical quality assurance and third-party inspection agency founded by industrial engineers.',
        bullets: [
          'Founded to deliver independent engineering verification',
          'Serving energy, chemical, infrastructure, and federal clients',
          'Zero affiliations with equipment manufacturers or suppliers',
          '100% focused on protecting the buyer’s capital investment'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Company Background & Heritage',
          description: 'Qualispect was established to bridge the critical gap between international engineering procurement and actual shop-floor execution. We represent the buyer, verifying that every weld, valve, vessel, and component matches design specifications before leaving the factory gate.',
          keySpecs: [
            'Headquartered in Houston, Texas',
            'Privately held, independent engineering consultancy',
            'Decades of combined QA/QC field management experience',
            'Strict adherence to international codes of ethics'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'about-capabilities',
        title: 'CAPABILITIES',
        category: 'ENGINEERING CREDENTIALS',
        summary: 'Our technical inspectors possess recognized international certifications and minimum 10+ years field experience.',
        bullets: [
          'AWS Senior Certified Welding Inspectors (SCWI/CWI)',
          'API 510 Pressure Vessel & API 570 Piping Inspectors',
          'NACE / AMPP Level II and Level III Coating Specialists',
          'ASNT Level II / III Ultrasonic & Radiographic Interpreters'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Professional Qualifications Matrix',
          description: 'We do not deploy generalists. Every inspector assigned to your project holds active credentials verified by our technical director, ensuring thorough knowledge of acceptance criteria and manufacturing processes.',
          keySpecs: [
            'Mandatory background and certification verification',
            'OSHA 30, TWIC, and HUET offshore safety certifications',
            'Continuous professional development and code update training',
            'Rigorous pre-mobilization technical briefing'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'about-process',
        title: 'OUR PROCESS',
        category: 'OPERATIONAL PROTOCOL',
        summary: 'A disciplined, milestone-driven framework ensuring thorough inspection coverage from kickoff to final documentation turnover.',
        bullets: [
          'Pre-Inspection Meeting (PIM) to align all stakeholders',
          'Verification of Raw Material Test Reports (MTRs)',
          'In-process fit-up, root pass, and visual welding inspection',
          'Non-Destructive Testing (NDT) surveillance & audit',
          'Hydrostatic test witness & final dimensional sign-off'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'End-to-End Surveillance Execution',
          description: 'From reviewing the vendor’s Welding Procedure Specifications (WPS) to witnessing final high-pressure pneumatic seat testing, our protocol prevents defects from becoming field-installed liabilities.',
          keySpecs: [
            'Standardized Inspection Daily Report (IDR) formats',
            'Photo documentation with calibrated measurement scales',
            'Hold point sign-offs on official client ITP sheets',
            'Punch list creation and expedited closure tracking'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'about-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'THE QUALISPECT ADVANTAGE',
        summary: 'Speed, independence, and technical rigor that protect your critical path schedule and procurement budget.',
        bullets: [
          'Direct fiduciary duty to the asset owner',
          'Zero bureaucratic delays in dispatch and reporting',
          'Transparent, all-inclusive day and hourly rate structures',
          'Proven record of saving millions in avoided field rework'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Fiduciary Independence & Cost Efficiency',
          description: 'When you hire Qualispect, you receive uncompromised reporting. We have no commercial interest in the vendor’s manufacturing schedule or product sales. Our only commitment is ensuring your equipment is built right.',
          keySpecs: [
            'Objective defect documentation',
            'Immediate notification of critical deviations',
            'Full support during commercial resolution with vendors',
            'Comprehensive final quality transmittal dossier'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'about-get-started',
        title: 'GET STARTED',
        category: 'COLLABORATION',
        summary: 'Engage Qualispect for ad-hoc callout inspection, dedicated resident surveillance, or global project QA/QC.',
        bullets: [
          'Single-day vendor hold point callouts',
          'Long-term resident shop inspection teams',
          'Global Master Service Agreements (MSAs)',
          'Emergency rapid dispatch across 45+ countries'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Engagement Models & Contracting',
          description: 'Whether you require an inspector for a single 4-hour hydro test in Ohio or full-time resident surveillance at a fabrication yard in South Korea, Qualispect offers flexible, transparent contract arrangements.',
          keySpecs: [
            'Call-out basis with 24–48h advance notice',
            'Resident surveillance with monthly fixed rate structures',
            'Volume MSA discounts for multi-package procurement',
            'Simple Purchase Order execution'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'about-contact',
        title: 'CONTACT',
        category: 'HEADQUARTERS',
        summary: 'Connect with our corporate management team in Houston, Texas for capability inquiries and enterprise partnerships.',
        bullets: [
          'Address: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Office Phone: 281-764-6224 / 281-764-1335',
          'Email: info@qualispect.com',
          'Web: www.qualispect.com'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Corporate Contact Information',
          description: 'We welcome meetings at our Houston offices or virtual consultations to review upcoming capital projects, Inspection and Test Plans (ITPs), and technical requirements.',
          keySpecs: [
            'Qualispect Inc. Headquarters',
            '2703 Highway 6 S, Suite 159, Houston, TX 77082',
            'Phone: 281-764-6224 | 281-764-1335',
            'Direct Executive Contact: info@qualispect.com'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 02. SERVICES
  // =========================================================================
  'services': {
    index: 2,
    id: 'services',
    pageNumber: '02',
    slug: 'services',
    navLabel: 'Services',
    pageTitle: 'SERVICES',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'INSPECTION AND QUALITY SERVICES',
    heroSubtitle: 'Vendor surveillance • QA/QC • FAT • Expediting',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'services-overview',
        title: 'OVERVIEW',
        category: 'SERVICE PORTFOLIO',
        summary: 'Comprehensive third-party technical inspection, vendor surveillance, expediting, and quality assurance solutions.',
        bullets: [
          'Source inspection at vendor fabrication facilities',
          'Factory Acceptance Testing (FAT) witness & sign-off',
          'Procurement expediting & milestone tracking',
          'Pre-shipment inspection & packaging verification'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Core Industrial Services Suite',
          description: 'Qualispect provides complete vendor quality lifecycle management. From initial pre-award facility surveys through in-process fabrication, FAT witness, painting inspection, and final export packing sign-off, we ensure full compliance with engineering requisitions.',
          keySpecs: [
            'Vendor Surveillance & Shop Audit',
            'Factory Acceptance Testing (FAT)',
            'Vendor Expediting & Schedule Recovery',
            'Pre-Shipment Inspection & Packing Audit'
          ],
          applicableStandards: ['API', 'ASME', 'AWS', 'ISO', 'NACE', 'IEC', 'IEEE'],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'services-capabilities',
        title: 'CAPABILITIES',
        category: 'TECHNICAL DISCIPLINES',
        summary: 'Specialized inspection personnel across all major industrial disciplines and critical equipment categories.',
        bullets: [
          'Rotating Equipment: Pumps, compressors, gas turbines, gearboxes',
          'Static Equipment: Pressure vessels, reactors, heat exchangers',
          'Piping & Valves: Control valves, ball valves, pipe spools, fittings',
          'Electrical & Instrumentation: Switchgear, transformers, PLC panels'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Equipment Categories Inspected',
          description: 'Our technical teams possess in-depth familiarity with manufacturing techniques, foundry practices, machining tolerances, assembly procedures, and factory test protocols across high-integrity industrial equipment.',
          keySpecs: [
            'Rotating Equipment per API 610, 617, 676, 682',
            'Valves and Actuators per API 6D, 598, 600, ASME B16.34',
            'Pressure Vessels per ASME Boiler & Pressure Vessel Code Sec VIII Div 1 & 2',
            'Electrical systems per IEC 60079, NEC, and ATEX standards'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'services-process',
        title: 'OUR PROCESS',
        category: 'EXECUTION MODEL',
        summary: 'Standardized delivery model guaranteeing consistent, auditable inspection outcomes across global vendor sites.',
        bullets: [
          'Requisition and ITP scope review',
          'Inspector selection based on verified equipment expertise',
          'On-site arrival within 24–48 hours of notification',
          'Structured IDR submission with geotagged photography',
          'Immediate issue escalation via client technical portal'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Service Delivery Workflow',
          description: 'Consistency is our hallmark. Whether an inspection takes place in Houston, Texas or Busan, South Korea, Qualispect follows the same structured inspection protocol, report templates, and communication standards.',
          keySpecs: [
            'Pre-Inspection Meeting (PIM) alignment',
            'Stage-by-stage ITP sign-off documentation',
            'Digital IDR submission with cloud backup',
            'Formal certificate of inspection upon scope completion'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'services-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'OPERATIONAL EXCELLENCE',
        summary: 'Trusted by top-tier engineering procurement contractors and major industrial operators worldwide.',
        bullets: [
          'Transparent, fixed-rate pricing structure',
          'Real-time access to inspection findings and daily reports',
          'Zero conflict of interest with vendors or equipment suppliers',
          'High first-time pass rates on client project audits'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'The Service Quality Commitment',
          description: 'We believe inspection should add value, not create friction. Our inspectors are problem solvers who help identify deviations early, work with vendors to implement corrective actions, and keep your equipment on schedule.',
          keySpecs: [
            'Proactive non-conformance mitigation',
            'Transparent daily timesheets and expense tracking',
            'Single point of contact for multi-vendor campaigns',
            'Direct access to technical director for dispute resolution'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'services-get-started',
        title: 'GET STARTED',
        category: 'SERVICE ENGAGEMENT',
        summary: 'Book an inspector or request an itemized proposal for vendor surveillance packages.',
        bullets: [
          'Send your PO and ITP to info@qualispect.com',
          'Review custom rate proposal within 4 hours',
          'Approve assignment schedule and inspector CV',
          'Receive daily flash reports from the shop floor'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Mobilize Inspection Services',
          description: 'Ready to place an inspector in a vendor facility? Our technical coordination desk is standing by to evaluate your scope, verify local inspector availability, and confirm deployment within 24 to 48 hours.',
          keySpecs: [
            'Immediate quotation turnaround',
            'Clear hourly / day rate proposals',
            'No minimum retainer requirements for callout work',
            'Dedicated technical coordinator assigned'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'services-contact',
        title: 'CONTACT',
        category: 'SERVICE INQUIRIES',
        summary: 'Contact our technical services coordination desk to discuss project inspection requirements.',
        bullets: [
          'Office Address: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Telephone: 281-764-6224 / 281-764-1335',
          'Email: info@qualispect.com',
          '24/7 Operations Support for Active Campaigns'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Services Coordination Desk',
          description: 'Speak directly with our technical coordination leads to discuss specific equipment packages, inspection hold points, or multi-location surveillance programs.',
          keySpecs: [
            'Qualispect Technical Services Desk',
            'Houston Corporate Office',
            'Phone: 281-764-6224 | 281-764-1335',
            'Direct Email: info@qualispect.com'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 03. THIRD-PARTY INSPECTION
  // =========================================================================
  'third-party-inspection': {
    index: 3,
    id: 'third-party-inspection',
    pageNumber: '03',
    slug: 'third-party-inspection',
    navLabel: 'Third-Party Inspection',
    pageTitle: 'THIRD-PARTY INSPECTION',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'INDEPENDENT INSPECTION. INFORMED DECISIONS.',
    heroSubtitle: 'Manufacturing • Fabrication • Testing • Release',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'tpi-overview',
        title: 'OVERVIEW',
        category: 'INDEPENDENCE',
        summary: 'True third-party independence providing uncompromised technical oversight during manufacturing, fabrication, assembly, and testing.',
        bullets: [
          'Complete commercial and operational independence',
          'Direct fiduciary duty solely to the equipment purchaser',
          'Strict adherence to engineering specifications and ITPs',
          'Unbiased documentation of shop floor reality'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'The Importance of Third-Party Independence',
          description: 'First-party (manufacturer) and second-party (buyer internal) inspection often face internal schedule pressure and resource constraints. Qualispect acts as an uncompromised third party, ensuring equipment meets every code requirement before release.',
          keySpecs: [
            'Zero commercial ties to manufacturers',
            'Strict conflict of interest policy',
            'Direct, unfiltered reporting to the buyer',
            'Legally defensible documentation and audit trails'
          ],
          applicableStandards: ['ISO 17020 Conformity Assessment', 'ASME BPVC', 'API Codes'],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'tpi-capabilities',
        title: 'CAPABILITIES',
        category: 'SHOP FLOOR WITNESS',
        summary: 'Physical witness and verification across critical manufacturing milestones and hold points.',
        bullets: [
          'Material verification and positive material identification (PMI)',
          'Fit-up, root pass, and final weld visual inspection',
          'Witness of non-destructive testing (UT, RT, MT, PT, PAUT)',
          'Witness of hydrostatic, pneumatic, and helium leak testing'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Inspection Milestones Witnessed',
          description: 'Our certified inspectors physically witness designated witness (W) and hold (H) points defined in the project Inspection and Test Plan (ITP), preventing unauthorized bypass and premature progression.',
          keySpecs: [
            'Material Receiving & Mill Test Report (MTR) review',
            'Welder qualification test (WQT) witness',
            'Surface preparation & coating thickness witness per SSPC/NACE',
            'Final dimensional check against engineering fabrication drawings'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'tpi-process',
        title: 'OUR PROCESS',
        category: 'HOLD POINT RIGOR',
        summary: 'Strict hold point enforcement preventing any fabrication progression without authorized physical witness.',
        bullets: [
          'Receipt of vendor 5-day / 48-hour inspection call-out notice',
          'Pre-mobilization briefing on critical project hold points',
          'On-site presence at vendor facility during testing',
          'Immediate issue of IDR (Inspection Daily Report) and NCR if required',
          'Official hold point sign-off on master ITP document'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Hold Point Enforcement Protocol',
          description: 'Skipped hold points are the leading cause of field rework. Qualispect enforces a stage zero-bypass rule: the vendor cannot proceed past an agreed hold point until our inspector has signed off on the test results.',
          keySpecs: [
            'Verified calibration of all test gauges and instruments',
            'Direct observation of pressure hold duration and chart recorders',
            'Geotagged high-resolution photo logs',
            'Same-day electronic transmittal to project management'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'tpi-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'RISK REDUCTION',
        summary: 'Prevent catastrophic equipment failures, costly shipping delays, and multi-million dollar field rework.',
        bullets: [
          'Catch manufacturing defects before equipment leaves the factory',
          'Eliminate the high cost of field welding corrections on job sites',
          'Ensure full documentation compliance for regulatory approval',
          'Protect project commissioning schedules and commercial warranties'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Economic Value of Independent Inspection',
          description: 'Fixing a defective weld or flange in a fabrication shop costs hundreds of dollars. Discovering that same defect on an offshore platform or operating refinery costs hundreds of thousands. Qualispect prevents that risk.',
          keySpecs: [
            'Documented historical ROI exceeding 10:1 in avoided rework',
            'Defensible records for insurance and regulatory authorities',
            'Protection against vendor substitution of non-compliant materials',
            'Complete peace of mind for engineering and procurement leads'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'tpi-get-started',
        title: 'GET STARTED',
        category: 'DISPATCH',
        summary: 'Deploy an independent inspector to any fabrication shop or testing facility worldwide.',
        bullets: [
          'Submit vendor name, address, and equipment description',
          'Upload approved project ITP and purchase specifications',
          'Confirm inspection dates and mobilization window',
          'Receive inspector confirmation and direct contact details'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Deploy a Third-Party Inspector',
          description: 'Need an independent inspector at a valve shop in Italy, a pump plant in Ohio, or a vessel fabricator in Texas? Submit your scope today for immediate scheduling.',
          keySpecs: [
            'Global dispatch coverage across North America, Europe, Asia',
            'Mobilization within 24 to 48 hours',
            'Fully accredited personnel with verified credentials',
            'Clear, all-inclusive proposal without hidden markups'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'tpi-contact',
        title: 'CONTACT',
        category: 'INSPECTION DESK',
        summary: 'Reach our independent inspection coordination desk for immediate scheduling and advice.',
        bullets: [
          'Houston Operations HQ: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Phone: 281-764-6224 / 281-764-1335',
          'Email: info@qualispect.com',
          'Rapid response line for urgent vendor hold point callouts'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Third-Party Inspection Coordination',
          description: 'Our coordination leads are experienced quality managers ready to review your ITPs and assign the ideal certified inspector for your equipment.',
          keySpecs: [
            'Qualispect TPI Coordination Desk',
            'Phone: 281-764-6224 | 281-764-1335',
            'Email: info@qualispect.com',
            'Houston, Texas Corporate Office'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 04. VENDOR INSPECTION & SOURCE SURVEILLANCE
  // =========================================================================
  'vendor-inspection-source-surveillance': {
    index: 4,
    id: 'vendor-inspection-source-surveillance',
    pageNumber: '04',
    slug: 'vendor-inspection-source-surveillance',
    navLabel: 'Vendor Inspection',
    pageTitle: 'VENDOR INSPECTION & SOURCE SURVEILLANCE',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'YOUR EYES AT THE VENDOR',
    heroSubtitle: 'Submit > Review > Assign > Inspect > Report',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'vis-assignment-details',
        title: 'ASSIGNMENT DETAILS',
        category: 'STEP 1: SCOPE DEFINITION',
        summary: 'Define equipment tags, purchase order numbers, fabrication stages, and mandatory client inspection hold points.',
        bullets: [
          'Purchase Order (PO) and client specification reference',
          'Equipment tag numbers, descriptions, and quantities',
          'Designated hold points (Material, Welding, NDT, Hydro, Final)',
          'Level of surveillance (Resident, Part-Time, Callout)'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Defining Surveillance Scope',
          description: 'A well-defined scope ensures thorough inspection. Enter your equipment tags, requisition numbers, and specify which hold points require mandatory physical witness versus document review.',
          keySpecs: [
            'ITP Hold Point Matrix alignment',
            'Clear definition of vendor witness notice requirements',
            'Acceptance and rejection criteria specifications',
            'Identification of client-specific reporting templates'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'vis-vendor-location',
        title: 'VENDOR LOCATION',
        category: 'STEP 2: FACILITY COORDINATION',
        summary: 'Global coverage across manufacturing facilities, foundry plants, testing labs, and assembly yards in 45+ countries.',
        bullets: [
          'Vendor facility name and complete physical address',
          'Primary vendor contact, shop QA/QC manager details',
          'Facility access protocols and safety inductions',
          'Local inspector assignment from closest regional hub'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Global Shop Floor Mobilization',
          description: 'We deploy inspectors who live near the manufacturing facility. This guarantees prompt arrival, eliminates costly international flights and hotels, and ensures local language and cultural fluency on the shop floor.',
          keySpecs: [
            'Coverage across North America, Europe, Asia, Middle East',
            'Direct coordination with vendor shop floor superintendents',
            'Compliance with all local facility safety and PPE standards',
            'Immediate notification of shop floor scheduling changes'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'vis-inspection-date',
        title: 'INSPECTION DATE',
        category: 'STEP 3: SCHEDULING',
        summary: 'Target witness dates with standard 48-hour advance notice or expedited 24-hour emergency mobilization.',
        bullets: [
          'Planned witness date and estimated duration on site',
          'Single-day hold point callouts vs continuous resident assignment',
          'Coordination with vendor testing schedule and hydro crew',
          'Flexible rescheduling in case of vendor fabrication delays'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Flexible Scheduling & Rapid Dispatch',
          description: 'Manufacturing schedules frequently shift. Our dispatch desk maintains close contact with vendor QA managers to confirm exact testing times and prevent wasted trips or standing time.',
          keySpecs: [
            'Standard dispatch SLA: 24 to 48 hours notice',
            'Weekend and night-shift testing coverage available',
            'No charge for weather or vendor delays with proper notification',
            'Calendar synchronization with client procurement teams'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'vis-upload-documents',
        title: 'UPLOAD DOCUMENTS',
        category: 'STEP 4: TECHNICAL PACKAGE',
        summary: 'Securely transmit Purchase Orders, approved ITPs, engineering drawings, and WPS/PQR for inspector briefing.',
        bullets: [
          'Purchase Order (PO) and line item specifications',
          'Approved Inspection and Test Plan (ITP)',
          'Approved fabrication and assembly drawings',
          'WPS, PQR, and Welder Performance Qualifications'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Technical Document Package',
          description: 'Our inspectors arrive fully briefed with your engineering package in hand. Prior to stepping on the shop floor, the assigned inspector reviews the approved ITP, drawing revisions, and project quality requirements.',
          keySpecs: [
            'Secure cloud document portal with end-to-end encryption',
            'Support for PDF, DWG, and image attachments',
            'Verification of latest drawing revision numbers',
            'Discrepancy identification prior to shop mobilization'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'vis-submit-request',
        title: 'SUBMIT REQUEST',
        category: 'STEP 5: DISPATCH CONFIRMATION',
        summary: 'Immediate dispatch confirmation, assigned inspector credentials, and automated assignment tracking.',
        bullets: [
          'Instant confirmation receipt with unique assignment ID',
          'CV and credentials of assigned inspector transmitted for review',
          'Direct contact established between inspector and client lead',
          'Daily flash reporting delivered electronically within 24h'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Dispatch Confirmation & Reporting Protocol',
          description: 'Once submitted, your request is reviewed by our technical manager, who assigns the best-qualified inspector and transmits their credentials for your concurrence. Upon completion, daily inspection reports are sent directly to your inbox.',
          keySpecs: [
            'Unique tracking number for each surveillance assignment',
            'Direct phone and email contact for assigned field inspector',
            'Standardized Inspection Daily Report (IDR) format with photo logs',
            'Same-day electronic transmittal guarantee'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'vis-urgent-requests',
        title: 'URGENT REQUESTS',
        category: 'EMERGENCY DISPATCH',
        summary: 'Dedicated 24/7 emergency dispatch hotline for urgent hold point witnessing required within 24 hours.',
        bullets: [
          '24/7 hotline: 281-764-6224 / 281-764-1335',
          'Same-day inspector mobilization to prevent critical path delays',
          'Direct access to senior operations managers',
          'Rapid response across Gulf Coast and major industrial centers'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Emergency & Same-Day Dispatch',
          description: 'Did a vendor call a surprise hydro test for tomorrow morning? Qualispect maintains an on-call roster of accredited inspectors ready to mobilize within hours to prevent critical path delays.',
          keySpecs: [
            'Immediate response within 15 minutes of inquiry',
            'Roster of active, credentialed inspectors on standby',
            'No premium surcharge for standard emergency dispatch',
            'Direct coordination with vendor shop floor leads'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 05. INDUSTRIES
  // =========================================================================
  'industries': {
    index: 5,
    id: 'industries',
    pageNumber: '05',
    slug: 'industries',
    navLabel: 'Industries',
    pageTitle: 'INDUSTRIES',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'INDUSTRY EXPERIENCE WHERE QUALITY MATTERS',
    heroSubtitle: 'Oil & gas • Power • Petrochemical • Infrastructure',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'ind-overview',
        title: 'OVERVIEW',
        category: 'SECTOR EXPERTISE',
        summary: 'Deep industrial domain expertise across oil & gas, energy, petrochemicals, infrastructure, and heavy manufacturing.',
        bullets: [
          'Upstream, midstream, and downstream energy sectors',
          'Power generation: Thermal, combined-cycle, and renewables',
          'Chemical and petrochemical refining complexes',
          'Municipal water, pipeline, and civil infrastructure'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Industrial Domains Served',
          description: 'Every industry operates under distinct design codes and regulatory scrutiny. Qualispect matches inspectors who have dedicated careers to specific industrial sectors, ensuring deep code fluency and risk awareness.',
          keySpecs: [
            'Energy & Offshore Marine systems',
            'Petrochemical processing and refining units',
            'Power generation equipment (turbines, boilers, transformers)',
            'Water treatment, pipelines, and civil infrastructure projects'
          ],
          applicableStandards: ['ASME', 'API', 'AWS', 'NACE', 'IEEE', 'DNV'],
          actionType: 'quote'
        }
      },
      {
        id: 'ind-capabilities',
        title: 'CAPABILITIES',
        category: 'EQUIPMENT FOCUS',
        summary: 'Comprehensive inspection coverage tailored to the most demanding equipment in each industry.',
        bullets: [
          'Subsea manifolds, risers, and Christmas trees (API 17D)',
          'Heavy-wall hydrocracker reactors and columns (ASME Sec VIII)',
          'Gas turbine packages and centrifugal compressors (API 617)',
          'High-voltage GIS switchgear and substation transformers'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'High-Integrity Equipment Surveillance',
          description: 'We specialize in severe-service equipment: high pressure, extreme temperature, cryogenic service, and lethal substance containment. Our inspectors understand critical metallurgy, post-weld heat treatment, and alloy chemistry.',
          keySpecs: [
            'Duplex, super duplex, and nickel alloy welding surveillance',
            'Cryogenic valve seat leak testing at -196°C',
            'Full mechanical and electrical run testing of turbomachinery',
            'Refractory and protective lining inspection'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'ind-process',
        title: 'OUR PROCESS',
        category: 'CODE COMPLIANCE',
        summary: 'Rigorous enforcement of industry-specific engineering standards, statutory regulations, and client specs.',
        bullets: [
          'API 510, 570, 653 code compliance for refinery assets',
          'ASME Boiler and Pressure Vessel Code Sections I, VIII, and IX',
          'AWS D1.1 and D1.6 structural welding codes',
          'NACE SP0188 / AMPP coating inspection standards'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Regulatory & Code Compliance Assurance',
          description: 'Our inspectors do not merely check boxes; they verify that the vendor’s procedures and execution strictly align with mandatory statutory codes and project specifications.',
          keySpecs: [
            'Verification of WPS/PQR against ASME Section IX',
            'NDT procedure review against ASME Section V',
            'Flange face finish verification per ASME B16.5',
            'Traceable material certification per EN 10204 Type 3.1 / 3.2'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'ind-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'SAFETY & INTEGRITY',
        summary: 'Proven field track record preventing catastrophic process safety incidents and operational downtime.',
        bullets: [
          'Decades of collective experience in hazardous environments',
          'Zero-tolerance policy for non-compliant welding or materials',
          'Auditable documentation that withstands regulatory scrutiny',
          'Protection of client brand reputation and asset integrity'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Process Safety & Asset Protection',
          description: 'In high-pressure oil, gas, and chemical facilities, a single component failure can cause catastrophic safety events. Qualispect provides the rigorous independent barrier that protects personnel, facilities, and the environment.',
          keySpecs: [
            'Independent third-party verification of critical welds',
            'Elimination of counterfeit and out-of-spec materials',
            'Defensible records for OSHA PSM compliance',
            'Trusted partner for global EPCs and Fortune 500 operators'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'ind-get-started',
        title: 'GET STARTED',
        category: 'PROJECT SCOPING',
        summary: 'Discuss your industry-specific inspection scope with our sector practice directors.',
        bullets: [
          'Select your industry sector and equipment category',
          'Provide expected vendor fabrication locations and ITPs',
          'Receive custom rate proposal and inspector qualifications',
          'Schedule Pre-Inspection Meeting (PIM) with vendor leads'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Industry Scoping & Proposal Request',
          description: 'Contact our industry leads today to discuss tailored inspection packages for your upcoming capital projects, turnaround scopes, or vendor surveillance programs.',
          keySpecs: [
            'Sector-specific qualification matrix review',
            'Custom Master Service Agreement (MSA) options',
            'Rapid 4-hour quotation turnaround',
            'Dedicated technical account director'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'ind-contact',
        title: 'CONTACT',
        category: 'SECTOR DESK',
        summary: 'Direct communication line to our industry technical directors at Houston headquarters.',
        bullets: [
          'Office: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Phone: 281-764-6224 / 281-764-1335',
          'Email: info@qualispect.com',
          'Houston HQ: The Energy Capital of the World'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Industry Practice Leads',
          description: 'Located in Houston, Texas, our leadership team is embedded in the global energy, chemical, and manufacturing community, ready to support assignments worldwide.',
          keySpecs: [
            'Corporate HQ: 2703 Highway 6 S, Suite 159, Houston, TX',
            'Phone: 281-764-6224 | 281-764-1335',
            'Email: info@qualispect.com'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 06. GLOBAL COVERAGE
  // =========================================================================
  'global-coverage': {
    index: 6,
    id: 'global-coverage',
    pageNumber: '06',
    slug: 'global-coverage',
    navLabel: 'Global Coverage',
    pageTitle: 'GLOBAL COVERAGE',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'GLOBAL PROJECTS REQUIRE LOCAL EYES',
    heroSubtitle: 'Regional coverage and inspector availability',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'gc-overview',
        title: 'OVERVIEW',
        category: 'WORLDWIDE REACH',
        summary: 'Accredited technical inspectors stationed near major industrial manufacturing centers across 45+ countries.',
        bullets: [
          'North America: United States, Canada, Mexico',
          'Europe: United Kingdom, Germany, Italy, France, Netherlands',
          'Asia-Pacific: South Korea, Japan, China, India, Singapore',
          'Middle East: United Arab Emirates, Saudi Arabia, Qatar'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Global Geographic Footprint',
          description: 'Industrial supply chains are global. Qualispect maintains a vetted network of certified quality professionals residing near key fabrication hubs worldwide, ready to deploy at a moment’s notice.',
          keySpecs: [
            '45+ countries with active inspector coverage',
            'Over 250+ vetted multi-discipline inspectors',
            'Strategic proximity to major ports and industrial parks',
            'Single corporate management team based in Houston, Texas'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'gc-capabilities',
        title: 'CAPABILITIES',
        category: 'LOCAL ACCREDITATIONS',
        summary: 'Locally resident inspectors possessing dual international and regional technical certifications.',
        bullets: [
          'Dual certified: AWS / CSWIP for international welding compliance',
          'ISO 9712 and ASNT Level II / III NDT certifications',
          'FROSIO and NACE / AMPP protective coating qualifications',
          'Fluent in local languages, business culture, and shop practices'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'In-Country Technical Qualifications',
          description: 'Having a local inspector who speaks the manufacturer’s native language and understands local shop culture eliminates miscommunications and guarantees accurate reporting of technical issues.',
          keySpecs: [
            'Native language fluency with English technical reporting',
            'Familiarity with regional manufacturing codes and standards',
            'Instant facility access without visa or work permit delays',
            'Cultural diplomacy that resolves issues without friction'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'gc-process',
        title: 'OUR PROCESS',
        category: 'DISPATCH SPEED',
        summary: 'Rapid 24–48 hour mobilization SLA anywhere across our four key global operating hubs.',
        bullets: [
          'Centralized Houston coordination with 24/7 global coverage',
          'Inspector assignment confirmed within 4 hours of request',
          'Direct pre-mobilization briefing with client project team',
          'Standardized electronic IDR format in English across all regions'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Centralized Global Coordination',
          description: 'While our inspectors are local, quality management is centralized in Houston. Every daily report undergoes quality review to ensure uniform formatting, clear technical English, and rigorous technical substantiation.',
          keySpecs: [
            'Single contract and billing point for multi-country campaigns',
            'Centralized invoice consolidation in US Dollars or Euros',
            'Standardized reporting software with secure cloud access',
            'Automated alerts for non-conformances and schedule delays'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'gc-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'COST SAVINGS',
        summary: 'Substantially reduce inspection overhead by eliminating exorbitant international airfares and hotel expenses.',
        bullets: [
          'Pay local in-country day and hourly rates',
          'Zero expensive long-haul flights or business class airfares',
          'Zero visa waiting periods or international travel delays',
          'Avoid carbon footprint of unnecessary international travel'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'The Economic Advantage of Local Inspectors',
          description: 'Sending an inspector from Houston to Milan or Seoul costs thousands in airfare, hotels, and per diems before a single weld is checked. Qualispect dispatches local accredited professionals, saving you up to 60% in travel expenses.',
          keySpecs: [
            'Average 50–60% reduction in total surveillance expenditure',
            'Elimination of travel fatigue and jet-lag errors',
            'Ability to conduct short 4-hour callouts affordably',
            'Higher frequency of surveillance without budget inflation'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'gc-get-started',
        title: 'GET STARTED',
        category: 'REGIONAL ASSIGNMENT',
        summary: 'Check inspector availability and local day rates for your vendor’s specific country or region.',
        bullets: [
          'Submit vendor city and country location',
          'Specify required discipline (Welding, NDT, Coating, E&I)',
          'Receive local rate confirmation and inspector availability',
          'Approve mobilization schedule'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Check Regional Inspector Availability',
          description: 'Contact our global dispatch desk to verify current inspector availability in your target manufacturing region. We provide immediate confirmation of rates and personnel.',
          keySpecs: [
            'Instant country rate schedules',
            'Review CVs of locally stationed certified inspectors',
            'No minimum commitment required for single callouts',
            'Transparent travel mileage policies'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'gc-contact',
        title: 'CONTACT',
        category: 'GLOBAL DISPATCH',
        summary: 'Global 24/7 technical dispatch hotline operating across all international time zones.',
        bullets: [
          'Corporate HQ: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Telephone: 281-764-6224 / 281-764-1335',
          'Email: info@qualispect.com',
          'Round-the-clock dispatch coordination for global operations'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: '24/7 Global Dispatch Desk',
          description: 'Because our assignments span every time zone, our operations coordination desk is accessible 24/7 for active assignments, emergency requests, and technical consultations.',
          keySpecs: [
            'Houston Dispatch Coordination Center',
            'Phone: 281-764-6224 | 281-764-1335',
            'Email: info@qualispect.com'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 07. PROJECTS & PAST PERFORMANCE
  // =========================================================================
  'projects-past-performance': {
    index: 7,
    id: 'projects-past-performance',
    pageNumber: '07',
    slug: 'projects-past-performance',
    navLabel: 'Projects & Past Performance',
    pageTitle: 'PROJECTS & PAST PERFORMANCE',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'EXPERIENCE DEMONSTRATED THROUGH THE WORK',
    heroSubtitle: 'Verified case studies and approved project imagery',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'ppp-overview',
        title: 'OVERVIEW',
        category: 'TRACK RECORD',
        summary: 'Proven track record of successful quality verification across major capital projects, refits, and multi-package procurement.',
        bullets: [
          'Over 500+ successful surveillance assignments executed',
          'Zero hold point bypasses on critical path equipment',
          'Trusted by EPC majors, supermajors, and municipal utilities',
          'Verified compliance with ASME, API, and federal standards'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Demonstrated Field Performance',
          description: 'Qualispect’s track record spans onshore refineries, offshore production platforms, cross-country pipelines, LNG export terminals, and government infrastructure projects.',
          keySpecs: [
            '500+ successful inspection projects completed',
            'Over 2,500 individual hold points witnessed without incident',
            '100% on-time transmittal of final documentation dossiers',
            'Formal client satisfaction rating exceeding 98%'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'ppp-capabilities',
        title: 'CAPABILITIES',
        category: 'CASE HIGHLIGHTS',
        summary: 'Surveillance executed on severe-service pressure equipment, cryogenic valves, subsea piping, and power skids.',
        bullets: [
          'LNG Cryogenic Valve Witness: API 6D / 598 seat testing at -196°C in Italy',
          'Heavy-Wall Separator Vessel: ASME Sec VIII Div 2 fabrication in Texas',
          'Subsea Manifold Fabrication: Super duplex welding surveillance in UK',
          'Compressor Train FAT: API 617 full-speed mechanical run test in Germany'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Representative Project Case Studies',
          description: 'Our past performance illustrates our technical breadth. From witnessing full load mechanical string tests on 45 MW compressor packages to conducting 100% visual and dimensional audit on subsea pipe spools, our rigor is proven.',
          keySpecs: [
            'Gulf Coast LNG Export Terminal — 350+ valve FAT inspections',
            'Permian Basin Pipeline Expansion — 120 miles of pipe mill surveillance',
            'North Sea Offshore Platform — High-pressure separator vessel QA/QC',
            'Middle East Refinery Expansion — Hydrocracker reactor fabrication audit'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'ppp-process',
        title: 'OUR PROCESS',
        category: 'DEFECT DETECTION',
        summary: 'Documented early discovery of critical manufacturing defects saving clients millions in prevented field rework.',
        bullets: [
          'Early identification of non-compliant weld filler wire heat numbers',
          'Detection of laminated plate material during ultrasonic audit',
          'Discovery of out-of-tolerance flange raised face serrations',
          'Immediate NCR issuance and verified vendor corrective action'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Defect Interception Case Examples',
          description: 'On a recent high-pressure piping package, our inspector discovered that the vendor had used unapproved weld wire on root passes. By catching this during fabrication, we prevented an estimated $1.2M in cut-out and rework costs on site.',
          keySpecs: [
            'Traceability verification of heat numbers and MTRs',
            'Audit of heat treatment furnace calibration records',
            'Verification of hydro test pressure hold charts',
            'Thorough punch list resolution prior to equipment release'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'ppp-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'CLIENT CONFIDENCE',
        summary: 'References and verifiable past performance records available for your procurement evaluation committee.',
        bullets: [
          'Documented client performance evaluations and reference letters',
          'Transparent audit trails meeting federal procurement standards',
          'Demonstrated schedule adherence with zero inspector-caused delays',
          'Repeat business rate exceeding 90% across major accounts'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Client Testimonials & Procurement Audit Records',
          description: 'We are proud to provide verifiable past performance references to prospective clients. Our work speaks for itself through rigorous daily reports, professional documentation, and uncompromising ethics.',
          keySpecs: [
            'Past performance questionnaires available on request',
            'Verified CPARS ratings on federal contracting assignments',
            'Direct peer references from lead quality managers at EPC firms',
            'Complete transparency in timesheets and expense records'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'ppp-get-started',
        title: 'GET STARTED',
        category: 'CASE STUDY REQUEST',
        summary: 'Request comprehensive project case studies and tailored past performance matrices for your industry.',
        bullets: [
          'Request full case study dossiers for specific equipment types',
          'Review sample Inspection Daily Reports (IDRs) and NCR formats',
          'Schedule technical capabilities presentation with our leadership',
          'Add Qualispect to your approved vendor list (AVL)'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Request Tailored Past Performance Dossiers',
          description: 'Preparing a bid or evaluating third-party inspection agencies for an upcoming major project? We will provide tailored past performance data matching your exact equipment scope and industry sector.',
          keySpecs: [
            'Specific equipment case studies (Valves, Vessels, Turbines, E&I)',
            'Sample redacted Inspection Daily Reports (IDRs)',
            'Standard operating procedures (SOPs) and safety statistics',
            'Formal AVL supplier prequalification packet'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'ppp-contact',
        title: 'CONTACT',
        category: 'PROJECT DIRECTORS',
        summary: 'Speak directly with our senior project surveillance directors at Houston corporate headquarters.',
        bullets: [
          'Corporate HQ: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Telephone: 281-764-6224 / 281-764-1335',
          'Email: info@qualispect.com',
          'In-person and virtual project alignment briefings'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Project Management & Performance Desk',
          description: 'Our senior project directors are available to discuss past performance and technical alignment for your upcoming procurement campaigns.',
          keySpecs: [
            'Qualispect Project Management Division',
            'Houston Operations Hub',
            'Phone: 281-764-6224 | 281-764-1335',
            'Email: info@qualispect.com'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 08. QUALITY & CERTIFICATIONS
  // =========================================================================
  'quality-certifications': {
    index: 8,
    id: 'quality-certifications',
    pageNumber: '08',
    slug: 'quality-certifications',
    navLabel: 'Quality & Certifications',
    pageTitle: 'QUALITY & CERTIFICATIONS',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'QUALITY IS A SYSTEM',
    heroSubtitle: 'Qualifications • Processes • Document control',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'qc-overview',
        title: 'OVERVIEW',
        category: 'QMS ARCHITECTURE',
        summary: 'Quality is not a marketing slogan; it is an engineered management system aligned with ISO 9001:2015 and ISO 17020 principles.',
        bullets: [
          'Engineered Quality Management System (QMS)',
          'Independent internal audit and compliance monitoring',
          'Structured Standard Operating Procedures (SOPs) for field staff',
          'Continuous training and code calibration for inspectors'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Corporate Quality Management Framework',
          description: 'Our QMS governs every aspect of operations: from initial customer requisition review and inspector vetting to field report auditing, non-conformance tracking, and document archiving.',
          keySpecs: [
            'Structured in accordance with ISO 9001:2015 guidelines',
            'Adherence to ISO/IEC 17020 requirements for inspection bodies',
            'Mandatory annual quality audits of field operations',
            'Executive management commitment to uncompromised quality'
          ],
          applicableStandards: ['ISO 9001:2015', 'ISO/IEC 17020:2012', 'ASQ Quality Standards'],
          actionType: 'quote'
        }
      },
      {
        id: 'qc-capabilities',
        title: 'CAPABILITIES',
        category: 'INSPECTOR CREDENTIALS',
        summary: 'Rigorous vetting and continuous validation of technical certifications across all deployed field personnel.',
        bullets: [
          'AWS Senior Certified Welding Inspector (SCWI) & CWI verification',
          'API 510, 570, 653 inspector certification validation with API registry',
          'NACE / AMPP Level II and Level III coating inspector verification',
          'ASNT Level II / III Non-Destructive Testing credentials verification'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Inspector Verification & Competency Assurance',
          description: 'Every inspector in our network undergoes third-party credential verification directly with issuing bodies (AWS, API, AMPP, ASNT). We verify that credentials are valid, current, and without ethical sanctions.',
          keySpecs: [
            'Direct API and AWS registry certification confirmation',
            'Visual acuity and color blindness verification per ASNT SNT-TC-1A',
            'Technical interview and equipment-specific competency testing',
            'Background vetting and reference validation'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'qc-process',
        title: 'OUR PROCESS',
        category: 'DOCUMENT CONTROL',
        summary: 'Strict document control ensuring complete traceability, revision governance, and encrypted cloud archiving.',
        bullets: [
          'Mandatory drawing and ITP revision check prior to site arrival',
          'Standardized IDR templates with immutable photo metadata',
          'Formal Non-Conformance Report (NCR) lifecycle tracking',
          'Encrypted digital archiving for 10+ years per client retention rules'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Document Control & Report Governance',
          description: 'An inspection is only as good as its documentation. Qualispect maintains strict revision control to ensure inspectors are working to the latest approved engineering drawings, not outdated revisions.',
          keySpecs: [
            'Automated revision check during assignment kickoff',
            'Digital IDR submission with GPS and timestamp validation',
            'Permanent secure cloud storage with redundant backups',
            'Immediate client portal access for real-time document retrieval'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'qc-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'AUDIT RESILIENCE',
        summary: 'Inspection documentation that reliably withstands regulatory, insurance, and client procurement audits.',
        bullets: [
          'Legally defensible inspection records and signed punch lists',
          'Transparent calibration certificates for all utilized test instruments',
          'Defense-grade compliance suitable for federal and nuclear projects',
          'Full compliance with FAR and federal acquisition requirements'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Audit-Proof Inspection Deliverables',
          description: 'When regulatory agencies or insurance underwriters audit your project documentation, Qualispect’s deliverables stand up to the most demanding scrutiny. Every statement is substantiated with data and photographic evidence.',
          keySpecs: [
            'Zero tolerance for missing calibration certificates',
            'Traceable weld maps and test pressure recording charts',
            'Clear root cause analysis documentation on all NCRs',
            'Complete compliance with Federal Acquisition Regulation (FAR)'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'qc-get-started',
        title: 'GET STARTED',
        category: 'QUALITY MANUAL',
        summary: 'Request our corporate Quality Manual, SOPs, and Inspector Qualification Matrix for your audit.',
        bullets: [
          'Download Qualispect Corporate Quality Manual summary',
          'Review our Standard Operating Procedures (SOPs) for field surveillance',
          'Inspect our inspector competency and qualification framework',
          'Schedule a QMS audit or prequalification review'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Access Corporate Quality Documentation',
          description: 'We welcome quality audits from our clients. Contact our QA/QC manager to receive our complete Quality Manual, qualification procedures, and sample audit packages.',
          keySpecs: [
            'Full Quality Management System (QMS) Manual',
            'Inspector Qualification and Certification Matrix',
            'Standard Inspection Daily Report (IDR) and NCR procedures',
            'Health, Safety, and Environmental (HSE) policy manual'
          ],
          actionType: 'download-capability'
        }
      },
      {
        id: 'qc-contact',
        title: 'CONTACT',
        category: 'QA/QC DIRECTOR',
        summary: 'Contact our Corporate Quality Assurance Manager at Houston headquarters for QMS inquiries.',
        bullets: [
          'Corporate HQ: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Phone: 281-764-6224 / 281-764-1335',
          'Email: info@qualispect.com',
          'Direct line to Corporate QA/QC Manager'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Corporate Quality Assurance Office',
          description: 'Our Corporate QA/QC Manager is available to discuss specific project quality plans, code interpretations, and vendor quality management programs.',
          keySpecs: [
            'Qualispect Corporate QA/QC Department',
            'Houston Corporate Headquarters',
            'Phone: 281-764-6224 | 281-764-1335',
            'Email: info@qualispect.com'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 09. GOVERNMENT CONTRACTING
  // =========================================================================
  'government-contracting': {
    index: 9,
    id: 'government-contracting',
    pageNumber: '09',
    slug: 'government-contracting',
    navLabel: 'Government Contracting',
    pageTitle: 'GOVERNMENT CONTRACTING',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'QUALIFIED. COMPLIANT. READY.',
    heroSubtitle: 'Core capabilities • UEI/CAGE • Capability statement',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'gov-overview',
        title: 'OVERVIEW',
        category: 'FEDERAL READINESS',
        summary: 'Verified, fully compliant federal contractor registered in SAM.gov for U.S. government, defense, and municipal infrastructure procurement.',
        bullets: [
          'Active SAM.gov registration (System for Award Management)',
          'Unique Entity ID (UEI): L3C9LLNA2KJ9',
          'CAGE Code: 7S2L7',
          'Small Business Enterprise credentials for federal set-asides'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Federal Procurement Registration & Credentials',
          description: 'Qualispect Inc. is fully registered and active in the federal System for Award Management (SAM.gov), eligible for direct prime contracts and subcontracting tiers with the Department of Defense, USACE, NAVFAC, DOE, and civilian agencies.',
          keySpecs: [
            'Unique Entity ID (UEI): L3C9LLNA2KJ9',
            'CAGE Code: 7S2L7',
            'Active Registration in SAM.gov',
            'SBA-eligible Small Business entity'
          ],
          applicableStandards: ['Federal Acquisition Regulation (FAR)', 'DFARS', 'MIL-STD'],
          actionType: 'download-capability'
        }
      },
      {
        id: 'gov-capabilities',
        title: 'CAPABILITIES',
        category: 'NAICS CODES',
        summary: 'Primary and secondary North American Industry Classification System (NAICS) codes for technical and engineering services.',
        bullets: [
          '541330: Engineering Services (Primary)',
          '541380: Testing Laboratories & Inspection Services',
          '541990: All Other Professional, Scientific, and Technical Services',
          '541611: Administrative Management and General Management Consulting'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'NAICS & PSC Classification Matrix',
          description: 'Our registrations encompass comprehensive technical inspection, quality assurance, vendor surveillance, non-destructive examination, and engineering support services.',
          keySpecs: [
            'Primary NAICS: 541330 — Engineering Services',
            'Secondary NAICS: 541380 — Testing Laboratories & Inspection',
            'Secondary NAICS: 541990 — Professional & Technical Services',
            'Product Service Codes (PSC): H999, R425, Q999, B599'
          ],
          actionType: 'download-capability'
        }
      },
      {
        id: 'gov-process',
        title: 'OUR PROCESS',
        category: 'FEDERAL COMPLIANCE',
        summary: 'Full compliance with Federal Acquisition Regulation (FAR), DFARS quality requirements, and military specifications.',
        bullets: [
          'Strict adherence to FAR 52.246 Inspection of Supplies / Services',
          'Quality control aligned with MIL-I-45208A and ISO 9001 standards',
          'Official Certificate of Conformance (CoC) and DD Form 250 support',
          'Security-cleared personnel available for sensitive installations'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Federal Quality Assurance Protocol',
          description: 'We execute surveillance with the rigor required by federal contracting officers and defense logistics agencies. Every milestone is documented in accordance with contract quality assurance requirements.',
          keySpecs: [
            'Complete audit trails supporting government acceptance',
            'Transparent FAR-compliant cost accounting practices',
            'Personnel security vetting and E-Verify compliance',
            'DFARS cybersecurity adherence for sensitive procurement data'
          ],
          actionType: 'download-capability'
        }
      },
      {
        id: 'gov-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'PRIME & SUBCONTRACTING',
        summary: 'An agile, qualified small business teaming partner helping prime contractors meet mandatory small business participation goals.',
        bullets: [
          'Reliable Small Business teaming partner for major federal primes',
          'Experience supporting infrastructure, civil works, and energy contracts',
          'Prompt response to federal Requests for Proposals (RFPs) and RFQs',
          'Zero past performance disputes or contract non-compliances'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Teaming & Subcontracting Value',
          description: 'Prime defense and infrastructure contractors choose Qualispect to satisfy small business subcontracting plans while securing battle-tested third-party inspection capabilities that de-risk contract execution.',
          keySpecs: [
            'Rapid teaming agreement execution',
            'Past performance narratives for federal proposal submissions',
            'Audited rate structures for firm-fixed-price or T&M contracts',
            'High-reliability performance record on public infrastructure'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'gov-get-started',
        title: 'GET STARTED',
        category: 'CAPABILITY STATEMENT',
        summary: 'Download our official one-page Federal Capability Statement PDF for procurement committee evaluation.',
        bullets: [
          'Download official Qualispect Federal Capability Statement (PDF)',
          'Review UEI, CAGE, NAICS codes, and corporate address',
          'Submit RFP, RFQ, or Sources Sought notice to our federal desk',
          'Schedule an introductory teaming consultation'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Official Federal Capability Statement',
          description: 'Our one-page Federal Capability Statement contains all essential procurement identifiers, core competencies, past performance summaries, and contracting officer contact details.',
          keySpecs: [
            'UEI: L3C9LLNA2KJ9 | CAGE: 7S2L7',
            'HQ: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
            'Ready for immediate print or PDF download',
            'Includes full NAICS code directory and core competencies'
          ],
          actionType: 'download-capability'
        }
      },
      {
        id: 'gov-contact',
        title: 'CONTACT',
        category: 'FEDERAL DESK',
        summary: 'Direct contact line for Contracting Officers (KO), Contract Specialists, and Prime Contractor procurement teams.',
        bullets: [
          'Corporate HQ: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Telephone: 281-764-6224 / 281-764-1335',
          'Federal Inquiries Email: info@qualispect.com',
          'Rapid response to Sources Sought, RFI, and RFP solicitations'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Federal Contracting Officer Desk',
          description: 'Our dedicated federal contracting coordination lead is available to discuss solicitations, teaming arrangements, and subcontracting opportunities.',
          keySpecs: [
            'Qualispect Federal Contracting Division',
            'Houston Operations Hub',
            'Phone: 281-764-6224 | 281-764-1335',
            'Email: info@qualispect.com'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 10. CAREERS & INSPECTOR NETWORK
  // =========================================================================
  'careers-inspector-network': {
    index: 10,
    id: 'careers-inspector-network',
    pageNumber: '10',
    slug: 'careers-inspector-network',
    navLabel: 'Careers & Network',
    pageTitle: 'CAREERS & INSPECTOR NETWORK',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'JOIN OUR TECHNICAL NETWORK',
    heroSubtitle: 'Inspectors • Engineers • Expediters',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'car-overview',
        title: 'OVERVIEW',
        category: 'TALENT NETWORK',
        summary: 'Join an elite international roster of certified QA/QC inspectors, welding specialists, and expediting professionals.',
        bullets: [
          'Global network operating across 45+ countries',
          'Opportunities on prestigious multinational capital projects',
          'Direct deposit payments with reliable bi-weekly compensation',
          'Long-term resident contracts and flexible call-out assignments'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'About the Qualispect Inspector Network',
          description: 'Qualispect values field expertise above all else. We treat our inspectors as core engineering partners, offering competitive compensation, prompt payment terms, and assignments aligned with your certified disciplines.',
          keySpecs: [
            'Network of over 250+ vetted global technical specialists',
            'Direct electronic payment with transparent day and hourly rates',
            'Access to multinational energy, chemical, and defense projects',
            'Supportive technical management team based in Houston, Texas'
          ],
          actionType: 'apply'
        }
      },
      {
        id: 'car-capabilities',
        title: 'CAPABILITIES',
        category: 'REQUIRED DISCIPLINES',
        summary: 'We are actively seeking certified specialists across multiple technical inspection and engineering disciplines.',
        bullets: [
          'AWS Senior Certified Welding Inspectors (SCWI / CWI) & CSWIP 3.1/3.2',
          'API 510, 570, 653 Pressure Vessel and Piping Inspectors',
          'NACE / AMPP Level II and Level III Coating Inspectors',
          'ASNT Level II and Level III NDT Technicians (UT, RT, MT, PT, PAUT)',
          'Electrical & Instrumentation (E&I) Inspectors (IECEx / CompEx)'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Certifications & Disciplines Recruited',
          description: 'We recruit certified professionals who take pride in technical rigor. Ideal candidates have a minimum of 5 to 10 years of hands-on shop surveillance and field inspection experience.',
          keySpecs: [
            'Active, verifiable certification numbers required',
            'Familiarity with ASME, API, AWS, and ISO fabrication codes',
            'Ability to read complex P&IDs, isometric drawings, and ITPs',
            'Strong English technical writing and report writing skills'
          ],
          actionType: 'apply'
        }
      },
      {
        id: 'car-process',
        title: 'OUR PROCESS',
        category: 'ONBOARDING PROTOCOL',
        summary: 'A transparent, 4-step onboarding process designed to get you vetted, approved, and dispatched quickly.',
        bullets: [
          'Step 1: Submit your CV, certificates, and geographic availability',
          'Step 2: Technical review and certification verification with issuing body',
          'Step 3: Brief technical interview with Qualispect operations director',
          'Step 4: Master Subcontractor Agreement execution and dispatch readiness'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Inspector Network Onboarding Workflow',
          description: 'Our vetting process is straightforward and respectful of your time. Once approved, your profile is entered into our dispatch database, matching you with surveillance assignments near your home.',
          keySpecs: [
            'Fast-track vetting within 48 to 72 hours',
            'Direct registry check with AWS, API, AMPP, and ASNT',
            'Standard Independent Contractor Agreement execution',
            'Comprehensive briefing before your first field assignment'
          ],
          actionType: 'apply'
        }
      },
      {
        id: 'car-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'INSPECTOR ADVANTAGE',
        summary: 'Fair treatment, competitive rates, and reliable payment schedules that respect your professional standing.',
        bullets: [
          'Guaranteed prompt bi-weekly direct deposit payments',
          'Clear, all-inclusive rate sheets without unexpected deductions',
          'Assignments located near your home, reducing unnecessary travel',
          'Responsive technical coordination desk available when you need support'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Why Field Inspectors Choose Qualispect',
          description: 'Too many agencies treat inspectors as commodities. Qualispect was founded by engineers who have walked the shop floor. We respect your technical judgment, stand behind your findings, and pay promptly.',
          keySpecs: [
            'Prompt electronic payment schedules',
            'Backing from Houston management on valid non-conformance findings',
            'Transparent reimbursement of verified travel and mileage expenses',
            'Ongoing relationship with continuous assignment opportunities'
          ],
          actionType: 'apply'
        }
      },
      {
        id: 'car-get-started',
        title: 'GET STARTED',
        category: 'APPLY NOW',
        summary: 'Submit your resume, certifications, and location to join our active international dispatch roster.',
        bullets: [
          'Email your CV and credential copies to careers@qualispect.com',
          'Include your home location and willingness to travel radius',
          'Specify your active certification numbers (AWS, API, NACE, ASNT)',
          'Receive invitation for technical qualification review'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Apply to the Qualispect Network',
          description: 'Ready to join an elite network of technical inspectors? Send us your credentials today. We have active requirements across the United States, Europe, Asia, and the Middle East.',
          keySpecs: [
            'Email: careers@qualispect.com',
            'Attach CV in Word or PDF format',
            'Include copies of current certification wallet cards or certificates',
            'Specify current location and available mobilization dates'
          ],
          actionType: 'apply'
        }
      },
      {
        id: 'car-contact',
        title: 'CONTACT',
        category: 'RECRUITING DESK',
        summary: 'Direct contact line to our Inspector Recruiting and Personnel Coordination Team in Houston.',
        bullets: [
          'Corporate HQ: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Telephone: 281-764-6224 / 281-764-1335',
          'Recruiting Email: careers@qualispect.com',
          'Dedicated support for active field personnel'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Inspector Network Management Desk',
          description: 'Our personnel coordinators are available to answer questions about open assignments, rate structures, and onboarding requirements.',
          keySpecs: [
            'Qualispect Inspector Network Division',
            'Houston Corporate Office',
            'Phone: 281-764-6224 | 281-764-1335',
            'Recruiting Email: careers@qualispect.com'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 11. CONTACT & REQUEST A QUOTE
  // =========================================================================
  'contact-request-a-quote': {
    index: 11,
    id: 'contact-request-a-quote',
    pageNumber: '11',
    slug: 'contact-request-a-quote',
    navLabel: 'Contact & Quote',
    pageTitle: 'CONTACT & REQUEST A QUOTE',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'LET’S DISCUSS YOUR INSPECTION REQUIREMENT',
    heroSubtitle: 'Contact details • Service inquiry • Quote request',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'con-overview',
        title: 'OVERVIEW',
        category: 'DIRECT ACCESS',
        summary: 'Immediate access to our technical operations coordination desk at our Houston, Texas corporate headquarters.',
        bullets: [
          'Headquarters: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Direct Phone: 281-764-6224 / 281-764-1335',
          'Corporate Email: info@qualispect.com',
          'Fast 4-hour quotation turnaround for formal RFQs'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Houston Headquarters Operations Hub',
          description: 'Located in the industrial energy capital of Houston, Texas, our management team coordinates assignments across the United States and international manufacturing centers.',
          keySpecs: [
            'Corporate Address: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
            'Telephone: 281-764-6224 | 281-764-1335',
            'General Email: info@qualispect.com',
            'Business Hours: Monday–Friday 7:00 AM – 6:00 PM CST (24/7 Dispatch)'
          ],
          actionType: 'contact'
        }
      },
      {
        id: 'con-capabilities',
        title: 'CAPABILITIES',
        category: 'RFQ SERVICES',
        summary: 'Transparent, itemized cost proposals covering all surveillance models with zero hidden markups.',
        bullets: [
          'Call-out single day hold point quotes',
          'Weekly and monthly resident surveillance budgets',
          'Global multi-vendor campaign rate agreements',
          'Comprehensive Master Service Agreement (MSA) rate schedules'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Quotation Scope & Rate Structures',
          description: 'We provide transparent, all-inclusive rate sheets. Every proposal clearly specifies hourly rates, day rates, travel mileage allowances, and reporting deliverables with no unexpected surcharges.',
          keySpecs: [
            'Itemized cost breakdown per vendor facility',
            'Clear overtime and weekend rate definitions',
            'Standard payment terms (Net 30) for approved commercial accounts',
            'Credit card and wire transfer options for urgent mobilizations'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'con-process',
        title: 'OUR PROCESS',
        category: 'ESTIMATING PROTOCOL',
        summary: 'A streamlined estimating process that delivers accurate, competitive proposals within hours of inquiry.',
        bullets: [
          'Submit your scope, ITP, and vendor address to info@qualispect.com',
          'Our technical estimator reviews required disciplines and dates',
          'Receive detailed itemized proposal within 4 business hours',
          'Approve proposal and receive inspector assignment confirmation'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Rapid Quotation Protocol',
          description: 'We understand procurement deadlines. Send us your equipment specifications and vendor location, and our estimating team will calculate the most cost-effective local deployment model within hours.',
          keySpecs: [
            'Guaranteed 4-hour business day quote turnaround',
            'Direct review by a certified quality manager',
            'Matching of local inspectors to minimize travel expenses',
            'Immediate issuance of formal PDF proposal and CV package'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'con-why-qualispect',
        title: 'WHY QUALISPECT',
        category: 'COMMERCIAL CLARITY',
        summary: 'Commercial transparency and financial integrity ensuring predictable procurement budgets.',
        bullets: [
          'No hidden administration fees or travel management markups',
          'Competitive local rates in 45+ countries worldwide',
          'Direct billing in US Dollars or Euros to suit client preferences',
          'Detailed weekly timesheet backups with every invoice'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Commercial Transparency & Accountability',
          description: 'Our accounting is as rigorous as our inspection. Every invoice is backed by signed daily timesheets, approved inspector expense receipts, and corresponding inspection report IDs.',
          keySpecs: [
            'Transparent line-item billing',
            'Pre-approval required for all non-standard expenses',
            'Electronic invoicing with consolidated billing options',
            'Dedicated commercial account manager for billing inquiries'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'con-get-started',
        title: 'GET STARTED',
        category: 'REQUEST QUOTE',
        summary: 'Submit your Request for Quotation (RFQ) online or upload your project specifications directly.',
        bullets: [
          'Click below to launch the online Request a Quote modal',
          'Provide project location, equipment type, and hold point dates',
          'Upload relevant Purchase Order or ITP documents',
          'Receive prompt confirmation and formal proposal'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Launch Request for Quotation',
          description: 'Ready to receive an itemized quote? Click below to launch our online quotation form, or email your package directly to info@qualispect.com.',
          keySpecs: [
            'Fast digital form submission',
            'Support for multi-file technical attachments',
            'Option to request callout or resident rate schedules',
            'Immediate confirmation receipt'
          ],
          actionType: 'quote'
        }
      },
      {
        id: 'con-contact',
        title: 'CONTACT',
        category: 'CALL US NOW',
        summary: 'Speak directly with an inspection coordinator right now to discuss your requirements.',
        bullets: [
          'Direct Phone: 281-764-6224 / 281-764-1335',
          'Operations Email: info@qualispect.com',
          'Physical Address: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
          'Available 24/7 for urgent technical surveillance requirements'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Connect with Qualispect Coordination',
          description: 'Our phones are answered by knowledgeable technical coordinators, not automated call centers. Call us today to discuss your upcoming inspection requirements.',
          keySpecs: [
            'Corporate HQ: 2703 Highway 6 S, Suite 159, Houston, TX 77082',
            'Telephone: 281-764-6224 | 281-764-1335',
            'Email: info@qualispect.com',
            'Web: www.qualispect.com'
          ],
          actionType: 'contact'
        }
      }
    ]
  },

  // =========================================================================
  // 12. REQUEST AN INSPECTOR
  // =========================================================================
  'request-an-inspector': {
    index: 12,
    id: 'request-an-inspector',
    pageNumber: '12',
    slug: 'request-an-inspector',
    navLabel: 'Request Inspector',
    pageTitle: 'REQUEST AN INSPECTOR',
    eyebrow: 'GLOBAL THIRD-PARTY INSPECTION & QA/QC',
    heroHeadline: 'WHERE. WHAT. WHEN.',
    heroSubtitle: 'Upload ITP / PO • Select location • Submit request',
    ctaText: 'REQUEST AN INSPECTOR',
    cards: [
      {
        id: 'req-client-details',
        title: 'CLIENT DETAILS',
        category: 'STEP 1: HIRING ENTITY',
        summary: 'Enter your company name, project title, primary contact person, email, and direct telephone number.',
        bullets: [
          'Hiring company / EPC contractor name',
          'Project name and capital procurement package reference',
          'Lead Quality Manager or Procurement Lead contact details',
          'Direct telephone and corporate email address'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Client & Project Information',
          description: 'Provide your company and project identifiers. This ensures reports, certificates, and invoices are properly addressed and routed to your procurement team.',
          keySpecs: [
            'Company / Organization Name',
            'Project Title & Work Package Code',
            'Primary Technical Lead Contact',
            'Direct Phone & Corporate Email'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'req-vendor-country',
        title: 'VENDOR & COUNTRY',
        category: 'STEP 2: FACILITY LOCATION',
        summary: 'Provide vendor fabrication shop name, complete physical address, city, country, and shop contact.',
        bullets: [
          'Vendor manufacturing company name',
          'Fabrication facility street address, city, state/province, country',
          'Vendor shop floor QA/QC manager contact person',
          'Facility access requirements (safety boots, glasses, inductions)'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Manufacturing Facility Identification',
          description: 'Specify where the inspection will take place. We assign the closest certified inspector from our regional hub to minimize travel expenses and ensure immediate availability.',
          keySpecs: [
            'Vendor Shop Facility Name',
            'Complete Facility Street Address',
            'On-Site QA/QC Contact Name & Telephone',
            'Special Facility Safety Requirements'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'req-equipment-scope',
        title: 'EQUIPMENT & SCOPE',
        category: 'STEP 3: TECHNICAL DISCIPLINE',
        summary: 'Select equipment category, design codes, required inspector certifications, and hold points to witness.',
        bullets: [
          'Equipment: Pressure vessels, valves, pumps, compressors, structural, piping',
          'Required discipline: AWS CWI, API 510/570/653, NACE Coating, NDT Level II/III',
          'Governing codes: ASME Sec VIII, B31.3, API 6D, API 610, AWS D1.1',
          'Specific witness points: Hydrostatic test, FAT, NDT audit, final dimensional'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Equipment Scope & Governing Codes',
          description: 'Detailing your equipment type allows our technical director to match an inspector with specific manufacturing and testing expertise in that product category.',
          keySpecs: [
            'Equipment Classification and Tag Numbers',
            'Design and Manufacturing Codes (ASME, API, AWS)',
            'Mandatory Witness Hold Points',
            'Special Testing Witness Requirements'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'req-date-duration',
        title: 'DATE & DURATION',
        category: 'STEP 4: SCHEDULE',
        summary: 'Specify target inspection dates, expected days on site, and notice window for deployment.',
        bullets: [
          'Target inspection start date and estimated completion date',
          'Single-day witness vs continuous multi-day resident surveillance',
          'Standard 48-hour notice vs 24-hour urgent emergency mobilization',
          'Coordination with vendor testing schedule and hydro crew'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Assignment Dates & Estimated Duration',
          description: 'Whether you need an inspector for a single 4-hour hold point or 6 months of resident surveillance, we align our schedule with the vendor’s production milestones.',
          keySpecs: [
            'Target First Date on Site',
            'Estimated Total Assignment Days / Hours',
            'Notice Window (Standard 48h vs Emergency 24h)',
            'Expected Shift Timings (Day, Night, Weekend)'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'req-upload-po-itp',
        title: 'UPLOAD PO / ITP',
        category: 'STEP 5: DOCUMENTATION',
        summary: 'Securely upload client Purchase Order (PO), approved Inspection & Test Plan (ITP), and engineering drawings.',
        bullets: [
          'Upload approved project Inspection & Test Plan (ITP) in PDF',
          'Upload Purchase Order (PO) with equipment line item details',
          'Upload approved fabrication and general arrangement drawings',
          'Upload client quality specifications and special instructions'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Upload Technical Documentation Package',
          description: 'Our inspectors arrive on the shop floor fully briefed with your engineering package in hand. Attach your approved ITP and drawings for immediate review.',
          keySpecs: [
            'Secure multi-file upload portal',
            'Support for PDF, DWG, DXF, and ZIP archives',
            'Direct delivery to assigned inspector and technical director',
            'Verification of drawing revision numbers prior to mobilization'
          ],
          actionType: 'request-inspector'
        }
      },
      {
        id: 'req-submit-inspection',
        title: 'SUBMIT INSPECTION',
        category: 'STEP 6: DISPATCH ACTIVATION',
        summary: 'Submit your request for immediate review, inspector credential matching, and confirmed dispatch.',
        bullets: [
          'Click below to open the interactive Request an Inspector dispatch form',
          'Receive instant confirmation receipt and unique assignment tracking number',
          'Assigned inspector credentials transmitted within 4 hours for review',
          'Receive daily flash IDR reports electronically from the shop floor'
        ],
        actionLabel: 'VIEW DETAILS >',
        modalDetails: {
          heading: 'Activate Inspector Dispatch',
          description: 'Submit your surveillance request now. Our technical coordination desk is ready to review your scope and confirm deployment within 24 to 48 hours.',
          keySpecs: [
            'Immediate assignment confirmation',
            'Credentials of certified inspector issued for client approval',
            'Direct coordination with vendor shop floor superintendents',
            'Guaranteed daily reporting with photo evidence'
          ],
          actionType: 'request-inspector'
        }
      }
    ]
  }
};

// Array of all 13 pages in canonical order for sequential navigation & sitemaps
export const all13PagesList: Page13Data[] = [
  pages13Data['home'],
  pages13Data['about'],
  pages13Data['services'],
  pages13Data['third-party-inspection'],
  pages13Data['vendor-inspection-source-surveillance'],
  pages13Data['industries'],
  pages13Data['global-coverage'],
  pages13Data['projects-past-performance'],
  pages13Data['quality-certifications'],
  pages13Data['government-contracting'],
  pages13Data['careers-inspector-network'],
  pages13Data['contact-request-a-quote'],
  pages13Data['request-an-inspector']
];
