import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: '2022', text: 'Founded Novem with a focus on automation-first systems.' },
  { year: '2023', text: 'Launched 40+ automations across CRM, finance, ops, and growth.' },
  { year: '2024', text: 'Scaled to full-stack platforms and real-time data dashboards.' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Human-centered automation for modern teams</h2>
          <p className="mt-4 text-white/70">
            Novem designs systems that reduce operational drag and scale with clarity. We combine robust engineering with refined design so your tools feel cohesive—not complex.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-2xl font-semibold">40+</div><div className="text-xs text-white/60">Automations</div></div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-2xl font-semibold">10x</div><div className="text-xs text-white/60">Process speed</div></div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-2xl font-semibold">99.9%</div><div className="text-xs text-white/60">Reliability</div></div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-fuchsia-500/30 via-cyan-400/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-medium">Milestones</h3>
              <div className="mt-6 space-y-6">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-white/15 ring-2 ring-white/30" />
                    <div>
                      <div className="text-sm text-white/60">{m.year}</div>
                      <div className="text-white/90">{m.text}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
