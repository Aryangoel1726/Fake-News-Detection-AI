import React, { useState } from 'react';
import { AnalysisRecord } from '../../types/analysis';
import { SectionHeader } from '../common/SectionHeader';
import { Tag, Building2, AlertCircle } from 'lucide-react';

interface TextAnalysisProps {
  analysis: AnalysisRecord;
}

export const TextAnalysis: React.FC<TextAnalysisProps> = ({ analysis }) => {
  const [activeTab, setActiveTab] = useState<'Keywords' | 'Entities' | 'Linguistic Features'>('Keywords');

  const severityColors = {
    High: 'text-[#D92D2D] bg-[#FCE3DE] border-[#F6B7AE] dark:bg-[#351C1A] dark:text-[#E03535] dark:border-[#522926]',
    Medium: 'text-[#7051D8] bg-[#EAE4FA] border-[#D1C3F5] dark:bg-[#282142] dark:text-[#8A6EE8] dark:border-[#3E3366]',
    Low: 'text-[#13834D] bg-[#DDF1E3] border-[#B7E2C3] dark:bg-[#173322] dark:text-[#22A062] dark:border-[#204930]',
    None: 'text-[#68645E] bg-[#EAE4D7] border-[#DED6C9] dark:bg-[#252320] dark:text-[#9E988F] dark:border-[#33312B]',
  };

  return (
    <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-5 md:p-6 shadow-sm h-full flex flex-col justify-between transition-colors">
      <div>
        <SectionHeader title="Text Analysis" />

        {/* Sub-tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EAE4D7] dark:bg-[#252320] rounded-full border border-[#DED6C9] dark:border-[#33312B] mb-5 w-fit">
          {(['Keywords', 'Entities', 'Linguistic Features'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === tab
                  ? 'bg-[#171717] dark:bg-[#EDE8DF] text-[#F6F1E7] dark:text-[#171717] font-semibold shadow-sm'
                  : 'text-[#68645E] dark:text-[#9E988F] hover:text-[#171717] dark:hover:text-[#EDE8DF]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Keywords Tab */}
        {activeTab === 'Keywords' && (
          <div className="flex flex-wrap gap-2 pt-1">
            {analysis.keywords.map((kw) => (
              <span
                key={kw}
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border border-[#DED6C9] dark:border-[#33312B] bg-[#F6F1E7] dark:bg-[#141311] text-[#171717] dark:text-[#EDE8DF]"
              >
                <Tag className="w-3 h-3 text-[#C92323]" />
                <span>{kw}</span>
              </span>
            ))}
          </div>
        )}

        {/* Entities Tab */}
        {activeTab === 'Entities' && (
          <div>
            {analysis.entities.length > 0 ? (
              <div className="divide-y divide-[#DED6C9] dark:divide-[#33312B]">
                {analysis.entities.map((entity, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between text-xs font-mono">
                    <span className="font-semibold text-[#171717] dark:text-[#EDE8DF] flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-[#68645E] dark:text-[#9E988F]" />
                      {entity.name}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#EAE4D7] dark:bg-[#252320] text-[#68645E] dark:text-[#9E988F] uppercase text-[10px] tracking-wider">
                      {entity.category}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-xs font-mono text-[#68645E] dark:text-[#9E988F]">
                No named entities isolated for this specific analysis snippet.
              </div>
            )}
          </div>
        )}

        {/* Linguistic Features Tab */}
        {activeTab === 'Linguistic Features' && (
          <div className="divide-y divide-[#DED6C9] dark:divide-[#33312B] space-y-1">
            {analysis.linguisticFeatures.map((feat, i) => (
              <div key={i} className="pt-2.5 pb-2 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[#171717] dark:text-[#EDE8DF] font-sans flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#C92323]" />
                    {feat.name}
                  </span>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${severityColors[feat.severity]}`}>
                    {feat.severity}
                  </span>
                </div>
                <p className="text-[#68645E] dark:text-[#9E988F] font-mono text-[11px] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-[#DED6C9]/60 dark:border-[#33312B]/60 text-[10px] font-mono text-[#68645E] dark:text-[#9E988F] mt-4">
        Natural Language Processing Lexical Pipeline v1.4
      </div>
    </div>
  );
};
