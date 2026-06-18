import RecommendationForm from "@/components/RecommendationForm";
import ResultsTable from "@/components/ResultsTable";
import ErrorAlert from "@/components/ErrorAlert";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <main className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-900">KCET College Recommendation System</h1>
          <p className="text-gray-600 mt-2">Find your best college options based on your KCET rank.</p>
        </header>
        
        <RecommendationForm />
        
        {/* These components are here as placeholders for Phase 1 */}
        <ErrorAlert />
        <ResultsTable />
        
      </main>
    </div>
  );
}
