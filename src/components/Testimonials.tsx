import { motion } from "motion/react";
import { TESTIMONIALS_DATA } from "../data";
import { Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E51B24] bg-red-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Civic Alignment & Endorsements
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-zinc-950 mb-4">
            Trusted by Municipal Authorities and Registry Commissioners
          </h2>
          <p className="font-sans text-sm text-zinc-600 leading-relaxed">
            From regional district offices to federal data center compounds, explore how community stakeholders operate with 99.99% uptime.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              className="bg-zinc-50 border border-zinc-200/50 rounded-xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-zinc-300 transition-all duration-200 relative group"
            >
              {/* Decorative Quote Icon top right */}
              <Quote className="absolute right-6 top-6 w-10 h-10 text-[#E51B24]/5 group-hover:text-[#E51B24]/10 transition-colors" />

              <div>
                <div className="flex space-x-1 mb-5">
                  {[...Array(5)].map((_, rIdx) => (
                    <span key={rIdx} className="text-[#E51B24] text-lg">★</span>
                  ))}
                </div>

                <p className="font-sans text-sm text-zinc-700 leading-relaxed italic mb-8 relative z-10">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 border-t border-zinc-200/60 pt-5">
                <img
                  src={t.avatarUrl}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-zinc-200"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-sans font-bold text-sm text-zinc-950 leading-tight">
                    {t.author}
                  </h4>
                  <p className="font-sans text-[11px] text-[#E51B24] font-semibold mt-0.5 leading-tight">
                    {t.role}
                  </p>
                  <p className="font-sans text-[10px] text-zinc-500 mt-0.5">
                    {t.agency}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
