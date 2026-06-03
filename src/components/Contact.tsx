import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, Terminal, HelpCircle, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agency: "",
    serviceType: "New Hub Infrastructure",
    message: "",
    severity: "Routine"
  });

  const [ticketState, setTicketState] = useState<{
    submitted: boolean;
    ticketId: string | null;
    timestamp: string | null;
  }>({
    submitted: false,
    ticketId: null,
    timestamp: null
  });

  const handleInquire = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in key contact identifiers.");
      return;
    }

    // Generate simulated public procurement tracking ticket
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const suffix = formData.severity === "Immediate SLA Dispatch" ? "EMERG" : "GEN";
    const ticketId = `GOV-${randomNum}-${suffix}`;
    const timestamp = new Date().toLocaleString();

    setTicketState({
      submitted: true,
      ticketId,
      timestamp
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      agency: "",
      serviceType: "New Hub Infrastructure",
      message: "",
      severity: "Routine"
    });
    setTicketState({
      submitted: false,
      ticketId: null,
      timestamp: null
    });
  };

  return (
    <section id="contact" className="bg-white py-24 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel (col-span-5): Contact Information & Office Details */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E51B24] block mb-2">
                OPERATIONAL ACCESS
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-zinc-950">
                Liaise with Our Service Dispatch
              </h2>
              <p className="font-sans text-sm text-zinc-600 leading-relaxed mt-4">
                Reach out to register a sovereign servicing contract, procure new modular community classroom hubs, or submit an immediate field hardware request.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#E51B24]/10 p-3 rounded-lg text-[#E51B24] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-zinc-950 block">Sovereign Service HQ</h4>
                  <p className="font-sans text-xs text-zinc-600 mt-1">
                    Suite 804, Government Plaza Tower B, Federal Civic District
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#E51B24]/10 p-3 rounded-lg text-[#E51B24] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-zinc-950 block">Operations Technical Hotline</h4>
                  <p className="font-sans text-xs text-zinc-600 mt-1">
                    +1-800-CIVIC-ICT (Fast-track technical dispatch)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#E51B24]/10 p-3 rounded-lg text-[#E51B24] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-zinc-950 block">General Procurement Liaison</h4>
                  <p className="font-sans text-xs text-zinc-600 mt-1">
                    procure@govhub-ict.net
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="bg-zinc-50 border border-zinc-200/60 p-5 rounded-xl text-left">
              <div className="flex items-center space-x-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#E51B24]" />
                <h5 className="font-sans font-bold text-xs text-zinc-950 uppercase tracking-wider">Public Trust Verified</h5>
              </div>
              <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
                All inquiries are classified and handled under secure privacy envelopes compliant with national state data protection protocols.
              </p>
            </div>
          </div>

          {/* Right panel (col-span-7): Form & Action Interface */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 md:p-8 relative">
            
            <AnimatePresence mode="wait">
              {!ticketState.submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleInquire}
                  className="space-y-5 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-zinc-800 mb-1.5">
                        Officer Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Director Sarah Alao"
                        className="w-full bg-white border border-zinc-200 text-sm rounded-lg p-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#E51B24] focus:border-[#E51B24]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold text-zinc-800 mb-1.5">
                        Official Secure Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah.alao@agency.gov"
                        className="w-full bg-white border border-zinc-200 text-sm rounded-lg p-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#E51B24] focus:border-[#E51B24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-zinc-800 mb-1.5">
                      Government Agency / Ministry
                    </label>
                    <input
                      type="text"
                      value={formData.agency}
                      onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                      placeholder="e.g. Ministry of Registry & Records"
                      className="w-full bg-white border border-zinc-200 text-sm rounded-lg p-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#E51B24] focus:border-[#E51B24]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-zinc-800 mb-1.5">
                        Procurement / Service Type
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-white border border-zinc-200 text-sm rounded-lg p-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#E51B24]"
                      >
                        <option value="New Hub Infrastructure">New Hub Digital Classroom</option>
                        <option value="Physical Terminal Maintenance">Physical Terminal Maintenance</option>
                        <option value="Database Server Cryptography">Database Cryptography Support</option>
                        <option value="General SLA Inquiry">General Procurement SLA Contract</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-semibold text-zinc-800 mb-1.5">
                        SLA Emergency Class
                      </label>
                      <select
                        value={formData.severity}
                        onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                        className="w-full bg-white border border-zinc-200 text-sm rounded-lg p-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#E51B24]"
                      >
                        <option value="Routine">Standard Planning Sweep (Routine)</option>
                        <option value="System Minor Repair">Non-Blocking Minor SLA Repair</option>
                        <option value="Immediate SLA Dispatch">CRITICAL SERVICE DISRUPTION (SLA team)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-zinc-800 mb-1.5">
                      Detailed Technical Specifications or Request Scope
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please delineate localized node locations, server chassis parameters, cabling demands, or physical repair timelines."
                      className="w-full bg-white border border-zinc-200 text-sm rounded-lg p-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#E51B24] focus:border-[#E51B24]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E51B24] text-white hover:bg-red-700 font-sans text-sm font-bold uppercase tracking-wider py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Service Application / Ticket</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="ticket-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center flex flex-col items-center justify-center space-y-6"
                >
                  <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full">
                    <CheckCircle className="w-16 h-16" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                      SLA Ticket Logged Successfully
                    </span>
                    <h3 className="text-2xl font-sans font-extrabold text-zinc-950 mt-3">
                      Procurement ID: <span className="text-[#E51B24]">{ticketState.ticketId}</span>
                    </h3>
                  </div>

                  <div className="bg-white border border-zinc-200/80 rounded-xl p-6 text-left max-w-lg w-full divide-y divide-zinc-100 shadow-sm">
                    <div className="pb-3.5 flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-sans">Submitting Representative:</span>
                      <strong className="text-zinc-800 font-sans">{formData.name}</strong>
                    </div>
                    <div className="py-3.5 flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-sans">Designated Agency:</span>
                      <strong className="text-zinc-800 font-sans">{formData.agency || "N/A"}</strong>
                    </div>
                    <div className="py-3.5 flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-sans">Operation Class:</span>
                      <strong className="text-zinc-800 font-sans text-[#E51B24] uppercase">{formData.serviceType}</strong>
                    </div>
                    <div className="py-3.5 flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-sans">Logged On:</span>
                      <span className="text-zinc-600 font-mono">{ticketState.timestamp}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-500 font-sans text-center max-w-sm leading-relaxed">
                    Our sovereign service dispatch desk has registered the parameters. A certified regional operations manager will contact your office within the specified SLA timeframe.
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={handleReset}
                      className="bg-zinc-800 text-white hover:bg-zinc-900 font-sans text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded shadow transition-colors cursor-pointer"
                    >
                      File New SLA Inquiry
                    </button>
                    <button
                      onClick={() => {
                        document.getElementById("status-ticker")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="border border-zinc-200 text-zinc-600 hover:text-zinc-800 font-sans text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded hover:bg-zinc-100 transition-colors cursor-pointer"
                    >
                      View Live Telemetry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
