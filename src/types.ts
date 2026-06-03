export interface ServiceItem {
  id: string;
  title: string;
  category: "infrastructure" | "software" | "support" | "training";
  description: string;
  details: string[];
  sla: string;
  iconName: string; // Used to dynamically map Lucide Icons
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: "all" | "infrastructure" | "citizen-portals" | "community-hubs";
  location: string;
  description: string;
  imageUrl: string;
  metrics: { label: string; value: string };
  year: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  agency: string;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "procurement" | "technical" | "support";
}

export interface HubNode {
  id: string;
  name: string;
  region: string;
  status: "active" | "maintenance" | "scheduled";
  bandwidth: string;
  uptime: string;
  powerSource: "Sovereign Solar" | "Dual Grid" | "Backup Array";
  workstations: number;
}
