import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { AnalysisRecord } from '../../types/analysis';

interface ConfidenceChartProps {
  analysis: AnalysisRecord;
}

export const ConfidenceChart: React.FC<ConfidenceChartProps> = ({ analysis }) => {
  const data = [
    { name: 'Fake Indicators', value: analysis.indicators.fake, color: '#D92D2D' },
    { name: 'Real Indicators', value: analysis.indicators.real, color: '#13834D' },
    { name: 'Neutral Indicators', value: analysis.indicators.neutral, color: '#7051D8' },
  ];

  return (
    <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[12px] p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#DED6C9] dark:border-[#33312B] pb-2 mb-3">
        <h4 className="font-serif font-bold text-sm text-[#171717] dark:text-[#EDE8DF]">
          Confidence Analysis
        </h4>
        <span className="text-[10px] font-mono text-[#68645E] dark:text-[#9E988F]">
          INDICATORS
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Recharts Donut */}
        <div className="relative w-36 h-36 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={38}
                outerRadius={56}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="font-mono font-bold text-lg text-[#171717] dark:text-[#EDE8DF]">
              {analysis.confidence}%
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#68645E] dark:text-[#9E988F]">
              {analysis.status === 'fake' ? 'Fake' : analysis.status === 'real' ? 'Real' : 'Unsure'}
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 w-full space-y-2 text-xs font-mono">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-[#68645E] dark:text-[#9E988F]">{item.name}</span>
              </div>
              <span className="font-bold text-[#171717] dark:text-[#EDE8DF]">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
