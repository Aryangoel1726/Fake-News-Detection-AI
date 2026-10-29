import { AnalysisRecord } from '../types/analysis';
import { SAMPLE_ANALYSES } from '../data/mockAnalyses';

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export async function analyzeNewsContent(
  content: string,
  type: 'text' | 'url' | 'sample',
  sampleId?: string
): Promise<AnalysisRecord> {
  // Simulate processing latency for authentic editorial feel
  await new Promise((resolve) => setTimeout(resolve, 850));

  if (type === 'sample' && sampleId) {
    const found = SAMPLE_ANALYSES.find((s) => s.id === sampleId);
    if (found) {
      return {
        ...found,
        id: `analysis-${Date.now()}`,
        timestamp: new Date().toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        relativeTime: 'just now',
        isUserAnalysis: true,
      };
    }
  }

  // Deterministically select scenario based on text hash
  const hashVal = hashString(content.trim());
  const template = SAMPLE_ANALYSES[hashVal % SAMPLE_ANALYSES.length];

  // Dynamically tailor keywords and headline from input
  const cleanHeadline = content.length > 90 ? content.slice(0, 87) + '...' : content;
  const words = content
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 3)
    .slice(0, 8);

  const customKeywords = words.length >= 3 ? Array.from(new Set([...words, ...template.keywords.slice(0, 3)])) : template.keywords;

  return {
    ...template,
    id: `analysis-${Date.now()}`,
    headline: cleanHeadline,
    textSnippet: content,
    timestamp: new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    relativeTime: 'just now',
    keywords: customKeywords,
    mockNote: 'Simulated demonstration scenario selected via text hash. Not a verified ground-truth model prediction.',
    isUserAnalysis: true,
    source: type === 'url' ? {
      ...template.source,
      domain: extractDomain(content),
    } : template.source,
  };
}

function extractDomain(url: string): string {
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    return parsed.hostname.replace(/^www\./, '');
  } catch {
    return 'unverified-source.org';
  }
}
