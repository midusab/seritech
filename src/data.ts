import { ServiceItem, ShowcaseProject, TestimonialItem, FAQItem, HubNode } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "svc-1",
    title: "County Assembly Plenary Chamber & Sound Maintenance",
    category: "infrastructure",
    description: "Full preventative upkeep and emergency repair of delegate microphones, e-voting terminals, central chamber audio integration, biometric registration modules, and secure hansard backup systems.",
    details: [
      "Rigid daily diagnostics sweep prior to plenary session start",
      "Dynamic acoustic monitoring and audio feedback stabilization",
      "Biometric seat-register validation and secure voting hardware servicing",
      "Emergency hot-spare terminal deployment for immediate delegate swap"
    ],
    sla: "10-Minute Live Plenary Restore SLA",
    iconName: "Server"
  },
  {
    id: "svc-2",
    title: "County Legislative ICT Training Hubs",
    category: "training",
    description: "Designing, setting up, and maintaining continuous solar-powered training facilities within county wards to build capacity for County Assembly staff, MCAs, and clerks.",
    details: [
      "Modern physical terminal layouts with reliable multi-seat local network rings",
      "Off-grid Sovereign Solar power arrays guarding against grid disruption",
      "Interactive digital portal training setups for bill-tracking and research",
      "Continuous preventative physical servicing sweeps for lab workstations"
    ],
    sla: "Monthly on-site hardware optimizations",
    iconName: "MonitorPlay"
  },
  {
    id: "svc-3",
    title: "Statewide Bill-Tracking & e-Assembly Portals",
    category: "software",
    description: "Engineering and updating interactive web platforms that display county motions, passed legislation, and committee papers cleanly to citizens and county officers alike.",
    details: [
      "Real-time metadata ingestion of live county session status",
      "Modern accessible UI built specifically for legislative researchers",
      "Secure cloud database backups for passed bylaws and statutory papers",
      "Automated cryptographic state monitoring protecting public records"
    ],
    sla: "99.99% Website & API availability",
    iconName: "Workflow"
  },
  {
    id: "svc-4",
    title: "County Assembly Biometric Access Control Systems",
    category: "infrastructure",
    description: "Installing and servicing heavy-duty magnetic biometric entry barriers, public gallery scanning hubs, and modern credential gates across County Assembly complexes.",
    details: [
      "Hardened biometric sensors integrated with official staff databases",
      "Auxiliary backup battery systems providing safe egress during blackouts",
      "Regular physical friction testing, diagnostic alignments, and key repairs",
      "Remote system configuration updates through secure air-gapped lines"
    ],
    sla: "Same-day physical gate restorations",
    iconName: "Fingerprint"
  }
];

export const SHOWCASE_DATA: ShowcaseProject[] = [
  {
    id: "proj-1",
    title: "Main Plenary Chamber Audio & Voting Renovation",
    category: "infrastructure",
    location: "Metro County Assembly Headquarters",
    description: "Complete physical overhaul of chamber delegate stations, introducing high-fidelity digital audio lines, biometric voting screens, and a secure server backbone.",
    imageUrl: "/src/assets/images/secure_systems_1780478450565.png",
    metrics: { label: "Plenary Latency", value: "< 50ms" },
    year: "2025"
  },
  {
    id: "proj-2",
    title: "Interactive Public Gallery Kiosk Display Terminal",
    category: "citizen-portals",
    location: "Lobby Admin Center, County Ward B",
    description: "Self-service information portals enabling citizens to browse passed county motions, session calendars, and submit direct petitions to the Speaker's office.",
    imageUrl: "/src/assets/images/municipal_kiosk_1780478466987.png",
    metrics: { label: "Motions Accessed", value: "34,000+" },
    year: "2026"
  },
  {
    id: "proj-3",
    title: "Sovereign Solar Legislative Staff Training Facility",
    category: "community-hubs",
    location: "Rural Precinct Training Core",
    description: "Full construction of a sustainable solar legislative computer classroom used to train county coordinators, researchers, and records assistants.",
    imageUrl: "/src/assets/images/community_ict_hub_1780478435839.png",
    metrics: { label: "Clerks Certified", value: "820+" },
    year: "2026"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t-1",
    quote: "During our crucial budget debate, the chamber sound board experienced a foreign power surge. Seritech's standby diagnostic team hot-swapped the voting backbone within 6 minutes. Outstanding live SLA execution.",
    author: "Hon. Sarah Jenkins",
    role: "Speaker of the County Assembly",
    agency: "Metro County Legislative Assembly",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t-2",
    quote: "We needed our legislative staff and MCAs fully equipped to parse municipal bills digitally. Seritech constructed our solar computer classrooms and provided complete curriculum portal upkeep. It has been a lifesaver.",
    author: "David Alao",
    role: "Head of Legislative Secretariat & Clerk",
    agency: "Eastern Region Assembly District",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t-3",
    quote: "With strict county security bylaws, our legal databases must remain flawless. Seritech's regular proactive audit sweeps and automated backups give our administration absolute peace of mind.",
    author: "Lt. Col. Robert Vance",
    role: "County ICT Security Coordinator",
    agency: "Joint Assembly Security Directorate",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does Seritech prevent live audio feed disruptions during crucial plenary sessions?",
    answer: "We deploy physical, local-redundancy setups. Central systems run dual-mixer backups operating on independent uninterrupted power supplies (UPSs). Our certified standby technicians remain seated in the control booth during active debates to handle manual overrides instantly if a hardware fault manifests.",
    category: "technical"
  },
  {
    id: "faq-2",
    question: "What is your typical diagnostic turnaround under county contract agreements?",
    answer: "Our SLA tiering offers designated county dispatch teams. For active assembly plenary debates, we guarantee a 10-minute on-site response. For auxiliary department support, we operate under a compliant 4-hour window.",
    category: "support"
  },
  {
    id: "faq-3",
    question: "Do Seritech components meet County Assembly public procurement rules?",
    answer: "Yes. All procurement practices, hardware sourcing, solar components, and labor comply fully with county assembly procurement frameworks, national carbon-neutrality initiatives, and strict safety audits.",
    category: "procurement"
  },
  {
    id: "faq-4",
    question: "Can you retroactively update older historical chamber microphone systems?",
    answer: "Absolutely. We specialize in hybrid audio engineering. We can utilize existing analog cabling trunks and integrate modern biometric e-voting keypads and high-gain digital delegates microphones without requiring extensive masonry tearing.",
    category: "technical"
  }
];

export const SIMULATED_HUBS: HubNode[] = [
  {
    id: "node-1",
    name: "County Assembly Central Chamber Node",
    region: "Headquarters Assembly Complex",
    status: "active",
    bandwidth: "10 Gbps Cryptographic Sound Backhaul",
    uptime: "99.998%",
    powerSource: "Backup Array",
    workstations: 64
  },
  {
    id: "node-2",
    name: "County Assembly East Precinct Lab",
    region: "East Ward Administrative Wing",
    status: "active",
    bandwidth: "2 Gbps Fiber Uplink",
    uptime: "99.95%",
    powerSource: "Sovereign Solar",
    workstations: 24
  },
  {
    id: "node-3",
    name: "County Assembly Committee Training Room",
    region: "Annex Committee Complex Center",
    status: "maintenance",
    bandwidth: "1 Gbps Encrypted Wave",
    uptime: "99.80%",
    powerSource: "Sovereign Solar",
    workstations: 32
  },
  {
    id: "node-4",
    name: "Sub-County Registry Terminal",
    region: "Precinct Southern Office",
    status: "scheduled",
    bandwidth: "5 Gbps Fiber Ring",
    uptime: "Planned",
    powerSource: "Dual Grid",
    workstations: 16
  }
];
