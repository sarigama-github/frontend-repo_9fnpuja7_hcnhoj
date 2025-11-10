import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Process from './components/Process';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="font-geist text-xl font-semibold tracking-tight">Novem</a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Approach</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900">Start</a>
      </header>

      <main>
        <Hero />
        <ValueProps />
        <Process />
        <CTA />
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-12 text-sm text-white/60">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Novem — Automation & Integration Studio</p>
          <div className="flex gap-4">
            <a href="mailto:hello@novem.dev" className="hover:text-white">Email</a>
            <a href="https://novem.dev" target="_blank" rel="noreferrer" className="hover:text-white">Website</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
