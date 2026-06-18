'use client';

import { useState } from 'react';
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
        setError('Failed to fetch recommendations. Please ensure the backend is running.');
      }
      setResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <main className="max-w-5xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-900">KCET College Recommendation System</h1>
          <p className="text-gray-600 mt-2">Find your best college options based on your KCET rank.</p>
        </header>
        
        <RecommendationForm onSearch={handleSearch} isLoading={isLoading} />
        
        <ErrorAlert message={error} />
        
        {results !== null && <ResultsTable results={results} />}
        
      </main>
    </div>
  );
}
