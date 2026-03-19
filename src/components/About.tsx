"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Search, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-stack Development",
    desc: "Building websites end-to-end with PHP, Laravel, Next.js and WordPress custom themes.",
  },
  {
    icon: Search,
    title: "SEO & Growth",
    desc: "On-page & technical SEO, keyword research, content strategy and Google Search Console analysis.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    desc: "Managing VPS, deployment pipelines, security hardening and uptime monitoring.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="about" className="relative px-6 sm:px-10 py-12 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
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
              About
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-50 tracking-tight">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3 mb-8 max-w-2xl"
        >
          <p className="text-[13px] leading-relaxed text-slate-300">
            Web Developer and SEO Specialist with{" "}
            <strong className="text-white font-semibold">over 5 years of experience</strong>{" "}
            building, optimizing and maintaining production websites. Proficient in PHP,
            Laravel, Next.js and WordPress custom theme development.
          </p>
          <p className="text-[13px] leading-relaxed text-slate-300">
            Experienced in on-page SEO, technical optimization and content strategy
            to improve organic search visibility. Comfortable working across the full
            stack and managing VPS infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="group p-4 rounded-xl bg-[#111827] border border-slate-700/60 hover:border-blue-500/30 hover:bg-[#111827] transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
                <item.icon size={16} className="text-blue-400" />
              </div>
              <h3 className="text-[12.5px] font-bold text-slate-100 mb-1">
                {item.title}
              </h3>
              <p className="text-[11.5px] leading-relaxed text-slate-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
