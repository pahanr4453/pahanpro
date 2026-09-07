'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  KeyRound,
  Smartphone,
  Fish,
  Shield,
  Lock,
  Eye,
  Download,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Lesson = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  accent: 'cyan' | 'green';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  content: {
    intro: string;
    sections: { heading: string; body: string; tips: string[] }[];
  };
};

const LESSONS: Lesson[] = [
  {
    id: 'passwords',
    icon: KeyRound,
    title: 'Password Best Practices',
    subtitle: 'Create strong, unique passwords that resist attacks',
    accent: 'cyan',
    difficulty: 'Beginner',
    duration: '5 min read',
    content: {
      intro:
        'Passwords are your first line of defense. A strong password can take centuries to crack, while a weak one falls in seconds.',
      sections: [
        {
          heading: 'Length Over Complexity',
          body: 'A 16-character passphrase is stronger than an 8-character mix of symbols. Use a memorable phrase: "purple-elephant-dances-42" beats "P@ss1!".',
          tips: [
            'Use at least 16 characters',
            'Passphrases are easier to remember and harder to crack',
            'Avoid dictionary words, names, and dates',
          ],
        },
        {
          heading: 'Never Reuse Passwords',
          body: 'If one site is breached, attackers try those credentials everywhere. Each account needs a unique password.',
          tips: [
            'Use a password manager to generate and store unique passwords',
            'Never share passwords across banking, email, and social media',
            'Check haveibeenpwned.com for known breaches',
          ],
        },
        {
          heading: 'Enable Multi-Factor Authentication',
          body: 'Even the strongest password can be leaked. MFA adds a second factor that blocks 99.9% of automated attacks.',
          tips: [
            'Prefer authenticator apps over SMS codes',
            'Hardware keys (YubiKey) offer the highest security',
            'Backup your recovery codes safely',
          ],
        },
      ],
    },
  },
  {
    id: '2fa',
    icon: Smartphone,
    title: 'How to Use 2FA',
    subtitle: 'Set up two-factor authentication the right way',
    accent: 'green',
    difficulty: 'Beginner',
    duration: '4 min read',
    content: {
      intro:
        'Two-factor authentication (2FA) requires a second verification step beyond your password. It is the single most effective way to protect your accounts.',
      sections: [
        {
          heading: 'Choose Your Method',
          body: 'Authenticator apps (Google Authenticator, Authy) generate time-based codes. Hardware keys plug into your device. SMS codes are the weakest option but still better than nothing.',
          tips: [
            'Authenticator apps are free and work offline',
            'Hardware keys like YubiKey are phishing-resistant',
            'Avoid SMS 2FA for high-value accounts — SIM swapping is real',
          ],
        },
        {
          heading: 'Set Up Recovery',
          body: 'Most services provide backup codes when you enable 2FA. Store these in a safe location — they are your lifeline if you lose your device.',
          tips: [
            'Print or write down backup codes — do not store them in your browser',
            'Keep them in a physical safe or encrypted file',
            'Test a backup code to confirm it works before you need it',
          ],
        },
        {
          heading: 'Secure Your Email First',
          body: 'Your email account is the master key — if it is compromised, attackers can reset passwords for every other service.',
          tips: [
            'Enable 2FA on your email before anything else',
            'Review your email account\'s recent activity regularly',
            'Use a unique, strong password exclusively for email',
          ],
        },
      ],
    },
  },
  {
    id: 'phishing',
    icon: Fish,
    title: 'Avoiding Phishing Attacks',
    subtitle: 'Spot and block social engineering attempts',
    accent: 'cyan',
    difficulty: 'Intermediate',
    duration: '6 min read',
    content: {
      intro:
        'Phishing is the art of tricking you into giving up credentials or installing malware. 90% of data breaches start with a phishing email.',
      sections: [
        {
          heading: 'Recognize the Red Flags',
          body: 'Phishing messages create urgency, use generic greetings, contain typos, and send you to lookalike domains. Legitimate organizations never ask for your password via email.',
          tips: [
            'Hover over links to check the real URL before clicking',
            'Check the sender email address — not just the display name',
            'Be suspicious of "urgent" or "account suspended" messages',
          ],
        },
        {
          heading: 'Verify Through Another Channel',
          body: 'If a message claims your account is locked, do not click the link. Open the app or website directly by typing the URL yourself.',
          tips: [
            'Call the organization using their official phone number',
            'Never use phone numbers or links from the suspicious message',
            'Forward phishing emails to report@phishing.gov or your IT team',
          ],
        },
        {
          heading: 'Use Technical Defenses',
          body: 'Modern browsers and email clients have built-in phishing detection. Enable them, and consider a dedicated email security tool for high-risk users.',
          tips: [
            'Keep your browser updated for the latest phishing blocklists',
            'Enable "warn before visiting deceptive sites" in browser settings',
            'Use hardware security keys to defeat phishing pages entirely',
          ],
        },
      ],
    },
  },
  {
    id: 'vpn',
    icon: Shield,
    title: 'VPN & Network Privacy',
    subtitle: 'Protect your traffic on untrusted networks',
    accent: 'green',
    difficulty: 'Intermediate',
    duration: '5 min read',
    content: {
      intro:
        'A VPN encrypts your internet traffic, shielding it from eavesdroppers on public Wi-Fi and hiding your IP address from trackers.',
      sections: [
        {
          heading: 'When to Use a VPN',
          body: 'VPNs are essential on public Wi-Fi (cafes, airports, hotels). At home on a WPA3 network, a VPN adds privacy but is less critical for security.',
          tips: [
            'Always use a VPN on public or untrusted networks',
            'A VPN does not replace HTTPS — you need both',
            'Choose a no-logs VPN provider based in a privacy-friendly jurisdiction',
          ],
        },
        {
          heading: 'What a VPN Does Not Do',
          body: 'A VPN hides your IP from websites but does not make you anonymous. Your VPN provider can still see your traffic. Do not use a free VPN for sensitive data.',
          tips: [
            'Avoid free VPNs — they often sell your data',
            'A VPN does not protect you from malware or phishing',
            'Use Tor, not a VPN, if you need true anonymity',
          ],
        },
      ],
    },
  },
  {
    id: 'data-privacy',
    icon: Eye,
    title: 'Data Privacy & Tracking',
    subtitle: 'Control what companies know about you',
    accent: 'cyan',
    difficulty: 'Advanced',
    duration: '7 min read',
    content: {
      intro:
        'Every website you visit leaves a trail. Trackers, cookies, and fingerprinting build a detailed profile of your behavior across the web.',
      sections: [
        {
          heading: 'Browser Hardening',
          body: 'Install a privacy-focused browser (Firefox, Brave) or add uBlock Origin. Enable "Do Not Track" and disable third-party cookies.',
          tips: [
            'Use uBlock Origin to block trackers and ads',
            'Enable Enhanced Tracking Protection in Firefox',
            'Consider the Tor Browser for maximum privacy',
          ],
        },
        {
          heading: 'Minimize Data Sharing',
          body: 'Every account you create is a potential breach. Use aliases for non-essential signups, and delete accounts you no longer use.',
          tips: [
            'Use email aliases (SimpleLogin, DuckDuckGo) for signups',
            'Review and delete unused accounts on justdelete.me',
            'Opt out of data broker collections at optoutprescreen.com',
          ],
        },
      ],
    },
  },
  {
    id: 'malware',
    icon: Lock,
    title: 'Malware Prevention',
    subtitle: 'Keep your devices clean and malware-free',
    accent: 'green',
    difficulty: 'Intermediate',
    duration: '5 min read',
    content: {
      intro:
        'Malware includes viruses, ransomware, spyware, and trojans. Prevention is far easier than removal — a single infection can cost thousands.',
      sections: [
        {
          heading: 'Keep Everything Updated',
          body: 'Most malware exploits known vulnerabilities in outdated software. Enable automatic updates for your OS, browser, and all plugins.',
          tips: [
            'Enable automatic OS updates',
            'Update your browser immediately when a new version is available',
            'Remove browser extensions you no longer use',
          ],
        },
        {
          heading: 'Practice Safe Downloads',
          body: 'Only download software from official sources. Pirated software, cracks, and keygens are primary malware vectors.',
          tips: [
            'Download from official websites or app stores only',
            'Scan downloaded files with VirusTotal before opening',
            'Never disable your antivirus or firewall',
          ],
        },
      ],
    },
  },
];

const difficultyColors: Record<Lesson['difficulty'], string> = {
  Beginner: 'text-success border-success/30 bg-success/10',
  Intermediate: 'text-warning border-warning/30 bg-warning/10',
  Advanced: 'text-destructive border-destructive/30 bg-destructive/10',
};

export function SecurityAcademy() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <Shield className="h-3.5 w-3.5" />
          Learn. Protect. Defend.
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Security <span className="text-gradient-cyan">Academy</span>
        </h2>
        <p className="mt-3 max-w-md mx-auto text-sm text-muted-foreground">
          Interactive lessons to help you understand and defend against modern
          cyber threats.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LESSONS.map((lesson, idx) => {
          const isExpanded = expanded === lesson.id;
          return (
            <motion.div
              key={lesson.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.3 }}
              className={cn(
                'glass relative overflow-hidden rounded-2xl border p-5 transition-all',
                isExpanded
                  ? 'border-accent/40 neon-glow-cyan sm:col-span-2 lg:col-span-3'
                  : 'border-border/60 hover:border-border'
              )}
            >
              {/* Card header */}
              <button
                onClick={() => setExpanded(isExpanded ? null : lesson.id)}
                className="flex w-full items-start gap-4 text-left"
              >
                <div
                  className={cn(
                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all',
                    lesson.accent === 'cyan'
                      ? 'bg-accent/10 border-accent/30'
                      : 'bg-primary/10 border-primary/30'
                  )}
                >
                  <lesson.icon
                    className={cn(
                      'h-6 w-6',
                      lesson.accent === 'cyan' ? 'text-accent' : 'text-primary'
                    )}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-foreground">
                    {lesson.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {lesson.subtitle}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className={cn(
                        'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold',
                        difficultyColors[lesson.difficulty]
                      )}
                    >
                      {lesson.difficulty}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {lesson.duration}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  className={cn(
                    'h-5 w-5 shrink-0 text-muted-foreground transition-transform',
                    isExpanded && 'rotate-90'
                  )}
                />
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 border-t border-border/40 pt-5">
                      <p className="text-sm text-muted-foreground italic">
                        {lesson.content.intro}
                      </p>

                      <div className="mt-5 space-y-5">
                        {lesson.content.sections.map((section, si) => (
                          <div key={si}>
                            <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                              <span
                                className={cn(
                                  'flex h-6 w-6 items-center justify-center rounded-lg text-xs font-bold',
                                  lesson.accent === 'cyan'
                                    ? 'bg-accent/15 text-accent'
                                    : 'bg-primary/15 text-primary'
                                )}
                              >
                                {si + 1}
                              </span>
                              {section.heading}
                            </h4>
                            <p className="mt-2 pl-8 text-sm text-muted-foreground">
                              {section.body}
                            </p>
                            <ul className="mt-3 space-y-1.5 pl-8">
                              {section.tips.map((tip, ti) => (
                                <li
                                  key={ti}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <span
                                    className={cn(
                                      'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full',
                                      lesson.accent === 'cyan'
                                        ? 'bg-accent'
                                        : 'bg-primary'
                                    )}
                                  />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
