import React from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

const AIProcessingStatus = ({ status, error }) => {
  if (status === 'idle') {
    return null;
  }

  if (status === 'processing') {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin" />
          <div>
            <p className="font-medium text-blue-900 dark:text-blue-200">
              Processing with Claude AI...
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
              This may take a few moments. Please don't close this page.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <div>
            <p className="font-medium text-green-900 dark:text-green-200">
              Content processed successfully!
            </p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">
              Your case study has been structured and is ready to edit.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
        <div className="flex items-center space-x-3">
          <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
          <div>
            <p className="font-medium text-red-900 dark:text-red-200">
              Processing failed
            </p>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">
              {error || 'An error occurred while processing your document. Please try again.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AIProcessingStatus;

