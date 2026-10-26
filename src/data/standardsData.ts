export interface StandardGroup {
  org: string;
  fullName: string;
  commonStandards: { code: string; title: string; application: string }[];
}

export const standardsGroups: StandardGroup[] = [
  {
    org: 'API',
    fullName: 'American Petroleum Institute',
    commonStandards: [
      { code: 'API 510', title: 'Pressure Vessel Inspection Code', application: 'In-service inspection, repair, alteration & rerating' },
      { code: 'API 570', title: 'Piping Inspection Code', application: 'In-service inspection, rating & alteration of piping systems' },
      { code: 'API 653', title: 'Tank Inspection, Repair & Alteration', application: 'Aboveground atmospheric storage tank surveillance' },
      { code: 'API 598', title: 'Valve Inspection and Testing', application: 'Seat leakage, shell hydrostatic & pneumatic test witness' },
      { code: 'API 610', title: 'Centrifugal Pumps for Petroleum, Petrochem & Gas', application: 'Dynamic balancing, casing tests & mechanical run testing' },
      { code: 'API 1104', title: 'Welding of Pipelines and Related Facilities', application: 'Cross-country transmission welding & NDT criteria' },
      { code: 'API 1169', title: 'Pipeline Construction Inspection', application: 'Comprehensive pipeline right-of-way inspection standard' }
    ]
  },
  {
    org: 'ASME',
    fullName: 'American Society of Mechanical Engineers',
    commonStandards: [
      { code: 'ASME Section VIII Div 1 & 2', title: 'Rules for Construction of Pressure Vessels', application: 'Material verification, weld joint efficiency & hydrotesting' },
      { code: 'ASME Section IX', title: 'Welding, Brazing and Fusing Qualifications', application: 'WPS, PQR, and Welder Performance (WPQ) evaluation' },
      { code: 'ASME Section V', title: 'Nondestructive Examination', application: 'RT, UT, MT, PT, and VT procedure verification' },
      { code: 'ASME B31.3', title: 'Process Piping', application: 'Chemical plant and refinery piping fabrication QA/QC' },
      { code: 'ASME B16.34', title: 'Valves Flanged, Threaded, and Welding End', application: 'Pressure-temperature ratings & shell wall minimums' }
    ]
  },
  {
    org: 'AWS',
    fullName: 'American Welding Society',
    commonStandards: [
      { code: 'AWS D1.1 / D1.1M', title: 'Structural Welding Code – Steel', application: 'Structural steel fabrication & building frame surveillance' },
      { code: 'AWS D1.6', title: 'Structural Welding Code – Stainless Steel', application: 'Austenitic and duplex stainless steel weldment QA' },
      { code: 'AWS QC1', title: 'Standard for AWS Certification of Welding Inspectors', application: 'CWI and SCWI credential requirements' }
    ]
  },
  {
    org: 'AMPP / NACE',
    fullName: 'Association for Materials Protection and Performance',
    commonStandards: [
      { code: 'AMPP SP0188', title: 'Discontinuity (Holiday) Testing of Protective Coatings', application: 'High-voltage spark and low-voltage wet sponge testing' },
      { code: 'SSPC-SP 10 / NACE No. 2', title: 'Near-White Metal Blast Cleaning', application: 'Abrasive blast cleanliness verification' },
      { code: 'NACE MR0175 / ISO 15156', title: 'Materials for use in H2S-containing Environments', application: 'Sour service hardness and metallurgy checks' }
    ]
  },
  {
    org: 'ASNT / ISO',
    fullName: 'American Society for Nondestructive Testing / ISO',
    commonStandards: [
      { code: 'ASNT SNT-TC-1A', title: 'Personnel Qualification in NDT', application: 'Written practice & Level II/III verification' },
      { code: 'ISO 9001:2015', title: 'Quality Management Systems', application: 'Systemic QA workflow and documentation audit trail' },
      { code: 'ISO 9712 / EN 473', title: 'Non-Destructive Testing Personnel Qualification', application: 'Volumetric & surface NDT compliance' }
    ]
  },
  {
    org: 'IEC / NFPA',
    fullName: 'International Electrotechnical Commission / NFPA',
    commonStandards: [
      { code: 'IEC 60079', title: 'Explosive Atmospheres (Hazardous Areas)', application: 'Ex d, Ex e, Ex i equipment inspection' },
      { code: 'NFPA 70', title: 'National Electrical Code (NEC)', application: 'Industrial wiring, grounding & MCC panels' },
      { code: 'IEC 62271', title: 'High-Voltage Switchgear and Controlgear', application: 'FAT dielectric withstand and timing tests' }
    ]
  }
];

export const qualityNineSteps = [
  { step: '01', title: 'Assignment Review', desc: 'Thorough evaluation of client scope, purchase order requirements, hold/witness points, and delivery schedule.' },
  { step: '02', title: 'Inspector Qualification Review', desc: 'Vetting inspector CV, active credentials (AWS, API, AMPP), and industry familiarity before assignment approval.' },
  { step: '03', title: 'Scope Communication', desc: 'Pre-inspection technical briefing aligning the inspector with client expectations, specifications, and critical check items.' },
  { step: '04', title: 'Document Availability', desc: 'Ensuring approved ITPs, drawings, WPS/PQRs, and PO revisions are in hand prior to entering vendor premises.' },
  { step: '05', title: 'Inspection Coordination', desc: 'Formal contact with vendor quality management to confirm access, testing readiness, and safety requirements.' },
  { step: '06', title: 'Reporting Requirements', desc: 'Standardized daily flash reporting within 24 hours, followed by detailed formal reports with photographic evidence.' },
  { step: '07', title: 'Technical Report Review', desc: 'Internal technical audit of reports and NCRs by Qualispect coordination leads prior to client submission.' },
  { step: '08', title: 'Record Retention', desc: 'Secure cloud archiving of all inspection dossiers, test certs, photos, and sign-offs for the project lifetime.' },
  { step: '09', title: 'Client Communication', desc: 'Continuous direct feedback loop with client quality teams, flagging concerns early to avoid project delays.' }
];
