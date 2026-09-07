import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export type ScanHistoryRecord = {
  id: string;
  user_id: string;
  scan_type: 'email_breach' | 'url_safety' | 'wifi_audit';
  target: string;
  status: string;
  details: Record<string, unknown>;
  score: number;
  created_at: string;
};

export type SecurityScoreRecord = {
  id: string;
  user_id: string;
  overall_score: number;
  email_breach_score: number;
  network_security_score: number;
  action_items_score: number;
  updated_at: string;
};

export type ProfileRecord = {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
};
