import React from 'react';
import { SAMPLE_ANALYSES } from '../data/mockAnalyses';
import { StatusBadge } from '../components/common/StatusBadge';
import { Database, FileCode } from 'lucide-react';

export const Dataset: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="border-b border-[#DED6C9] dark:border-[#33312B] pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C92323] dark:text-[#E03535] font-semibold">
          Training Corpus
        </span>
        <h1 className="font-serif font-bold text-3xl text-[#171717] dark:text-[#EDE8DF]">
          Corpus & Benchmark Dataset
        </h1>
        <p className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-1">
          Reference corpus samples used for testing lexical and classification heuristics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px]">
          <div className="flex items-center gap-2 text-[#68645E] dark:text-[#9E988F] text-xs font-mono mb-1">
            <Database className="w-4 h-4" />
            <span>Benchmark Dataset</span>
          </div>
          <div className="font-mono font-bold text-xl text-[#171717] dark:text-[#EDE8DF]">
            WELFake / LIAR v2.1
          </div>
        </div>
        <div className="p-4 bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px]">
          <div className="flex items-center gap-2 text-[#68645E] dark:text-[#9E988F] text-xs font-mono mb-1">
            <FileCode className="w-4 h-4" />
            <span>Total Sample Records</span>
          </div>
          <div className="font-mono font-bold text-xl text-[#171717] dark:text-[#EDE8DF]">
            {SAMPLE_ANALYSES.length} Curated Scenarios
          </div>
        </div>
        <div className="p-4 bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px]">
          <div className="flex items-center gap-2 text-[#68645E] dark:text-[#9E988F] text-xs font-mono mb-1">
            <Database className="w-4 h-4" />
            <span>Lexical Classifiers</span>
          </div>
          <div className="font-mono font-bold text-xl text-[#13834D] dark:text-[#22A062]">
            Binary + Inconclusive
          </div>
        </div>
      </div>

      {/* Dataset Records Table */}
      <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#DED6C9] dark:border-[#33312B] font-mono text-xs uppercase tracking-wider text-[#68645E] dark:text-[#9E988F] font-semibold">
          Curated Benchmark Entries
        </div>
        <div className="divide-y divide-[#DED6C9] dark:divide-[#33312B]">
          {SAMPLE_ANALYSES.map((item) => (
            <div key={item.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex-1">
                <div className="font-serif font-bold text-sm text-[#171717] dark:text-[#EDE8DF] mb-1">
                  {item.headline}
                </div>
                <div className="text-[11px] text-[#68645E] dark:text-[#9E988F]">
                  Keywords: {item.keywords.join(', ')}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status={item.status} size="sm" />
                <span className="font-bold text-[#171717] dark:text-[#EDE8DF]">
                  {item.confidence}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
