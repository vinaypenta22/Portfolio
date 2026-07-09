"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

const responseLines = [
  `{`,
  `  "developer": "Vinay Penta",`,
  `  "role": "React JS Developer",`,
  `  "experience_years": 3,`,
  `  "stack": [`,
  `    "React.js", "TypeScript",`,
  `    "Django REST Framework"`,
  `  ],`,
  `  "location": "Hyderabad, IN",`,
  `  "status": "available_for_hire"`,
  `}`,
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* ambient grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #94a3b820 1px, transparent 1px), linear-gradient(to bottom, #94a3b820 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-accent-blue/20 blur-[120px] dark:bg-accent-blue/10"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm text-accent-blue-dark dark:text-accent-cyan">
            <span className="text-slate-400 dark:text-slate-500">const</span> developer ={" "}
            <span className="text-slate-400 dark:text-slate-500">await</span> introduce()
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink dark:text-white sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-slate-600 dark:text-slate-300">
            {profile.role} <span className="text-accent-blue-dark dark:text-accent-cyan">· {profile.yearsExperience} years experience</span>
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 dark:text-slate-400">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              <Mail className="h-4 w-4" /> Get in touch
            </Button>
            <a href={profile.resumeFile} download>
              <Button variant="outline">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Right: signature terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-surface-dark-subtle dark:shadow-card-dark">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-slate-400">GET /developers/vinay</span>
            </div>
            <pre className="terminal-scroll overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
              {responseLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  {line}
                </motion.div>
              ))}
              <motion.span
                className="mt-1 inline-block h-4 w-2 animate-blink bg-accent-blue align-middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + responseLines.length * 0.08 }}
              />
            </pre>
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-accent-blue/30 dark:border-accent-cyan/20" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
