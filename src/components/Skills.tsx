"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 88 },
      { name: "Laravel", level: 80 },
    ],
  },
  {
    title: "CMS & Frameworks",
    skills: [
      { name: "WordPress / Sage", level: 92 },
      { name: "Next.js", level: 78 },
      { name: "Headless CMS", level: 75 },
    ],
  },
  {
    title: "SEO & Performance",
    skills: [
      { name: "Technical SEO", level: 92 },
      { name: "Core Web Vitals", level: 85 },
      { name: "Site Speed Tuning", level: 85 },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "VPS & SSH", level: 80 },
      { name: "Git", level: 82 },
      { name: "CI/CD", level: 70 },
    ],
  },
  {
    title: "Security & Others",
    skills: [
      { name: "WP Hardening", level: 78 },
      { name: "Web Security", level: 72 },
      { name: "English (TOEIC 700)", level: 70 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delay,
  inView,
}: {
  name: string;
  level: number;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="mb-2.5 last:mb-0">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11.5px] font-medium text-slate-300">{name}</span>
        <span className="text-[10px] font-mono text-slate-400">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#1e293b] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="skills" className="px-6 sm:px-10 py-12 bg-[#0d1117]">
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
              Skills
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-50 tracking-tight">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 + catIdx * 0.05 }}
              className="p-4 rounded-xl bg-[#111827] border border-slate-700/60 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-700/60">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={0.1 + catIdx * 0.05 + skillIdx * 0.04}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
