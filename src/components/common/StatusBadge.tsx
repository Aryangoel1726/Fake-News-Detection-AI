import React from 'react';
import { ClassificationStatus } from '../../types/analysis';
import { AlertTriangle, CheckCircle2, HelpCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: ClassificationStatus;
  showIcon?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  showIcon = true,
  className = '',
  size = 'md',
}) => {
  const config = {
    fake: {
      label: 'Fake News',
      shortLabel: 'Fake',
      bg: 'bg-[#FCE3DE] text-[#D92D2D] border-[#F6B7AE]',
      darkBg: 'dark:bg-[#351C1A] dark:text-[#E03535] dark:border-[#522926]',
      dot: 'bg-[#D92D2D]',
      icon: AlertTriangle,
    },
    real: {
      label: 'Likely Real',
      shortLabel: 'Real',
      bg: 'bg-[#DDF1E3] text-[#13834D] border-[#B7E2C3]',
      darkBg: 'dark:bg-[#173322] dark:text-[#22A062] dark:border-[#204930]',
      dot: 'bg-[#13834D]',
      icon: CheckCircle2,
    },
    inc: {
      label: 'Inconclusive',
      shortLabel: 'Unsure',
      bg: 'bg-[#EAE4FA] text-[#7051D8] border-[#D1C3F5]',
      darkBg: 'dark:bg-[#282142] dark:text-[#8A6EE8] dark:border-[#3E3366]',
      dot: 'bg-[#7051D8]',
      icon: HelpCircle,
    },
  }[status];

  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-medium',
  }[size];

  return (
    <span
      className={`inline-flex items-center font-mono uppercase tracking-wider rounded-full border ${config.bg} ${config.darkBg} ${sizeClasses} ${className}`}
    >
      {showIcon && <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />}
      <span>{size === 'sm' ? config.shortLabel : config.label}</span>
    </span>
  );
};
