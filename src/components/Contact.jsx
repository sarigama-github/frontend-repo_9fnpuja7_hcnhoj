import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // For now, just simulate a send. You can wire this to a backend endpoint later.
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Thanks — we’ll be in touch shortly.');
  };

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/20 to-transparent blur-2xl" />
        <div className="relative">
          <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Let’s build your system</h2>
          <p className="mt-2 text-white/70">Tell us about your project and we’ll map the fastest path to value.</p>
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Name</label>
              <input required type="text" className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/30" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Email</label>
              <input required type="email" className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/30" placeholder="jane@company.com" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Budget</label>
              <select className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-white/30">
                <option value="<10k">Under $10k</option>
                <option value="10-30k">$10k–$30k</option>
                <option value="30-75k">$30k–$75k</option>
                <option value=">75k">$75k+</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Timeline</label>
              <select className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-white/30">
                <option>Soon (2–4 weeks)</option>
                <option>Near term (1–2 months)</option>
                <option>Planned (3+ months)</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/70">Project Details</label>
              <textarea rows={5} className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/30" placeholder="What are you looking to automate or build?" />
            </div>
            <div className="sm:col-span-2 mt-4 flex items-center justify-between">
              <span className="text-sm text-white/60">We’ll respond within 1 business day.</span>
              <motion.button
                whileHover={{ y: -1, boxShadow: '0 8px 24px rgba(34,211,238,0.25)' }}
                whileTap={{ y: 0 }}
                type="submit"
                className="relative overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-medium text-gray-900"
              >
                <span className="relative z-10">Send</span>
                <span className="pointer-events-none absolute inset-0 opacity-40" style={{background:'radial-gradient(300px circle at var(--x,50%) var(--y,50%), white, transparent)'}} />
              </motion.button>
            </div>
          </form>
          {status && <p className="mt-4 text-sm text-emerald-300">{status}</p>}
        </div>
      </div>
    </section>
  );
}
