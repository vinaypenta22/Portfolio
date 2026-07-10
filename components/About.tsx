"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Users } from "lucide-react";
import { profile } from "@/lib/data";
import { AnimatedSection, staggerListVariants, staggerItemVariants } from "@/components/ui/animated-section";

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
      <AnimatedSection delay={0.05} className="section-heading-number text-accent-blue-dark dark:text-accent-cyan">
        01 · ABOUT
      </AnimatedSection>
      <AnimatedSection delay={0.1} y={16} className="mt-2 font-display text-3xl font-semibold text-ink dark:text-white sm:text-4xl">
        Building interfaces people trust, and the APIs behind them.
      </AnimatedSection>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <AnimatedSection delay={0.15} y={18} className="lg:col-span-2 text-base leading-relaxed text-slate-500 dark:text-slate-400">
          {profile.summary} Based in {profile.location}, {profile.name.split(" ")[0]} has spent
          the last {profile.yearsExperience} years shipping production applications for teams in
          digital marketing, fintech, documentation automation, and recruitment.
        </AnimatedSection>

        <motion.div
          variants={staggerListVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={staggerItemVariants}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.01, boxShadow: "0 16px 40px -24px rgba(15, 23, 42, 0.32)" }}
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
        </motion.div>
      </div>
    </section>
  );
}
