"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ngqxthanh@gmail.com",
    href: "mailto:ngqxthanh@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84 357 750 471",
    href: "tel:+84357750471",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "thanhnguyen2603",
    href: "https://github.com/thanhnguyen2603",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ngqxthanh",
    href: "https://linkedin.com/in/ngqxthanh",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="contact" className="px-6 sm:px-10 py-12 bg-[#0d1117]">
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
              Contact
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-50 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-1.5 text-[12.5px] text-slate-300 max-w-md">
            Have a project in mind or want to collaborate? Feel free to reach out
            through any of the channels below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contactLinks.map((item, i) => {
            const Inner = (
              <>
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <item.icon size={15} className="text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-[12px] font-semibold text-slate-200 group-hover:text-blue-400 transition-colors truncate">
                    {item.value}
                  </div>
                </div>
                {item.href && (
                  <ArrowUpRight
                    size={13}
                    className="text-slate-500 group-hover:text-blue-400 transition-colors shrink-0"
                  />
                )}
              </>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 + i * 0.04 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 p-3 rounded-xl bg-[#111827] border border-slate-700/60 hover:border-blue-500/30 transition-all"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div className="group flex items-center gap-3 p-3 rounded-xl bg-[#111827] border border-slate-700/60">
                    {Inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
