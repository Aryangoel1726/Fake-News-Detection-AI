import React from 'react';
import { Cpu, Layers, GitBranch, Shield, Sparkles } from 'lucide-react';

export const ModelInfo: React.FC = () => {
  const pipelineSteps = [
    {
      step: '01',
      title: 'Article Ingestion & Cleaning',
      desc: 'Removes boilerplate ads, HTML tags, normalize unicode characters, and extract clean title and paragraph sequences.',
    },
    {
      step: '02',
      title: 'Tokenization & Linguistic Feature Extraction',
      desc: 'Measures urgency markers, sensationalism index, all-caps ratios, clickbait phrasing, and polarity sentiment distributions.',
    },
    {
      step: '03',
      title: 'Named Entity Recognition (NER)',
      desc: 'Isolates and validates organizations, persons of interest, and geopolitical entities to detect anonymous authority appeals.',
    },
    {
      step: '04',
      title: 'Transformer Embeddings & Stance Verification',
      desc: 'Computes deep semantic representations using RoBERTa / DeBERTa and cross-references against authoritative fact-checking registries.',
    },
    {
      step: '05',
      title: 'Calibrated Confidence & Explainable AI (XAI)',
      desc: 'Ensemble model yields calibrated probabilities for Fake, Real, or Inconclusive, outputting interpretable rationale tags.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="border-b border-[#DED6C9] dark:border-[#33312B] pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C92323] dark:text-[#E03535] font-semibold">
          Machine Learning Architecture
        </span>
        <h1 className="font-serif font-bold text-3xl text-[#171717] dark:text-[#EDE8DF]">
          Planned NLP & ML Pipeline
        </h1>
        <p className="text-xs font-mono text-[#68645E] dark:text-[#9E988F] mt-1">
          Detailed technical architecture for the TruthLens Natural Language Processing inference engine.
        </p>
      </div>

      <div className="bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[14px] p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-[#C92323] dark:text-[#E03535]">
          <Cpu className="w-5 h-5" />
          <h2 className="font-serif font-bold text-lg text-[#171717] dark:text-[#EDE8DF]">
            End-to-End Verification Pipeline
          </h2>
        </div>

        <div className="space-y-4">
          {pipelineSteps.map((s) => (
            <div
              key={s.step}
              className="p-4 bg-[#F6F1E7] dark:bg-[#141311] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px] flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-[#171717] dark:bg-[#EDE8DF] text-[#F6F1E7] dark:text-[#171717] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                {s.step}
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#171717] dark:text-[#EDE8DF] mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-[#68645E] dark:text-[#9E988F] font-mono leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        <div className="p-4 bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px]">
          <div className="flex items-center gap-2 text-[#C92323] font-bold mb-2">
            <Layers className="w-4 h-4" />
            <span>Transformer Core</span>
          </div>
          <p className="text-[#68645E] dark:text-[#9E988F]">
            Planned fine-tuned RoBERTa-large model specialized in news claim veracity verification.
          </p>
        </div>
        <div className="p-4 bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px]">
          <div className="flex items-center gap-2 text-[#13834D] font-bold mb-2">
            <Shield className="w-4 h-4" />
            <span>Fact-Check API</span>
          </div>
          <p className="text-[#68645E] dark:text-[#9E988F]">
            Direct integration with Google Fact Check Tools API and Poynter IFCN verified partners.
          </p>
        </div>
        <div className="p-4 bg-[#FBF8F1] dark:bg-[#1D1C19] border border-[#DED6C9] dark:border-[#33312B] rounded-[10px]">
          <div className="flex items-center gap-2 text-[#7051D8] font-bold mb-2">
            <GitBranch className="w-4 h-4" />
            <span>Backend Integration</span>
          </div>
          <p className="text-[#68645E] dark:text-[#9E988F]">
            FastAPI microservice providing asynchronous worker queuing for intensive article crawling.
          </p>
        </div>
      </div>

      <div className="p-4 bg-[#EAE4D7]/50 dark:bg-[#252320]/50 rounded-[10px] border border-[#DED6C9] dark:border-[#33312B] text-xs font-mono text-[#68645E] dark:text-[#9E988F] flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#C92323] flex-shrink-0" />
        <span>
          Current deployment notice: This frontend demonstrates complete UI and XAI visualizations using deterministic scenario sampling. Full neural network weights are attached when connected to the companion Python server.
        </span>
      </div>
    </div>
  );
};
