'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateSecurityReport, type ReportData } from '@/lib/pdf-report';

type Props = {
  data: ReportData;
};

export function PdfReportButton({ data }: Props) {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    try {
      generateSecurityReport(data);
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Button
        onClick={handleDownload}
        disabled={loading}
        className="h-11 rounded-xl bg-accent px-5 text-accent-foreground hover:bg-accent/90 neon-glow-cyan disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Download Security Report
          </>
        )}
      </Button>
    </motion.div>
  );
}
