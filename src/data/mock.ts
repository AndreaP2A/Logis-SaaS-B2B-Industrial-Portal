export interface CustomerSummary {
  name: string;
  accountId: string;
  contactEmail: string;
  website: string;
  location: string;
  memberSince: string;
  primaryContact: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  type: string;
  status: "active" | "pending" | "expired";
  expiryDate: string;
  technician?: string;
}

export interface ContractItem {
  id: string;
  name: string;
  partner: string;
  status: 'Active' | 'Completed' | 'Pending Review';
  value: string;
  signedDate: string;
  expiryDate?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone?: string;
  status: string;
  access: string;
  isMe?: boolean;
}

export interface ConsumptionMetric {
  id: number;
  type: string;
  usage: string;
  change: string;
  trend: 'up' | 'down';
  cost: string;
  barWidth: string;
}

export const mockCustomer: CustomerSummary = {
  name: "Global Logistics Corp",
  accountId: "GLC-88291",
  contactEmail: "ops@global-logistics.com",
  website: "www.global-logistics.com",
  location: "Frankfurt, Germany",
  memberSince: "2018",
  primaryContact: "Markus Schmidt",
};

export const mockServices: ServiceItem[] = [
  { id: "SVC-01", name: "HVAC Maintenance", type: "On-site Support", status: "active", expiryDate: "Dec 31, 2026", technician: "John Doe" },
  { id: "SVC-02", name: "Smart Factory IoT", type: "SaaS Subscription", status: "pending", expiryDate: "Processing", technician: "N/A" },
  { id: "SVC-03", name: "Industrial Cleaning", type: "Scheduled Service", status: "active", expiryDate: "Mar 15, 2026", technician: "B. Clean" },
  { id: "SVC-04", name: "Fleet Management", type: "Platform", status: "expired", expiryDate: "Jan 10, 2025", technician: "M. Fleet" },
  { id: "S-502", name: "Fire Suppression System Inspection", type: "Safety", status: "active", expiryDate: "Dec 20, 2026", technician: "S. Safe" },
  { id: "S-618", name: "Conveyor Belt Bearing Replacement", type: "Mechanical", status: "pending", expiryDate: "Jan 12, 2026", technician: "R. Gear" },
  { id: "S-209", name: "Industrial Wastewater Treatment", type: "Environment", status: "active", expiryDate: "Aug 05, 2026", technician: "W. Flow" },
  { id: "S-441", name: "Roof Solar Array Maintenance", type: "Energy", status: "active", expiryDate: "Mar 15, 2027", technician: "P. Power" }
];

export const mockContracts: ContractItem[] = [
  { id: 'CON-2024-001', name: 'Annual HVAC Maintenance Agreement', partner: 'Cooling Systems S.A.', status: 'Active', value: '€45,000', signedDate: '2024-01-15', expiryDate: '2025-01-15' },
  { id: 'CON-2023-452', name: 'Smart Factory IoT Infrastructure', partner: 'TechIndustrial NV', status: 'Pending Review', value: '€120,000', signedDate: '2023-11-20' },
  { id: 'CON-2023-012', name: 'Site Security & Perimeter Audit', partner: 'SafePort Solutions', status: 'Completed', value: '€12,500', signedDate: '2023-05-12' },
  { id: 'CON-2024-088', name: 'Waste Management & Sustainability', partner: 'EcoCycle Industrial', status: 'Active', value: '€32,000', signedDate: '2024-02-10' }
];

export const mockTeam: TeamMember[] = [
  { id: 1, name: "Andréa Porche", role: "Portal Administrator", email: "andrea.porche@global-logistics.com", phone: "+49 30 1234567", status: "Active Now", access: "Full Access", isMe: true },
  { id: 2, name: "Markus Schmidt", role: "Facility Manager", email: "markus.schmidt@global-logistics.com", phone: "+49 30 7654321", status: "2h ago", access: "Maintenance Only" },
  { id: 3, name: "Sarah Weber", role: "Procurement Officer", email: "sarah.weber@global-logistics.com", phone: "+49 30 9876543", status: "Yesterday", access: "Contracts & Billing" },
  { id: 4, name: "Hans Müller", role: "Operations Lead", email: "hans.mueller@global-logistics.com", phone: "+49 30 2468135", status: "Active Now", access: "Full Access" },
  { id: 5, name: "Industrial Partner A", role: "External Auditor", email: "audit@safepoints.com", status: "Active Now", access: "Read-Only Audit" }
];

export const mockConsumption: ConsumptionMetric[] = [
  { id: 1, type: "Electricity", usage: "142.5 MWh", change: "+4.2%", trend: "up", cost: "€21,375", barWidth: "70%" },
  { id: 2, type: "Water", usage: "3,120 m³", change: "-1.5%", trend: "down", cost: "€4,680", barWidth: "40%" },
  { id: 3, type: "Industrial Gas", usage: "12,450 m³", change: "+0.8%", trend: "up", cost: "€15,560", barWidth: "65%" }
];
