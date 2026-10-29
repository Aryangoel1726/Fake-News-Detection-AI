import React from 'react';
import { AnalysisRecord } from '../types/analysis';
import { HeroSection } from '../components/dashboard/HeroSection';
import { NewsInputPanel } from '../components/dashboard/NewsInputPanel';
import { AnalysisResult } from '../components/dashboard/AnalysisResult';
import { TextAnalysis } from '../components/dashboard/TextAnalysis';
import { SourceAnalysis } from '../components/dashboard/SourceAnalysis';
import { QuickStats } from '../components/dashboard/QuickStats';
import { RecentAnalyses } from '../components/dashboard/RecentAnalyses';
import { RelatedArticles } from '../components/dashboard/RelatedArticles';

interface DashboardProps {
  currentAnalysis: AnalysisRecord;
  historyRecords: AnalysisRecord[];
  onAnalyze: (content: string, type: 'text' | 'url' | 'sample', sampleId?: string) => void;
  onSelectRecord: (record: AnalysisRecord) => void;
  isLoading: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({
  currentAnalysis,
  historyRecords,
  onAnalyze,
  onSelectRecord,
  isLoading,
}) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8 items-start">
      {/* Central Analysis Workspace (flexible ~880px+) */}
      <div className="min-w-0 space-y-8">
        <HeroSection />

        <NewsInputPanel onAnalyze={onAnalyze} isLoading={isLoading} />

        <AnalysisResult analysis={currentAnalysis} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <TextAnalysis analysis={currentAnalysis} />
          <SourceAnalysis analysis={currentAnalysis} />
        </div>

        <RelatedArticles />
      </div>

      {/* Right Intelligence Sidebar (~360-380px) */}
      <aside className="w-full space-y-6">
        <QuickStats />
        <RecentAnalyses
          records={historyRecords}
          onSelectRecord={onSelectRecord}
          selectedId={currentAnalysis.id}
        />
      </aside>
    </div>
  );
};
