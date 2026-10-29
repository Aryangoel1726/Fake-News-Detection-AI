import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  actions?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  badge,
  actions,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap items-center justify-between gap-3 border-b border-[#DED6C9] dark:border-[#33312B] pb-3 mb-4 ${className}`}>
      <div className="flex items-center gap-2.5">
        <h3 className="font-serif font-bold text-lg text-[#171717] dark:text-[#EDE8DF]">
          {title}
        </h3>
        {badge && (
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#68645E] dark:text-[#9E988F] px-2 py-0.5 border border-[#DED6C9] dark:border-[#33312B] rounded">
            {badge}
          </span>
        )}
      </div>
      {(subtitle || actions) && (
        <div className="flex items-center gap-3">
          {subtitle && (
            <span className="text-xs font-mono text-[#68645E] dark:text-[#9E988F]">
              {subtitle}
            </span>
          )}
          {actions}
        </div>
      )}
    </div>
  );
};
