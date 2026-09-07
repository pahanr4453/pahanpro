export type BreachRecord = {
  name: string;
  domain: string;
  date: string;
  compromisedData: string[];
};

export type BreachResult = {
  email: string;
  status: 'safe' | 'breached';
  breachCount: number;
  breaches: BreachRecord[];
};

const MOCK_BREACHES: BreachRecord[] = [
  {
    name: 'LinkedIn',
    domain: 'linkedin.com',
    date: '2021-06-22',
    compromisedData: ['Email addresses', 'Phone numbers', 'Usernames'],
  },
  {
    name: 'Adobe',
    domain: 'adobe.com',
    date: '2013-10-04',
    compromisedData: ['Email addresses', 'Password hints', 'Encrypted passwords'],
  },
  {
    name: 'Dropbox',
    domain: 'dropbox.com',
    date: '2012-07-01',
    compromisedData: ['Email addresses', 'Passwords'],
  },
  {
    name: 'MyFitnessPal',
    domain: 'myfitnesspal.com',
    date: '2018-02-01',
    compromisedData: ['Email addresses', 'Usernames', 'Geolocation'],
  },
];

const BREACHED_DOMAINS = ['linkedin', 'adobe', 'dropbox', 'myfitnesspal', 'yahoo'];

function pickBreaches(seed: number): BreachRecord[] {
  const count = (seed % 3) + 1;
  const start = seed % MOCK_BREACHES.length;
  const selected: BreachRecord[] = [];
  for (let i = 0; i < count; i++) {
    selected.push(MOCK_BREACHES[(start + i) % MOCK_BREACHES.length]);
  }
  return selected;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export async function checkEmailBreach(email: string): Promise<BreachResult> {
  await new Promise((resolve) => setTimeout(resolve, 1400));

  const localPart = email.split('@')[0]?.toLowerCase() ?? '';
  const domainPart = email.split('@')[1]?.toLowerCase() ?? '';
  const seed = hashString(email);

  const domainMatches = BREACHED_DOMAINS.some((d) => domainPart.includes(d));
  const localMatches = BREACHED_DOMAINS.some((d) => localPart.includes(d));
  const shouldBreach = domainMatches || localMatches || seed % 3 === 0;

  if (shouldBreach) {
    const breaches = pickBreaches(seed);
    return {
      email,
      status: 'breached',
      breachCount: breaches.length,
      breaches,
    };
  }

  return {
    email,
    status: 'safe',
    breachCount: 0,
    breaches: [],
  };
}
