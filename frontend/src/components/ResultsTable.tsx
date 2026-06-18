import { CollegeRecommendation } from '../types';

interface ResultsTableProps {
  results: CollegeRecommendation[];
}

export default function ResultsTable({ results }: ResultsTableProps) {
  if (results.length === 0) {
    return (
      <div className="p-8 text-center border rounded-lg bg-gray-50 text-gray-600">
        No colleges found matching your criteria. Try adjusting your rank or branch.
      </div>
    );
  }

  return (
    <div className="border rounded-lg shadow-sm bg-white overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-max">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4 font-semibold text-gray-700">Code</th>
            <th className="p-4 font-semibold text-gray-700">College Name</th>
            <th className="p-4 font-semibold text-gray-700">Branch</th>
            <th className="p-4 font-semibold text-gray-700 text-right">Cutoff Rank</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {results.map((item, index) => (
            <tr key={`${item.college_code}-${item.branch}-${index}`} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 text-gray-600 font-mono text-sm">{item.college_code}</td>
              <td className="p-4 text-gray-900 font-medium">{item.college_name}</td>
              <td className="p-4 text-gray-600">{item.branch}</td>
              <td className="p-4 text-gray-900 font-semibold text-right">{item.cutoff_rank.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
