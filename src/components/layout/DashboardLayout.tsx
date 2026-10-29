import React from 'react';
import { TopNavigation } from './TopNavigation';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  historyCount?: number;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  searchQuery,
  onSearchChange,
  historyCount,
}) => {
  return (
    <div className="min-h-screen bg-[#F6F1E7] dark:bg-[#141311] text-[#171717] dark:text-[#EDE8DF] flex flex-col font-sans transition-colors">
      <TopNavigation searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <div className="flex-1 flex flex-col lg:flex-row max-w-[1720px] w-full mx-auto">
        <Sidebar historyCount={historyCount} />
        <main className="flex-1 p-4 md:p-6 lg:p-8 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
};
