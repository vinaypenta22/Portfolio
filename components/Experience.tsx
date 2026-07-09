"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <p className="section-heading-number text-accent-blue-dark dark:text-accent-cyan">
        03 · EXPERIENCE
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink dark:text-white sm:text-4xl">
        Where the work happened
      </h2>

      <div className="relative mt-14 border-l border-slate-200 pl-8 dark:border-slate-800">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pb-4"
          >
            <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-accent-blue/40 bg-white dark:border-accent-cyan/40 dark:bg-surface-dark-subtle">
              <Briefcase className="h-3.5 w-3.5 text-accent-blue-dark dark:text-accent-cyan" />
            </span>

            <p className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {job.period}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink dark:text-white">
              {job.role} <span className="text-slate-400 dark:text-slate-500">@</span> {job.company}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{job.location}</p>

            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue dark:bg-accent-cyan" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
