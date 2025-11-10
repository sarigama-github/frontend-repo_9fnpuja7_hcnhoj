import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Background Spline */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient veil for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Floating accents */}
      <motion.div
        className="pointer-events-none absolute left-10 top-20 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{ y: [0, -12, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-20 bottom-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, 10, 0], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur"
        >
          Systems that think for you
        </motion.p>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-geist text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Automation that feels effortless.
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          We build clean, scalable automations, modern web systems, and dashboards—so your team moves faster with clarity and control.
        </motion.p>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="rounded-md bg-white px-5 py-3 font-medium text-gray-900 shadow-md transition hover:shadow-lg"
          >
            Build with Novem
          </a>
          <a
            href="#expertise"
            className="rounded-md border border-white/30 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore capabilities
          </a>
        </motion.div>
      </div>
    </section>
  );
}
