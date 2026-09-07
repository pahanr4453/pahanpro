'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Search,
  Loader2,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Unlock,
  Wifi,
  Server,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Radar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// ===================== URL SCANNER =====================

type UrlScanResult = {
  url: string;
  protocol: 'https' | 'http';
  secure: boolean;
  sslGrade: 'A+' | 'A' | 'B' | 'C' | 'F';
  hasHSTS: boolean;
  hasMixedContent: boolean;
  certificateValid: boolean;
  risks: string[];
  score: number;
};

function mockUrlScan(url: string): UrlScanResult {
  let normalized = url.trim();
  if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
    normalized = 'https://' + normalized;
  }

  const isHttps = normalized.startsWith('https://');
  const seed = normalized.length + normalized.charCodeAt(normalized.length - 1);
  const grades: UrlScanResult['sslGrade'][] = ['A+', 'A', 'B', 'C', 'F'];

  const risks: string[] = [];
  if (!isHttps) risks.push('Connection is not encrypted (HTTP instead of HTTPS)');
  if (seed % 5 === 0) risks.push('SSL certificate expires within 30 days');
  if (seed % 7 === 0) risks.push('Missing HSTS header — vulnerable to protocol downgrade');
  if (seed % 11 === 0) risks.push('Mixed content detected — insecure resources loaded over HTTP');

  const score = isHttps
    ? Math.max(40, 100 - risks.length * 20 - (seed % 10))
    : Math.max(10, 30 - risks.length * 5);

  return {
    url: normalized,
    protocol: isHttps ? 'https' : 'http',
    secure: isHttps && risks.length <= 1,
    sslGrade: isHttps ? grades[Math.min(risks.length, 4)] : 'F',
    hasHSTS: seed % 5 !== 0,
    hasMixedContent: seed % 11 === 0,
    certificateValid: isHttps && seed % 5 !== 0,
    risks,
    score,
  };
}

function UrlScanner() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<UrlScanResult | null>(null);
  const [error, setError] = useState('');

  const handleScan = async () => {
    setError('');
    if (!url.trim()) {
      setError('Please enter a URL to scan.');
      return;
    }
    setLoading(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 1500));
    setResult(mockUrlScan(url));
    setLoading(false);
  };

  return (
    <div className="glass relative overflow-hidden rounded-2xl border border-border/60 p-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-scan-line" />
      </div>

      {/* Header */}
      <div className="relative mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/30">
          <Globe className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">URL Safety Scanner</h3>
          <p className="text-xs text-muted-foreground">
            Validate HTTPS / SSL certificates and detect security risks
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="relative flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleScan()}
            className="h-11 rounded-xl border-border/60 bg-card/50 pl-10"
          />
        </div>
        <Button
          onClick={handleScan}
          disabled={loading}
          className="h-11 rounded-xl bg-accent px-5 text-accent-foreground hover:bg-accent/90 neon-glow-cyan disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <Radar className="mr-2 h-4 w-4" />
              Scan URL
            </>
          )}
        </Button>
      </div>

      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

      {/* Result */}
      <AnimatePresence mode="wait">
        {result && !loading && (
          <motion.div
            key={result.secure ? 'secure' : 'risk'}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'mt-5 rounded-xl border p-5',
              result.secure
                ? 'border-success/30 bg-success/5'
                : 'border-destructive/30 bg-destructive/5'
            )}
          >
            <div className="flex items-center gap-3">
              {result.secure ? (
                <ShieldCheck className="h-8 w-8 text-success" />
              ) : (
                <ShieldAlert className="h-8 w-8 text-destructive" />
              )}
              <div>
                <p className="text-sm font-bold text-foreground">{result.url}</p>
                <p className="text-xs text-muted-foreground">
                  {result.secure ? 'Connection is secure' : 'Security risks detected'}
                </p>
              </div>
              <div className="ml-auto text-right">
                <span
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold',
                    result.sslGrade === 'F'
                      ? 'bg-destructive/15 text-destructive'
                      : 'bg-success/15 text-success'
                  )}
                >
                  {result.sslGrade}
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  SSL Grade
                </p>
              </div>
            </div>

            {/* Details grid */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { label: 'Protocol', value: result.protocol.toUpperCase(), ok: result.protocol === 'https' },
                { label: 'Certificate', value: result.certificateValid ? 'Valid' : 'Invalid', ok: result.certificateValid },
                { label: 'HSTS', value: result.hasHSTS ? 'Enabled' : 'Missing', ok: result.hasHSTS },
                { label: 'Mixed Content', value: result.hasMixedContent ? 'Found' : 'None', ok: !result.hasMixedContent },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border/40 bg-card/30 p-3"
                >
                  <div className="flex items-center gap-1.5">
                    {item.ok ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                    ) : (
                      <XCircle className="h-3.5 w-3.5 text-destructive" />
                    )}
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Risks */}
            {result.risks.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-1.5 text-xs font-medium text-destructive">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  Detected Risks:
                </p>
                {result.risks.map((risk, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-2.5"
                  >
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
                    <span className="text-xs text-muted-foreground">{risk}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ===================== WIFI AUDITOR =====================

type WifiRisk = {
  level: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  recommendation: string;
};

type WifiAuditResult = {
  networkName: string;
  protocol: string;
  encryption: string;
  risks: WifiRisk[];
  score: number;
};

const MOCK_WIFI_NETWORKS = [
  { name: 'Home_Network_5G', protocol: 'WPA3', encryption: 'AES-256' },
  { name: 'CoffeeShop_WiFi', protocol: 'WPA2', encryption: 'AES-128' },
  { name: 'Public_Free_WiFi', protocol: 'Open', encryption: 'None' },
  { name: 'Office_Corporate', protocol: 'WPA2-Enterprise', encryption: 'AES-256' },
  { name: 'Neighbor_2.4G', protocol: 'WPA', encryption: 'TKIP' },
];

function mockWifiAudit(networkName: string): WifiAuditResult {
  const network = MOCK_WIFI_NETWORKS.find((n) => n.name === networkName) ?? MOCK_WIFI_NETWORKS[0];
  const risks: WifiRisk[] = [];

  if (network.protocol === 'Open') {
    risks.push({
      level: 'critical',
      title: 'Unencrypted Open Network',
      description: 'All traffic is transmitted in plaintext and can be intercepted by anyone in range.',
      recommendation: 'Avoid sending sensitive data. Use a VPN immediately.',
    });
    risks.push({
      level: 'critical',
      title: 'No Authentication',
      description: 'Anyone can connect to this network without a password.',
      recommendation: 'Switch to WPA2 or WPA3 secured network.',
    });
  }

  if (network.protocol === 'WPA') {
    risks.push({
      level: 'critical',
      title: 'Outdated WPA Protocol',
      description: 'WPA (v1) has known vulnerabilities and is easily cracked.',
      recommendation: 'Upgrade to WPA2 or WPA3 immediately.',
    });
  }

  if (network.encryption === 'TKIP') {
    risks.push({
      level: 'warning',
      title: 'Weak TKIP Encryption',
      description: 'TKIP is deprecated and vulnerable to attacks.',
      recommendation: 'Switch to AES encryption.',
    });
  }

  if (network.protocol === 'WPA2') {
    risks.push({
      level: 'warning',
      title: 'WPA2 Vulnerability (KRACK)',
      description: 'WPA2 is susceptible to KRACK attacks on certain device configurations.',
      recommendation: 'WPA2/WPA3 Recommended — upgrade your router firmware.',
    });
  }

  if (network.protocol === 'WPA3') {
    risks.push({
      level: 'info',
      title: 'Strong Protocol Detected',
      description: 'WPA3 provides the highest level of consumer Wi-Fi security.',
      recommendation: 'No action needed — your network is well-secured.',
    });
  }

  const score =
    network.protocol === 'WPA3' ? 95 :
    network.protocol === 'WPA2-Enterprise' ? 85 :
    network.protocol === 'WPA2' ? 65 :
    network.protocol === 'WPA' ? 30 :
    15;

  return {
    networkName: network.name,
    protocol: network.protocol,
    encryption: network.encryption,
    risks,
    score,
  };
}

function WifiAuditor() {
  const [selectedNetwork, setSelectedNetwork] = useState(MOCK_WIFI_NETWORKS[0].name);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<WifiAuditResult | null>(null);

  const handleAudit = async () => {
    setLoading(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 1200));
    setResult(mockWifiAudit(selectedNetwork));
    setLoading(false);
  };

  const levelConfig = {
    critical: { color: 'text-destructive', bg: 'bg-destructive/10', border: 'border-destructive/30', icon: XCircle },
    warning: { color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning/30', icon: AlertTriangle },
    info: { color: 'text-success', bg: 'bg-success/10', border: 'border-success/30', icon: CheckCircle2 },
  };

  return (
    <div className="glass relative overflow-hidden rounded-2xl border border-border/60 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/30">
          <Wifi className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">Wi-Fi Protocol Auditor</h3>
          <p className="text-xs text-muted-foreground">
            Detect security risks in your wireless network configuration
          </p>
        </div>
      </div>

      {/* Network selector */}
      <div className="space-y-3">
        <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Server className="h-3.5 w-3.5" />
          Select a network to audit:
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <select
            value={selectedNetwork}
            onChange={(e) => setSelectedNetwork(e.target.value)}
            className="h-11 flex-1 rounded-xl border border-border/60 bg-card/50 px-3 text-sm text-foreground focus:outline-none focus:border-accent"
          >
            {MOCK_WIFI_NETWORKS.map((net) => (
              <option key={net.name} value={net.name}>
                {net.name} ({net.protocol})
              </option>
            ))}
          </select>
          <Button
            onClick={handleAudit}
            disabled={loading}
            className="h-11 rounded-xl bg-primary px-5 text-primary-foreground hover:bg-primary/90 neon-glow-green disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Auditing...
              </>
            ) : (
              <>
                <Wifi className="mr-2 h-4 w-4" />
                Audit Network
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Result */}
      <AnimatePresence mode="wait">
        {result && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="mt-5"
          >
            {/* Summary */}
            <div className="flex items-center gap-4 rounded-xl border border-border/40 bg-card/30 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-foreground">{result.networkName}</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-accent/30 bg-accent/10 text-accent">
                    {result.protocol}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                    <Lock className="mr-1 h-3 w-3" />
                    {result.encryption}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={cn(
                    'text-2xl font-bold',
                    result.score >= 80 ? 'text-success' : result.score >= 50 ? 'text-warning' : 'text-destructive'
                  )}
                >
                  {result.score}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Score
                </p>
              </div>
            </div>

            {/* Risks */}
            <div className="mt-4 space-y-2">
              {result.risks.map((risk, i) => {
                const cfg = levelConfig[risk.level];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={cn('rounded-xl border p-4', cfg.border, cfg.bg)}
                  >
                    <div className="flex items-start gap-3">
                      <cfg.icon className={cn('mt-0.5 h-5 w-5 shrink-0', cfg.color)} />
                      <div>
                        <p className={cn('text-sm font-semibold', cfg.color)}>
                          {risk.title}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {risk.description}
                        </p>
                        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-foreground">
                          <Unlock className="h-3 w-3" />
                          {risk.recommendation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ===================== EXPORT =====================

export function AdvancedScanners() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <UrlScanner />
      <WifiAuditor />
    </div>
  );
}
