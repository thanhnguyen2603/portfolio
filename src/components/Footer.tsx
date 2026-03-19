"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 py-5 border-t border-slate-800/30">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          {[
            { icon: Mail, href: "mailto:ngqxthanh@gmail.com", label: "Email" },
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
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="w-7 h-7 flex items-center justify-center rounded-md text-slate-400 hover:text-blue-400 hover:bg-blue-500/8 transition-all"
              aria-label={item.label}
            >
              <item.icon size={13} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
