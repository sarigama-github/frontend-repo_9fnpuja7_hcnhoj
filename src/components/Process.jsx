import React from 'react';

const steps = [
  {
    k: '01',
    t: 'Map the workflow',
    d: 'We audit your current process and define the ideal state—clear, measurable, and automation-ready.'
  },
  {
    k: '02',
    t: 'Design the system',
    d: 'We architect the integrations, data flow, and roles. Simple where possible, powerful where needed.'
  },
  {
    k: '03',
    t: 'Build & iterate',
    d: 'We implement automations, dashboards, and web surfaces—then refine based on real usage.'
  },
  {
    k: '04',
    t: 'Support & scale',
    d: 'We monitor reliability and expand your stack as you grow, without adding unnecessary complexity.'
  }
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-geist text-3xl font-semibold sm:text-4xl">How we work</h2>
        <p className="mt-3 text-white/70">A straightforward, human-centered collaboration—no fluff, just momentum.</p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.k} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="text-sm text-white/50">{s.k}</div>
            <h3 className="mt-2 font-medium">{s.t}</h3>
            <p className="mt-2 text-sm text-white/70">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
