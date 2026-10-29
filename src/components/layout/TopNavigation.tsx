import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface TopNavigationProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Dashboard', path: '/' },
    { label: 'Analyze', path: '/analyze' },
    { label: 'History', path: '/history' },
    { label: 'Insights', path: '/insights' },
    { label: 'Dataset', path: '/dataset' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 h-[60px] bg-[#F6F1E7]/95 dark:bg-[#141311]/95 backdrop-blur border-b border-[#DED6C9] dark:border-[#33312B] px-4 md:px-7 flex items-center justify-between transition-colors">
      {/* Brand logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[#C92323] flex items-center justify-center relative shadow-sm">
          <div className="w-3.5 h-3.5 rounded-full bg-[#C92323]" />
          <div className="absolute inset-0 rounded-full border border-dashed border-[#C92323]/50 animate-spin-slow" />
        </div>
        <NavLink to="/" className="flex flex-col">
          <span className="font-serif font-extrabold text-xl tracking-tight text-[#171717] dark:text-[#EDE8DF]">
            TruthLens
          </span>
        </NavLink>
      </div>

      {/* Center Nav Links */}
      <nav className="hidden lg:flex items-center gap-1 h-full">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `h-full px-4 flex items-center text-xs font-mono uppercase tracking-wider transition-colors relative ${
                isActive
                  ? 'text-[#171717] dark:text-[#EDE8DF] font-semibold'
                  : 'text-[#68645E] dark:text-[#9E988F] hover:text-[#171717] dark:hover:text-[#EDE8DF]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#C92323]" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Right Tools: Search, Theme Toggle, Avatar */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative flex items-center">
          <Search className="w-3.5 h-3.5 text-[#68645E] dark:text-[#9E988F] absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search records, keywords..."
            className="w-40 sm:w-56 pl-8 pr-3 py-1.5 text-xs font-mono bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-full text-[#171717] dark:text-[#EDE8DF] placeholder-[#68645E]/70 dark:placeholder-[#9E988F]/70 focus:outline-none focus:border-[#C92323] transition-all"
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-8 h-8 rounded-full border border-[#DED6C9] dark:border-[#33312B] flex items-center justify-center text-[#68645E] dark:text-[#9E988F] hover:text-[#171717] dark:hover:text-[#EDE8DF] hover:bg-[#FBF8F1] dark:hover:bg-[#1D1C19] transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>

        {/* User Avatar */}
        <div
          title="Investigative Desk User"
          className="w-8 h-8 rounded-full bg-[#171717] dark:bg-[#EDE8DF] text-[#F6F1E7] dark:text-[#171717] flex items-center justify-center font-mono font-bold text-xs shadow-inner"
        >
          D
        </div>
      </div>
    </header>
  );
};
