import React, { useState } from 'react';
import { SAMPLE_ANALYSES } from '../../data/mockAnalyses';
import { StatusBadge } from '../common/StatusBadge';
import { ArrowRight, Loader2, Link2, FileText, Sparkles, AlertCircle } from 'lucide-react';

interface NewsInputPanelProps {
  onAnalyze: (content: string, type: 'text' | 'url' | 'sample', sampleId?: string) => void;
  isLoading: boolean;
}

export const NewsInputPanel: React.FC<NewsInputPanelProps> = ({
  onAnalyze,
  isLoading,
}) => {
  const [activeTab, setActiveTab] = useState<'text' | 'url' | 'sample'>('text');
  const [textContent, setTextContent] = useState('');
  const [urlContent, setUrlContent] = useState('');
  const [selectedSampleId, setSelectedSampleId] = useState<string>(SAMPLE_ANALYSES[0].id);
  const [validationError, setValidationError] = useState('');

  const handleAnalyze = () => {
    setValidationError('');
    if (activeTab === 'text') {
      if (!textContent.trim()) {
        setValidationError('Please enter a headline or article text to analyze.');
        return;
      }
      onAnalyze(textContent.trim(), 'text');
    } else if (activeTab === 'url') {
      if (!urlContent.trim()) {
        setValidationError('Please paste an article URL.');
        return;
      }
      try {
        const parsed = new URL(urlContent.startsWith('http') ? urlContent : `https://${urlContent}`);
        if (!parsed.hostname) throw new Error();
        onAnalyze(urlContent.trim(), 'url');
      } catch {
        setValidationError('Please enter a valid web address (e.g., https://example.com/news/123).');
      }
    } else {
      const sample = SAMPLE_ANALYSES.find((s) => s.id === selectedSampleId);
      if (sample) {
        onAnalyze(sample.headline, 'sample', sample.id);
      }
    }
  };

  return (
    <div id="input-panel" className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-5 md:p-6 shadow-sm mb-8 transition-colors">
      {/* Input Mode Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DED6C9] dark:border-[#33312B] pb-3 mb-5">
        <div className="inline-flex p-1 bg-[#EAE4D7] dark:bg-[#252320] rounded-full border border-[#DED6C9] dark:border-[#33312B]">
          <button
            type="button"
            onClick={() => { setActiveTab('text'); setValidationError(''); }}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'text'
                ? 'bg-[#171717] dark:bg-[#EDE8DF] text-[#F6F1E7] dark:text-[#171717] font-semibold shadow-sm'
                : 'text-[#68645E] dark:text-[#9E988F] hover:text-[#171717] dark:hover:text-[#EDE8DF]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Text Input</span>
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('url'); setValidationError(''); }}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'url'
                ? 'bg-[#171717] dark:bg-[#EDE8DF] text-[#F6F1E7] dark:text-[#171717] font-semibold shadow-sm'
                : 'text-[#68645E] dark:text-[#9E988F] hover:text-[#171717] dark:hover:text-[#EDE8DF]'
            }`}
          >
            <Link2 className="w-3.5 h-3.5" />
            <span>URL Input</span>
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('sample'); setValidationError(''); }}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'sample'
                ? 'bg-[#171717] dark:bg-[#EDE8DF] text-[#F6F1E7] dark:text-[#171717] font-semibold shadow-sm'
                : 'text-[#68645E] dark:text-[#9E988F] hover:text-[#171717] dark:hover:text-[#EDE8DF]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sample News</span>
          </button>
        </div>

        <span className="text-xs font-mono text-[#68645E] dark:text-[#9E988F]">
          Mode: <strong className="uppercase text-[#171717] dark:text-[#EDE8DF]">{activeTab}</strong>
        </span>
      </div>

      {/* Tab Panels */}
      {activeTab === 'text' && (
        <div className="relative">
          <label htmlFor="news-textarea" className="sr-only">Article Text</label>
          <textarea
            id="news-textarea"
            rows={5}
            maxLength={5000}
            value={textContent}
            onChange={(e) => {
              setTextContent(e.target.value);
              if (validationError) setValidationError('');
            }}
            placeholder="Enter news headline or article text here..."
            className="w-full bg-[#F6F1E7] dark:bg-[#141311] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px] p-4 text-sm text-[#171717] dark:text-[#EDE8DF] placeholder-[#68645E]/70 dark:placeholder-[#9E988F]/70 focus:outline-none focus:border-[#C92323] dark:focus:border-[#E03535] resize-y leading-relaxed font-sans"
          />
          <div className="flex justify-between items-center mt-2 px-1 text-xs font-mono text-[#68645E] dark:text-[#9E988F]">
            <span>Minimum 10 characters recommended for high-confidence linguistic analysis</span>
            <span>{textContent.length}/5000</span>
          </div>
        </div>
      )}

      {activeTab === 'url' && (
        <div className="space-y-3">
          <div className="relative">
            <Link2 className="w-4 h-4 text-[#68645E] dark:text-[#9E988F] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="url"
              value={urlContent}
              onChange={(e) => {
                setUrlContent(e.target.value);
                if (validationError) setValidationError('');
              }}
              placeholder="Paste the URL of the news article (e.g. https://www.thehindu.com/...)"
              className="w-full bg-[#F6F1E7] dark:bg-[#141311] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px] pl-10 pr-4 py-3 text-sm text-[#171717] dark:text-[#EDE8DF] placeholder-[#68645E]/70 dark:placeholder-[#9E988F]/70 focus:outline-none focus:border-[#C92323] font-mono"
            />
          </div>
          <div className="p-3 bg-[#EAE4D7]/50 dark:bg-[#252320]/50 rounded-[8px] border border-[#DED6C9] dark:border-[#33312B] text-xs font-mono text-[#68645E] dark:text-[#9E988F] flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#C92323] flex-shrink-0 mt-0.5" />
            <span>
              Real article analysis from arbitrary URLs requires backend DOM scraping and anti-bot parsing. In this demonstration, the URL will be validated and mapped to an explainable mock prediction scenario.
            </span>
          </div>
        </div>
      )}

      {activeTab === 'sample' && (
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-[#68645E] dark:text-[#9E988F] mb-3">
            Select a verified benchmark case study:
          </p>
          <div className="grid grid-cols-1 gap-2">
            {SAMPLE_ANALYSES.map((sample) => (
              <button
                key={sample.id}
                type="button"
                onClick={() => setSelectedSampleId(sample.id)}
                className={`w-full text-left p-3.5 rounded-[10px] border transition-all flex items-center justify-between gap-4 ${
                  selectedSampleId === sample.id
                    ? 'bg-[#EAE4D7] dark:bg-[#252320] border-[#171717] dark:border-[#EDE8DF] shadow-sm'
                    : 'bg-[#F6F1E7] dark:bg-[#141311] border-[#DED6C9] dark:border-[#33312B] hover:border-[#68645E]'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="font-serif font-semibold text-sm text-[#171717] dark:text-[#EDE8DF] truncate">
                    {sample.headline}
                  </div>
                  <div className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-0.5 truncate">
                    {sample.tags.join(' • ')}
                  </div>
                </div>
                <StatusBadge status={sample.status} size="sm" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Footer Row: Validation & Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-5 pt-4 border-t border-[#DED6C9] dark:border-[#33312B]">
        <div>
          {validationError ? (
            <p className="text-xs font-mono text-[#D92D2D] dark:text-[#E03535] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{validationError}</span>
            </p>
          ) : (
            <p className="text-[11px] font-mono text-[#68645E] dark:text-[#9E988F]">
              Demonstration only — predictions are simulated and illustrate linguistic feature extraction.
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={handleAnalyze}
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[8px] bg-[#C92323] hover:bg-[#b01e1e] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-sm transition-all disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Analyzing News...</span>
            </>
          ) : (
            <>
              <span>Analyze News</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
