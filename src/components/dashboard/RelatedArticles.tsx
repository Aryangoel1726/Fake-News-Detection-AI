import React from 'react';
import { RELATED_ARTICLES } from '../../data/mockAnalyses';
import { SectionHeader } from '../common/SectionHeader';
import { ExternalLink, Newspaper } from 'lucide-react';

export const RelatedArticles: React.FC = () => {
  return (
    <section className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-5 md:p-6 shadow-sm mb-6 transition-colors">
      <SectionHeader title="Related Articles" badge="ILLUSTRATIVE" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {RELATED_ARTICLES.map((article) => (
          <div
            key={article.id}
            className="p-4 bg-[#F6F1E7] dark:bg-[#141311] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px] flex flex-col justify-between hover:border-[#68645E] transition-all group"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#68645E] dark:text-[#9E988F] mb-2">
                <span className="flex items-center gap-1.5 font-semibold text-[#C92323] dark:text-[#E03535]">
                  <Newspaper className="w-3.5 h-3.5" />
                  {article.publisher}
                </span>
                <span>{article.publishedDate}</span>
              </div>
              <h5 className="font-serif font-bold text-sm text-[#171717] dark:text-[#EDE8DF] leading-snug group-hover:text-[#C92323] transition-colors mb-2">
                {article.title}
              </h5>
              <p className="text-xs text-[#68645E] dark:text-[#9E988F] line-clamp-2 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#DED6C9]/60 dark:border-[#33312B]/60 flex items-center justify-between text-[11px] font-mono text-[#68645E] dark:text-[#9E988F]">
              <span>Fact-Check Wire</span>
              <span className="flex items-center gap-1 text-[#C92323] dark:text-[#E03535] group-hover:underline">
                Read Debunk <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
