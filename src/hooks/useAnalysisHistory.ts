import { useState, useEffect } from 'react';
import { AnalysisRecord } from '../types/analysis';
import { SAMPLE_ANALYSES } from '../data/mockAnalyses';

const STORAGE_KEY = 'truthlens_history_v1';

export function useAnalysisHistory() {
  const [history, setHistory] = useState<AnalysisRecord[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to parse analysis history from localStorage:', e);
    }
    return SAMPLE_ANALYSES.slice(0, 5);
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 50)));
    } catch (e) {
      console.warn('Failed to save analysis history to localStorage:', e);
    }
  }, [history]);

  const addRecord = (record: AnalysisRecord) => {
    setHistory((prev) => [record, ...prev.filter((item) => item.id !== record.id)]);
  };

  const clearHistory = () => {
    setHistory(SAMPLE_ANALYSES.slice(0, 5));
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn(e);
    }
  };

  return {
    history,
    addRecord,
    clearHistory,
  };
}
