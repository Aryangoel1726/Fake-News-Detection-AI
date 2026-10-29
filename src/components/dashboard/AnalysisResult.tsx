import React, { useState } from 'react';
import { AnalysisRecord } from '../../types/analysis';
import { SectionHeader } from '../common/SectionHeader';
import { PredictionCard } from './PredictionCard';
import { ConfidenceChart } from './ConfidenceChart';
import { SentimentAnalysis } from './SentimentAnalysis';
import { Share2, Download, Check } from 'lucide-react';

interface AnalysisResultProps {
  analysis: AnalysisRecord;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ analysis }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const summary = `TruthLens Analysis: "${analysis.headline}" — Status: ${analysis.status.toUpperCase()} (${analysis.confidence}% confidence, simulated).`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'TruthLens News Verification',
          text: summary,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(analysis, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `truthlens-report-${analysis.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <section id="results-section" className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-5 md:p-6 shadow-sm mb-8 transition-colors">
      <SectionHeader
        title="Analysis Result"
        badge="SIMULATED"
        subtitle={`Analyzed on ${analysis.timestamp}`}
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DED6C9] dark:border-[#33312B] bg-[#F6F1E7] dark:bg-[#141311] text-xs font-mono text-[#171717] dark:text-[#EDE8DF] hover:border-[#68645E] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#13834D]" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DED6C9] dark:border-[#33312B] bg-[#F6F1E7] dark:bg-[#141311] text-xs font-mono text-[#171717] dark:text-[#EDE8DF] hover:border-[#68645E] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Report</span>
            </button>
          </div>
        }
      />

      {/* Two-Column Grid: Prediction Card (left) & Visualizations Stack (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">
        <div className="bg-[#F6F1E7] dark:bg-[#141311] border border-[#DED6C9] dark:border-[#33312B] rounded-[12px] p-5">
          <PredictionCard analysis={analysis} />
        </div>

        <div className="flex flex-col gap-4 justify-between">
          <ConfidenceChart analysis={analysis} />
          <SentimentAnalysis analysis={analysis} />
        </div>
      </div>
    </section>
  );
};
