"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Check } from "lucide-react";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-slate-200 bg-white py-28 dark:border-slate-800 dark:bg-surface-dark-subtle"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-heading-number text-accent-blue-dark dark:text-accent-cyan">
          04 · PROJECTS
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="group h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-blue-dark dark:text-accent-cyan">
                    {project.domain}
                  </p>
                  <CardTitle className="mt-1">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-blue-dark dark:text-accent-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                 
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
