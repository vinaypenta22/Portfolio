"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

const contactDetails = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: profile.location, href: undefined },
  { icon: Linkedin, label: "linkedin.com/in/vinay-penta", href: profile.linkedin },
  { icon: Github, label: "GitHub (add your handle)", href: profile.github },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend is wired up yet — this opens the visitor's email client
    // pre-filled with their message so it reaches you directly.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <p className="section-heading-number text-accent-blue-dark dark:text-accent-cyan">
        06 · CONTACT
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink dark:text-white sm:text-4xl">
        Let&apos;s build something.
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        Open to React JS developer roles and freelance collaborations. The fastest way to reach
        me is email — the form below opens a pre-filled message in your mail client.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ul className="space-y-4">
            {contactDetails.map((detail) => (
              <li key={detail.label}>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-accent-blue-dark dark:text-slate-300 dark:hover:text-accent-cyan"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700">
                      <detail.icon className="h-4 w-4" />
                    </span>
                    {detail.label}
                  </a>
                ) : (
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700">
                      <detail.icon className="h-4 w-4" />
                    </span>
                    {detail.label}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-surface-dark-subtle dark:shadow-card-dark"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-slate-200 bg-transparent px-3 py-2 text-sm text-ink outline-none focus:border-accent-blue dark:border-slate-700 dark:text-white dark:focus:border-accent-cyan"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-slate-200 bg-transparent px-3 py-2 text-sm text-ink outline-none focus:border-accent-blue dark:border-slate-700 dark:text-white dark:focus:border-accent-cyan"
                placeholder="jane@company.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-slate-200 bg-transparent px-3 py-2 text-sm text-ink outline-none focus:border-accent-blue dark:border-slate-700 dark:text-white dark:focus:border-accent-cyan"
              placeholder="Tell me about the role or project..."
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            {submitted ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            {submitted ? "Opening your mail client…" : "Send message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
