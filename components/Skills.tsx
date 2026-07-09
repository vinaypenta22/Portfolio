"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-slate-200 bg-white py-28 dark:border-slate-800 dark:bg-surface-dark-subtle"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-heading-number text-accent-blue-dark dark:text-accent-cyan">
          02 · SKILLS
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink dark:text-white sm:text-4xl">
          Technical toolkit
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {group.category}
              </h3>
              <div className="mt-5 space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-ink dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: gi * 0.1 + si * 0.06, ease: "easeOut" }}
                        className={cn(
                          "h-full rounded-full",
                          group.accent === "blue"
                            ? "bg-gradient-to-r from-accent-blue-dark to-accent-blue"
                            : "bg-gradient-to-r from-accent-blue to-accent-cyan"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
