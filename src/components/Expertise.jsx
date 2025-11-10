import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Workflow, ServerCog, BarChart3, Plug } from 'lucide-react';

const items = [
  { icon: Workflow, title: 'Automation', desc: 'Orchestrations, triggers, approvals, error handling.' },
  { icon: Layers, title: 'Web Systems', desc: 'High-performance sites and internal apps with modern stacks.' },
  { icon: Plug, title: 'Integrations', desc: 'HubSpot, Airtable, Notion, Sheets, CRMs, webhooks, custom APIs.' },
  { icon: BarChart3, title: 'Dashboards', desc: 'Metrics, alerts, reporting, and real-time visibility.' },
  { icon: ServerCog, title: 'API Design', desc: 'Reliable, well-documented endpoints and services.' },
];

export default function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Our Expertise</h2>
        <p className="mt-3 text-white/70">Simple, modern, and scalable systems—engineered for momentum.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="absolute -inset-0.5 -z-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" style={{background:"radial-gradient(600px circle at 0 0, rgba(168,85,247,0.15), transparent 40%)"}} />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3"><Icon className="h-5 w-5" /></div>
              <h3 className="font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
