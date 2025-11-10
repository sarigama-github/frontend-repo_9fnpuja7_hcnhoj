import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
        <h3 className="font-geist text-3xl font-semibold sm:text-4xl">We build the systems that run your business</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Ready to replace manual busywork with clean, scalable automations? Let’s map your workflow and design a system that fits your team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:hello@novem.dev" className="rounded-md bg-white px-5 py-3 font-medium text-gray-900 shadow-md transition hover:shadow-lg">hello@novem.dev</a>
          <a href="#" className="rounded-md border border-white/30 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">View work & case studies</a>
        </div>
      </div>
    </section>
  );
}
