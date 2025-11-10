import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-16 text-sm text-white/60">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Novem — Automation & Integration Studio</p>
        <div className="flex gap-4">
          <a href="mailto:hello@novem.dev" className="rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Mail className="h-4 w-4" /></a>
          <a href="#" className="rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Github className="h-4 w-4" /></a>
          <a href="#" className="rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
