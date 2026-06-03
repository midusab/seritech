import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ShowcaseGrid from "./components/ShowcaseGrid";
import InteractiveHubStatus from "./components/InteractiveHubStatus";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[15px] text-zinc-800 antialiased font-sans selection:bg-[#E51B24]/10 selection:text-[#E51B24]">
      {/* 1. Header Navigation and Telemetry Banner */}
      <Navbar />

      <main id="main-content">
        {/* 2. Interactive Premium Hero Area */}
        <Hero />

        {/* 3. Mission and Operational Scale (About) */}
        <About />

        {/* 4. Filterable SLA Contracting Catalogue (Services) */}
        <Services />

        {/* 5. Custom Generated Product Photography grid Layout (ShowcaseGrid) */}
        <ShowcaseGrid />

        {/* 6. Real-time Node Dispatch Simulator & Telemetry Console */}
        <InteractiveHubStatus />

        {/* 7. Municipal & Stakeholder Endorsements (Testimonials) */}
        <Testimonials />

        {/* 8. Frequently Asked Questions Accordion (FAQ) */}
        <FAQ />

        {/* 9. SLA Repair Ticket & Procurement Request Form (Contact) */}
        <Contact />
      </main>

      {/* 10. High-integrity Public Footprint Footer */}
      <Footer />
    </div>
  );
}
