import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ShieldAlert, Cpu, HeartHandshake, CheckCircle2, ChevronRight, ArrowDown } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [ticketZone, setTicketZone] = useState("Metropolis Zone-A");
  const [serviceSeverity, setServiceSeverity] = useState("Critical SLA");
  
  // Custom SLA Calculation
  const getEtaMessage = () => {
    if (serviceSeverity === "Critical SLA") {
      return { eta: "Within 2 Hours", desc: "Immediate rapid response team dispatched with mobile toolkits, emergency redundancy hot-swap, security staff support.", badgeColor: "bg-red-500" };
    }
    if (serviceSeverity === "Major Loss SLA") {
      return { eta: "Within 4 Hours", desc: "Standard priority field technician squad deployed. Node bypass executed remotely within 15 minutes.", badgeColor: "bg-amber-500" };
    }
    return { eta: "Within 12 Hours", desc: "Scheduled maintenance cycle. Component diagnostics sweep, cooling cleaning, local terminal updates.", badgeColor: "bg-blue-600" };
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const activeEta = getEtaMessage();

  return (
    <section id="hero" className="relative min-h-[90vh] bg-zinc-950 overflow-hidden text-white pt-10 pb-20 flex flex-col justify-center">
      {/* Background grids and abstract graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-100 z-0" />
      
      {/* Subtle scrolling matrix line indicator */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-0" />

      {/* Hero Content Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Text Content with Staggered Entrance */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 rounded-full py-1.5 px-3.5 w-fit"
          >
            <span className="bg-[#E51B24] w-2 h-2 rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-zinc-300 uppercase">
              GOVERNMENT COMPLIANT • PUBLIC SECTOR ICT INHERENT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Sovereign <span className="text-[#E51B24]">ICT Hub</span> Deployments & Servicing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-zinc-400 max-w-xl font-sans font-light leading-relaxed"
          >
            State-of-the-art server infrastructure setup, solar-powered teaching structures, and fast-response technical servicing. We help digital systems scale smoothly with robust uptime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={() => {
                document.getElementById("grid-showcase")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="bg-[#E51B24] hover:bg-red-700 text-white font-sans text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded shadow-lg shadow-red-900/40 hover:shadow-red-900/60 transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Explore Installations</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-sans text-sm font-semibold px-6 py-3.5 rounded transition-all duration-155 cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Our Service Catalogue</span>
            </button>
          </motion.div>

          {/* Quick Features Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-900"
          >
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#E51B24] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-sm text-zinc-200">ISO Secure</h4>
                <p className="font-sans text-[11px] text-zinc-400">Class-A certified</p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <Cpu className="w-5 h-5 text-[#E51B24] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-sm text-zinc-200">99.99% Uptime</h4>
                <p className="font-sans text-[11px] text-zinc-400">Database tier limits</p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <HeartHandshake className="w-5 h-5 text-[#E51B24] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-sm text-zinc-200">Rapid SLA</h4>
                <p className="font-sans text-[11px] text-zinc-400">Direct squad dispatch</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column: Interactive SLA Servicing Calculator with generated image beneath */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-2xl relative"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <ShieldAlert className="w-5 h-5 text-[#E51B24]" />
                <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-zinc-100">SLA Servicing Dispatch Calculator</h3>
              </div>
              <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">Calculated Live</span>
            </div>

            <p className="text-xs text-zinc-400 mb-4 font-sans leading-relaxed">
              Select an area sector and fault category to look up regional squad dispatch parameters and resolution standards.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Hub Zone / Area</label>
                <select 
                  value={ticketZone} 
                  onChange={(e) => setTicketZone(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-xs rounded p-2 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-[#E51B24]"
                >
                  <option value="Metropolis Zone-A">Metropolis Zone-A</option>
                  <option value="Maritime Port Office">Maritime Port Office</option>
                  <option value="North Hills Training Academy">North Hills Training Center</option>
                  <option value="South Border Logistics Area">South Lands Registry</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Severity Category</label>
                <select 
                  value={serviceSeverity} 
                  onChange={(e) => setServiceSeverity(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-xs rounded p-2 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-[#E51B24]"
                >
                  <option value="Critical SLA">Critical Fault (Hardware failure)</option>
                  <option value="Major Loss SLA">Major Loss (Training portal bug)</option>
                  <option value="Maintenance Cycle">Standard Servicing (Physical sweep)</option>
                </select>
              </div>
            </div>

            {/* SLA result output */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded p-4 flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-sans text-zinc-400">Guaranteed Dispatch response:</span>
                <span className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded text-white ${activeEta.badgeColor}`}>
                  {activeEta.eta}
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                <strong className="text-zinc-200 block mb-1">Protocol Action Outline:</strong>
                {activeEta.desc}
              </p>
            </div>
          </motion.div>

          {/* Underlay Photo Container: Featuring the generated Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-44 sm:h-52 relative rounded-xl overflow-hidden border border-zinc-800 group shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-70 transition-opacity group-hover:opacity-40" />
            <img 
              src="/src/assets/images/hero_command_center_1780478416781.png" 
              alt="Seritech ICT National Command Center" 
              className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 duration-1000 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 right-3 z-25 flex justify-between items-end">
              <div>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 block uppercase">
                  ACTIVE DEPLOYMENT
                </span>
                <h4 className="font-sans font-bold text-xs text-zinc-100">
                  National ICT Command Facility (Hub-Z1-HQ)
                </h4>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-black/60 rounded border border-zinc-700/50">
                Maintained by Seritech Sys
              </span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Floating directional icon to scroll down */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-10"
           onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
        <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Discover Craft</span>
        <ArrowDown className="w-4 h-4 text-[#E51B24] animate-bounce" />
      </div>
    </section>
  );
}
