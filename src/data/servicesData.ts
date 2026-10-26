import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'third-party-inspection',
    title: 'Third-Party Inspection & Vendor Surveillance',
    shortDesc: 'Independent surveillance performed on behalf of purchasers, EPC contractors, manufacturers and asset owners across global facilities.',
    fullDesc: 'Independent verification throughout manufacturing, fabrication, assembly, and testing. Our inspectors act as your eyes and ears at vendor shops, ensuring compliance with purchase orders, approved ITPs, and engineering specifications.',
    disciplines: ['QA/QC Specialists', 'Multidisciplinary Inspectors', 'Source Surveillance Leads'],
    deliverables: [
      'Comprehensive Inspection Reports (Flash & Final)',
      'ITP Hold / Witness Point Sign-off Records',
      'Non-Conformance Reports (NCR) Tracking & Closure',
      'Dimensional & Visual Inspection Reports',
      'Pre-Shipment Inspection & Release Certificates'
    ],
    equipmentCovered: ['Pressure Vessels', 'Pumps & Compressors', 'Valves & Actuators', 'Structural Skids', 'Transformers'],
    standards: ['ISO 9001', 'ASME Sec VIII/IX', 'API 598', 'AWS D1.1', 'EN 10204 3.1/3.2'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    badge: 'Core Service'
  },
  {
    id: 'welding-inspection',
    title: 'Welding & Fabrication Inspection',
    shortDesc: 'Certified AWS CWI and CSWIP personnel supporting structural, piping, and pressure-boundary welding activities.',
    fullDesc: 'Rigorous surveillance of welding procedures, welder qualifications, joint fit-up, pre-heat/interpass temperatures, and non-destructive examination (NDE/NDT) witnessing to prevent costly weld failures.',
    disciplines: ['AWS Certified Welding Inspectors (CWI/SCWI)', 'CSWIP 3.1 / 3.2 Inspectors', 'Welding Engineers'],
    deliverables: [
      'WPS / PQR / WPQR Review & Verification Sheets',
      'Fit-Up & Root Pass Surveillance Records',
      'Visual Weld Quality Reports (VT)',
      'NDT Result Audits & Radiograph Film Reviews',
      'Post-Weld Heat Treatment (PWHT) Chart Reviews'
    ],
    equipmentCovered: ['Storage Tanks', 'Pressure Piping Spools', 'Boilers', 'Offshore Jackets', 'Subsea Manifolds'],
    standards: ['AWS D1.1/D1.6', 'ASME Sec IX', 'API 1104', 'ISO 3834', 'EN 287 / ISO 9606'],
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    badge: 'AWS / CSWIP'
  },
  {
    id: 'mechanical-inspection',
    title: 'Mechanical & Rotating Equipment Inspection',
    shortDesc: 'Specialized inspection for pumps, compressors, turbines, gearboxes, valves, and heavy rotating machinery.',
    fullDesc: 'In-depth quality surveillance covering precision dynamic balancing, mechanical run tests, hydrostatic casing pressure tests, vibration spectrum analysis, and complete dimensional tolerance checks.',
    disciplines: ['API Rotating Equipment Specialists', 'Mechanical QA/QC Engineers', 'Vibration Analysts'],
    deliverables: [
      'Shop Mechanical Run Test (MRT) Reports',
      'Hydrostatic & Pneumatic Shell Test Records',
      'Impeller & Rotor Dynamic Balance Certificates',
      'Critical Alignment & Run-out Tolerance Logs',
      'Performance Curve Verification Documents'
    ],
    equipmentCovered: ['Centrifugal & Reciprocating Compressors', 'API 610 Process Pumps', 'Steam & Gas Turbines', 'Gearboxes', 'Mixers'],
    standards: ['API 610', 'API 617', 'API 618', 'API 614', 'ISO 10816'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    badge: 'API Standards'
  },
  {
    id: 'electrical-instrumentation',
    title: 'Electrical & Instrumentation (E&I) Inspection',
    shortDesc: 'Inspection support for switchgear, MCCs, transformers, hazardous-area control systems, and field instrumentation.',
    fullDesc: 'Comprehensive electrical inspection encompassing insulation resistance (meggering), high-potential (Hi-Pot) dielectric testing, loop checks, instrument calibration auditing, and ATEX / IECEx hazardous-location compliance.',
    disciplines: ['E&I Quality Inspectors', 'CompEx Certified Specialists', 'Automation & Control QA'],
    deliverables: [
      'Dielectric & Megger Test Verification Logs',
      'Point-to-Point Wiring & Loop Check Dossiers',
      'FAT Witness Protocol for PLC / DCS Panels',
      'Hazardous Area Equipment Certificate Audits (ATEX/IECEx)',
      'Instrumentation Calibration Certificates'
    ],
    equipmentCovered: ['Medium/Low Voltage Switchgear', 'Motor Control Centers (MCC)', 'Power Transformers', 'PLC/ESD Cabinets', 'Coriolis Meters'],
    standards: ['IEC 60079', 'NFPA 70 (NEC)', 'IEEE 519', 'ISA 5.1', 'NEMA Standards'],
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    badge: 'IEC / NEC'
  },
  {
    id: 'coating-corrosion',
    title: 'Coating & Corrosion Inspection',
    shortDesc: 'AMPP / NACE certified coating surveillance for blast profiles, dry-film thickness (DFT), and holiday detection.',
    fullDesc: 'Environmental condition monitoring (dew point, relative humidity), surface cleanliness verification (SSPC/NISO), wet and dry film thickness measurement, adhesion testing, and lining integrity validation for severe operating environments.',
    disciplines: ['AMPP / NACE Level II & III Inspectors', 'FROSIO Certified Inspectors', 'Corrosion Engineers'],
    deliverables: [
      'Ambient Conditions & Dew Point Log Sheets',
      'Surface Profile & Soluble Salt Test Reports',
      'Dry Film Thickness (DFT) Statistical Data',
      'High/Low Voltage Holiday Spark Test Records',
      'Adhesion Pull-Off Test Reports (ASTM D4541)'
    ],
    equipmentCovered: ['Internal Tank Linings', 'Subsea Pipeline Coatings (FBE/3LPE)', 'Structural Marine Epoxies', 'Heat Exchanger Bundles'],
    standards: ['AMPP / NACE SP0188', 'SSPC-SP 10 / NACE 2', 'ISO 8501-1', 'ASTM D5162', 'ASTM D4417'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    badge: 'AMPP / NACE'
  },
  {
    id: 'pipeline-piping',
    title: 'Pipeline & Piping Inspection',
    shortDesc: 'Source surveillance and site construction inspection for transmission pipelines, spool fabrication, and station piping.',
    fullDesc: 'Quality assurance covering plate and pipe rolling, longitudinal and circumferential seams, field bending, trenching, lowering-in, tie-ins, hydrotesting, and final as-built turnover dossiers.',
    disciplines: ['API 1169 Pipeline Inspectors', 'API 570 Piping Inspectors', 'Hydrostatic Test Coordinators'],
    deliverables: [
      'Pipe Tally & Heat Traceability Dossiers',
      'Pipeline Ditch & Lower-In Quality Records',
      'Strength & Leak Test (Hydrotest) Pressure Charts',
      'Caliper & Smart Pigging Witness Reports',
      'Flange Torque & Bolt Tension Logs'
    ],
    equipmentCovered: ['Cross-Country Natural Gas & Crude Pipelines', 'Process Piping Spools', 'Metering Skids', 'Pig Launchers/Receivers'],
    standards: ['API 5L', 'API 1104', 'ASME B31.3 / B31.4 / B31.8', 'DOT PHMSA Title 49'],
    imageUrl: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80',
    badge: 'API 1169'
  },
  {
    id: 'factory-acceptance-testing',
    title: 'Factory Acceptance Testing (FAT)',
    shortDesc: 'Independent witnessing, hold-point sign-off, and punch-list verification during crucial equipment test runs.',
    fullDesc: 'We represent client interests on the test stand. Our inspectors ensure tests are executed strictly in accordance with approved procedures, witness raw sensor readings, check emergency shutdown sequences, and audit final test records prior to shipping release.',
    disciplines: ['Senior Test Engineers', 'Multidiscipline Lead Inspectors', 'Commissioning Technicians'],
    deliverables: [
      'Formal FAT Witness & Acceptance Protocol',
      'Sensor Calibration & Raw Data Verification Sheets',
      'Punch List of Outstanding Items / Deficiencies',
      'Interlock & Safety Trip Demonstration Logs',
      'Commercial Release Authorization Notice'
    ],
    equipmentCovered: ['High-Pressure Gas Compressors', 'Chemical Injection Skids', 'Turbine Gensets', 'Safety Instrumented Systems (SIS)'],
    standards: ['API Spec Q1 / ISO 29001', 'IEC 61508 / 61511', 'ASME PTC 10', 'Factory Protocols'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    badge: 'Test Stand Witness'
  },
  {
    id: 'expediting',
    title: 'Field & Desk Expediting',
    shortDesc: 'Proactive manufacturing monitoring to protect critical project delivery dates and mitigate supply chain delays.',
    fullDesc: 'Field expediters perform physical shop visits to count materials, verify fabrication percentage against sub-supplier milestone schedules, and challenge lead times. Desk expediters maintain daily communication for engineering submittals and raw material receipts.',
    disciplines: ['Senior Field Expediters', 'Procurement & Logistics Specialists', 'Project Schedulers'],
    deliverables: [
      'Physical Progress Verification Reports (Earned Value)',
      'Sub-Vendor Material Availability Logs',
      'Critical Path Delay Early-Warning Notices',
      'Photographic Milestone Evidence Dossiers',
      'Updated Bill of Materials (BOM) Tracking Sheets'
    ],
    equipmentCovered: ['Long-Lead Forgings', 'Custom Heavy Castings', 'Alloy Piping & Tubing', 'Electrical Switchgear', 'Modular Skids'],
    standards: ['CII Best Practices', 'PMI Scheduling Standards', 'Project Specific Procurement Milestones'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Schedule Defense'
  },
  {
    id: 'construction-commissioning',
    title: 'Construction, Pre-Commissioning & Commissioning Support',
    shortDesc: 'On-site technical surveillance ensuring mechanical completion, punch-list clearance, and safe systems turnover.',
    fullDesc: 'Bridging the transition from construction to operations. Our personnel inspect piping reinstatement, flange management, motor solo runs, cold and hot loop checks, chemical cleaning, and system walkdowns to compile ready-for-startup documentation.',
    disciplines: ['Mechanical Completion Leads', 'Turnover Package Coordinators', 'Commissioning QA/QC Officers'],
    deliverables: [
      'System Sub-System Completion Certificates',
      'Flange Management & Joint Integrity Logs',
      'Category A & B Punch-List Matrix Updates',
      'Pre-Commissioning Test Sheets (Flushing, Drying)',
      'Final Ready-for-Commissioning (RFC) Dossiers'
    ],
    equipmentCovered: ['Offshore Production Decks', 'Refinery Units', 'Water Treatment Modules', 'Power Generation Plants'],
    standards: ['API RP 1FS', 'OSHA 1910.119 (PSM)', 'Owner Operational Specifications'],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    badge: 'Startup Readiness'
  },
  {
    id: 'technical-staffing',
    title: 'Technical Staffing & Project Personnel',
    shortDesc: 'Deployment of specialized, credentialed QA/QC professionals for short-term turnarounds or multi-year capital projects.',
    fullDesc: 'When project demands surge, Qualispect rapidly mobilizes vetted technical talent. We handle credential verification, mobilization logistics, PPE compliance, and technical briefing so personnel arrive job-ready on day one.',
    disciplines: [
      'QA/QC Managers & Site Leads',
      'Welding & NDT Coordinators',
      'API Inspectors (510 / 570 / 653)',
      'Coatings Inspectors (AMPP 2/3)',
      'E&I Quality Engineers',
      'Pipeline Inspectors (API 1169)',
      'Expediting Specialists',
      'Document Controllers'
    ],
    deliverables: [
      '100% Verified Credential Dossiers',
      'Immediate Mobilization Timelines',
      'Seamless On-Site Integration',
      'Scalable Team Sizing (Single Callout to Full QA Teams)'
    ],
    equipmentCovered: ['Turnaround Shutdown Units', 'Capital Construction Projects', 'Fabrication Yards', 'Vendor Audit Programs'],
    standards: ['Client Specific Quality Management Systems', 'ISO 9001:2015 Requirements'],
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80',
    badge: 'Rapid Deployment'
  }
];
