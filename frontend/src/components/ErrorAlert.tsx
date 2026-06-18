import { AlertCircle } from 'lucide-react';

interface ErrorAlertProps {
  message: string;
}

export default function ErrorAlert({ message }: ErrorAlertProps) {
  if (!message) return null;
  
  return (
    <div className="p-5 mb-8 text-red-800 bg-red-50 rounded-2xl border border-red-100 shadow-sm flex items-start animate-in fade-in slide-in-from-top-2 duration-300">
      <AlertCircle className="w-5 h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-sm text-red-900">Oops! Something went wrong</h3>
        <p className="text-sm mt-1 text-red-700/90 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
