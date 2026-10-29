import React from 'react';
import { Newspaper, Shield, FileCheck, Compass, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="border-b border-[#DED6C9] dark:border-[#33312B] pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C92323] dark:text-[#E03535] font-semibold">
          Investigative Journalism Initiative
        </span>
        <h1 className="font-serif font-bold text-3xl text-[#171717] dark:text-[#EDE8DF]">
          About TruthLens
        </h1>
        <p className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-1">
          Building transparency, critical thinking, and algorithmic accountability in digital media.
        </p>
      </div>

      <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-6 md:p-8 shadow-sm space-y-6 leading-relaxed">
        <div className="flex items-center gap-3 pb-4 border-b border-[#DED6C9] dark:border-[#33312B]">
          <div className="w-10 h-10 rounded-full border-2 border-[#C92323] flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-[#C92323]" />
          </div>
          <div>
            <h2 className="font-serif font-bold text-xl text-[#171717] dark:text-[#EDE8DF]">
              Verify the News. See the Truth.
            </h2>
            <span className="text-xs font-mono text-[#68645E] dark:text-[#9E988F]">
              Editorial Intelligence & Automated Verification
            </span>
          </div>
        </div>

        <p className="text-sm text-[#171717] dark:text-[#EDE8DF] font-sans">
          TruthLens is designed to tackle the escalating crisis of digital misinformation, coordinated disinformation campaigns, and sensationalist clickbait. Rather than treating authenticity as a binary black box, TruthLens surfaces <strong>Explainable AI (XAI)</strong> metrics: linguistic markers, emotional charge distributions, named entity veracity, and source reliability scoring.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-4 bg-[#F6F1E7] dark:bg-[#141311] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px]">
            <Compass className="w-5 h-5 text-[#C92323] mb-2" />
            <h4 className="font-serif font-bold text-sm text-[#171717] dark:text-[#EDE8DF] mb-1">
              Editorial Rigor
            </h4>
            <p className="text-xs text-[#68645E] dark:text-[#9E988F] font-mono">
              Designed after print newsroom standards to support journalists and inquisitive citizens.
            </p>
          </div>
          <div className="p-4 bg-[#F6F1E7] dark:bg-[#141311] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px]">
            <Shield className="w-5 h-5 text-[#13834D] mb-2" />
            <h4 className="font-serif font-bold text-sm text-[#171717] dark:text-[#EDE8DF] mb-1">
              Ethical AI
            </h4>
            <p className="text-xs text-[#68645E] dark:text-[#9E988F] font-mono">
              Clear labeling of demonstration scores and refusal to fabricate certainty on inconclusive signals.
            </p>
          </div>
          <div className="p-4 bg-[#F6F1E7] dark:bg-[#141311] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px]">
            <FileCheck className="w-5 h-5 text-[#7051D8] mb-2" />
            <h4 className="font-serif font-bold text-sm text-[#171717] dark:text-[#EDE8DF] mb-1">
              Open Verification
            </h4>
            <p className="text-xs text-[#68645E] dark:text-[#9E988F] font-mono">
              Exportable audit trails in JSON format for reproducibility and academic verification.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-[#DED6C9] dark:border-[#33312B] flex items-center justify-between text-xs font-mono text-[#68645E] dark:text-[#9E988F]">
          <span className="flex items-center gap-1.5">
            <Newspaper className="w-4 h-4" />
            TruthLens Research Consortium
          </span>
          <span className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-[#C92323] fill-current" /> for truthful discourse
          </span>
        </div>
      </div>
    </div>
  );
};
