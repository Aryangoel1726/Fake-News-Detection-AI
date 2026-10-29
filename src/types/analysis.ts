export type ClassificationStatus = 'fake' | 'real' | 'inc';

export interface LinguisticFeature {
  name: string;
  severity: 'High' | 'Medium' | 'Low' | 'None';
  description: string;
}

export interface NamedEntity {
  name: string;
  category: 'ORGANIZATION' | 'LOCATION' | 'PERSON' | 'DISEASE' | 'EVENT' | 'DATE';
}

export interface SourceMetadata {
  domain: string;
  reliabilityScore: string;
  domainAge: string;
  sourceType: string;
  biasDetection: string;
  isSuspicious: boolean;
}

export interface AnalysisRecord {
  id: string;
  headline: string;
  textSnippet?: string;
  status: ClassificationStatus;
  confidence: number;
  timestamp: string;
  relativeTime: string;
  description: string;
  tags: string[];
  indicators: {
    fake: number;
    real: number;
    neutral: number;
  };
  sentiment: {
    negative: number;
    neutral: number;
    positive: number;
  };
  keywords: string[];
  entities: NamedEntity[];
  linguisticFeatures: LinguisticFeature[];
  source: SourceMetadata;
  mockNote?: string;
  isUserAnalysis?: boolean;
}

export interface QuickStatsData {
  articlesAnalyzed: number;
  accuracyRate: number;
  realNewsCount: number;
  fakeNewsCount: number;
}

export interface RelatedArticle {
  id: string;
  title: string;
  publisher: string;
  publishedDate: string;
  summary: string;
}
