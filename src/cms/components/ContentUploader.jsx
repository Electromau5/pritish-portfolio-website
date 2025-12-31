import React, { useCallback, useState } from 'react';
import { Upload, File, X } from 'lucide-react';

const ContentUploader = ({ onFileSelect, onFileRemove, selectedFile }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const validFile = files.find(file => 
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      file.type === 'application/msword' ||
      file.type === 'application/pdf'
    );

    if (validFile) {
      onFileSelect(validFile);
    }
  }, [onFileSelect]);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="space-y-4">
      {!selectedFile ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
            isDragging
              ? 'border-black bg-gray-50 dark:bg-gray-800'
              : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
          }`}
        >
          <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Drop your document here
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            or click to browse
          </p>
          <label className="inline-block bg-black text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
            <input
              type="file"
              accept=".docx,.doc,.pdf"
              onChange={handleFileInput}
              className="hidden"
            />
            Select File
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Supported formats: DOCX, DOC, PDF
          </p>
        </div>
      ) : (
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <File className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {selectedFile.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              onClick={onFileRemove}
              className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentUploader;

