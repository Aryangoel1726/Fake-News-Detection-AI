# TruthLens — Glass

> **AI-Powered News Verification & Misinformation Detection Platform**  
> *"Verify the News. See the Truth."*

A self-contained, high-performance web application designed for journalists, researchers, and everyday readers to evaluate news authenticity with real-time heuristic scoring, confidence breakdowns, sentiment evaluation, and interactive visual shaders.

---

## 📸 Key Features

- **Liquid Glass Shader UI**: Custom procedural WebGL/SVG displacement shader with real-time optical refraction, chromatic aberration, and dynamic light overlays.
- **Multi-Modal Verification Input**:
  - Direct Text / Headline Input (with 5,000-character counter)
  - URL Input
  - Curated Real vs. Fake Benchmark Samples
- **Explainable AI (XAI) Architecture**:
  - Calibrated Confidence Score (%)
  - Indicator Ratio breakdown (Fake / Real / Neutral)
  - Sentiment Analysis (Negative / Neutral / Positive polarity bars)
  - Text & Linguistic Feature Extraction (Sensationalism, Urgency markers, Unverified claims)
  - Named Entity Recognition (Organizations, Geopolitical entities, Public figures)
  - Source Credibility Profiling (Domain age, reliability rating, bias detection)
- **Interactive Tools**:
  - Quick Stats dashboard (articles analyzed, accuracy rate, real/fake ratio)
  - Searchable Recent Analyses list
  - Full Report Export (`.json`) and Web Share API / Clipboard summary
  - Dark / Light mode toggle with local storage persistence
  - Responsive layout (desktop 3-column grid, collapsible rail navigation, and mobile drawer)

---

## 🚀 Running the Project

### Option 1: Direct in Browser (Zero Installation)
Simply double-click or open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Brave, Safari, Firefox). No build steps or node modules required!

### Option 2: Local HTTP Server

**Using Python:**
```bash
python -m http.server 5173
```
Then navigate to [http://localhost:5173](http://localhost:5173)

**Using Node.js (`npx serve`):**
```bash
npx serve .
```

---

## 👨‍💻 Author

**Aryan Goel**  
- GitHub: [@Aryangoel1726](https://github.com/Aryangoel1726)
- Repository: [Fake-News-Detection-AI](https://github.com/Aryangoel1726/Fake-News-Detection-AI)
