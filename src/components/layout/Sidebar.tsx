import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ScanEye,
  History,
  BarChart3,
  Globe2,
  Database,
  Cpu,
  Settings,
  Newspaper,
  ShieldAlert,
} from 'lucide-react';

interface SidebarProps {
  historyCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ historyCount = 5 }) => {
  const navItems = [
    { label: 'Analyze News', path: '/', icon: ScanEye },
    { label: 'History', path: '/history', icon: History, count: historyCount },
    { label: 'Insights', path: '/insights', icon: BarChart3 },
    { label: 'Sources', path: '/sources', icon: Globe2 },
    { label: 'Dataset', path: '/dataset', icon: Database },
    { label: 'Model Info', path: '/model-info', icon: Cpu },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside className="w-full lg:w-[240px] flex-shrink-0 border-r border-[#DED6C9] dark:border-[#33312B] bg-[#F6F1E7] dark:bg-[#141311] p-4 flex flex-col justify-between min-h-[calc(100vh-60px)] transition-colors">
      <div>
        {/* Editorial Tagline */}
        <div className="pt-2 pb-5 px-3 border-b border-[#DED6C9] dark:border-[#33312B] mb-4">
          <div className="text-[10px] font-mono tracking-[0.16em] uppercase font-bold text-[#C92323] dark:text-[#E03535]">
            Facts Today
          </div>
          <div className="text-[11px] font-serif font-semibold tracking-wide text-[#68645E] dark:text-[#9E988F]">
            A Better Tomorrow
          </div>
        </div>

        {/* Navigation list */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center justify-between px-3 py-2.5 rounded-[8px] text-xs font-mono tracking-wider transition-all relative ${
                    isActive
                      ? 'bg-[#EAE4D7] dark:bg-[#252320] text-[#171717] dark:text-[#EDE8DF] font-semibold shadow-sm'
                      : 'text-[#68645E] dark:text-[#9E988F] hover:bg-[#FBF8F1] dark:hover:bg-[#1D1C19] hover:text-[#171717] dark:hover:text-[#EDE8DF]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#C92323]' : 'text-[#68645E] dark:text-[#9E988F]'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.count !== undefined && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#DED6C9] dark:bg-[#33312B] text-[#171717] dark:text-[#EDE8DF]">
                        {item.count}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] bg-[#171717] dark:bg-[#EDE8DF] rounded-r" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Editorial Quote Card */}
      <div className="mt-8 pt-4 border-t border-[#DED6C9] dark:border-[#33312B]">
        <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px] p-3 text-left">
          <div className="flex items-center gap-2 mb-2 text-[#C92323] dark:text-[#E03535]">
            <Newspaper className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
              Editorial Note
            </span>
          </div>
          <p className="font-serif italic text-xs leading-relaxed text-[#171717] dark:text-[#EDE8DF] mb-2">
            “Good journalism keeps democracy alive.”
          </p>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#68645E] dark:text-[#9E988F]">
            <ShieldAlert className="w-3 h-3 text-[#D92D2D]" />
            <span>Demonstration mode</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
