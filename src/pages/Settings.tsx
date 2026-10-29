import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Trash2, CheckCircle2 } from 'lucide-react';

interface SettingsProps {
  onClearHistory: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onClearHistory }) => {
  const { theme, toggleTheme } = useTheme();
  const [cleared, setCleared] = React.useState(false);

  const handleClear = () => {
    onClearHistory();
    setCleared(true);
    setTimeout(() => setCleared(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="border-b border-[#DED6C9] dark:border-[#33312B] pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C92323] dark:text-[#E03535] font-semibold">
          Preferences
        </span>
        <h1 className="font-serif font-bold text-3xl text-[#171717] dark:text-[#EDE8DF]">
          Interface Settings
        </h1>
        <p className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-1">
          Configure appearance, local data retention, and display parameters.
        </p>
      </div>

      <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-6 shadow-sm space-y-6">
        {/* Theme Settings */}
        <div className="flex items-center justify-between pb-6 border-b border-[#DED6C9] dark:border-[#33312B]">
          <div>
            <h3 className="font-serif font-bold text-base text-[#171717] dark:text-[#EDE8DF]">
              Visual Theme
            </h3>
            <p className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-0.5">
              Switch between the primary warm editorial paper palette and dark digital newsroom mode.
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DED6C9] dark:border-[#33312B] bg-[#F6F1E7] dark:bg-[#141311] text-xs font-mono text-[#171717] dark:text-[#EDE8DF] hover:border-[#68645E] transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#D4A843]" /> : <Moon className="w-4 h-4 text-[#7051D8]" />}
            <span>{theme === 'dark' ? 'Dark Room Mode' : 'Warm Paper Mode'}</span>
          </button>
        </div>

        {/* Clear LocalStorage History */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif font-bold text-base text-[#171717] dark:text-[#EDE8DF]">
              Local Audit Storage
            </h3>
            <p className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-0.5">
              Reset cached mock news analyses and revert to clean benchmark sample cases.
            </p>
          </div>
          <button
            onClick={handleClear}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D92D2D] text-xs font-mono text-[#D92D2D] hover:bg-[#FCE3DE] dark:hover:bg-[#351C1A] transition-colors"
          >
            {cleared ? <CheckCircle2 className="w-4 h-4" /> : <Trash2 className="w-4 h-4" />}
            <span>{cleared ? 'Audit Cleared' : 'Clear Local History'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
