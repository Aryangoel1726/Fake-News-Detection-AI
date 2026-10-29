import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { History } from './pages/History';
import { Insights } from './pages/Insights';
import { Sources } from './pages/Sources';
import { Dataset } from './pages/Dataset';
import { ModelInfo } from './pages/ModelInfo';
import { Settings } from './pages/Settings';
import { About } from './pages/About';
import { SAMPLE_ANALYSES } from './data/mockAnalyses';
import { AnalysisRecord } from './types/analysis';
import { useAnalysisHistory } from './hooks/useAnalysisHistory';
import { analyzeNewsContent } from './services/analysisService';

export function App() {
  const [currentAnalysis, setCurrentAnalysis] = useState<AnalysisRecord>(SAMPLE_ANALYSES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { history, addRecord, clearHistory } = useAnalysisHistory();

  const handleAnalyze = async (content: string, type: 'text' | 'url' | 'sample', sampleId?: string) => {
    setIsLoading(true);
    try {
      const result = await analyzeNewsContent(content, type, sampleId);
      setCurrentAnalysis(result);
      addRecord(result);

      // Smooth scroll to results
      setTimeout(() => {
        const el = document.getElementById('results-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (err) {
      console.error('Analysis failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectRecord = (record: AnalysisRecord) => {
    setCurrentAnalysis(record);
    setTimeout(() => {
      const el = document.getElementById('results-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const filteredHistory = history.filter((r) =>
    r.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Router>
      <DashboardLayout
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        historyCount={history.length}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                currentAnalysis={currentAnalysis}
                historyRecords={filteredHistory}
                onAnalyze={handleAnalyze}
                onSelectRecord={handleSelectRecord}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/analyze"
            element={
              <Dashboard
                currentAnalysis={currentAnalysis}
                historyRecords={filteredHistory}
                onAnalyze={handleAnalyze}
                onSelectRecord={handleSelectRecord}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/history"
            element={
              <History
                records={history}
                onSelectRecord={handleSelectRecord}
                onClearHistory={clearHistory}
              />
            }
          />
          <Route path="/insights" element={<Insights />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/model-info" element={<ModelInfo />} />
          <Route path="/settings" element={<Settings onClearHistory={clearHistory} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
