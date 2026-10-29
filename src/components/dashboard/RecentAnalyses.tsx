import React from 'react';
import { Link } from 'react-router-dom';
import { AnalysisRecord } from '../../types/analysis';
import { StatusBadge } from '../common/StatusBadge';
import { ArrowRight, Clock } from 'lucide-react';

interface RecentAnalysesProps {
  records: AnalysisRecord[];
  onSelectRecord: (record: AnalysisRecord) => void;
  selectedId?: string;
}

export const RecentAnalyses: React.FC<RecentAnalysesProps> = ({
  records,
  onSelectRecord,
  selectedId,
}) => {
  return (
    <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-5 shadow-sm transition-colors">
      <div className="flex items-center justify-between border-b border-[#DED6C9] dark:border-[#33312B] pb-3 mb-3">
        <h4 className="font-serif font-bold text-base text-[#171717] dark:text-[#EDE8DF]">
          Recent Analyses
        </h4>
        <Link
          to="/history"
          className="text-xs font-mono uppercase tracking-wider text-[#C92323] dark:text-[#E03535] hover:underline flex items-center gap-1"
        >
          <span>View All</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="divide-y divide-[#DED6C9] dark:divide-[#33312B]">
        {records.length > 0 ? (
          records.slice(0, 5).map((record) => (
            <button
              key={record.id}
              type="button"
              onClick={() => onSelectRecord(record)}
              className={`w-full text-left py-3 transition-colors flex items-start justify-between gap-3 group ${
                selectedId === record.id ? 'opacity-100 font-semibold' : 'hover:bg-[#EAE4D7]/40 dark:hover:bg-[#252320]/40'
              }`}
            >
              <div className="flex-1 min-w-0 pr-1">
                <div className="font-serif text-xs md:text-sm text-[#171717] dark:text-[#EDE8DF] line-clamp-2 group-hover:text-[#C92323] transition-colors">
                  {record.headline}
                </div>
                <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-[#68645E] dark:text-[#9E988F]">
                  <Clock className="w-3 h-3" />
                  <span>{record.relativeTime}</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <StatusBadge status={record.status} size="sm" />
                <span className="font-mono text-xs font-bold text-[#171717] dark:text-[#EDE8DF]">
                  {record.confidence}%
                </span>
              </div>
            </button>
          ))
        ) : (
          <div className="py-6 text-center text-xs font-mono text-[#68645E] dark:text-[#9E988F]">
            No records match your search filter.
          </div>
        )}
      </div>
    </div>
  );
};
