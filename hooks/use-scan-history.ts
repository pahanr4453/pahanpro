'use client';

import { useCallback, useEffect, useState } from 'react';
import { supabase, type ScanHistoryRecord } from '@/lib/supabase';
import { useAuth } from '@/lib/auth-context';

type NewScanInput = {
  scan_type: ScanHistoryRecord['scan_type'];
  target: string;
  status: string;
  details: Record<string, unknown>;
  score: number;
};

export function useScanHistory() {
  const { user } = useAuth();
  const [history, setHistory] = useState<ScanHistoryRecord[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = useCallback(async () => {
    if (!user) {
      setHistory([]);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('scan_history')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    if (!error && data) {
      setHistory(data as ScanHistoryRecord[]);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const addScan = useCallback(
    async (input: NewScanInput) => {
      if (!user) return null;
      const { data, error } = await supabase
        .from('scan_history')
        .insert({
          scan_type: input.scan_type,
          target: input.target,
          status: input.status,
          details: input.details,
          score: input.score,
        })
        .select()
        .single();

      if (!error && data) {
        setHistory((prev) => [data as ScanHistoryRecord, ...prev].slice(0, 20));
        return data as ScanHistoryRecord;
      }
      return null;
    },
    [user]
  );

  return { history, loading, addScan, refetch: fetchHistory };
}
