'use client';

import { useState } from 'react';
import { GraduationCap, Code } from 'lucide-react';
import RecommendationForm from '@/components/RecommendationForm';
import ResultsTable from '@/components/ResultsTable';
import ErrorAlert from '@/components/ErrorAlert';
import { getRecommendations } from '@/lib/api';
import { CollegeRecommendation, RecommendationRequest } from '@/types';
import axios from 'axios';

export default function Home() {
  const [results, setResults] = useState<CollegeRecommendation[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSearch = async (request: RecommendationRequest) => {
    setIsLoading(true);
    setError('');
    
    try {
      const data = await getRecommendations(request);
      setResults(data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else {
        setError('Failed to fetch recommendations. Please ensure the backend is running and you have an active internet connection.');
      }
      setResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Modern Hero Section */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-800 text-white pb-24 pt-16 px-4 md:px-8 border-b border-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-700/50 rounded-2xl mb-6 backdrop-blur-sm border border-blue-600/50 shadow-inner">
            <GraduationCap className="w-8 h-8 text-blue-100" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            KCET College Predictor
          </h1>
          <p className="text-blue-100/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Instantly discover your best engineering college options in Karnataka based on historical cutoff ranks.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto w-full px-4 md:px-8 -mt-16 relative z-20 flex-grow">
        <RecommendationForm onSearch={handleSearch} isLoading={isLoading} />
        <ErrorAlert message={error} />
        {results !== null && <ResultsTable results={results} />}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <GraduationCap className="w-5 h-5" />
            <span className="font-medium text-gray-700">KCET Recommendation System</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <a 
            href="#" 
            className="flex items-center gap-2 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg border border-gray-200"
          >
            <Code className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
