import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Multi-Stage Centrifugal Injection Pump FAT & Surveillance',
    category: 'ROTATING EQUIPMENT',
    industry: 'Oil & Gas',
    equipment: 'Rotating Equipment',
    region: 'North America',
    location: 'Houston, Texas, USA',
    service: 'Factory Acceptance Testing',
    scope: [
      'Casing hydrostatic pressure test witness at 1.5x design pressure',
      'Shaft run-out and dynamic balance verification to ISO 1940 Grade 2.5',
      '4-Hour continuous mechanical run test (MRT) at full rated speed',
      'Bearing vibration FFT spectrum analysis and temperature stabilization logging',
      'Complete EN 10204 3.1 material test report (MTR) audit'
    ],
    result: 'Zero oil-seal leakage detected; vibration levels verified well within API 610 Table 8 acceptance criteria; comprehensive FAT sign-off dossier issued in 24 hours.',
    standardsVerified: ['API 610 12th Ed', 'API 682', 'ASME Section IX', 'ISO 10816-3'],
    confidentialityNote: 'Client and vendor identity protected under non-disclosure agreement.'
  },
  {
    id: 'proj-02',
    title: 'Severe-Service Cryogenic Ball Valves Source Surveillance',
    category: 'VALVES & PIPING',
    industry: 'Petrochemical & Process',
    equipment: 'Valves & Piping',
    region: 'Europe',
    location: 'Milan, Italy',
    service: 'Vendor Surveillance',
    scope: [
      'Cryogenic testing witness at -196°C using liquid nitrogen bath',
      'Helium mass spectrometer seat leak rate verification to ISO 15848-1 Class AH',
      'High-pressure gas shell test and torque verification at cryogenic temperatures',
      'Stellite hardfacing weld overlay and dye penetrant inspection',
      'Pre-shipment packaging and nitrogen purge verification'
    ],
    result: 'All 84 cryogenic ball valves met stringent fugitive emissions specifications with zero seat leakage at cold soak; released for export shipment on schedule.',
    standardsVerified: ['BS 6364', 'ISO 15848-1', 'ASME B16.34', 'API 598'],
    confidentialityNote: 'Project details masked per EPC client compliance protocol.'
  },
  {
    id: 'proj-03',
    title: 'Heavy-Wall Hydrocracker Reactor Pressure Vessel Fabrication',
    category: 'PRESSURE EQUIPMENT',
    industry: 'Oil & Gas',
    equipment: 'Pressure Equipment',
    region: 'Asia-Pacific',
    location: 'Ulsan, South Korea',
    service: 'Third-Party Inspection',
    scope: [
      'Plate ultrasonic examination and forged shell ring dimensional audits',
      'Submerged Arc Welding (SAW) surveillance with 2.25Cr-1Mo-0.25V wire/flux combination',
      'Time of Flight Diffraction (TOFD) and Phased Array UT witness on thick-wall seams (180mm)',
      'Post-Weld Heat Treatment (PWHT) 12-point thermocouple chart monitoring',
      'Final shop hydrostatic test witness at 285 barg'
    ],
    result: '100% volumetric NDT compliance confirmed with no repairs required on main circumferential joints; full ASME U2 data report verification signed off.',
    standardsVerified: ['ASME Sec VIII Div 2', 'ASME Sec V', 'API RP 934-A'],
    confidentialityNote: 'Major multinational refiner assignment; proprietary fabricator details confidential.'
  },
  {
    id: 'proj-04',
    title: '33kV Medium-Voltage GIS Switchgear & Protection Panels FAT',
    category: 'ELECTRICAL EQUIPMENT',
    industry: 'Energy & Power',
    equipment: 'Electrical & Instrumentation',
    region: 'Europe',
    location: 'Frankfurt, Germany',
    service: 'Factory Acceptance Testing',
    scope: [
      'Power frequency AC withstand voltage dielectric test witness (70 kV / 1 min)',
      'SF6 gas compartment leakage rate test by infrared camera and sniffer',
      'Circuit breaker timing test, contact resistance measurement, and close/trip coil checks',
      'Protection relay logic simulation and functional interlocking verification',
      'SCADA Modbus communication point-to-point check'
    ],
    result: 'Demonstrated complete functional compliance across 18 cubicles; early discovery and rectification of an auxiliary relay wiring discrepancy before crating.',
    standardsVerified: ['IEC 62271-200', 'IEC 62271-1', 'IEEE C37.20.2'],
    confidentialityNote: 'Conducted on behalf of an offshore substation developer.'
  },
  {
    id: 'proj-05',
    title: '42-Inch API 5L X70 Saw Line Pipe Mill Surveillance',
    category: 'PIPELINE',
    industry: 'Pipeline & Infrastructure',
    equipment: 'Pipeline',
    region: 'North America',
    location: 'Birmingham, Alabama, USA',
    service: 'Vendor Surveillance',
    scope: [
      'Continuous pipe mill rolling surveillance and plate edge ultrasonic testing',
      'Double submerged arc welding (DSAW) process parameter auditing',
      'Full-body electromagnetic and phased array ultrasonic testing calibration witness',
      'Mill hydrostatic test witness (100% SMYS hold for 10 seconds per pipe joint)',
      'Charpy V-Notch impact testing at -20°C and drop-weight tear test (DWTT) audits'
    ],
    result: 'Over 4,200 pipe joints (approx. 50 miles) verified with 99.8% first-pass acceptance; complete digital heat-to-pipe traceability database delivered to pipeline owner.',
    standardsVerified: ['API Spec 5L 46th Ed', 'API RP 5L1', 'DOT 49 CFR Part 192'],
    confidentialityNote: 'Interstate gas pipeline project; mill identity withheld.'
  },
  {
    id: 'proj-06',
    title: 'Subsea FBE & 3LPE Pipe Joint Coating Surveillance',
    category: 'COATING',
    industry: 'Oil & Gas',
    equipment: 'Coating',
    region: 'Middle East',
    location: 'Dammam, Saudi Arabia',
    service: 'Third-Party Inspection',
    scope: [
      'Automated abrasive blast cleaning verification to ISO 8501-1 Sa 3 with surface profile checks',
      'Soluble salt surface contamination testing using Bresle method (< 20 mg/m²)',
      'Fusion-Bonded Epoxy (FBE) primer application and induction preheat temperature monitoring',
      'Continuous 25kV high-voltage holiday detector spark test witness',
      'Cathodic disbondment and peel strength tests (28-day and 48-hour accelerated at 65°C)'
    ],
    result: 'Zero coating holiday defects recorded across 32 km of offshore flowlines; AMPP Level III inspection sign-off issued without delay to spoolbase.',
    standardsVerified: ['ISO 21809-1', 'AMPP / NACE SP0188', 'CSA Z245.20'],
    confidentialityNote: 'Offshore operator assignment; confidential field location.'
  },
  {
    id: 'proj-07',
    title: 'Offshore Compressor Skid Structural Fabrication QA/QC',
    category: 'STRUCTURAL & FABRICATION',
    industry: 'Manufacturing',
    equipment: 'Structural & Fabrication',
    region: 'Asia-Pacific',
    location: 'Batam, Indonesia',
    service: 'Third-Party Inspection',
    scope: [
      'Heavy wide-flange beam fit-up, root gap, and weld alignment surveillance',
      '100% visual inspection (VT) and 20% magnetic particle testing (MT) of structural fillet welds',
      'Full penetration butt-weld ultrasonic testing (UT) witness to AWS D1.1 Table 6.3 criteria',
      '3D Laser tracker dimensional survey of critical equipment mounting pads and pin elevations',
      'Three-coat marine epoxy paint system dry film thickness (DFT) mapping'
    ],
    result: 'Structural skid fabricated within ±1.5 mm tolerance across a 16-meter span; seamless installation of compressor package without shimming or pad re-machining.',
    standardsVerified: ['AWS D1.1 / D1.1M', 'AISC 360', 'ISO 19902'],
    confidentialityNote: 'Fabricated for deepwater spar platform; client identity confidential.'
  },
  {
    id: 'proj-08',
    title: 'Critical Path Forged Alloy Valves Expediting & Desk Audit',
    category: 'EXPEDITING',
    industry: 'Petrochemical & Process',
    equipment: 'Valves & Piping',
    region: 'Europe',
    location: 'Sheffield, United Kingdom',
    service: 'Expediting',
    scope: [
      'On-site forge shop raw billet audit and heat batch allocation verification',
      'Physical progress measurement against manufacturer Level 3 critical path schedule',
      'Sub-supplier stem forging and Inconel 625 trim delivery bottleneck resolution',
      'Weekly photographic milestone evidence and Earned Value Progress analysis',
      'Coordination of third-party NDT witnessing to clear testing queue'
    ],
    result: 'Identified a 3-week casting delay at sub-tier foundry; expedited alternate ingot release, recovering 18 days of critical project schedule prior to turnaround shutdown.',
    standardsVerified: ['CII Expediting Standards', 'ISO 9001 Quality Records'],
    confidentialityNote: 'Confidential chemical facility turnaround program.'
  },
  {
    id: 'proj-09',
    title: 'LNG Liquefaction Train Piping Erection Construction QA/QC',
    category: 'CONSTRUCTION QA/QC',
    industry: 'Construction',
    equipment: 'Construction QA/QC',
    region: 'North America',
    location: 'Lake Charles, Louisiana, USA',
    service: 'Construction QA/QC',
    scope: [
      'Field welding surveillance of 304L stainless steel cryogenic process piping spools',
      'Purge oxygen monitoring (< 50 ppm) during GTAW root pass deposition',
      'Radiographic testing (RT) film auditing and digital computed radiography review',
      'Flange torque tightening and gasket verification on 2,400 bolted joints',
      'Hydrostatic test package compilation, pressure test witness, and chemical drying inspection'
    ],
    result: 'Maintained an overall field weld repair rate below 0.8% across 12,000 weld inches; expedited turnover package compilation for commissioning handover.',
    standardsVerified: ['ASME B31.3 Process Piping (Severe Cyclic)', 'ASME Section IX', 'AWS D1.6'],
    confidentialityNote: 'Major LNG export terminal construction phase.'
  },
  {
    id: 'proj-10',
    title: 'Heavy Primary Gyratory Crusher Component Source Surveillance',
    category: 'ROTATING EQUIPMENT',
    industry: 'Mining & Heavy Industry',
    equipment: 'Rotating Equipment',
    region: 'South America',
    location: 'Belo Horizonte, Brazil',
    service: 'Vendor Surveillance',
    scope: [
      'Main shaft heavy alloy steel forging ultrasonic examination (ASTM A388)',
      'Casting integrity verification of top and bottom crusher shells',
      'Precision CNC machining dimensional verification of eccentric bushing fit',
      'Shop trial pre-assembly and backlash clearance measurement',
      'Heavy export packing, rust-inhibitor application, and sea container lashing inspection'
    ],
    result: 'Detected excessive runout on the inner eccentric sleeve during trial rotation; machined to specification before shipment, preventing catastrophic field seizure.',
    standardsVerified: ['ASTM A388', 'ISO 286 Tolerances', 'AGMA Standards'],
    confidentialityNote: 'Copper mining expansion project; equipment vendor masked.'
  },
  {
    id: 'proj-11',
    title: 'Gas-Fired Combined Cycle HRSG Module Vendor Surveillance',
    category: 'PRESSURE EQUIPMENT',
    industry: 'Energy & Power',
    equipment: 'Pressure Equipment',
    region: 'Asia-Pacific',
    location: 'Yokohama, Japan',
    service: 'Vendor Surveillance',
    scope: [
      'P91 alloy steel header tube-to-socket orbital welding surveillance',
      'Continuous visual and boroscopic inspection of internal tube cleanliness',
      'Induction preheat and automatic PWHT chart monitoring',
      'Finned tube heat-transfer surface dimensional and straightness checks',
      'Full shop hydrostatic testing of high-pressure superheater harps'
    ],
    result: 'Zero tube weld failures during 450 bar hydrostatic witness; all P91 hardness values confirmed within 190–250 HBW specification.',
    standardsVerified: ['ASME Section I Power Boilers', 'ASME B31.1', 'ASME Section V'],
    confidentialityNote: 'Utility-scale power plant project; proprietary Japanese fabricator.'
  },
  {
    id: 'proj-12',
    title: 'Offshore Wellhead Control Panel & Hydraulic Skid FAT',
    category: 'FACTORY ACCEPTANCE TESTING',
    industry: 'Oil & Gas',
    equipment: 'Factory Acceptance Testing',
    region: 'Africa',
    location: 'Lagos, Nigeria',
    service: 'Factory Acceptance Testing',
    scope: [
      '316L stainless steel hydraulic tubing pressure test at 15,000 psi hold',
      'Hydraulic accumulator charging, bleed-down, and emergency shutdown valve cycle timing',
      'Pneumatic logic simulation and ESD loop trip response timing (< 1.2 sec)',
      'Solar power charging and battery autonomy 72-hour discharge verification',
      'Hazardous area equipment certificate check (ATEX Zone 1 / Class 1 Div 1)'
    ],
    result: 'Full functional sign-off completed within 4 days; verified all emergency fail-safe positions functioned perfectly under simulated blackout conditions.',
    standardsVerified: ['API Spec 14A / 14D', 'API RP 14C', 'IEC 60079'],
    confidentialityNote: 'West Africa deepwater development.'
  }
];
