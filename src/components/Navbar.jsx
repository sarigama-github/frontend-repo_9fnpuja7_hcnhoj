import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <a href="#" className="font-geist text-lg font-semibold tracking-tight text-white">Novem</a>
          <nav className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative rounded-md px-3 py-2 text-sm text-white/80 transition hover:text-white"
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-2 -bottom-0.5 block h-px origin-left scale-x-0 bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <motion.a
            href="#contact"
            whileHover={{ y: -1, boxShadow: '0 10px 30px rgba(168, 85, 247, 0.25)' }}
            whileTap={{ y: 0 }}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm"
          >
            Let’s Automate
          </motion.a>
        </div>
      </div>
    </header>
  );
}
