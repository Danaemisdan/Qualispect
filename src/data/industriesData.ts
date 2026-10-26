import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'oil-and-gas',
    title: 'Oil & Gas',
    tagline: 'Upstream, midstream and downstream inspection support.',
    description: 'From deepwater subsea trees to cryogenic gas processing and high-sulfur refinery units, Qualispect verifies equipment metallurgy, pressure containment integrity, and fabrication compliance across the full hydrocarbon value chain.',
    keyEquipment: [
      'Wellhead Systems & Christmas Trees',
      'High-Pressure Separator Vessels',
      'Gas Compressor Stations',
      'Refinery Distillation Columns & Hydrocrackers',
      'Offshore Modular Production Skids'
    ],
    inspectionsPerformed: [
      'ASME Section VIII Div 1 & 2 Vessel Surveillance',
      'API 598 High-Pressure Valve Testing',
      'NACE MR0175 / ISO 15156 Sour Service Compliance',
      'FAT Witnessing for Gas Turbines & Screw Compressors'
    ],
    caseSnippet: 'Surveillance of 14 offshore separator skids fabricated across 3 continents with zero dimensional non-conformances at final site hookup.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lng-and-petrochemical',
    title: 'LNG & Petrochemical',
    tagline: 'Vendor surveillance and technical inspection for process equipment and facilities.',
    description: 'Cryogenic temperatures (-162°C) and aggressive chemical reactions demand uncompromising material quality and testing precision. We monitor cryogenic valve packing, nickel alloy welding, and cold-box insulation integrity.',
    keyEquipment: [
      'Cryogenic LNG Storage Tanks & Boil-Off Compressors',
      'Ethylene Cracking Furnaces',
      'Plate-Fin & Shell-and-Tube Heat Exchangers',
      'Specialty Chemical Reactors',
      'Cryogenic Emergency Shutdown (ESD) Valves'
    ],
    inspectionsPerformed: [
      'Cryogenic Valve Leakage & Shell Testing (BS 6364)',
      'Ferrite Testing & Positive Material Identification (PMI)',
      'Helium Mass Spectrometer Leak Detection',
      'Cleanliness & Degreasing Verification for Oxygen Service'
    ],
    caseSnippet: 'Cryogenic FAT witnessing for 420 motor-operated cryogenic ball valves destined for a Gulf Coast LNG export terminal expansion.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'power-and-energy',
    title: 'Power & Energy',
    tagline: 'Inspection and quality support for conventional, nuclear-support and renewable energy infrastructure.',
    description: 'Supporting high-efficiency combined cycle gas turbines, steam boilers, wind turbine sub-assemblies, transformer substations, and battery energy storage system (BESS) enclosures.',
    keyEquipment: [
      'Heavy Gas & Steam Turbines',
      'Heat Recovery Steam Generators (HRSG)',
      'Step-up Power Transformers (500kV+)',
      'Wind Turbine Towers & Internal Busbars',
      'BESS Inverter Skids & Switchgear'
    ],
    inspectionsPerformed: [
      'Rotor Blade Dynamic Balance & Ultrasonic Inspection',
      'Transformer Winding Resistance & Dissolved Gas Audits',
      'High-Temperature Creep-Resistant Alloy Weld QA',
      'Factory Acceptance Testing of High-Voltage Switchgear'
    ],
    caseSnippet: 'Source inspection of two 350 MVA generator step-up transformers in Europe, catching an internal core insulation issue before transatlantic shipment.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pipelines',
    title: 'Pipelines & Gathering Systems',
    tagline: 'Pipeline construction, welding, coating, material and associated inspection services.',
    description: 'Transmission lines span thousands of miles of varied terrain. Qualispect provides comprehensive pipeline inspection including mill surveillance, joint coating verification, automated ultrasonic testing (AUT) auditing, and hydrotest monitoring.',
    keyEquipment: [
      'Large-Diameter Line Pipe (API 5L X65 / X70 / X80)',
      'Induction Bends & Heavy-Wall Forged Fittings',
      'Pipeline Mainline Block Valve Skids',
      'Launcher & Receiver Traps',
      'Horizontal Directional Drilling (HDD) Pull Sections'
    ],
    inspectionsPerformed: [
      'Line Pipe Rolling & Submerged Arc Weld Surveillance',
      'Field Joint Coating & Holiday Spark Testing',
      'API 1104 Radiographic & Phased Array Ultrasonic Witnessing',
      '24-Hour Pipeline Strength and Leak Pressure Testing'
    ],
    caseSnippet: 'Vendor surveillance for 120 miles of 36-inch API 5L line pipe manufactured across two Asian mills, ensuring 100% heat traceability.',
    imageUrl: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'manufacturing-fabrication',
    title: 'Manufacturing & Heavy Fabrication',
    tagline: 'Independent verification throughout manufacturing, fabrication and testing.',
    description: 'We represent buyers in contract manufacturing facilities and fabrication shops worldwide. We independently verify that machining tolerances, raw casting soundness, weld quality, and assembly sequences strictly adhere to the contract.',
    keyEquipment: [
      'Precision Machined Castings & Heavy Forgings',
      'Structural Steel Modules & Pipe Racks',
      'Custom Skid Packages & Hydraulic Power Units',
      'Heat Exchanger Tube Bundles',
      'High-Pressure Flanges & Fasteners'
    ],
    inspectionsPerformed: [
      'Laser Tracker & CMM Precision Dimensional Inspection',
      'Material Test Report (MTR) EN 10204 3.1 Review',
      'Magnetic Particle (MT) & Liquid Penetrant (PT) Testing',
      'Full Pre-Shipment Packing & Preservation Auditing'
    ],
    caseSnippet: 'Source surveillance across 6 structural steel fabrication shops for an overseas mega-module program, reducing site fit-up rework to under 0.2%.',
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Civil Construction',
    tagline: 'Quality surveillance across civil, structural, utility and transportation infrastructure.',
    description: 'Independent inspection for bridges, utility tunnels, ports, water treatment facilities, and public works. We monitor rebar placement, concrete batch plant operations, structural bolt torqueing, and anti-corrosion galvanizing.',
    keyEquipment: [
      'Structural Steel Bridge Girders',
      'Prestressed & Precast Concrete Bridge Beams',
      'Large-Diameter Water & Slurry Mains',
      'Marine Piling & Port Bulkhead Assemblies',
      'Utility Substation Structures'
    ],
    inspectionsPerformed: [
      'AASHTO / AWS D1.5 Bridge Welding Code Surveillance',
      'High-Strength Bolting Turn-of-Nut Calibration Audits',
      'Hot-Dip Galvanizing & Duplex Coating Inspection',
      'Concrete Pour Surveillance & Slump/Compressive Verification'
    ],
    caseSnippet: 'Third-party welding inspection for pre-fabricated steel spans on a major municipal crossing with 100% volumetric NDT compliance.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'mining-heavy-industry',
    title: 'Mining & Heavy Industry',
    tagline: 'Inspection support for critical equipment, wear components and mineral processing assets.',
    description: 'Extreme impact, abrasion, and cyclic fatigue characterize mineral processing operations. Qualispect monitors heavy castings, mill shells, slurry pump liners, and conveyor drives at global manufacturing facilities.',
    keyEquipment: [
      'SAG & Ball Mill Shells & Trunnions',
      'Primary Gyratory & Cone Crushers',
      'High-Pressure Grinding Rolls (HPGR)',
      'Heavy Overland Conveyor Drive Assemblies',
      'Slurry Pumps & Hydrocyclone Manifolds'
    ],
    inspectionsPerformed: [
      'Heavy Section Ultrasonic Testing for Casting Voids',
      'Hardfacing & Wear-Resistant Overlay Weld Audits',
      'Static & Dynamic Shop Balancing of Large Rotors',
      'Pre-Assembly Trial Fit-Up & Match-Marking Verification'
    ],
    caseSnippet: 'Surveillance of a 38-foot SAG mill trunnion casting in South America, identifying subsurface shrinkage flaws before final precision machining.',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'industrial-construction',
    title: 'Industrial Construction',
    tagline: 'Quality surveillance across civil, structural, mechanical and E&I activities.',
    description: 'Supporting field erection, plant expansions, and turnaround shutdowns. Qualispect supplies certified site inspectors to maintain rigorous field quality control from civil foundations through to system energization and handover.',
    keyEquipment: [
      'Process Piping Isometric Spools',
      'Structural Pipe Racks & Walkways',
      'Vessel Internals & Tray Installations',
      'Cable Trays & Field Junction Boxes',
      'Rotating Equipment Baseplates & Soleplates'
    ],
    inspectionsPerformed: [
      'Field Weld Inspection & Radiograph Film Review',
      'Flange Torque & Gasket Verification Tracking',
      'Piping Isometric Walkdown & Punch-List Clearance',
      'Hydrotest Package Verification & Pressure Sign-off'
    ],
    caseSnippet: 'Provision of a 12-person multidiscipline QA/QC inspection team for a 45-day major chemical plant turnaround completed on schedule.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  }
];
