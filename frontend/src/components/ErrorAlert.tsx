interface ErrorAlertProps {
  message: string;
}

export default function ErrorAlert({ message }: ErrorAlertProps) {
  if (!message) return null;
  
  return (
    <div className="p-4 mb-6 text-red-800 bg-red-100 rounded-lg border border-red-200 shadow-sm flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <h3 className="font-semibold text-sm">Error fetching recommendations</h3>
        <p className="text-sm mt-1">{message}</p>
      </div>
    </div>
  );
}
