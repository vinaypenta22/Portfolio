"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Users } from "lucide-react";
import { profile } from "@/lib/data";

const pillars = [
  {
    icon: Code2,
    title: "Clean, reusable code",
    text: "Component-based architecture that stays maintainable as products grow.",
  },
  {
    icon: Layers,
    title: "Full-stack fluency",
    text: "Comfortable across the stack — React interfaces backed by Django REST APIs.",
  },
  {
    icon: Rocket,
    title: "Performance-minded",
    text: "Lazy loading, refactoring, and rendering optimizations that measurably cut load times.",
  },
  {
    icon: Users,
    title: "Stakeholder-friendly",
    text: "Works directly with business analysts to turn requirements into shipped features.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-heading-number text-accent-blue-dark dark:text-accent-cyan"
      >
        01 · ABOUT
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-2 font-display text-3xl font-semibold text-ink dark:text-white sm:text-4xl"
      >
        Building interfaces people trust, and the APIs behind them.
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 text-base leading-relaxed text-slate-500 dark:text-slate-400"
        >
          {profile.summary} Based in {profile.location}, {profile.name.split(" ")[0]} has spent
          the last {profile.yearsExperience} years shipping production applications for teams in
          digital marketing, fintech, documentation automation, and recruitment.
        </motion.p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-accent-blue/40 dark:border-slate-800 dark:bg-surface-dark-subtle dark:hover:border-accent-cyan/40"
            >
              <pillar.icon className="h-5 w-5 text-accent-blue-dark dark:text-accent-cyan" strokeWidth={1.75} />
              <h3 className="mt-3 font-display text-base font-semibold text-ink dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
