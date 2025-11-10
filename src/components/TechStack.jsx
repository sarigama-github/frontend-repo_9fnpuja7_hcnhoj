import React from 'react';
import { motion } from 'framer-motion';

const tech = ['Next.js', 'React', 'TypeScript', 'Node.js', 'n8n', 'Zapier', 'Make', 'Airtable', 'Notion', 'GCP', 'AWS'];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Tech Stack</h2>
        <p className="mt-3 text-white/70">We use modern, proven tools—combined with custom engineering where it counts.</p>
      </div>
      <div className="mt-10 overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          {[...tech, ...tech].map((t, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
