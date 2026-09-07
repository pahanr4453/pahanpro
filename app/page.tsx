'use client';

import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Activity, Zap, Globe2, History, Lock } from 'lucide-react';
import { Navbar, type TabId } from '@/components/navbar';
import { BreachChecker } from '@/components/breach-checker';
import { BrowserInsight } from '@/components/browser-insight';
import { ActionCenter } from '@/components/action-center';
import { Footer } from '@/components/footer';
import { AdvancedScanners } from '@/components/advanced-scanners';
import { SecurityAcademy } from '@/components/security-academy';
import { AuthModal } from '@/components/auth-modal';
import { PdfReportButton } from '@/components/pdf-report-button';
import { useAuth } from '@/lib/auth-context';
import { useScanHistory } from '@/hooks/use-scan-history';
import type { BreachResult } from '@/lib/breach-api';
import type { ReportData } from '@/lib/pdf-report';
import { cn } from '@/lib/utils';

const STATS = [
  { icon: Globe2, label: 'Breaches Scanned', value: '14.2B+' },
  { icon: Activity, label: 'Live Threats', value: '3,847' },
  { icon: Zap, label: 'Response Time', value: '<2s' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('dashboard');
  const [authOpen, setAuthOpen] = useState(false);
  const { user } = useAuth();
  const { history, addScan } = useScanHistory();
  const [actionScore, setActionScore] = useState(0);
  const [actionCompleted, setActionCompleted] = useState(0);
  const [actionTotal, setActionTotal] = useState(4);
  const [emailBreachScore, setEmailBreachScore] = useState(0);

  const handleBreachScan = useCallback(
    (result: BreachResult) => {
      const score = result.status === 'safe' ? 100 : Math.max(20, 100 - result.breachCount * 25);
      setEmailBreachScore(score);
      addScan({
        scan_type: 'email_breach',
        target: result.email,
        status: result.status,
        details: { breaches: result.breaches, breachCount: result.breachCount },
        score,
      });
    },
    [addScan]
  );

  const handleActionScore = useCallback(
    (score: number, completed: number, total: number) => {
      setActionScore(score);
      setActionCompleted(completed);
      setActionTotal(total);
    },
    []
  );

  const networkScore = 70; // default; updated when scans run
  const overallScore = Math.round(
    (emailBreachScore * 0.35 + networkScore * 0.3 + actionScore * 0.35)
  );

  const reportData: ReportData = {
    userEmail: user?.email ?? null,
    overallScore,
    emailBreachScore,
    networkSecurityScore: networkScore,
    actionItemsScore: actionScore,
    completedActions: actionCompleted,
    totalActions: actionTotal,
    scanHistory: history.map((h) => ({
      scanType: h.scan_type,
      target: h.target,
      status: h.status,
      score: h.score,
      date: h.created_at,
    })),
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-30" />
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative">
        <Navbar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onAuthClick={() => setAuthOpen(true)}
        />

        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />

        <main id="dashboard" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {/* ===== DASHBOARD TAB ===== */}
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hero */}
                <section className="flex flex-col items-center py-16 text-center sm:py-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
                  >
                    <Shield className="h-3.5 w-3.5" />
                    Your Privacy. Our Mission.
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                  >
                    Cybersecurity &amp;{' '}
                    <span className="text-gradient-cyan">Privacy</span> Dashboard
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
                  >
                    Monitor your digital footprint, detect data breaches, and
                    take actionable steps to harden your online security posture.
                  </motion.p>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8"
                  >
                    {STATS.map((stat) => (
                      <div
                        key={stat.label}
                        className="glass flex items-center gap-3 rounded-xl px-5 py-3"
                      >
                        <stat.icon className="h-5 w-5 text-accent" />
                        <div className="text-left">
                          <p className="text-lg font-bold text-foreground">
                            {stat.value}
                          </p>
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </section>

                {/* Breach Checker + PDF Report */}
                <section className="py-12">
                  <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-end">
                    <PdfReportButton data={reportData} />
                  </div>
                  <BreachChecker onScanComplete={handleBreachScan} />
                </section>

                {/* Insights + Actions */}
                <section className="grid grid-cols-1 gap-6 py-12 lg:grid-cols-2">
                  <div id="browser-insight">
                    <BrowserInsight />
                  </div>
                  <div id="action-center">
                    <ActionCenter onScoreChange={handleActionScore} />
                  </div>
                </section>

                {/* Scan History */}
                {user && history.length > 0 && (
                  <section className="py-12">
                    <div className="glass rounded-2xl border border-border/60 p-6">
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/30">
                          <History className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            Scan History
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Your recent security scans
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {history.map((scan) => (
                          <div
                            key={scan.id}
                            className="flex items-center gap-3 rounded-lg border border-border/40 bg-card/30 p-3"
                          >
                            <div
                              className={cn(
                                'flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold',
                                scan.status === 'safe' || scan.status === 'secure'
                                  ? 'bg-success/10 text-success'
                                  : scan.status === 'warning'
                                  ? 'bg-warning/10 text-warning'
                                  : 'bg-destructive/10 text-destructive'
                              )}
                            >
                              {scan.score}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">
                                {scan.target}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {scan.scan_type.replace(/_/g, ' ')} — {scan.status}
                              </p>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {new Date(scan.created_at).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* Sign-in prompt for unauthenticated users */}
                {!user && (
                  <section className="py-12">
                    <div className="glass flex flex-col items-center gap-4 rounded-2xl border border-accent/20 p-8 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/30">
                        <Lock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          Create an account to save your scans
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Sign in to persist your scan history and security scores
                          across sessions.
                        </p>
                      </div>
                      <button
                        onClick={() => setAuthOpen(true)}
                        className="rounded-lg border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-medium text-accent transition-all hover:bg-accent/20 hover:neon-glow-cyan"
                      >
                        Get Started
                      </button>
                    </div>
                  </section>
                )}
              </motion.div>
            )}

            {/* ===== ADVANCED SCANNERS TAB ===== */}
            {activeTab === 'scanners' && (
              <motion.div
                key="scanners"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="py-12"
              >
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Advanced <span className="text-gradient-cyan">Scanners</span>
                  </h2>
                  <p className="mt-3 max-w-md mx-auto text-sm text-muted-foreground">
                    Deep-dive into URL safety validation and Wi-Fi protocol
                    auditing to secure your network perimeter.
                  </p>
                </div>
                <AdvancedScanners />
              </motion.div>
            )}

            {/* ===== SECURITY ACADEMY TAB ===== */}
            {activeTab === 'academy' && (
              <motion.div
                key="academy"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="py-12"
              >
                <SecurityAcademy />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}
