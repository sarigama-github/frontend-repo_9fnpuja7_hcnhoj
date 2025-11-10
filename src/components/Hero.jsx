import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-cyan-400/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Automation-first studio for ambitious teams
        </p>
        <h1 className="font-geist text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Automate what slows you down.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Novem designs clean, human-centered systems that streamline operations—custom automations, seamless integrations, and modern web platforms that scale with you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="rounded-md bg-white px-5 py-3 font-medium text-gray-900 shadow-md transition hover:shadow-lg"
          >
            Book a discovery call
          </a>
          <a
            href="#services"
            className="rounded-md border border-white/30 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore services
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
          <span>HubSpot</span>
          <span>Airtable</span>
          <span>Notion</span>
          <span>Google Sheets</span>
          <span>Custom APIs</span>
        </div>
      </div>
    </section>
  );
}
