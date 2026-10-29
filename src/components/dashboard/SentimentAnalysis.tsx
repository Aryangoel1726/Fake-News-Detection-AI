import React from 'react';
import { AnalysisRecord } from '../../types/analysis';

interface SentimentAnalysisProps {
  analysis: AnalysisRecord;
}

export const SentimentAnalysis: React.FC<SentimentAnalysisProps> = ({ analysis }) => {
  const bars = [
    { label: 'Negative', value: analysis.sentiment.negative, color: '#D92D2D' },
    { label: 'Neutral', value: analysis.sentiment.neutral, color: '#7051D8' },
    { label: 'Positive', value: analysis.sentiment.positive, color: '#13834D' },
  ];

  return (
    <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[12px] p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#DED6C9] dark:border-[#33312B] pb-2 mb-3">
        <h4 className="font-serif font-bold text-sm text-[#171717] dark:text-[#EDE8DF]">
          Sentiment Analysis
        </h4>
        <span className="text-[10px] font-mono text-[#68645E] dark:text-[#9E988F]">
          EMOTIONAL POLARITY
        </span>
      </div>

      <div className="space-y-3">
        {bars.map((bar) => (
          <div key={bar.label} className="space-y-1">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#68645E] dark:text-[#9E988F] uppercase tracking-wider">{bar.label}</span>
              <span className="font-bold text-[#171717] dark:text-[#EDE8DF]">{bar.value}%</span>
            </div>
            {/* Segmented/smooth progress bar */}
            <div className="w-full h-2.5 bg-[#EAE4D7] dark:bg-[#252320] rounded-full overflow-hidden flex">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${bar.value}%`,
                  backgroundColor: bar.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
