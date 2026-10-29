import React from 'react';
import { MOCK_STATISTICS } from '../data/mockAnalyses';
import { MetricCard } from '../components/common/MetricCard';
import { BarChart3, TrendingUp, AlertTriangle, ShieldCheck, PieChart as PieIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export const Insights: React.FC = () => {
  const weeklyData = [
    { day: 'Mon', fake: 84, real: 110 },
    { day: 'Tue', fake: 92, real: 95 },
    { day: 'Wed', fake: 105, real: 88 },
    { day: 'Thu', fake: 78, real: 120 },
    { day: 'Fri', fake: 112, real: 94 },
    { day: 'Sat', fake: 60, real: 85 },
    { day: 'Sun', fake: 43, real: 82 },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="border-b border-[#DED6C9] dark:border-[#33312B] pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C92323] dark:text-[#E03535] font-semibold">
          Data Intelligence
        </span>
        <h1 className="font-serif font-bold text-3xl text-[#171717] dark:text-[#EDE8DF]">
          Aggregated Editorial Insights
        </h1>
        <p className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-1">
          Macro statistics and distribution trends across audited news items.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="Total Screened" value={MOCK_STATISTICS.articlesAnalyzed} icon={BarChart3} />
        <MetricCard label="System Accuracy*" value={`${MOCK_STATISTICS.accuracyRate}%`} icon={TrendingUp} colorScheme="real" />
        <MetricCard label="Misinformation" value={MOCK_STATISTICS.fakeNewsCount} icon={AlertTriangle} colorScheme="fake" />
        <MetricCard label="Verified Stories" value={MOCK_STATISTICS.realNewsCount} icon={ShieldCheck} colorScheme="real" />
      </div>

      {/* Chart */}
      <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-6">
        <div className="flex items-center justify-between mb-4 border-b border-[#DED6C9] dark:border-[#33312B] pb-2">
          <div>
            <h3 className="font-serif font-bold text-lg text-[#171717] dark:text-[#EDE8DF]">
              Weekly Verification Volume
            </h3>
            <p className="text-xs font-mono text-[#68645E] dark:text-[#9E988F]">
              Daily comparison of verified genuine vs flagged misleading content
            </p>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#DED6C9] dark:border-[#33312B]">
            SAMPLE BENCHMARK
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DED6C9" opacity={0.3} />
              <XAxis dataKey="day" stroke="#68645E" fontSize={11} fontFamily="IBM Plex Mono" />
              <YAxis stroke="#68645E" fontSize={11} fontFamily="IBM Plex Mono" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FBF8F1',
                  borderColor: '#DED6C9',
                  borderRadius: '8px',
                  fontFamily: 'IBM Plex Mono',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="fake" name="Fake News Flagged" fill="#D92D2D" radius={[4, 4, 0, 0]} />
              <Bar dataKey="real" name="Real News Verified" fill="#13834D" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-4 rounded-[10px] bg-[#EAE4D7]/50 dark:bg-[#252320]/50 border border-[#DED6C9] dark:border-[#33312B] text-xs font-mono text-[#68645E] dark:text-[#9E988F] flex items-center gap-2">
        <PieIcon className="w-4 h-4 text-[#C92323] flex-shrink-0" />
        <span>
          Note: Macro statistical aggregations represent mock benchmark training telemetry. Full historical cohort streaming will link to the Python database layer.
        </span>
      </div>
    </div>
  );
};
