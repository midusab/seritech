import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Server, MonitorPlay, Cpu, Fingerprint, LucideIcon, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { ServiceItem } from "../types";

// Icon mapping dictionary to bypass fragile runtime code
const ICON_MAP: Record<string, LucideIcon> = {
  Server: Server,
  MonitorPlay: MonitorPlay,
  Workflow: Cpu,
  Fingerprint: Fingerprint
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<"all" | "infrastructure" | "software" | "training">("all");

  const categories = [
    { value: "all", label: "All Services" },
    { value: "infrastructure", label: "Physical Infra & Servicing" },
    { value: "software", label: "Civic Systems & Software" },
    { value: "training", label: "Educational Hubs" }
  ];

  const filteredServices = activeCategory === "all"
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="bg-zinc-50 py-24 border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#E51B24] bg-red-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Service Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-zinc-950 mb-4">
            Specialized Government ICT Contracting and Lifecycle Servicing
          </h2>
          <p className="font-sans text-sm text-zinc-600 leading-relaxed">
            We provide full-lifecycle support, from construction, network cablings, hardware deployments, to continuous hardware upkeep and SLA maintenance.
          </p>
        </div>

        {/* Filters and Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value as any)}
              className={`px-4.5 py-2 rounded-lg font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-[#E51B24] text-white shadow-md shadow-red-950/20"
                  : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((svc) => {
              const ServiceIcon = ICON_MAP[svc.iconName] || Server;
              return (
                <motion.div
                  layout
                  key={svc.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white border border-zinc-200/80 rounded-xl p-8 hover:shadow-lg hover:border-zinc-300 transition-all duration-250 flex flex-col justify-between"
                >
                  <div>
                    {/* Header line of card */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-[#E51B24]/10 p-3.5 rounded-xl text-[#E51B24]">
                        <ServiceIcon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-50 border border-zinc-200/60 px-2.5 py-1 rounded">
                        {svc.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-sans font-bold text-zinc-950 mb-3 leading-tight">
                      {svc.title}
                    </h3>

                    <p className="text-sm text-zinc-600 font-sans leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    {/* Specific checklists */}
                    <ul className="space-y-3 mb-8">
                      {svc.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2.5">
                          <ShieldCheck className="w-4 h-4 text-[#E51B24] shrink-0 mt-0.5" />
                          <span className="text-xs text-zinc-700 font-sans leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational Contract & Action footer */}
                  <div className="border-t border-zinc-100 pt-5 mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-2 bg-zinc-50 border border-zinc-100 px-3 py-1.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E51B24] animate-pulse" />
                      <span className="text-[10px] font-mono text-zinc-600">
                        {svc.sla}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        const contactSec = document.getElementById("contact");
                        if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center text-xs font-sans font-bold text-[#E51B24] hover:text-red-700 space-x-1.5 uppercase tracking-wider group cursor-pointer"
                    >
                      <span>Contract Service</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Informative Procurement Subtext */}
        <div className="bg-zinc-900 text-white rounded-xl p-6 md:p-8 mt-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800">
          <div className="flex items-start space-x-4">
            <div className="bg-white/10 p-3 rounded-lg text-[#E51B24]">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-zinc-100">Need specific custom retrofitting or emergency diagnostic sweeps?</h4>
              <p className="text-xs text-zinc-400 font-sans mt-1 leading-relaxed">
                We design fully specialized systems to retrofit old regional headquarters block structures. Send our service desk your specs.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-sans font-bold uppercase tracking-wider px-5 py-3 rounded-md shadow shrink-0 cursor-pointer"
          >
            Settle Custom Contract
          </button>
        </div>

      </div>
    </section>
  );
}
