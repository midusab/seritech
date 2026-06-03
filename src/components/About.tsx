import { motion } from "motion/react";
import { ShieldAlert, Users, Zap, Award } from "lucide-react";

export default function About() {
  const stats = [
    { value: "12,400+", label: "Sovereign Nodes Maintained", desc: "Server arrays, local training terminals, and core database clusters." },
    { value: "99.99%", label: "Operational SLA Uptime", desc: "Rigid backup protocols and physical technician dispatch structures." },
    { value: "128", label: "Government Agencies Integrated", desc: "Active connection gateways mapping secure municipal workflows." },
    { value: "100%", label: "Public Regulatory Compliance", desc: "Fully certified by strict national cyber security audit teams." }
  ];

  return (
    <section id="about" className="bg-white py-24 border-b border-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Presentation Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E51B24] block mb-2">
              Our Sovereign Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-zinc-950 mb-6">
              Modernizing Civil Services Through Resilient ICT Infrastructure
            </h2>
            <div className="h-1 w-20 bg-[#E51B24] rounded mb-6" />
            <p className="text-sm text-zinc-600 font-sans leading-relaxed mb-4">
              At Seritech ICT, we act as the operational spine for municipal and federal modernization efforts. We understand that civil systems cannot afford standard commercial software glitches, fragile architectures, or insecure, unmaintained infrastructure.
            </p>
            <p className="text-sm text-zinc-600 font-sans leading-relaxed">
              From physical installations—like community digital education facilities and self-sustaining solar backup nodes—to logical engineering—like cryptographic server configurations—our specialized team guarantees continuous, premium, and compliant technical assistance.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Value Pillar 1 */}
            <div className="bg-zinc-50 border border-zinc-100/85 p-6 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="bg-[#E51B24]/10 text-[#E51B24] w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-base text-zinc-950 mb-2">Government-Grade Cybersecurity</h3>
              <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                Every server rack we supply and update adheres to meticulous public compliance acts. Standard sandboxing, key rotations, and air-gapped system backups are defaulted.
              </p>
            </div>

            {/* Value Pillar 2 */}
            <div className="bg-zinc-50 border border-zinc-100/85 p-6 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="bg-[#E51B24]/10 text-[#E51B24] w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-base text-zinc-950 mb-2">Eco-Sovereign Power Integration</h3>
              <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                To guarantee uninterrupted administrative services during energy grid crises, we engineer off-grid custom solar backup networks on community training school roofs.
              </p>
            </div>

            {/* Value Pillar 3 */}
            <div className="bg-zinc-50 border border-zinc-100/85 p-6 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="bg-[#E51B24]/10 text-[#E51B24] w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-base text-zinc-950 mb-2">Capacity-Building Classrooms</h3>
              <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                Modern software demands active digital literacy. We design community computer classrooms to educate public officers, helping them master civic portals effectively.
              </p>
            </div>

            {/* Value Pillar 4 */}
            <div className="bg-zinc-50 border border-zinc-100/85 p-6 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="bg-[#E51B24]/10 text-[#E51B24] w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-base text-zinc-950 mb-2">Continuous Site Servicing</h3>
              <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                Deploying hardware is only half the battle. Our direct servicing contracts guarantee rapid local area technician dispatch sweeps to maintain system efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Display Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-12 border-t border-zinc-100">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="px-4 py-6 border-l-2 border-[#E51B24] bg-zinc-50/50 rounded-r-lg"
            >
              <div className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-950 tracking-tight">
                {stat.value}
              </div>
              <div className="font-sans font-semibold text-xs text-zinc-800 uppercase tracking-wider mt-1.5">
                {stat.label}
              </div>
              <div className="font-sans text-[11px] text-zinc-500 mt-2 leading-relaxed">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
