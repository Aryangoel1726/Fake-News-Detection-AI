import React, { useState } from 'react';
import { AnalysisRecord } from '../types/analysis';
import { StatusBadge } from '../components/common/StatusBadge';
import { Search, Clock, Trash2, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HistoryProps {
  records: AnalysisRecord[];
  onSelectRecord: (record: AnalysisRecord) => void;
  onClearHistory: () => void;
}

export const History: React.FC<HistoryProps> = ({
  records,
  onSelectRecord,
  onClearHistory,
}) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'fake' | 'real' | 'inc'>('all');
  const navigate = useNavigate();

  const filtered = records.filter((r) => {
    const matchesText = r.headline.toLowerCase().includes(filterQuery.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(filterQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || r.status === statusFilter;
    return matchesText && matchesStatus;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="border-b border-[#DED6C9] dark:border-[#33312B] pb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#C92323] dark:text-[#E03535] font-semibold">
            Audit Trail
          </span>
          <h1 className="font-serif font-bold text-3xl text-[#171717] dark:text-[#EDE8DF]">
            Analysis History
          </h1>
          <p className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-1">
            Browse and inspect previous algorithmic credibility evaluations.
          </p>
        </div>

        <button
          onClick={onClearHistory}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DED6C9] dark:border-[#33312B] text-xs font-mono text-[#D92D2D] hover:bg-[#FCE3DE] dark:hover:bg-[#351C1A] transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Reset History</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px] p-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-[#68645E] dark:text-[#9E988F] absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter by keyword or headline..."
            className="w-full bg-[#F6F1E7] dark:bg-[#141311] border border-[#DED6C9] dark:border-[#33312B] rounded-[8px] pl-9 pr-3 py-1.5 text-xs font-mono focus:outline-none focus:border-[#C92323]"
          />
        </div>

        <div className="flex items-center gap-1">
          {(['all', 'fake', 'real', 'inc'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                statusFilter === s
                  ? 'bg-[#171717] dark:bg-[#EDE8DF] text-[#F6F1E7] dark:text-[#171717] font-semibold'
                  : 'text-[#68645E] dark:text-[#9E988F] hover:bg-[#EAE4D7] dark:hover:bg-[#252320]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] divide-y divide-[#DED6C9] dark:divide-[#33312B] overflow-hidden">
        {filtered.length > 0 ? (
          filtered.map((record) => (
            <div
              key={record.id}
              onClick={() => {
                onSelectRecord(record);
                navigate('/');
              }}
              className="p-4 md:p-5 hover:bg-[#EAE4D7]/40 dark:hover:bg-[#252320]/40 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <StatusBadge status={record.status} size="sm" />
                  <span className="text-[11px] font-mono text-[#68645E] dark:text-[#9E988F] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {record.timestamp}
                  </span>
                  {record.isUserAnalysis && (
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#EAE4D7] dark:bg-[#252320] text-[#171717] dark:text-[#EDE8DF]">
                      Live Input
                    </span>
                  )}
                </div>
                <h3 className="font-serif font-bold text-base md:text-lg text-[#171717] dark:text-[#EDE8DF] group-hover:text-[#C92323] transition-colors">
                  {record.headline}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {record.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-[#68645E] dark:text-[#9E988F] px-2 py-0.5 border border-[#DED6C9] dark:border-[#33312B] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 flex-shrink-0">
                <div className="font-mono font-bold text-2xl text-[#171717] dark:text-[#EDE8DF]">
                  {record.confidence}%
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C92323] dark:text-[#E03535] flex items-center gap-0.5 group-hover:underline">
                  Inspect <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center text-xs font-mono text-[#68645E] dark:text-[#9E988F]">
            No analysis records match the search criteria.
          </div>
        )}
      </div>
    </div>
  );
};
