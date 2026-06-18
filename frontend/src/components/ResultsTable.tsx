import { SearchX, Building2 } from 'lucide-react';
import { CollegeRecommendation } from '../types';

interface ResultsTableProps {
  results: CollegeRecommendation[];
}

export default function ResultsTable({ results }: ResultsTableProps) {
  if (results.length === 0) {
    return (
      <div className="p-12 text-center border border-dashed border-gray-300 rounded-2xl bg-gray-50/50 flex flex-col items-center justify-center">
        <div className="bg-white p-4 rounded-full shadow-sm mb-4">
          <SearchX className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">No colleges found</h3>
        <p className="text-gray-500 max-w-sm">We couldn&apos;t find any colleges matching your criteria. Try adjusting your rank or broadening your branch search.</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-100 rounded-2xl shadow-xl shadow-blue-900/5 bg-white overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Building2 className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-lg font-bold text-gray-800">Top Recommendations</h2>
        </div>
        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
          {results.length} Matches
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-max">
          <thead className="bg-gray-50/80">
            <tr>
              <th className="p-4 pl-6 font-semibold text-gray-600 text-sm tracking-wide uppercase border-b border-gray-100">Code</th>
              <th className="p-4 font-semibold text-gray-600 text-sm tracking-wide uppercase border-b border-gray-100">College Name</th>
              <th className="p-4 font-semibold text-gray-600 text-sm tracking-wide uppercase border-b border-gray-100">Branch</th>
              <th className="p-4 pr-6 font-semibold text-gray-600 text-sm tracking-wide uppercase border-b border-gray-100 text-right">Cutoff Rank</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {results.map((item, index) => (
              <tr key={`${item.college_code}-${item.branch}-${index}`} className="hover:bg-blue-50/50 transition-colors even:bg-gray-50/30">
                <td className="p-4 pl-6 text-gray-500 font-mono text-sm align-top">{item.college_code}</td>
                <td className="p-4 text-gray-900 font-medium align-top leading-snug max-w-[280px] whitespace-normal">{item.college_name}</td>
                <td className="p-4 text-gray-600 align-top text-sm">{item.branch}</td>
                <td className="p-4 pr-6 text-blue-700 font-bold text-right align-top">{item.cutoff_rank.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
