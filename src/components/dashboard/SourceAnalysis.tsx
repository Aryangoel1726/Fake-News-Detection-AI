import React from 'react';
import { AnalysisRecord } from '../../types/analysis';
import { SectionHeader } from '../common/SectionHeader';
import { Globe } from 'lucide-react';

interface SourceAnalysisProps {
  analysis: AnalysisRecord;
}

export const SourceAnalysis: React.FC<SourceAnalysisProps> = ({ analysis }) => {
  const { source } = analysis;

  const rows = [
    { label: 'Domain', value: source.domain, isSuspicious: source.isSuspicious },
    { label: 'Reliability Score', value: source.reliabilityScore, isSuspicious: source.isSuspicious && source.reliabilityScore !== 'Unknown' },
    { label: 'Domain Age', value: source.domainAge, isSuspicious: false },
    { label: 'Source Type', value: source.sourceType, isSuspicious: false },
    { label: 'Bias Detection', value: source.biasDetection, isSuspicious: source.biasDetection.toLowerCase().includes('high') },
  ];

  return (
    <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-5 md:p-6 shadow-sm h-full flex flex-col justify-between transition-colors">
      <div>
        <SectionHeader title="Source Analysis" badge="SAMPLE DATA" />

        <div className="divide-y divide-[#DED6C9] dark:divide-[#33312B]">
          {rows.map((row) => (
            <div key={row.label} className="py-2.5 flex items-center justify-between text-xs font-mono">
              <span className="text-[#68645E] dark:text-[#9E988F] uppercase tracking-wider">
                {row.label}
              </span>
              <span
                className={`font-semibold ${
                  row.isSuspicious
                    ? 'text-[#D92D2D] dark:text-[#E03535]'
                    : 'text-[#171717] dark:text-[#EDE8DF]'
                }`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-[#DED6C9]/60 dark:border-[#33312B]/60 text-[10px] font-mono text-[#68645E] dark:text-[#9E988F] flex items-center justify-between mt-4">
        <span className="flex items-center gap-1.5">
          <Globe className="w-3 h-3" />
          <span>Origin Registry Lookup</span>
        </span>
        <span>Simulated Metadata</span>
      </div>
    </div>
  );
};
