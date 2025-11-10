import React from 'react';
import { motion } from 'framer-motion';

const quotes = [
  {
    q: 'Novem turned a tangled workflow into a calm, reliable system—our team finally has time back.',
    a: 'COO, SaaS Startup',
  },
  {
    q: 'From discovery to launch, everything felt purposeful. The automations just work.',
    a: 'Head of Ops, Services Company',
  },
  {
    q: 'High craft, zero drama. We scaled faster without adding complexity.',
    a: 'Founder, DTC Brand',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
        <motion.div
          className="flex gap-10"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {[...quotes, ...quotes].map((t, i) => (
            <div key={i} className="max-w-sm shrink-0">
              <p className="text-lg leading-relaxed">“{t.q}”</p>
              <p className="mt-3 text-sm text-white/60">{t.a}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
