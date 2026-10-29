import { AnalysisRecord, RelatedArticle } from '../types/analysis';

export const SAMPLE_ANALYSES: AnalysisRecord[] = [
  {
    id: 's1',
    headline: 'Government announces free laptops for every citizen above 18 years of age',
    textSnippet: 'A viral scheme claims that all citizens over 18 can claim a free high-end laptop by registering at an unverified link immediately with limited time slots available.',
    status: 'fake',
    confidence: 93,
    timestamp: 'Oct 28, 2026, 01:24 PM',
    relativeTime: '2 min ago',
    description: 'This article shows strong signs of misinformation, including sensational language, unreliable source patterns, and a lack of credible evidence. The content requires independent verification before it can be treated as factual.',
    tags: ['Manipulative Language', 'Unreliable Source', 'Clickbait Headline', 'No Evidence'],
    indicators: {
      fake: 78,
      real: 12,
      neutral: 10,
    },
    sentiment: {
      negative: 71,
      neutral: 18,
      positive: 11,
    },
    keywords: ['free', 'laptop', 'government', 'citizen', '18 years', 'scheme', 'apply now', 'limited time'],
    entities: [
      { name: 'Government', category: 'ORGANIZATION' },
      { name: 'India', category: 'LOCATION' },
      { name: 'Citizen', category: 'PERSON' }
    ],
    linguisticFeatures: [
      { name: 'Sensational language', severity: 'High', description: 'Absolute promises with no qualifiers or budget allocation cited.' },
      { name: 'Urgency markers', severity: 'High', description: '“Apply now” and “limited time” actively pressure the reader.' },
      { name: 'Unverified claims', severity: 'Medium', description: 'No named official, ministry order, or gazette document cited.' }
    ],
    source: {
      domain: 'unverified-news.com',
      reliabilityScore: '2.1 / 10',
      domainAge: '3 months',
      sourceType: 'Unknown',
      biasDetection: 'High (Left)',
      isSuspicious: true,
    },
    mockNote: 'Simulated demonstration record. Percentages reflect heuristic indicator models, not verified ground truth.',
  },
  {
    id: 's2',
    headline: 'ISRO launches new satellite to improve weather forecasting',
    textSnippet: 'The Indian Space Research Organisation has successfully injected its advanced meteorological satellite into orbit from the Satish Dhawan Space Centre.',
    status: 'real',
    confidence: 96,
    timestamp: 'Oct 28, 2026, 12:45 PM',
    relativeTime: '12 min ago',
    description: 'Demonstration scenario: neutral tone, attributable claims and a named institution are typical of reliable reporting. Independent confirmation is still advised.',
    tags: ['Neutral Tone', 'Named Source', 'Verifiable Claim'],
    indicators: {
      fake: 8,
      real: 82,
      neutral: 10,
    },
    sentiment: {
      negative: 9,
      neutral: 76,
      positive: 15,
    },
    keywords: ['ISRO', 'satellite', 'launch', 'weather', 'forecasting', 'orbit', 'meteorological'],
    entities: [
      { name: 'ISRO', category: 'ORGANIZATION' },
      { name: 'Satish Dhawan Space Centre', category: 'LOCATION' }
    ],
    linguisticFeatures: [
      { name: 'Sensational language', severity: 'Low', description: 'Measured vocabulary adheres to objective journalistic norms.' },
      { name: 'Urgency markers', severity: 'None', description: 'No manipulative urgency or pressure language detected.' },
      { name: 'Unverified claims', severity: 'Low', description: 'Flight statistics and telemetry claims are readily verifiable.' }
    ],
    source: {
      domain: 'sample-daily.example',
      reliabilityScore: '8.4 / 10',
      domainAge: '12 years',
      sourceType: 'National daily',
      biasDetection: 'Low (Center)',
      isSuspicious: false,
    },
    mockNote: 'Demonstration scenario modeling institutional scientific reporting.',
  },
  {
    id: 's3',
    headline: 'New COVID variant detected, doctors warn of lockdown next week',
    textSnippet: 'Anonymous medical practitioners warn of an imminent countrywide lockdown following the discovery of a mutated respiratory strain.',
    status: 'fake',
    confidence: 88,
    timestamp: 'Oct 28, 2026, 10:15 AM',
    relativeTime: '1 hour ago',
    description: 'Demonstration scenario: alarmist framing and an anonymous medical authority are common misinformation patterns.',
    tags: ['Fear Appeal', 'Anonymous Source', 'No Evidence'],
    indicators: {
      fake: 70,
      real: 14,
      neutral: 16,
    },
    sentiment: {
      negative: 64,
      neutral: 26,
      positive: 10,
    },
    keywords: ['COVID', 'variant', 'doctors', 'lockdown', 'warn', 'strain', 'respiratory'],
    entities: [
      { name: 'COVID', category: 'DISEASE' },
      { name: 'Health Ministry', category: 'ORGANIZATION' }
    ],
    linguisticFeatures: [
      { name: 'Emotional language', severity: 'High', description: 'Fear-driven wording designed to incite panic sharing.' },
      { name: 'Unverified claims', severity: 'High', description: '“Doctors” are never named or attached to recognized institutions.' },
      { name: 'Urgency markers', severity: 'Medium', description: 'Specifies an unconfirmed near-term deadline (“next week”).' }
    ],
    source: {
      domain: 'health-alerts.example',
      reliabilityScore: '3.0 / 10',
      domainAge: '5 months',
      sourceType: 'Blog',
      biasDetection: 'Unknown',
      isSuspicious: true,
    },
    mockNote: 'Simulated health alert scenario.',
  },
  {
    id: 's4',
    headline: 'Petrol prices to be halved from midnight, says viral message',
    textSnippet: 'A forwarded message circulating widely across messaging apps claims fuel duties will be slashed by 50% starting tonight.',
    status: 'fake',
    confidence: 91,
    timestamp: 'Oct 28, 2026, 08:30 AM',
    relativeTime: '3 hours ago',
    description: 'Demonstration scenario: viral-forward framing with an implausible, unsourced economic claim.',
    tags: ['Viral Forward', 'Clickbait Headline', 'No Evidence'],
    indicators: {
      fake: 74,
      real: 10,
      neutral: 16,
    },
    sentiment: {
      negative: 60,
      neutral: 28,
      positive: 12,
    },
    keywords: ['petrol', 'halved', 'midnight', 'viral', 'message', 'fuel', 'slash'],
    entities: [
      { name: 'Finance Ministry', category: 'ORGANIZATION' }
    ],
    linguisticFeatures: [
      { name: 'Clickbait patterns', severity: 'High', description: 'Extravagant headline claim lacking official finance circular.' },
      { name: 'Unverified claims', severity: 'High', description: 'Primary source of record is designated as “a viral message”.' },
      { name: 'Excessive capitalization', severity: 'Low', description: 'None detected in analyzed excerpt.' }
    ],
    source: {
      domain: 'Unknown',
      reliabilityScore: 'Unknown',
      domainAge: 'Unknown',
      sourceType: 'Social Media Forward',
      biasDetection: 'Unknown',
      isSuspicious: true,
    },
    mockNote: 'Demonstration viral forward scenario.',
  },
  {
    id: 's5',
    headline: 'India wins 3rd T20 match by 6 wickets',
    textSnippet: 'A disciplined bowling display followed by a solid top-order partnership led the team to an emphatic series triumph.',
    status: 'real',
    confidence: 97,
    timestamp: 'Oct 28, 2026, 06:10 AM',
    relativeTime: '5 hours ago',
    description: 'Demonstration scenario: factual sports report with specific, checkable details and match telemetry.',
    tags: ['Neutral Tone', 'Specific Details', 'Official Scorecard'],
    indicators: {
      fake: 5,
      real: 86,
      neutral: 9,
    },
    sentiment: {
      negative: 8,
      neutral: 70,
      positive: 22,
    },
    keywords: ['India', 'T20', 'match', 'wickets', 'chase', 'cricket', 'victory'],
    entities: [
      { name: 'India', category: 'LOCATION' },
      { name: 'BCCI', category: 'ORGANIZATION' }
    ],
    linguisticFeatures: [
      { name: 'Sensational language', severity: 'Low', description: 'Standard sporting journalism vocabulary.' },
      { name: 'Unverified claims', severity: 'Low', description: 'Scoreline matches international cricket broadcast records.' },
      { name: 'Urgency markers', severity: 'None', description: 'No persuasive action required from reader.' }
    ],
    source: {
      domain: 'sports-wire.example',
      reliabilityScore: '8.9 / 10',
      domainAge: '9 years',
      sourceType: 'Sports desk',
      biasDetection: 'Low (Center)',
      isSuspicious: false,
    },
    mockNote: 'Verified sports journalism scenario.',
  },
  {
    id: 's6',
    headline: 'Study suggests common herb may improve sleep, researchers say more work is needed',
    textSnippet: 'Preliminary in-vitro trials indicate potential sedative properties in herbal extracts, though human clinical trials remain pending.',
    status: 'inc',
    confidence: 54,
    timestamp: 'Oct 27, 2026, 04:00 PM',
    relativeTime: 'yesterday',
    description: 'Demonstration scenario: mixed signals — hedged claims but no linked study. Result is inconclusive pending peer-reviewed publication.',
    tags: ['Hedged Claim', 'No Link To Study', 'Preliminary Findings'],
    indicators: {
      fake: 30,
      real: 32,
      neutral: 38,
    },
    sentiment: {
      negative: 15,
      neutral: 65,
      positive: 20,
    },
    keywords: ['study', 'herb', 'sleep', 'researchers', 'clinical', 'trials', 'preliminary'],
    entities: [],
    linguisticFeatures: [
      { name: 'Unverified claims', severity: 'Medium', description: 'Study citation, doi link, or journal name is omitted.' },
      { name: 'Sensational language', severity: 'Low', description: 'Cautious hedging (“may improve”, “more work needed”).' }
    ],
    source: {
      domain: 'wellness-today.example',
      reliabilityScore: '5.2 / 10',
      domainAge: '2 years',
      sourceType: 'Lifestyle portal',
      biasDetection: 'Low',
      isSuspicious: false,
    },
    mockNote: 'Inconclusive scientific coverage scenario.',
  }
];

export const MOCK_STATISTICS = {
  articlesAnalyzed: 1248,
  accuracyRate: 93,
  realNewsCount: 674,
  fakeNewsCount: 574,
};

export const RELATED_ARTICLES: RelatedArticle[] = [
  {
    id: 'r1',
    title: 'Fact Check: No such laptop scheme exists under government welfare',
    publisher: 'National Fact Desk',
    publishedDate: '2 days ago',
    summary: 'Investigation reveals circulating portal is a phishing domain collecting personal data without institutional endorsement.'
  },
  {
    id: 'r2',
    title: 'Viral claim debunked by Official Press Information Bureau',
    publisher: 'PIB FactCheck Unit',
    publishedDate: '5 days ago',
    summary: 'Government nodal agencies issue clarification denying authorization of viral distribution messages.'
  },
  {
    id: 'r3',
    title: 'Old misinformation resurfaces again across messaging groups',
    publisher: 'Digital Verification Wire',
    publishedDate: '1 week ago',
    summary: 'Recurring hoax from 2021 reappears with modified deadlines and altered registration hyperlinks.'
  }
];
