'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Circle,
  Loader2,
  ShieldCheck,
  KeyRound,
  RefreshCw,
  Eye,
  Lock,
  type LucideIcon,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type ActionStatus = 'pending' | 'in-progress' | 'done';

type ActionItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  status: ActionStatus;
  progress: number;
  accent: 'cyan' | 'green';
};

type ActionCenterProps = {
  onScoreChange?: (score: number, completed: number, total: number) => void;
};

const INITIAL_ACTIONS: ActionItem[] = [
  {
    id: '2fa',
    icon: ShieldCheck,
    title: 'Enable Two-Factor Authentication',
    description: 'Add an extra layer of security to your accounts with TOTP or hardware keys.',
    status: 'done',
    progress: 100,
    accent: 'green',
  },
  {
    id: 'password',
    icon: KeyRound,
    title: 'Check Password Strength',
    description: 'Audit your passwords against common patterns and known breach dictionaries.',
    status: 'in-progress',
    progress: 60,
    accent: 'cyan',
  },
  {
    id: 'browser',
    icon: RefreshCw,
    title: 'Update Browser',
    description: 'Ensure your browser is running the latest version with all security patches.',
    status: 'pending',
    progress: 0,
    accent: 'cyan',
  },
  {
    id: 'tracking',
    icon: Eye,
    title: 'Review Tracking Protection',
    description: 'Configure tracking prevention and cookie settings for enhanced privacy.',
    status: 'pending',
    progress: 0,
    accent: 'green',
  },
];

export function ActionCenter({ onScoreChange }: ActionCenterProps = {}) {
  const [actions, setActions] = useState<ActionItem[]>(INITIAL_ACTIONS);
  const [busy, setBusy] = useState<string | null>(null);

  const completedCount = actions.filter((a) => a.status === 'done').length;
  const overallScore = Math.round(
    (actions.reduce((sum, a) => sum + a.progress, 0) / (actions.length * 100)) * 100
  );

  useEffect(() => {
    onScoreChange?.(overallScore, completedCount, actions.length);
  }, [overallScore, completedCount, actions.length, onScoreChange]);

  const toggleAction = (id: string) => {
    setActions((prev) =>
      prev.map((a) => {
        if (a.id !== id) return a;
        if (a.status === 'done') {
          return { ...a, status: 'pending', progress: 0 };
        }
        return { ...a, status: 'in-progress', progress: a.progress > 0 ? a.progress : 10 };
      })
    );
  };

  const runAction = async (id: string) => {
    setBusy(id);
    setActions((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'in-progress' } : a))
    );

    // Simulate progress
    const interval = setInterval(() => {
      setActions((prev) =>
        prev.map((a) => {
          if (a.id !== id) return a;
          const next = Math.min(a.progress + 15, 100);
          return { ...a, progress: next };
        })
      );
    }, 200);

    await new Promise((resolve) => setTimeout(resolve, 1600));

    clearInterval(interval);
    setActions((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status: 'done', progress: 100 } : a
      )
    );
    setBusy(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass relative overflow-hidden rounded-2xl border border-border/60 p-6"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/30">
            <Lock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Action Center</h3>
            <p className="text-xs text-muted-foreground">
              {completedCount} of {actions.length} tasks completed
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gradient-cyan">{overallScore}%</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Security Score
          </p>
        </div>
      </div>

      {/* Action items */}
      <div className="space-y-3">
        {actions.map((action, idx) => (
          <motion.div
            key={action.id}
            layout
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.3 }}
            className={cn(
              'group relative flex items-start gap-4 rounded-xl border p-4 transition-all',
              action.status === 'done'
                ? 'border-success/30 bg-success/5'
                : 'border-border/50 bg-card/30 hover:border-border hover:bg-card/50'
            )}
          >
            {/* Status icon */}
            <button
              onClick={() => toggleAction(action.id)}
              disabled={busy === action.id}
              className="mt-0.5 shrink-0"
              aria-label="Toggle status"
            >
              <AnimatePresence mode="wait">
                {action.status === 'done' ? (
                  <motion.div
                    key="done"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-success" />
                  </motion.div>
                ) : action.status === 'in-progress' ? (
                  <motion.div
                    key="progress"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Loader2 className="h-6 w-6 animate-spin text-accent" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="pending"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Circle className="h-6 w-6 text-muted-foreground/50 transition-colors group-hover:text-muted-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <action.icon
                  className={cn(
                    'h-4 w-4 shrink-0',
                    action.accent === 'cyan' ? 'text-accent' : 'text-primary'
                  )}
                />
                <h4
                  className={cn(
                    'text-sm font-semibold transition-colors',
                    action.status === 'done'
                      ? 'text-success'
                      : 'text-foreground'
                  )}
                >
                  {action.title}
                </h4>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {action.description}
              </p>

              {/* Progress bar */}
              <AnimatePresence>
                {action.status === 'in-progress' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 overflow-hidden"
                  >
                    <Progress
                      value={action.progress}
                      className="h-1.5 bg-secondary"
                    />
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      {action.progress}% complete
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action button */}
            {action.status !== 'done' && action.status !== 'in-progress' && (
              <button
                onClick={() => runAction(action.id)}
                className="shrink-0 rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent transition-all hover:bg-accent/15 hover:neon-glow-cyan"
              >
              Run
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
