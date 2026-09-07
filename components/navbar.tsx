'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, LogOut, Lock } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { cn } from '@/lib/utils';

export type TabId = 'dashboard' | 'scanners' | 'academy';

const TABS: { id: TabId; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'scanners', label: 'Advanced Scanners' },
  { id: 'academy', label: 'Security Academy' },
];

type NavbarProps = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  onAuthClick: () => void;
};

export function Navbar({ activeTab, onTabChange, onAuthClick }: NavbarProps) {
  const { user, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTabClick = (tab: TabId) => {
    onTabChange(tab);
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full glass-strong border-b border-border/60"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleTabClick('dashboard')}
          className="flex items-center gap-2.5 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/30 neon-glow-green transition-all group-hover:neon-glow-cyan">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Sentinel
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent/80">
              Security Suite
            </span>
          </div>
        </button>

        {/* Desktop tabs */}
        <div className="hidden items-center gap-1 md:flex">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-colors',
                activeTab === tab.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute -bottom-px left-2 right-2 h-px bg-gradient-to-r from-accent to-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Auth button */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-2">
              <span className="hidden text-sm text-muted-foreground sm:inline">
                {user.email}
              </span>
              <button
                onClick={signOut}
                className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-destructive/40 hover:text-destructive"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          ) : (
            <button
              onClick={onAuthClick}
              className="flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent/15 hover:neon-glow-cyan"
            >
              <Lock className="h-4 w-4" />
              Sign In
            </button>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="overflow-hidden border-t border-border/60 md:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={cn(
                  'rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors',
                  activeTab === tab.id
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
