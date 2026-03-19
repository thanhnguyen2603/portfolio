"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, ShoppingCart, Layers } from "lucide-react";

const projects = [
  {
    title: "replus.com.vn",
    subtitle: "Replus Company · 2020 – Present",
    description:
      "WordPress site with a fully custom theme built from scratch on the Sage starter theme. SEO-optimised architecture contributed to sustained top-5 rankings and 50K/month peak traffic.",
    stack: ["PHP", "WordPress", "Sage", "JavaScript", "Tailwind CSS"],
    icon: Globe,
    url: "https://replus.com.vn",
    featured: true,
    stats: [
      { label: "Peak Traffic", value: "50K/mo" },
      { label: "Google Rank", value: "Top 5" },
    ],
  },
  {
    title: "franchise & booking.replus.com.vn",
    subtitle: "Replus Company · 2021 – Present",
    description:
      "Headless CMS architecture with Next.js frontend for fast, scalable client-facing pages.",
    stack: ["Next.js", "Headless CMS", "JavaScript", "Tailwind CSS"],
    icon: Layers,
    url: "https://franchise.replus.com.vn",
    featured: false,
    stats: [],
  },
  {
    title: "E-Commerce Website",
    subtitle: "IUH University · 2018 – 2019",
    description:
      "Solo-built multi-category e-commerce platform with responsive UI using Laravel framework.",
    stack: ["Laravel", "PHP", "JavaScript", "HTML", "Bootstrap"],
    icon: ShoppingCart,
    url: null,
    featured: false,
    stats: [],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="projects" className="px-6 sm:px-10 py-12 bg-[#0d1117]">
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
              Projects
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-50 tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
              className={`group p-5 rounded-xl border transition-all ${
                project.featured
                  ? "bg-gradient-to-br from-blue-500/8 via-blue-400/4 to-[#111827] border-blue-500/30 hover:border-blue-500/40"
                  : "bg-[#111827] border-slate-700/60 hover:border-blue-500/30"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      project.featured
                        ? "bg-blue-500/15"
                        : "bg-blue-500/15 group-hover:bg-blue-500/20"
                    } transition-colors`}
                  >
                    <project.icon size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-[13.5px] font-bold text-slate-100">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-blue-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/8 transition-colors"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <p className="text-[12.5px] leading-relaxed text-slate-300 mb-3 max-w-2xl">
                {project.description}
              </p>

              {/* Stats for featured */}
              {project.stats.length > 0 && (
                <div className="flex items-center gap-4 mb-3">
                  {project.stats.map((s, si) => (
                    <div key={s.label} className="flex items-center gap-4">
                      {si > 0 && (
                        <div className="w-px h-6 bg-slate-700/50" />
                      )}
                      <div>
                        <div className="text-[15px] font-extrabold text-slate-100">
                          {s.value}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                          {s.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-0.5 text-[10px] font-medium rounded-md ${
                      project.featured
                        ? "bg-blue-500/15 text-blue-300 border border-blue-500/25"
                        : "bg-[#1e293b] text-slate-300 border border-slate-600/50"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
