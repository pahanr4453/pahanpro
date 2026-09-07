'use client';

import { jsPDF } from 'jspdf';

export type ReportData = {
  userEmail: string | null;
  overallScore: number;
  emailBreachScore: number;
  networkSecurityScore: number;
  actionItemsScore: number;
  completedActions: number;
  totalActions: number;
  scanHistory: {
    scanType: string;
    target: string;
    status: string;
    score: number;
    date: string;
  }[];
};

export function generateSecurityReport(data: ReportData) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const contentWidth = pageWidth - margin * 2;
  let y = 0;

  // Colors (RGB)
  const darkBg: [number, number, number] = [18, 22, 28];
  const cyan: [number, number, number] = [6, 182, 212];
  const green: [number, number, number] = [16, 185, 129];
  const white: [number, number, number] = [240, 245, 250];
  const muted: [number, number, number] = [148, 163, 184];
  const red: [number, number, number] = [239, 68, 68];
  const yellow: [number, number, number] = [245, 158, 11];

  // ===== HEADER BACKGROUND =====
  doc.setFillColor(...darkBg);
  doc.rect(0, 0, pageWidth, 140, 'F');

  // Neon accent line
  doc.setFillColor(...cyan);
  doc.rect(0, 138, pageWidth, 2, 'F');

  // Logo box
  doc.setFillColor(...green);
  doc.roundedRect(margin, 32, 36, 36, 6, 6, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('S', margin + 12, 56);

  // Title
  doc.setTextColor(...white);
  doc.setFontSize(22);
  doc.text('Sentinel Security Report', margin + 48, 48);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...cyan);
  doc.text('Full-Stack Security Suite — Confidential', margin + 48, 66);

  // Date
  doc.setTextColor(...muted);
  doc.setFontSize(9);
  const dateStr = new Date().toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
  });
  doc.text(`Generated: ${dateStr}`, pageWidth - margin, 48, { align: 'right' });

  if (data.userEmail) {
    doc.text(`Account: ${data.userEmail}`, pageWidth - margin, 64, {
      align: 'right',
    });
  }

  y = 170;

  // ===== OVERALL SCORE =====
  doc.setTextColor(...white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Security Score Summary', margin, y);

  y += 16;

  // Score circle (simulated with rect)
  const scoreColor =
    data.overallScore >= 80 ? green : data.overallScore >= 50 ? yellow : red;
  doc.setFillColor(...darkBg);
  doc.roundedRect(margin, y, contentWidth, 80, 8, 8, 'F');

  // Overall score
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(36);
  doc.setTextColor(...scoreColor);
  doc.text(`${data.overallScore}%`, margin + 24, y + 52);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...muted);
  doc.text('OVERALL SCORE', margin + 24, y + 68);

  // Sub-scores
  const subScores = [
    { label: 'Email Breach', value: data.emailBreachScore, color: cyan },
    { label: 'Network Security', value: data.networkSecurityScore, color: green },
    { label: 'Action Items', value: data.actionItemsScore, color: cyan },
  ];

  subScores.forEach((sub, i) => {
    const x = margin + 200 + i * 120;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(...sub.color);
    doc.text(`${sub.value}%`, x, y + 38);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...muted);
    doc.text(sub.label.toUpperCase(), x, y + 54);

    // Mini bar
    doc.setFillColor(...darkBg);
    doc.roundedRect(x, y + 62, 90, 4, 2, 2, 'F');
    doc.setFillColor(...sub.color);
    doc.roundedRect(x, y + 62, (90 * sub.value) / 100, 4, 2, 2, 'F');
  });

  y += 110;

  // ===== ACTION CENTER SUMMARY =====
  doc.setTextColor(...white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Action Center Status', margin, y);

  y += 16;

  doc.setFillColor(...darkBg);
  doc.roundedRect(margin, y, contentWidth, 50, 8, 8, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(...green);
  doc.text(`${data.completedActions}/${data.totalActions}`, margin + 24, y + 32);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...white);
  doc.text('Tasks Completed', margin + 80, y + 24);

  doc.setFontSize(8);
  doc.setTextColor(...muted);
  const pct = data.totalActions > 0 ? Math.round((data.completedActions / data.totalActions) * 100) : 0;
  doc.text(`${pct}% of recommended security actions completed`, margin + 80, y + 40);

  // Progress bar
  doc.setFillColor(40, 48, 56);
  doc.roundedRect(margin + 280, y + 20, contentWidth - 300, 6, 3, 3, 'F');
  doc.setFillColor(...green);
  const barWidth = ((contentWidth - 300) * pct) / 100;
  if (barWidth > 0) doc.roundedRect(margin + 280, y + 20, barWidth, 6, 3, 3, 'F');

  y += 80;

  // ===== SCAN HISTORY =====
  doc.setTextColor(...white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Recent Scan History', margin, y);

  y += 12;

  if (data.scanHistory.length === 0) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...muted);
    doc.text('No scans recorded yet.', margin, y + 16);
    y += 40;
  } else {
    // Table header
    doc.setFillColor(28, 35, 43);
    doc.roundedRect(margin, y, contentWidth, 28, 4, 4, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...cyan);
    const colX = [margin + 12, margin + 150, margin + 280, margin + 380, margin + 440];
    doc.text('TYPE', colX[0], y + 18);
    doc.text('TARGET', colX[1], y + 18);
    doc.text('STATUS', colX[2], y + 18);
    doc.text('SCORE', colX[3], y + 18);
    doc.text('DATE', colX[4], y + 18);

    y += 32;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);

    data.scanHistory.slice(0, 10).forEach((scan, i) => {
      if (y > pageHeight - 80) {
        doc.addPage();
        doc.setFillColor(...darkBg);
        doc.rect(0, 0, pageWidth, 40, 'F');
        doc.setTextColor(...white);
        doc.setFontSize(10);
        doc.text('Sentinel Security Report (continued)', margin, 25);
        y = 60;
      }

      if (i % 2 === 0) {
        doc.setFillColor(22, 28, 35);
        doc.roundedRect(margin, y, contentWidth, 24, 3, 3, 'F');
      }

      doc.setTextColor(...white);
      doc.text(scan.scanType.replace(/_/g, ' ').toUpperCase(), colX[0], y + 15);

      const target = scan.target.length > 25 ? scan.target.slice(0, 25) + '...' : scan.target;
      doc.text(target, colX[1], y + 15);

      const statusColor =
        scan.status === 'safe' || scan.status === 'secure' ? green :
        scan.status === 'warning' ? yellow : red;
      doc.setTextColor(...statusColor);
      doc.text(scan.status.toUpperCase(), colX[2], y + 15);

      doc.setTextColor(...white);
      doc.text(`${scan.score}/100`, colX[3], y + 15);

      doc.setTextColor(...muted);
      const scanDate = new Date(scan.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      doc.text(scanDate, colX[4], y + 15);

      y += 26;
    });
  }

  // ===== RECOMMENDATIONS =====
  y += 20;
  if (y > pageHeight - 120) {
    doc.addPage();
    y = 60;
  }

  doc.setTextColor(...white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Recommendations', margin, y);

  y += 16;

  const recommendations: string[] = [];
  if (data.emailBreachScore < 80) recommendations.push('Review and update passwords for accounts found in breach databases.');
  if (data.networkSecurityScore < 80) recommendations.push('Upgrade Wi-Fi to WPA2/WPA3 and verify SSL certificates on all sites you visit.');
  if (data.completedActions < data.totalActions) recommendations.push(`Complete the remaining ${data.totalActions - data.completedActions} security action items in the Action Center.`);
  if (data.overallScore < 70) recommendations.push('Your security posture needs improvement — prioritize the highest-impact items first.');
  if (recommendations.length === 0) recommendations.push('Excellent! Your security posture is strong. Continue regular monitoring.');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  recommendations.forEach((rec, i) => {
    if (y > pageHeight - 60) {
      doc.addPage();
      y = 60;
    }
    doc.setFillColor(...darkBg);
    doc.roundedRect(margin, y, contentWidth, 36, 4, 4, 'F');
    doc.setFillColor(...cyan);
    doc.circle(margin + 16, y + 18, 3, 'F');
    doc.setTextColor(...white);
    doc.text(rec, margin + 28, y + 22);
    y += 44;
  });

  // ===== FOOTER =====
  const footerY = pageHeight - 40;
  doc.setFillColor(...cyan);
  doc.rect(0, footerY - 4, pageWidth, 1, 'F');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...muted);
  doc.text(
    'This is a privacy-focused research tool. Data shown is simulated for demonstration purposes.',
    margin,
    footerY + 10
  );
  doc.text(`Sentinel Security Suite — ${new Date().getFullYear()}`, pageWidth - margin, footerY + 10, {
    align: 'right',
  });

  // Save
  const filename = `sentinel-security-report-${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(filename);
}
