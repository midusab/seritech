import { ShieldCheck, Server, ArrowUp, Terminal, Activity } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-12 border-t border-zinc-900 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          {/* Logo Column */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-[#E51B24] p-2 rounded text-white shadow">
                <ShieldCheck className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-sans font-bold tracking-tight text-white block">
                  GovHub <span className="text-[#E51B24]">ICT</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase block -mt-1">
                  Sovereign Engineering
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-sm">
              Certified municipal contractors managing sovereign fiber networks, solar capacity-building computer training facilities, and emergency physical server maintenance squads. Let us streamline civic delivery registries perfectly.
            </p>

            {/* Simulated Certification Stamps */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[9px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded">
                ISO 27001 SECURE
              </span>
              <span className="text-[9px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded">
                PUBLIC CONTRACT COMPLIANT
              </span>
              <span className="text-[9px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded">
                ZERO DISASTER SLA
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col space-y-4 text-left">
            <h5 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-extrabold pb-1">
              Command Resources
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-sans">
              <li>
                <button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#E51B24] transition-colors cursor-pointer">
                  Central Operations Console
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#E51B24] transition-colors cursor-pointer">
                  Mission & Value Pillars
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#E51B24] transition-colors cursor-pointer">
                  Strategic Service Modules
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("grid-showcase")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#E51B24] transition-colors cursor-pointer">
                  Photography & Product Grid
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("hub-monitor")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#E51B24] transition-colors cursor-pointer">
                  Telemetry & Station Monitor
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 flex flex-col space-y-4 text-left">
            <h5 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-extrabold pb-1">
              Emergency Station Control
            </h5>
            <ul className="space-y-3.5 text-xs text-zinc-400 font-sans">
              <li className="flex items-start gap-2">
                <Terminal className="w-4 h-4 text-[#E51B24] shrink-0 mt-0.5" />
                <span>
                  <strong>Immediate SLA Command Center Dialer:</strong> <br />
                  <span className="text-zinc-300 font-semibold">+1-800-CIVIC-ICT</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-[#E51B24] shrink-0 mt-0.5" />
                <span>
                  <strong>National Registry Security Dispatcher:</strong> <br />
                  <span className="text-zinc-300 font-semibold">service@govhub-ict.net</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details and scroll to top button */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-sans text-zinc-500 text-center sm:text-left">
            © {currentYear} GovHub ICT Services Ltd. All sovereign database systems and community training centers reserved under regional governance and SLA regulatory controls.
          </p>

          <button
            onClick={handleScrollToTop}
            className="bg-zinc-900 hover:bg-[#E51B24] transition-all text-zinc-400 hover:text-white p-3 rounded-md border border-zinc-800 hover:border-[#E51B24] flex items-center gap-1.5 cursor-pointer text-xs font-mono group"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
