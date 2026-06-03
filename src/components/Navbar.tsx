import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Menu, X, Terminal, Radio } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "grid-showcase", label: "Showcase" },
    { id: "hub-monitor", label: "Hub Telemetry" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact & Servicing" }
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Dynamic Telemetry Status Ticker */}
      <div id="status-ticker" className="bg-zinc-950 border-b border-zinc-800 text-white text-[10px] md:text-xs font-mono py-1.5 px-4 flex justify-between items-center select-none">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-400">CIVICHUB DISPATCH ACTIVE: All 4 municipal sectors operating under peak SLA.</span>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-zinc-400">
          <span className="flex items-center gap-1">
            <Radio className="w-3 h-3 text-red-500 animate-pulse" /> Live Telemetry
          </span>
          <span>Response Queue: 0 mins</span>
        </div>
      </div>

      <nav
        id="main-nav"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-zinc-200/50 py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              id="brand-logo-container"
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection("hero")}
            >
              <div className="bg-[#E51B24] p-2 rounded-lg text-white shadow-md transition-transform group-hover:scale-105 duration-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-sans font-bold tracking-tight text-zinc-950 block">
                  GovHub <span className="text-[#E51B24]">ICT</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block -mt-1">
                  Sovereign Engineering
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-sans font-medium text-zinc-700 hover:text-[#E51B24] rounded-md hover:bg-zinc-50 transition-all duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="ml-4 bg-[#E51B24] text-white hover:bg-red-700 font-sans text-xs uppercase tracking-wider font-semibold px-4.5 py-2.5 rounded shadow-sm hover:shadow transition-all duration-150 cursor-pointer flex items-center space-x-2"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Service Desk</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-zinc-700 hover:text-[#E51B24] hover:bg-zinc-100 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-zinc-100"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 shadow-inner">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-base font-sans font-medium text-zinc-800 hover:text-[#E51B24] hover:bg-zinc-50 rounded-md transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 pb-2 px-4 border-t border-zinc-100">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-[#E51B24] text-white text-center py-3 rounded-md font-sans text-sm font-semibold hover:bg-red-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>Open Service Application</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
