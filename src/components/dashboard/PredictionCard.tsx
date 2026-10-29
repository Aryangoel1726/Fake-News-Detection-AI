import React from 'react';
import { AnalysisRecord } from '../../types/analysis';
import { StatusBadge } from '../common/StatusBadge';
import { AlertTriangle, CheckCircle2, HelpCircle } from 'lucide-react';

interface PredictionCardProps {
  analysis: AnalysisRecord;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ analysis }) => {
  const isFake = analysis.status === 'fake';
  const isReal = analysis.status === 'real';

  const statusBackground = isFake
    ? 'bg-[#FCE3DE]/70 dark:bg-[#351C1A]/70 border-[#F6B7AE] dark:border-[#522926]'
    : isReal
    ? 'bg-[#DDF1E3]/70 dark:bg-[#173322]/70 border-[#B7E2C3] dark:border-[#204930]'
    : 'bg-[#EAE4FA]/70 dark:bg-[#282142]/70 border-[#D1C3F5] dark:border-[#3E3366]';

  const statusTextColor = isFake
    ? 'text-[#D92D2D] dark:text-[#E03535]'
    : isReal
    ? 'text-[#13834D] dark:text-[#22A062]'
    : 'text-[#7051D8] dark:text-[#8A6EE8]';

  const StatusIcon = isFake ? AlertTriangle : isReal ? CheckCircle2 : HelpCircle;

  return (
    <div className="flex flex-col justify-between h-full space-y-4">
      {/* Top Banner: Status + Confidence Big */}
      <div className={`p-4 rounded-[12px] border ${statusBackground} flex flex-wrap items-center justify-between gap-4 transition-colors`}>
        <div className="flex items-center gap-3.5">
          <div className={`w-12 h-12 rounded-full border border-current flex items-center justify-center ${statusTextColor}`}>
            <StatusIcon className="w-6 h-6" />
          </div>
          <div>
            <div className={`font-serif font-bold text-2xl ${statusTextColor}`}>
              {analysis.status === 'fake' ? 'Fake News' : analysis.status === 'real' ? 'Likely Real' : 'Inconclusive'}
            </div>
            <div className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-0.5">
              {analysis.status === 'fake'
                ? 'High probability of misinformation'
                : analysis.status === 'real'
                ? 'Low probability of misinformation'
                : 'Mixed signals requiring further editorial verification'}
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className={`font-mono font-black text-4xl sm:text-5xl tracking-tight ${statusTextColor}`}>
            {analysis.confidence}%
          </div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#68645E] dark:text-[#9E988F]">
            Confidence Score
          </div>
        </div>
      </div>

      {/* Main Headline & Description */}
      <div>
        <h4 className="font-serif font-bold text-xl md:text-2xl text-[#171717] dark:text-[#EDE8DF] leading-snug mb-3">
          {analysis.headline}
        </h4>
        <p className="text-sm text-[#68645E] dark:text-[#9E988F] leading-relaxed mb-4">
          {analysis.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {analysis.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                isFake
                  ? 'bg-[#FCE3DE] dark:bg-[#351C1A] text-[#D92D2D] dark:text-[#E03535] border-[#F6B7AE] dark:border-[#522926]'
                  : isReal
                  ? 'bg-[#DDF1E3] dark:bg-[#173322] text-[#13834D] dark:text-[#22A062] border-[#B7E2C3] dark:border-[#204930]'
                  : 'bg-[#EAE4FA] dark:bg-[#282142] text-[#7051D8] dark:text-[#8A6EE8] border-[#D1C3F5] dark:border-[#3E3366]'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="pt-3 border-t border-[#DED6C9]/60 dark:border-[#33312B]/60 text-[10px] font-mono text-[#68645E] dark:text-[#9E988F] flex items-center justify-between">
          <span>{analysis.mockNote || 'Sample record. Percentages are simulated demonstration metrics.'}</span>
          <StatusBadge status={analysis.status} size="sm" showIcon={false} />
        </div>
      </div>
    </div>
  );
};
