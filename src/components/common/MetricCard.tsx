import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  subtext?: string;
  colorScheme?: 'neutral' | 'real' | 'fake' | 'purple';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  icon: Icon,
  subtext,
  colorScheme = 'neutral',
}) => {
  const colorMap = {
    neutral: 'text-[#171717] dark:text-[#EDE8DF]',
    real: 'text-[#13834D] dark:text-[#22A062]',
    fake: 'text-[#D92D2D] dark:text-[#E03535]',
    purple: 'text-[#7051D8] dark:text-[#8A6EE8]',
  };

  const iconBgMap = {
    neutral: 'bg-[#EAE4D7] dark:bg-[#2B2823] text-[#68645E] dark:text-[#9E988F]',
    real: 'bg-[#DDF1E3] dark:bg-[#173322] text-[#13834D] dark:text-[#22A062]',
    fake: 'bg-[#FCE3DE] dark:bg-[#351C1A] text-[#D92D2D] dark:text-[#E03535]',
    purple: 'bg-[#EAE4FA] dark:bg-[#282142] text-[#7051D8] dark:text-[#8A6EE8]',
  };

  return (
    <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px] p-3.5 flex flex-col justify-between transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#68645E] dark:text-[#9E988F]">
          {label}
        </span>
        {Icon && (
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${iconBgMap[colorScheme]}`}>
            <Icon className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
      <div>
        <div className={`font-mono font-bold text-2xl tracking-tight ${colorMap[colorScheme]}`}>
          {value}
        </div>
        {subtext && (
          <div className="text-[10px] text-[#68645E] dark:text-[#9E988F] mt-0.5">
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};
