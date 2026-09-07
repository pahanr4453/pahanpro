'use client';

import { Shield, Github, Twitter, Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/60">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo + disclaimer */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <span className="text-base font-bold text-foreground">Sentinel</span>
            </div>
            <p className="max-w-md text-center text-xs text-muted-foreground md:text-left">
              This is a privacy-focused research tool. All data shown is
              simulated for demonstration purposes and no real personal
              information is collected, stored, or transmitted.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-accent/40 hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-accent/40 hover:text-accent"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-1.5 rounded-lg border border-success/30 bg-success/5 px-3 py-1.5 text-xs text-success">
              <Lock className="h-3 w-3" />
              Encrypted
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-6 text-center">
          <p className="text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} Sentinel Cyber Shield. Built for
            security research and education.
          </p>
        </div>
      </div>
    </footer>
  );
}
