/*
# Security Suite Schema — profiles, scan_history, security_scores

## Overview
Creates the database tables needed for the full-stack Sentinel Security Suite:
user profiles, scan history records, and personalized security scores.

## New Tables

### profiles
- `id` (uuid, PK, references auth.users) — one row per authenticated user
- `display_name` (text) — optional display name
- `avatar_url` (text) — optional avatar URL
- `created_at` (timestamptz) — row creation time
- `updated_at` (timestamptz) — last update time

### scan_history
- `id` (uuid, PK) — unique scan record ID
- `user_id` (uuid, NOT NULL, DEFAULT auth.uid(), references auth.users) — owner
- `scan_type` (text) — 'email_breach' | 'url_safety' | 'wifi_audit'
- `target` (text) — the email address, URL, or network name that was scanned
- `status` (text) — 'safe' | 'breached' | 'warning' | 'secure' | 'risk'
- `details` (jsonb) — structured scan result payload
- `score` (integer) — 0-100 security score for this scan
- `created_at` (timestamptz) — scan timestamp

### security_scores
- `id` (uuid, PK) — unique score record ID
- `user_id` (uuid, NOT NULL, DEFAULT auth.uid(), references auth.users) — owner
- `overall_score` (integer) — aggregate 0-100 security score
- `email_breach_score` (integer) — sub-score for email breach checks
- `network_security_score` (integer) — sub-score for network/URL scans
- `action_items_score` (integer) — sub-score for action center completion
- `updated_at` (timestamptz) — last recalculation time

## Security (RLS)
All three tables have RLS enabled with owner-scoped CRUD policies.

## Important Notes
1. `user_id` columns default to `auth.uid()` so client inserts that omit
   `user_id` still satisfy the INSERT WITH CHECK policy.
2. A trigger function auto-creates a profile row when a new auth.users record is inserted.
3. All policies use `auth.uid()` — never `current_user`.
*/

-- ===================== PROFILES =====================
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_profile" ON profiles;
CREATE POLICY "select_own_profile" ON profiles FOR SELECT
  TO authenticated USING (auth.uid() = id);

DROP POLICY IF EXISTS "insert_own_profile" ON profiles;
CREATE POLICY "insert_own_profile" ON profiles FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "update_own_profile" ON profiles;
CREATE POLICY "update_own_profile" ON profiles FOR UPDATE
  TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- Function to auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO profiles (id) VALUES (new.id);
  RETURN new;
END;
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created_profile'
  ) THEN
    CREATE TRIGGER on_auth_user_created_profile
      AFTER INSERT ON auth.users
      FOR EACH ROW
      EXECUTE FUNCTION public.handle_new_user();
  END IF;
END
$$;

-- ===================== SCAN HISTORY =====================
CREATE TABLE IF NOT EXISTS scan_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  scan_type text NOT NULL,
  target text NOT NULL,
  status text NOT NULL,
  details jsonb DEFAULT '{}'::jsonb,
  score integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE scan_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_scans" ON scan_history;
CREATE POLICY "select_own_scans" ON scan_history FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_scans" ON scan_history;
CREATE POLICY "insert_own_scans" ON scan_history FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_scans" ON scan_history;
CREATE POLICY "update_own_scans" ON scan_history FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_scans" ON scan_history;
CREATE POLICY "delete_own_scans" ON scan_history FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_scan_history_user_id ON scan_history(user_id);
CREATE INDEX IF NOT EXISTS idx_scan_history_created_at ON scan_history(created_at DESC);

-- ===================== SECURITY SCORES =====================
CREATE TABLE IF NOT EXISTS security_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  overall_score integer DEFAULT 0,
  email_breach_score integer DEFAULT 0,
  network_security_score integer DEFAULT 0,
  action_items_score integer DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE security_scores ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_scores" ON security_scores;
CREATE POLICY "select_own_scores" ON security_scores FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_scores" ON security_scores;
CREATE POLICY "insert_own_scores" ON security_scores FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_scores" ON security_scores;
CREATE POLICY "update_own_scores" ON security_scores FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_scores" ON security_scores;
CREATE POLICY "delete_own_scores" ON security_scores FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

CREATE UNIQUE INDEX IF NOT EXISTS idx_security_scores_user_unique ON security_scores(user_id);
