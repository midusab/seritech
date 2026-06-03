import { ServiceItem, ShowcaseProject, TestimonialItem, FAQItem, HubNode } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "svc-1",
    title: "National Digital Infrastructure & Server Maintenance",
    category: "infrastructure",
    description: "Full-scale deployment and proactive maintaining of sovereign servers, secure database nodes, high-fidelity fiber backbones, and state-of-the-art secure government cloud hosting.",
    details: [
      "24/7 National Operations Command Center Monitoring",
      "Redundant solar/grid power coupling and physical backup system maintenance",
      "Intrusion detection, cryptographic system state validation, and secure air-gaping",
      "Complete equipment lifecycle management and hardware servicing"
    ],
    sla: "99.99% Node Uptime SLA",
    iconName: "Server"
  },
  {
    id: "svc-2",
    title: "Regional Government ICT Training Hubs",
    category: "training",
    description: "Engineering and constructing solar-powered physical centers equipped for civil servant capacity-building, digital literacy training, and community-first digital access projects.",
    details: [
      "Custom classroom space layout, networking, and terminal supply",
      "Self-sustaining off-grid energy configurations (Sovereign Solar setups)",
      "Curriculum training portals and localized local-area network (LAN) libraries",
      "Regular hardware tune-ups and physical terminal upgrades"
    ],
    sla: "Bi-annual on-site terminal optimization",
    iconName: "MonitorPlay"
  },
  {
    id: "svc-3",
    title: "Unified Citizen Service Portals",
    category: "software",
    description: "Designing, building, and maintaining multi-channel software portals that digitize and streamline civic operations, from business registration to license renewal.",
    details: [
      "Integrated identity checking & secure civil databases",
      "Accessible responsive UI/UX compliant with official accessibility directives",
      "API brokers communicating across ministries, departments, and agencies (MDAs)",
      "Continuous secure deployment & automated security updates"
    ],
    sla: "Sub-seconds database transacting",
    iconName: "Workflow"
  },
  {
    id: "svc-4",
    title: "State Municipal Kiosk Implementations",
    category: "infrastructure",
    description: "Sourcing, setting up, and maintaining secure physical self-service kiosk hardware terminals inside municipal lobbies and remote community administrative locations.",
    details: [
      "Hardened anti-vandalism chassis with multi-point bio-readers ",
      "Touch screen system integration with low-power offline caching layers",
      "Strict regular maintenance sweeps and physical key repairs",
      "Remote system configuration updates through secure VPN channels"
    ],
    sla: "Same-day on-site servicing support",
    iconName: "Fingerprint"
  }
];

export const SHOWCASE_DATA: ShowcaseProject[] = [
  {
    id: "proj-1",
    title: "Sovereign State Cryptographic Server Array",
    category: "infrastructure",
    location: "Federal Government District Data Center",
    description: "An immaculately managed core server farm layout with redundant routing and pristine optical fiber structuring designed for high confidential databases.",
    imageUrl: "/src/assets/images/secure_systems_1780478450565.png",
    metrics: { label: "Data Integrity Sec", value: "256-bit AES" },
    year: "2025"
  },
  {
    id: "proj-2",
    title: "Civic Portal Information Service Kiosks",
    category: "citizen-portals",
    location: "Metro Hall Registry Lobby",
    description: "Touch-interactive self-service systems empowering citizens to update records and register land titles instantly without standing in physical lines.",
    imageUrl: "/src/assets/images/municipal_kiosk_1780478466987.png",
    metrics: { label: "Wait-Time Reduced", value: "84%" },
    year: "2026"
  },
  {
    id: "proj-3",
    title: "Solar-Powered Community ICT Classrooms",
    category: "community-hubs",
    location: "North Region Municipal Center",
    description: "Complete physical training infrastructure featuring solar setups, localized terminal environments, and integrated educational content systems.",
    imageUrl: "/src/assets/images/community_ict_hub_1780478435839.png",
    metrics: { label: "Tech Literates Trained", value: "14,500+" },
    year: "2026"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t-1",
    quote: "Seritech has completely re-engineered how our local governments process operations. Their regular servicing schedule keeps our municipal servers running perfectly, with near zero downtime.",
    author: "Hon. Sarah Jenkins",
    role: "Commissioner for Digital Transformation",
    agency: "State Ministry of Administrative Services",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t-2",
    quote: "The combination of physical training classrooms and self-sustainable solar panels has empowered thousands of youth. Having an ICT provider who handles everything from cabling to teaching portals has been a absolute lifesaver.",
    author: "David Alao",
    role: "Director of Community Empowerment",
    agency: "National ICT Commission",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t-3",
    quote: "Security regulations are extremely rigid for state databases. Seritech's regular audit routines and rapid-response technician team give our administrators absolute peace of mind.",
    author: "Lt. Col. Robert Vance",
    role: "Chief of Infrastructure Defense",
    agency: "Defense & Civil Cyber Directorate",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you integrate with legacy government database engines?",
    answer: "Absolutely. We specialize in retrofitting older mainframe legacy data banks with up-to-date RESTful or GraphQL compliant APIs, securely wrapping historic citizen fields inside high-integrity cyber vaults.",
    category: "technical"
  },
  {
    id: "faq-2",
    question: "How does the servicing contract and responsive SLA system operate?",
    answer: "Our contracts feature a fully tiered Service Level Agreement (SLA). We have certified technicians stationed strategically in municipal quadrants who guarantee standard on-site physical assistance within 4 hours for Tier-1 errors, and immediate remote assistance via unified telemetry.",
    category: "support"
  },
  {
    id: "faq-3",
    question: "Are Seritech ICT hub components standard for government procurement regulations?",
    answer: "Yes, our hardware procurement channels, software modules, and physical labor practices comply fully with public procurement acts, cybersecurity safety laws, and green energy utilization guidelines.",
    category: "procurement"
  },
  {
    id: "faq-4",
    question: "How are the training hub spaces powered physically?",
    answer: "We offer zero-emission smart architectural integration. Each hub can be configured with modular solar roofing, battery storage, and smart power invertors, bypassing standard electric grids to ensure complete operational sustainability and disaster proofing.",
    category: "technical"
  }
];

export const SIMULATED_HUBS: HubNode[] = [
  {
    id: "node-1",
    name: "Capital Central Operations Node",
    region: "Metropolis Grid Zone-A",
    status: "active",
    bandwidth: "10 Gbps Cryptographic Backbone",
    uptime: "99.998%",
    powerSource: "Backup Array",
    workstations: 48
  },
  {
    id: "node-2",
    name: "East Coast Municipal Tech Hub",
    region: "Maritime Registry District",
    status: "active",
    bandwidth: "2 Gbps Fiber Uplink",
    uptime: "99.95%",
    powerSource: "Sovereign Solar",
    workstations: 24
  },
  {
    id: "node-3",
    name: "North Hills Training Academy",
    region: "Semi-Arid Community Center",
    status: "maintenance",
    bandwidth: "1 Gbps Encrypted Wave",
    uptime: "99.80%",
    powerSource: "Sovereign Solar",
    workstations: 32
  },
  {
    id: "node-4",
    name: "Industrial Port Logistics Terminal",
    region: "Free Trade Administrative Zone",
    status: "scheduled",
    bandwidth: "5 Gbps Fiber Ring",
    uptime: "Planned",
    powerSource: "Dual Grid",
    workstations: 16
  }
];
