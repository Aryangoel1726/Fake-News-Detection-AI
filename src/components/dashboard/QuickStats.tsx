import React from 'react';
import { MOCK_STATISTICS } from '../../data/mockAnalyses';
import { MetricCard } from '../common/MetricCard';
import { BookOpen, Award, CheckCircle, AlertTriangle } from 'lucide-react';

export const QuickStats: React.FC = () => {
  return (
    <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-5 shadow-sm mb-6 transition-colors">
      <div className="flex items-center justify-between border-b border-[#DED6C9] dark:border-[#33312B] pb-3 mb-4">
        <h4 className="font-serif font-bold text-base text-[#171717] dark:text-[#EDE8DF]">
          Quick Stats
        </h4>
        <span className="text-[10px] font-mono text-[#68645E] dark:text-[#9E988F] px-2 py-0.5 border border-[#DED6C9] dark:border-[#33312B] rounded">
          Last 7 days
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <MetricCard
          label="Articles Analyzed"
          value={MOCK_STATISTICS.articlesAnalyzed.toLocaleString()}
          icon={BookOpen}
          colorScheme="neutral"
        />
        <MetricCard
          label="Accuracy*"
          value={`${MOCK_STATISTICS.accuracyRate}%`}
          icon={Award}
          colorScheme="real"
        />
        <MetricCard
          label="Real News"
          value={MOCK_STATISTICS.realNewsCount}
          icon={CheckCircle}
          colorScheme="real"
        />
        <MetricCard
          label="Fake News"
          value={MOCK_STATISTICS.fakeNewsCount}
          icon={AlertTriangle}
          colorScheme="fake"
        />
      </div>

      <div className="text-[10px] font-mono text-[#68645E] dark:text-[#9E988F] mt-3 pt-2 border-t border-[#DED6C9]/60 dark:border-[#33312B]/60">
        *Sample dashboard metric, not a verified laboratory ground truth accuracy.
      </div>
    </div>
  );
};
