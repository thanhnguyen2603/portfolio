"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Download,
} from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/thanhnguyen2603",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/ngqxthanh",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:ngqxthanh@gmail.com",
    label: "Email",
  },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 bg-[#0b0f1a]/95 backdrop-blur-md border-b border-slate-800/50 flex items-center justify-between px-5">
        <Image
          src="/avatar.jpg"
          alt="Xuan Thanh"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-blue-400 rounded-lg hover:bg-slate-800/50 transition-all"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden fixed inset-0 z-40 pt-14 bg-[#0b0f1a]/98 backdrop-blur-xl"
        >
          <div className="flex flex-col items-center gap-2 pt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-2 text-[13px] font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[280px] flex-col bg-[#0a0e18] border-r border-slate-800/50 z-40">
        <div className="flex-1 overflow-y-auto px-6 py-8">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center mb-6"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg shadow-blue-500/15 ring-2 ring-blue-400/20 ring-offset-2 ring-offset-[#0a0e18]">
              <Image src="/avatar.jpg" alt="Nguyen Quang Xuan Thanh" width={128} height={128} className="w-full h-full object-cover" priority />
            </div>
            <h1 className="text-[15px] font-bold text-slate-100 tracking-tight">
              Nguyen Quang Xuan Thanh
            </h1>
            <p className="text-[12px] text-blue-400 font-medium mt-1">
              Web Developer & SEO Specialist
            </p>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-2 mb-6 pb-6 border-b border-slate-800/50"
          >
            <div className="flex items-center gap-2.5 text-[11.5px] text-slate-400">
              <MapPin size={12} className="text-blue-400 shrink-0" />
              Ho Chi Minh City, Vietnam
            </div>
            <div className="flex items-center gap-2.5 text-[11.5px] text-slate-400">
              <Mail size={12} className="text-blue-400 shrink-0" />
              <a
                href="mailto:ngqxthanh@gmail.com"
                className="hover:text-blue-400 transition-colors truncate"
              >
                ngqxthanh@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-[11.5px] text-slate-400">
              <Phone size={12} className="text-blue-400 shrink-0" />
              +84 357 750 471
            </div>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/15 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-emerald-400">
              Available for work
            </span>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mb-6"
          >
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">
              Navigation
            </p>
            <div className="space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-3 py-2 text-[12.5px] font-medium text-slate-300 hover:text-blue-400 hover:bg-blue-500/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>

          {/* Download CV */}
          <motion.a
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            href="/Nguyen_Quang_Xuan_Thanh_CV.pdf"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-[12px] font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
          >
            <Download size={13} />
            Download Resume
          </motion.a>
        </div>

        {/* Social links at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="px-6 py-4 border-t border-slate-800/50"
        >
          <div className="flex items-center justify-center gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-500/8 transition-all"
                aria-label={item.label}
              >
                <item.icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </aside>
    </>
  );
}
