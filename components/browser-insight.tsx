'use client';

import { motion } from 'framer-motion';
import { Globe, Monitor, Cpu, Maximize, Fingerprint } from 'lucide-react';

type Insight = {
  icon: typeof Globe;
  label: string;
  value: string;
  accent: 'cyan' | 'green';
};

const INSIGHTS: Insight[] = [
  {
    icon: Globe,
    label: 'IP Address',
    value: '198.51.100.42',
    accent: 'cyan',
  },
  {
    icon: Monitor,
    label: 'Browser',
    value: 'Chrome 131.0',
    accent: 'green',
  },
  {
    icon: Cpu,
    label: 'Operating System',
    value: 'macOS 14.5 Sonoma',
    accent: 'cyan',
  },
  {
    icon: Maximize,
    label: 'Screen Resolution',
    value: '2560 × 1440',
    accent: 'green',
  },
];

export function BrowserInsight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass relative overflow-hidden rounded-2xl border border-border/60 p-6"
    >
      {/* Scan line effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-scan-line" />
      </div>

      {/* Header */}
      <div className="relative mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/30">
          <Fingerprint className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">
            Browser Insight
          </h3>
          <p className="text-xs text-muted-foreground">
            Your digital fingerprint at a glance
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
        {INSIGHTS.map((insight, idx) => (
          <motion.div
            key={insight.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.3 }}
            className="group relative flex items-center gap-3 rounded-xl border border-border/40 bg-card/30 p-4 transition-all hover:border-border hover:bg-card/50"
          >
            <div
              className={
                insight.accent === 'cyan'
                  ? 'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 transition-all group-hover:neon-glow-cyan'
                  : 'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 transition-all group-hover:neon-glow-green'
              }
            >
              <insight.icon
                className={
                  insight.accent === 'cyan'
                    ? 'h-5 w-5 text-accent'
                    : 'h-5 w-5 text-primary'
                }
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {insight.label}
              </p>
              <p className="truncate text-sm font-semibold text-foreground">
                {insight.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
