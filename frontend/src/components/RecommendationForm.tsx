'use client';

import { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { RecommendationRequest } from '../types';

interface RecommendationFormProps {
  onSearch: (request: RecommendationRequest) => void;
  isLoading: boolean;
}

const CATEGORIES = [
  '1G', '1K', '1R', '2AG', '2AK', '2AR', '2BG', '2BK', '2BR',
  '3AG', '3AK', '3AR', '3BG', '3BK', '3BR', 'GM', 'GMK', 'GMP',
  'GMR', 'OPN', 'OTH', 'SCG', 'SCK', 'SCR', 'STG', 'STK', 'STR'
];

export default function RecommendationForm({ onSearch, isLoading }: RecommendationFormProps) {
  const [rank, setRank] = useState<string>('');
  const [category, setCategory] = useState<string>('GM');
  const [branch, setBranch] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rank || isNaN(Number(rank))) return;
    
    onSearch({
      rank: parseInt(rank, 10),
      category,
      branch: branch.trim() || undefined,
      top_n: 10
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 border border-gray-100 rounded-2xl shadow-xl shadow-blue-900/5 bg-white mb-10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none"></div>
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Your Perfect College</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
        <div>
          <label htmlFor="rank" className="block text-sm font-semibold text-gray-700 mb-2">
            KCET Rank <span className="text-red-500">*</span>
          </label>
          <input
            id="rank"
            type="number"
            min="1"
            required
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-gray-50 hover:bg-white transition-colors outline-none"
            placeholder="e.g. 12000"
          />
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
            Seat Category <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-gray-50 hover:bg-white transition-colors outline-none appearance-none"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="branch" className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Branch <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            id="branch"
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-gray-50 hover:bg-white transition-colors outline-none"
            placeholder="e.g. CSE, ECE"
          />
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          type="submit" 
          disabled={isLoading || !rank}
          className="w-full md:w-auto px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg disabled:bg-blue-300 disabled:shadow-none transition-all flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Get Recommendations
            </>
          )}
        </button>
      </div>
    </form>
  );
}
