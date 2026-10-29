import React from 'react';
import { Landmark, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 items-end pb-8 pt-2 border-b border-[#DED6C9] dark:border-[#33312B] mb-8">
      {/* Left Column: Headlines */}
      <div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-[#C92323] dark:text-[#E03535] font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Powered News Verification</span>
        </div>
        <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[#171717] dark:text-[#EDE8DF] mb-4">
          Verify the News.<br />
          See <span className="text-[#C92323] dark:text-[#E03535] italic">The Truth.</span>
        </h1>
        <p className="text-sm md:text-base text-[#68645E] dark:text-[#9E988F] max-w-xl font-normal leading-relaxed">
          Paste a news article, headline or URL to check its authenticity using Natural Language Processing and Machine Learning.
        </p>
      </div>

      {/* Right Column: Monochrome Editorial Art Box */}
      <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[12px] p-5 relative overflow-hidden shadow-sm flex flex-col justify-between min-h-[160px]">
        {/* Subtle patterned watermark */}
        <div className="absolute right-3 bottom-2 opacity-10 dark:opacity-5 pointer-events-none">
          <Landmark className="w-32 h-32" />
        </div>

        <div className="flex items-center justify-between z-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold px-2 py-0.5 bg-[#EAE4D7] dark:bg-[#252320] text-[#171717] dark:text-[#EDE8DF] rounded border border-[#DED6C9] dark:border-[#33312B]">
            Facts Not Rumors
          </span>
          <span className="text-[10px] font-mono text-[#68645E] dark:text-[#9E988F]">
            EST. 2026
          </span>
        </div>

        <blockquote className="font-serif italic text-sm md:text-base text-[#171717] dark:text-[#EDE8DF] leading-snug my-3 z-10">
          “In a world of information overload, truth is a choice.”
        </blockquote>

        <div className="flex items-center justify-between text-[10px] font-mono text-[#68645E] dark:text-[#9E988F] pt-2 border-t border-[#DED6C9]/60 dark:border-[#33312B]/60 z-10">
          <span>INVESTIGATIVE AUDIT DESK</span>
          <span>ETHICAL AI STANDARD</span>
        </div>
      </div>
    </section>
  );
};
