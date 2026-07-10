"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { profile, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-surface-dark-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div>
            <p className="font-display text-lg font-semibold text-ink dark:text-white">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{profile.role}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2, scale: 1.02 }}
                className="font-mono text-xs uppercase tracking-wider text-slate-500 hover:text-ink dark:text-slate-400 dark:hover:text-white"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex gap-3">
            <motion.a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              whileHover={{ y: -2, scale: 1.06, rotate: -4 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-accent-blue hover:text-accent-blue-dark dark:border-slate-700 dark:text-slate-400 dark:hover:border-accent-cyan dark:hover:text-accent-cyan"
            >
              <Mail className="h-4 w-4" />
            </motion.a>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -2, scale: 1.06, rotate: 4 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-accent-blue hover:text-accent-blue-dark dark:border-slate-700 dark:text-slate-400 dark:hover:border-accent-cyan dark:hover:text-accent-cyan"
            >
              <Linkedin className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
