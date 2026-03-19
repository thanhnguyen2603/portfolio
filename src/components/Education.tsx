"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="education" className="px-6 sm:px-10 py-12">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-8 h-[2px] bg-blue-400 rounded-full" />
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.15em]">
              Education
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-50 tracking-tight">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-4 rounded-xl bg-[#111827] border border-slate-700/60 max-w-xl"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-[13px] font-bold text-slate-100">
                Bachelor of Information Systems
              </h3>
              <p className="text-[12px] text-blue-400 font-semibold mt-0.5">
                Industrial University of Ho Chi Minh City (IUH)
              </p>
              <p className="text-[11px] font-mono text-slate-400 mt-1 bg-[#1e293b] inline-block px-2 py-0.5 rounded">
                Oct 2014 – 2020
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {[
                  "System Design & Analysis",
                  "System Management",
                  "CRM",
                  "Web Design",
                  "SEO",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#1e293b] text-slate-300 border border-slate-600/50"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
