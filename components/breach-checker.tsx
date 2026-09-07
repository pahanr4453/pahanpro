'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Search,
  Loader2,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Database,
  Calendar,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { checkEmailBreach, type BreachResult } from '@/lib/breach-api';
import { cn } from '@/lib/utils';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type BreachCheckerProps = {
  onScanComplete?: (result: BreachResult) => void;
};

export function BreachChecker({ onScanComplete }: BreachCheckerProps = {}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BreachResult | null>(null);
  const [error, setError] = useState('');
  const [expandedBreach, setExpandedBreach] = useState<number | null>(null);

  const handleCheck = async () => {
    setError('');
    if (!EMAIL_REGEX.test(email)) {
      setError('Please enter a valid email address.');
      setResult(null);
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const res = await checkEmailBreach(email);
      setResult(res);
      onScanComplete?.(res);
    } catch {
      setError('Failed to check breach status. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCheck();
  };

  return (
    <section id="breach-checker" className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Live Breach Database
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Email Breach <span className="text-gradient-cyan">Checker</span>
        </h2>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          Enter your email address to scan against known data breaches and
          leaked credential databases.
        </p>
      </motion.div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
      >
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-12 rounded-xl border-border/60 bg-card/50 pl-11 pr-4 text-base placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-accent/20"
          />
        </div>
        <Button
          onClick={handleCheck}
          disabled={loading}
          className="h-12 rounded-xl bg-accent px-6 text-accent-foreground hover:bg-accent/90 neon-glow-cyan disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" />
              Scan Now
            </>
          )}
        </Button>
      </motion.div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-3 text-sm text-destructive"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Loading skeleton */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mt-8 w-full max-w-xl"
          >
            <div className="glass flex items-center gap-4 rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Loader2 className="h-6 w-6 animate-spin text-accent" />
              </div>
              <div className="flex-1">
                <div className="mb-2 h-4 w-48 animate-pulse rounded bg-secondary" />
                <div className="h-3 w-32 animate-pulse rounded bg-secondary/60" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result */}
      <AnimatePresence mode="wait">
        {result && !loading && (
          <motion.div
            key={result.status}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.96 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mt-8 w-full max-w-xl"
          >
            {result.status === 'safe' ? (
              <div className="glass relative overflow-hidden rounded-2xl border border-success/30 p-6 neon-glow-green">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-success/15 border border-success/30"
                  >
                    <ShieldCheck className="h-7 w-7 text-success" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-success neon-text-green">
                      No Breaches Found
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Your email{' '}
                      <span className="font-medium text-foreground">
                        {result.email}
                      </span>{' '}
                      appears in zero known breach databases.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass relative overflow-hidden rounded-2xl border border-destructive/30 p-6">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                      className="flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/15 border border-destructive/30"
                    >
                      <ShieldAlert className="h-7 w-7 text-destructive" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-destructive">
                        {result.breachCount} Breach
                        {result.breachCount > 1 ? 'es' : ''} Detected
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Your email{' '}
                        <span className="font-medium text-foreground">
                          {result.email}
                        </span>{' '}
                        was found in {result.breachCount} known breach
                        {result.breachCount > 1 ? 'es' : ''}.
                      </p>
                    </div>
                  </div>

                  {/* Breach list */}
                  <div className="mt-5 space-y-2">
                    {result.breaches.map((breach, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-border/60 bg-card/40 overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setExpandedBreach(expandedBreach === idx ? null : idx)
                          }
                          className="flex w-full items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-secondary/40"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/10 border border-destructive/20">
                              <Database className="h-4 w-4 text-destructive" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">
                                {breach.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {breach.domain}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge
                              variant="outline"
                              className="border-warning/40 bg-warning/10 text-warning"
                            >
                              <Calendar className="mr-1 h-3 w-3" />
                              {breach.date}
                            </Badge>
                            <ChevronDown
                              className={cn(
                                'h-4 w-4 text-muted-foreground transition-transform',
                                expandedBreach === idx && 'rotate-180'
                              )}
                            />
                          </div>
                        </button>
                        <AnimatePresence>
                          {expandedBreach === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden border-t border-border/40"
                            >
                              <div className="p-4">
                                <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                                  <Lock className="h-3 w-3" />
                                  Compromised Data:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {breach.compromisedData.map((data, di) => (
                                    <Badge
                                      key={di}
                                      variant="outline"
                                      className="border-destructive/30 bg-destructive/5 text-destructive/90"
                                    >
                                      {data}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
