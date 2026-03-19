"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50K", label: "Sessions/Month" },
  { value: "Top 5", label: "Google Ranking" },
  { value: "3+", label: "Production Sites" },
];

export default function Hero() {
  return (
    <section className="relative px-6 sm:px-10 py-12 sm:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1a] via-[#0e1525] to-[#0b0f1a]" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-10 right-[15%] w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[8%] w-56 h-56 bg-blue-500/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[13px] text-slate-400 mb-2"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-slate-50"
        >
          Nguyen Quang{" "}
          <span className="text-blue-400">Xuan Thanh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-2 text-[14px] font-medium text-slate-300"
        >
          Web Developer & SEO Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-4 text-[13px] leading-relaxed text-slate-300 max-w-xl"
        >
          Building and optimizing production websites for over 5 years.
          Specializing in PHP, Laravel, Next.js and WordPress custom theme development
          with a proven track record of driving organic growth and measurable results.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
              className="px-4 py-3 rounded-xl bg-[#111827] border border-slate-700/60 hover:border-blue-500/30 transition-all"
            >
              <div className="text-xl font-extrabold text-blue-400 leading-none">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
