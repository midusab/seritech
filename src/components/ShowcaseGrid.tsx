import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Layers, Award, ZoomIn } from "lucide-react";
import { SHOWCASE_DATA } from "../data";
import { ShowcaseProject } from "../types";

export default function ShowcaseGrid() {
  const [filter, setFilter] = useState<"all" | "infrastructure" | "citizen-portals" | "community-hubs">("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filterTabs = [
    { value: "all", label: "All Portfolio" },
    { value: "infrastructure", label: "Chamber & Voting" },
    { value: "citizen-portals", label: "Public Gallery Kiosks" },
    { value: "community-hubs", label: "Staff Solar Labs" }
  ];

  const filteredProjects = filter === "all"
    ? SHOWCASE_DATA
    : SHOWCASE_DATA.filter(p => p.category === filter);

  return (
    <section id="grid-showcase" className="bg-white py-24 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E51B24] block mb-2">
              LATEST DEPLOYED PHOTOGRAPHY
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-zinc-950">
              County Assembly ICT Installations & Chamber Upkeeps
            </h2>
            <p className="font-sans text-sm text-zinc-500 mt-3 leading-relaxed">
              Real high-integrity chamber and ward deployments maintained and actively serviced by our technician network. Filter the grid to explore local structures.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`py-2 px-4 rounded text-xs px-4 py-2 font-semibold uppercase tracking-wider font-sans transition-all duration-200 cursor-pointer ${
                  filter === tab.value
                    ? "bg-[#E51B24] text-white shadow-md shadow-red-950/20"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-zinc-50 rounded-xl overflow-hidden border border-zinc-200/60 hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Section */}
                <div className="aspect-[4/3] relative overflow-hidden bg-zinc-200 shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10 transition-opacity duration-300 group-hover:opacity-40" />
                  
                  {/* Photo tag (Year) */}
                  <span className="absolute top-4 right-4 z-20 text-[10px] font-mono bg-black/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-full flex items-center gap-1 border border-zinc-700">
                    <Calendar className="w-3 h-3 text-[#E51B24]" />
                    {project.year}
                  </span>

                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform duration-700 transition-transform group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Icon hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300">
                    <span className="bg-[#E51B24] p-3 rounded-full text-white shadow-lg shadow-red-950/40">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location Badge */}
                    <div className="flex items-center space-x-1.5 text-zinc-500 mb-2 font-sans text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#E51B24]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-sans font-bold text-lg text-zinc-950 group-hover:text-[#E51B24] transition-colors duration-200 mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="font-sans text-xs text-zinc-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Success Metrics Tag */}
                  <div className="border-t border-zinc-200/60 pt-4 mt-auto flex justify-between items-center">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Performance metric
                    </span>
                    <div className="bg-[#E51B24]/10 text-[#E51B24] px-3 py-1.5 rounded flex items-center gap-1.5 border border-[#E51B24]/20 animate-pulse">
                      <Award className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold font-mono">
                        {project.metrics.value} <span className="text-[10px] font-normal text-zinc-500">({project.metrics.label})</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
