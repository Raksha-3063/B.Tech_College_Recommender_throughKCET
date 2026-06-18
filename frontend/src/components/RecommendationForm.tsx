'use client';

import { useState } from 'react';
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
    <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-sm bg-white mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Enter Your Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label htmlFor="rank" className="block text-sm font-medium text-gray-700 mb-1">KCET Rank</label>
          <input
            id="rank"
            type="number"
            min="1"
            required
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="e.g. 12000"
          />
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Seat Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-black"
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">Preferred Branch (Optional)</label>
          <input
            id="branch"
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="e.g. CSE, ECE"
          />
        </div>
      </div>
      
      <button 
        type="submit" 
        disabled={isLoading || !rank}
        className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
      >
        {isLoading ? 'Searching...' : 'Get Recommendations'}
      </button>
    </form>
  );
}
