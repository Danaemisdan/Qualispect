export type PageId = 
  // Canonical 13 Pages matching Qualispect_All_13_Pages
  | 'home' 
  | 'about' 
  | 'services' 
  | 'third-party-inspection'
  | 'vendor-inspection-source-surveillance'
  | 'industries' 
  | 'global-coverage' 
  | 'projects-past-performance' 
  | 'quality-certifications' 
  | 'government-contracting' 
  | 'careers-inspector-network' 
  | 'contact-request-a-quote' 
  | 'request-an-inspector'
  // Backward-compatible navigation aliases
  | 'vendor-surveillance' 
  | 'projects' 
  | 'quality' 
  | 'careers' 
  | 'contact' 
  | 'request-inspector' 
  | 'request-quote';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  disciplines: string[];
  deliverables: string[];
  equipmentCovered: string[];
  standards: string[];
  imageUrl: string;
  badge: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyEquipment: string[];
  inspectionsPerformed: string[];
  caseSnippet: string;
  imageUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  industry: 'Oil & Gas' | 'Energy & Power' | 'Petrochemical & Process' | 'Manufacturing' | 'Pipeline & Infrastructure' | 'Mining & Heavy Industry' | 'Construction';
  equipment: 'Rotating Equipment' | 'Valves & Piping' | 'Pressure Equipment' | 'Electrical & Instrumentation' | 'Pipeline' | 'Coating' | 'Structural & Fabrication' | 'Factory Acceptance Testing' | 'Expediting' | 'Construction QA/QC';
  region: 'North America' | 'Europe' | 'Middle East' | 'Asia-Pacific' | 'South America' | 'Africa';
  location: string;
  service: string;
  scope: string[];
  result: string;
  standardsVerified: string[];
  confidentialityNote: string;
}

export interface CareerItem {
  id: string;
  title: string;
  discipline: string;
  country: string;
  state: string;
  location: string;
  projectType: string;
  employmentType: 'Contract / Assignment' | 'Full-Time Project' | 'Call-Out / Ad-Hoc';
  experienceReq: string;
  requiredCerts: string[];
  summary: string;
  responsibilities: string[];
}

export interface RegionCoverage {
  id: string;
  name: string;
  headline: string;
  description: string;
  countries: string[];
  majorManufacturingHubs: string[];
  disciplinesAvailable: string[];
  averageMobilization: string;
  representativeOffices: string;
}

export interface InspectorRequestData {
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  vendorName: string;
  vendorAddress: string;
  vendorCity: string;
  vendorCountry: string;
  equipmentType: string;
  poNumber: string;
  inspectionDiscipline: string;
  targetDate: string;
  estimatedDuration: string;
  requiredCertifications: string[];
  scopeDetails: string;
  attachedFiles: string[];
  isUrgent: boolean;
}
