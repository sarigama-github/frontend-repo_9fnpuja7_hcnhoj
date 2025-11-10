import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'RevOps Automation Suite',
    desc: 'HubSpot + Airtable + Notion orchestration with SLAs and alerts.',
    tag: 'Automation',
  },
  {
    title: 'Realtime Ops Dashboard',
    desc: 'Streamlined KPIs across finance and operations with live sync.',
    tag: 'Dashboards',
  },
  {
    title: 'Partner Portal Platform',
    desc: 'High-performance Next.js portal with granular roles and webhooks.',
    tag: 'Web Systems',
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Selected Work</h2>
        <p className="mt-3 text-white/70">A few recent builds that blend automation, integration, and product-level polish.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6"
          >
            <div className="absolute -inset-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background:"radial-gradient(400px circle at 20% 0, rgba(59,130,246,0.15), transparent 40%)"}} />
            <div className="relative">
              <div className="mb-2 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70">{p.tag}</div>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/80">
                <span>View case study</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10" /></svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
