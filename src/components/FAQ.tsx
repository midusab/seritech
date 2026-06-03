import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA } from "../data";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-zinc-50 py-24 border-b border-zinc-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51B24] bg-red-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Inquiry Center
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-zinc-950 mb-4">
            Frequently Asked Public Sector Questions
          </h2>
          <p className="font-sans text-sm text-zinc-600 leading-relaxed">
            Review detailed criteria regarding deployment standards, procurement protocols, and ongoing hardware servicing agreements.
          </p>
        </div>

        {/* Accordion Panels Stack */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-zinc-200/80 rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-sans font-extrabold text-[#0D0D0D] hover:text-[#E51B24] transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start space-x-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${isOpen ? "text-[#E51B24]" : "text-zinc-400"}`} />
                    <span className="text-base font-sans font-bold leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#E51B24] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-zinc-100 text-sm text-zinc-600 font-sans leading-relaxed">
                        <div className="pl-8">
                          {faq.answer}
                          {/* Inner Category Badge */}
                          <div className="mt-4 flex items-center gap-1.5">
                            <span className="text-[9px] font-mono text-zinc-400 uppercase">
                              Scope:
                            </span>
                            <span className="text-[9px] font-mono bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded border border-zinc-200/50 uppercase">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
