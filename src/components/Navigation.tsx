"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0f1a]/92 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.3),0_1px_0_rgba(125,162,212,0.06)]"
            : "bg-[#0b0f1a]/60 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <a
              href="#"
              className="flex items-center gap-2.5 font-bold text-[13px] tracking-tight text-slate-200 hover:text-blue-600 transition-colors"
            >
              <span className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-[11px] font-bold shadow-sm shadow-blue-500/20">
                T
              </span>
              <span className="hidden sm:inline">XUAN THANH</span>
            </a>

            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-[12px] font-semibold tracking-wide uppercase transition-all rounded-md ${
                    activeSection === link.href.slice(1)
                      ? "text-blue-600 bg-blue-50/80"
                      : "text-slate-400 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Nguyen_Quang_Xuan_Thanh_CV.pdf"
                target="_blank"
                className="ml-3 px-4 py-1.5 text-[11.5px] font-bold tracking-wide uppercase bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors shadow-sm shadow-blue-500/20"
              >
                Resume
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-slate-400 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-14 bg-[#0b0f1a]/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-1 pt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-slate-300 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
