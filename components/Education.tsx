"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, achievements } from "@/lib/data";
import { AnimatedSection, staggerListVariants, staggerItemVariants } from "@/components/ui/animated-section";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28">
      <AnimatedSection className="section-heading-number text-accent-blue-dark dark:text-accent-cyan">
        05 · EDUCATION &amp; ACHIEVEMENTS
      </AnimatedSection>
      <AnimatedSection delay={0.08} y={16} className="mt-2 font-display text-3xl font-semibold text-ink dark:text-white sm:text-4xl">
        Foundations &amp; milestones
      </AnimatedSection>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <GraduationCap className="h-4 w-4" /> Education
          </h3>
          <motion.div
            variants={staggerListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 space-y-6"
          >
            {education.map((ed, i) => (
              <motion.div
                key={ed.degree}
                variants={staggerItemVariants}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="rounded-xl border border-slate-200 p-5 dark:border-slate-800"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-semibold text-ink dark:text-white">
                    {ed.degree}
                  </h4>
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                    {ed.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{ed.institution}</p>
                <p className="mt-1 text-sm font-medium text-accent-blue-dark dark:text-accent-cyan">
                  {ed.score}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <Award className="h-4 w-4" /> Achievements
          </h3>
          <motion.ul
            variants={staggerListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 space-y-4"
          >
            {achievements.map((achievement, i) => (
              <motion.li
                key={achievement}
                variants={staggerItemVariants}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex gap-3 rounded-xl border border-slate-200 p-5 text-sm leading-relaxed text-slate-500 dark:border-slate-800 dark:text-slate-400"
              >
                <span className="font-mono text-accent-blue-dark dark:text-accent-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {achievement}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
