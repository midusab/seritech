import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SIMULATED_HUBS } from "../data";
import { HubNode } from "../types";
import { Radio, ShieldAlert, CheckCircle2, RefreshCw, Cpu, Activity, User, Battery, Wrench } from "lucide-react";

export default function InteractiveHubStatus() {
  const [hubs, setHubs] = useState<HubNode[]>(SIMULATED_HUBS);
  const [selectedHub, setSelectedHub] = useState<HubNode>(SIMULATED_HUBS[0]);
  const [filter, setFilter] = useState<"all" | "active" | "maintenance" | "scheduled">("all");
  const [dispatchStatus, setDispatchStatus] = useState<string | null>(null);
  const [diagnosticsLogs, setDiagnosticsLogs] = useState<string[]>([]);
  const [bandwidthSlider, setBandwidthSlider] = useState<number>(85);

  const startDispatchSimulator = (hubName: string) => {
    setDispatchStatus("dispatched");
    // Append simulated log line
    const timestamp = new Date().toLocaleTimeString();
    setDiagnosticsLogs(prev => [
      `[${timestamp}] CRITICAL SLA SIGNAL: technician crew dispatch ordered for '${hubName}'`,
      `[${timestamp}] DISPATCH SQUAD #4 assigned | estimated travel route: 14 mins`,
      ...prev
    ]);

    setTimeout(() => {
      setDispatchStatus("arrived");
      setDiagnosticsLogs(prev => [
        `[${new Date().toLocaleTimeString()}] UPDATE: Technical crew arrived at '${hubName}' server containment suite.`,
        `[${new Date().toLocaleTimeString()}] SERVICE PROTOCOL: Commencing physical routing diagnostic sweeps.`,
        ...prev
      ]);
    }, 4000);
  };

  const executeSelfDiagnostics = () => {
    const timestamp = new Date().toLocaleTimeString();
    setDiagnosticsLogs(prev => [
      `[${timestamp}] INTERNAL DIAGNOSTICS: Commenced automated telemetry sweep on ${selectedHub.name}...`,
      `[${timestamp}] ENVELOPE ISO STATE: Compliant`,
      `[${timestamp}] BATTERY LEVEL: 94% (Power source: ${selectedHub.powerSource})`,
      `[${timestamp}] FIREWALL VERIFICATION: SHA-256 state certified safe.`,
      ...prev
    ]);
  };

  const filteredHubs = filter === "all"
    ? hubs
    : hubs.filter(h => h.status === filter);

  return (
    <section id="hub-monitor" className="bg-zinc-950 py-24 text-white border-b border-zinc-800 relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#E51B24]/5 via-zinc-950 to-zinc-950 opacity-100 z-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51B24] flex items-center gap-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              SOVEREIGN SQUAD telemetry & servicing
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight">
              Interactive Regional Hub Portals & SLA Monitor
            </h2>
            <p className="font-sans text-sm text-zinc-400 mt-3 leading-relaxed max-w-2xl">
              An inside look into our state servicing registry operations. Select any regional digital workstation classroom node below to audit uptime metrics, deploy simulated sweeps, or test SLA dispatch protocols.
            </p>
          </div>

          {/* Filtering states */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {["all", "active", "maintenance", "scheduled"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`py-1.5 px-3.5 rounded text-[10px] font-semibold uppercase tracking-wider font-mono transition-all duration-150 cursor-pointer ${
                  filter === tab
                    ? "bg-[#E51B24] text-white"
                    : "bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel (col-span-5): Node List Selection */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest px-1">
              Select Regional ICT Center Node ({filteredHubs.length})
            </h3>

            <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredHubs.map((hub) => {
                const isSelected = selectedHub.id === hub.id;
                return (
                  <div
                    key={hub.id}
                    onClick={() => {
                      setSelectedHub(hub);
                      setDispatchStatus(null);
                    }}
                    className={`p-4 rounded-xl border transition-all duration-150 cursor-pointer text-left flex items-center justify-between group ${
                      isSelected
                        ? "bg-zinc-900 border-[#E51B24] ring-1 ring-[#E51B24]/40"
                        : "bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/80 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-start space-x-3.5">
                      <div className={`p-2.5 rounded-lg shrink-0 ${
                        hub.status === "active" ? "bg-emerald-500/10 text-emerald-400" :
                        hub.status === "maintenance" ? "bg-amber-500/10 text-amber-400" : "bg-blue-500/10 text-blue-400"
                      }`}>
                        {hub.status === "active" ? <CheckCircle2 className="w-5 h-5 animate-pulse" /> : 
                         hub.status === "maintenance" ? <Wrench className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-zinc-100 group-hover:text-white transition-colors">
                          {hub.name}
                        </h4>
                        <span className="text-[11px] text-zinc-400 font-sans block mt-0.5">
                          {hub.region}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`inline-block py-0.5 px-2 rounded font-mono text-[9px] font-bold uppercase ${
                        hub.status === "active" ? "bg-emerald-950 text-emerald-300 border border-emerald-800/60" :
                        hub.status === "maintenance" ? "bg-amber-950 text-amber-300 border border-amber-800/60" :
                        "bg-blue-950 text-blue-300 border border-blue-800/60"
                      }`}>
                        {hub.status}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 block mt-1.5">
                        {hub.uptime} Uptime
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right panel (col-span-7): Telemetry Controls & Dispatch Simulator */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[500px]">
            
            {/* Top Stats of Seleted Hub */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4 mb-6">
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
                    ACTIVE MONITORING CONSOLE
                  </span>
                  <h3 className="text-2xl font-sans font-extrabold text-white mt-1">
                    {selectedHub.name}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-3.5 shrink-0 bg-zinc-950 px-4 py-2 border border-zinc-800 rounded-xl">
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">Power Supply Source</span>
                    <span className="text-xs font-sans font-semibold text-zinc-100 flex items-center gap-1.5 mt-0.5">
                      <Battery className="w-4 h-4 text-[#E51B24]" />
                      {selectedHub.powerSource}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Grid metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/60 text-left">
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Workstation Nodes</span>
                  <span className="text-base font-sans font-extrabold text-zinc-100 flex items-center gap-1.5 mt-1">
                    <User className="w-4 h-4 text-zinc-400" />
                    {selectedHub.workstations} Online
                  </span>
                </div>
                <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/60 text-left">
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Connection Bandwidth</span>
                  <span className="text-base font-sans font-extrabold text-zinc-100 flex items-center gap-1.5 mt-1">
                    <Cpu className="w-4 h-4 text-zinc-400" />
                    {selectedHub.bandwidth}
                  </span>
                </div>
                <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800/60 text-left col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Continuous Uptime</span>
                  <span className="text-base font-sans font-extrabold text-emerald-400 flex items-center gap-1.5 mt-1">
                    <Activity className="w-4 h-4" />
                    {selectedHub.uptime === "Planned" ? "0.00%" : selectedHub.uptime}
                  </span>
                </div>
              </div>

              {/* Interactive Bandwidth optimization Slider */}
              <div className="bg-zinc-950 p-4 border border-zinc-800/80 rounded-xl mb-6 text-left">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-sans font-bold text-zinc-300">Live Optimization Bandwidth Core Allocation</span>
                  <span className="text-xs font-mono font-black text-[#E51B24]">{bandwidthSlider}% Limit</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="100" 
                  value={bandwidthSlider} 
                  onChange={(e) => setBandwidthSlider(Number(e.target.value))}
                  className="w-full accent-[#E51B24] cursor-pointer bg-zinc-900 h-1.5 rounded-lg focus:outline-none"
                />
                <span className="text-[10px] font-mono text-zinc-500 mt-1.5 block">
                  Dynamically manages routing queue prioritization limits for local-area workstations during public peak.
                </span>
              </div>
            </div>

            {/* Interaction Row for Operations Simulation */}
            <div>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch mb-6">
                <button
                  onClick={executeSelfDiagnostics}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-sans text-xs uppercase tracking-wider font-semibold py-3 px-4 rounded-xl transition-all duration-150 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 text-zinc-400 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Run Node Diagnostics</span>
                </button>

                <button
                  onClick={() => startDispatchSimulator(selectedHub.name)}
                  disabled={dispatchStatus === "dispatched" || selectedHub.status === "scheduled"}
                  className="flex-1 bg-[#E51B24] hover:bg-red-700 disabled:bg-zinc-800 text-white font-sans text-xs uppercase tracking-wider font-semibold py-3 px-4 rounded-xl shadow transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Radio className="w-4 h-4 animate-pulse" />
                  <span>
                    {selectedHub.status === "scheduled" ? "No Dispatch Required" : "Dispatch Maintenance Crew"}
                  </span>
                </button>
              </div>

              {/* Console logs output */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Sovereign Telemetry Terminal Dispatch Output
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="font-mono text-[11px] text-zinc-400 space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
                  {diagnosticsLogs.length === 0 ? (
                    <p className="text-zinc-600 italic">No operational telemetry run diagnostics or trigger dispatch systems yet.</p>
                  ) : (
                    diagnosticsLogs.map((log, lIdx) => (
                      <p 
                        key={lIdx} 
                        className={
                          log.includes("CRITICAL") ? "text-red-400" : 
                          log.includes("UPDATE") ? "text-amber-300" : 
                          log.includes("VERIFICATION") ? "text-emerald-400" : "text-zinc-400"
                        }
                      >
                        {log}
                      </p>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Simulated Live Alert Banner if crew is dispatched */}
            <AnimatePresence>
              {dispatchStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className={`mt-4 p-3.5 rounded-lg border text-xs font-sans font-medium flex items-center justify-between gap-3 ${
                    dispatchStatus === "arrived"
                      ? "bg-emerald-950/80 border-emerald-800/80 text-emerald-300"
                      : "bg-red-950/80 border-red-800/80 text-red-300"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <p>
                      {dispatchStatus === "arrived"
                        ? "SQUAD CONFIRMATION: Emergency response technician squad has checked-in on site."
                        : "SLA DISPATCH ORDER: Emergency dispatch assigned. Crew is en-route."}
                    </p>
                  </div>
                  <button 
                    onClick={() => setDispatchStatus(null)}
                    className="text-[10px] font-mono hover:text-white uppercase"
                  >
                    Acknowledge
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
