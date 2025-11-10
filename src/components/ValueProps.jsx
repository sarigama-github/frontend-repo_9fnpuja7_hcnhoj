import React from 'react';
import { Zap, Clock, Gauge, Plug } from 'lucide-react';

const items = [
  {
    icon: Zap,
    title: 'Automation first',
    desc: 'Replace repetitive tasks with reliable workflows that run 24/7—no bloat, just impact.',
  },
  {
    icon: Plug,
    title: 'Seamless integrations',
    desc: 'Connect HubSpot, Airtable, Notion, Google Sheets, and custom CRMs into one system.',
  },
  {
    icon: Clock,
    title: 'Time back for teams',
    desc: 'Free your team to focus on strategy and growth while systems handle the busywork.',
  },
  {
    icon: Gauge,
    title: 'Built to scale',
    desc: 'Simple, robust architecture that grows with your business without adding complexity.',
  },
];

export default function ValueProps() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Custom automations. Seamless workflows. Real results.</h2>
        <p className="mt-3 text-white/70">
          We design automation pipelines, internal tools, and high-performance websites that reduce manual work and create clarity.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3"><Icon className="h-5 w-5" /></div>
            <h3 className="font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
