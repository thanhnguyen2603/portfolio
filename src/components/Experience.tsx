"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Web Developer & SEO Specialist",
    company: "Replus Company",
    period: "Jun 2020 – Present",
    current: true,
    highlights: [
      "Sole owner and maintainer of the entire web ecosystem — built and deployed replus.com.vn (WordPress with custom Sage theme), franchise.replus.com.vn and booking.replus.com.vn (Headless CMS with Next.js)",
      "Achieved and maintained a top-5 Google ranking for the keyword \"văn phòng ảo\" for 5 consecutive years; grew peak organic traffic to 50,000 sessions/month",
      "Continuously improved UI/UX based on user behaviour data and feedback, driving higher engagement and conversion rates",
      "Managed VPS infrastructure: server provisioning, SSH configuration, deployment pipelines, and uptime monitoring",
      "Implemented security hardening measures for WordPress sites and resolved technical incidents",
    ],
  },
  {
    role: "SEO Intern",
    company: "TOS Company",
    period: "Feb 2020 – May 2020",
    current: false,
    highlights: [
      "Built internal links and optimized article content to improve keyword rankings on major search engines",
      "Identified and resolved on-site technical errors; monitored keyword rankings against competitors",
    ],
  },
  {
    role: "Web Management Staff",
    company: "Nam Toan Thinh Company",
    period: "Nov 2018 – Mar 2019",
    current: false,
    highlights: [
      "Managed product listings, order processing, customer live chat, and daily sales reporting",
      "Handled social media promotion and moderated customer comments on the company website",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="experience" className="px-6 sm:px-10 py-12">
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
              Experience
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-50 tracking-tight">
            Work History
          </h2>
        </motion.div>

        <div className="relative ml-3">
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500/60 via-blue-400/30 to-slate-700/30 rounded-full" />

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
                className="relative pl-7"
              >
                <div
                  className={`absolute left-[-5px] top-4 w-3 h-3 rounded-full border-2 ${
                    exp.current
                      ? "border-blue-400 bg-blue-500/30"
                      : "border-slate-600 bg-slate-800"
                  }`}
                />

                <div
                  className={`p-4 rounded-xl border transition-all ${
                    exp.current
                      ? "bg-[#111827] border-blue-500/30"
                      : "bg-[#111827] border-slate-700/60 hover:border-blue-500/30"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-[13px] font-bold text-slate-100">
                        {exp.role}
                      </h3>
                      <p className="text-[12px] text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/15 text-emerald-400 rounded-full uppercase tracking-wider">
                          Current
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-slate-400 bg-[#1e293b] px-2 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-[12px] text-slate-300 leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-500/60 mt-[7px] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
