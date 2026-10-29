# TruthLens — AI-Powered Fake News Detection Dashboard

> **“Verify the News. See the Truth.”**  
> A web dashboard for fake news detection, linguistic transparency, and explainable AI (XAI) analysis inspired by modern investigative digital newsrooms and premium editorial publications.

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📰 Project Overview

**TruthLens** bridges the gap between raw machine learning classification and human editorial investigation. Rather than offering opaque binary verdicts, TruthLens decomposes submitted articles into:

- **Overall Veracity Status & Calibrated Confidence:** High-visibility indicators for *Fake News*, *Likely Real*, or *Inconclusive*.
- **Indicator Breakdown (Donut Chart):** Visual balance of fake, real, and neutral signal weights via Recharts.
- **Sentiment & Polarity Spectrum:** Quantified emotional charge (*Negative*, *Neutral*, *Positive*) across claim text.
- **Lexical & Linguistic Feature Extraction:** High-risk markers such as sensational language, urgency appeals, clickbait headlines, and unsourced attribution.
- **Named Entity Recognition (NER):** Detection and categorical grouping of organizations, public figures, diseases, and geopolitical entities.
- **Source & Origin Reputation:** Publisher domain profiling, reliability indices, domain age, and political bias indicators.
- **Related Fact-Check Archives:** Cross-references with verified fact-checking bureaus (e.g. PIB, IFCN, Reuters Fact Check).

---

## 🎨 Design Philosophy

- **Editorial Newspaper Minimalist Aesthetic:** Warm, paper-inspired palette (`#F6F1E7` background, `#FBF8F1` cards, fine `#DED6C9` borders).
- **Restrained Categorical Color Palette:**
  - 🔴 **Fake News / Threat:** Crimson (`#D92D2D`) / Muted Red (`#FCE3DE`)
  - 🟢 **Likely Real / Verified:** Forest Green (`#13834D`) / Muted Green (`#DDF1E3`)
  - 🟣 **Inconclusive / Neutral:** Purple (`#7051D8`) / Muted Purple (`#EAE4FA`)
- **Typography Pairing:**
  - **Playfair Display:** High-contrast editorial serif for bold headlines and blockquotes.
  - **Inter:** Clean, legible UI controls, labels, and paragraph body.
  - **IBM Plex Mono:** Technical precision for model metrics, timestamps, and JSON data.
- **Theme Modes:** Warm Editorial Paper Mode (default) and Dark Newsroom Mode.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── common/
│   │   ├── MetricCard.tsx         # Reusable statistic/metric tile
│   │   ├── SectionHeader.tsx      # Consistent editorial section divider
│   │   └── StatusBadge.tsx        # Typed Fake / Real / Inconclusive badges
│   ├── dashboard/
│   │   ├── AnalysisResult.tsx     # Result container with export & share
│   │   ├── ConfidenceChart.tsx    # Recharts responsive donut visualization
│   │   ├── HeroSection.tsx        # Editorial header with architectural motif
│   │   ├── NewsInputPanel.tsx     # Text, URL, and Benchmark Sample tabs
│   │   ├── PredictionCard.tsx     # Primary veracity summary card
│   │   ├── QuickStats.tsx         # 2x2 summary metric grid
│   │   ├── RecentAnalyses.tsx     # Clickable history list in sidebar
│   │   ├── RelatedArticles.tsx    # Fact-checking cross-reference cards
│   │   ├── SentimentAnalysis.tsx  # Smooth horizontal emotional polarity bars
│   │   ├── SourceAnalysis.tsx     # Origin domain & bias breakdown table
│   │   └── TextAnalysis.tsx       # Keywords, Named Entities & Linguistic Features
│   └── layout/
│       ├── DashboardLayout.tsx    # Responsive 3-column / 2-column grid
│       ├── Sidebar.tsx            # Left navigational sidebar with editorial tagline
│       └── TopNavigation.tsx      # Header with search, theme switch & avatar
├── data/
│   └── mockAnalyses.ts            # Benchmarked dataset samples & fact-checks
├── hooks/
│   ├── useAnalysisHistory.ts      # LocalStorage-backed audit history
│   └── useTheme.ts                # Paper vs. Dark theme toggle
├── pages/
│   ├── About.tsx                  # Mission, manifesto & architecture overview
│   ├── Dashboard.tsx              # Main interactive verification workspace
│   ├── Dataset.tsx                # Training corpus benchmark metrics & explorer
│   ├── History.tsx                # Searchable audit trail with category filters
│   ├── Insights.tsx               # Recharts weekly verification telemetry
│   ├── ModelInfo.tsx              # 5-step NLP pipeline technical documentation
│   ├── Settings.tsx               # Interface & local storage management
│   └── Sources.tsx                # Audited news domain reputation registry
├── services/
│   └── analysisService.ts         # Deterministic scenario analysis engine
├── types/
│   └── analysis.ts                # TypeScript interfaces for analyses & entities
├── App.tsx                        # React Router layout & global state
├── index.css                      # Tailwind CSS v4 custom styling & typography
└── main.tsx                       # React application entrypoint
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aryangoel1726/Fake-News-Detection-AI.git
   cd Fake-News-Detection-AI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` to view the live dashboard.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The bundled, optimized assets will be emitted to `dist/`.

---

## 🔍 Features & Interactions

- **Multi-Modal Input:**
  - **Text Input:** Paste custom news bodies or headlines with live character counters.
  - **URL Input:** Input live article links for domain extraction.
  - **Sample Cases:** Instantly test with curated benchmark misinformation and verified sports/science stories.
- **Audit History & Search:**
  - All submitted analyses automatically persist to browser `localStorage`.
  - Filter historical analyses by keyword or status (*Fake*, *Real*, *Inconclusive*).
- **Export & Reporting:**
  - One-click native Web Share API integration or clipboard copying.
  - Download full verifiable JSON audit reports.

---

## ⚖️ Ethics & Disclaimers

> **Demonstration Notice:** The frontend interface presents explainable heuristic demonstrations and benchmark scenarios. The displayed scores and indicators illustrate NLP pipelines and should not be presented as certified legal or ground-truth accuracy without evaluated downstream neural models.

---

## 👨‍💻 Author

**Aryan Goel**  
- GitHub: [@Aryangoel1726](https://github.com/Aryangoel1726)
