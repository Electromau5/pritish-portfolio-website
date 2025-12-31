import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { parseDocument } from '../../services/fileParser';
import { processContentWithClaude } from '../../services/claudeService';
import db from '../../services/db';
import ContentUploader from '../components/ContentUploader';
import AIProcessingStatus from '../components/AIProcessingStatus';
import { Save, ArrowLeft } from 'lucide-react';

const CaseStudyEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;

  const [step, setStep] = useState(isNew ? 'upload' : 'edit'); // upload, processing, edit, template, publish
  const [selectedFile, setSelectedFile] = useState(null);
  const [processingStatus, setProcessingStatus] = useState('idle'); // idle, processing, success, error
  const [processingError, setProcessingError] = useState(null);
  const [caseStudy, setCaseStudy] = useState({
    id: id || uuidv4(),
    slug: '',
    title: '',
    subtitle: '',
    projectId: null,
    template: '',
    status: 'draft',
    accentColor: 'blue',
    sections: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  // Load existing case study
  useEffect(() => {
    if (!isNew && id) {
      db.caseStudies.get(id).then((data) => {
        if (data) {
          setCaseStudy(data);
          setStep('edit');
        }
      });
    }
  }, [id, isNew]);

  const handleFileSelect = async (file) => {
    setSelectedFile(file);
    setProcessingStatus('processing');
    setProcessingError(null);

    // Parse document
    const parseResult = await parseDocument(file);
    
    if (!parseResult.success) {
      setProcessingStatus('error');
      setProcessingError(parseResult.error);
      return;
    }

    // Send to Claude API
    try {
      const result = await processContentWithClaude(parseResult.text);

      if (!result.success) {
        throw new Error(result.error || 'Failed to process content');
      }

      // Update case study with structured data
      setCaseStudy(prev => ({
        ...prev,
        title: result.data.title || '',
        subtitle: result.data.subtitle || '',
        sections: result.data.sections || [],
        slug: (result.data.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      }));

      setProcessingStatus('success');
      setStep('edit');
    } catch (error) {
      console.error('Error processing with AI:', error);
      setProcessingStatus('error');
      setProcessingError(error.message || 'Failed to process content. Make sure you have set VITE_ANTHROPIC_API_KEY in your .env file for local development.');
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setProcessingStatus('idle');
    setProcessingError(null);
  };

  const handleSave = async () => {
    const updatedCaseStudy = {
      ...caseStudy,
      updatedAt: new Date().toISOString()
    };

    await db.caseStudies.put(updatedCaseStudy);
    alert('Case study saved successfully!');
  };

  const handleTitleChange = (e) => {
    setCaseStudy(prev => ({
      ...prev,
      title: e.target.value,
      slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    }));
  };

  const handleSubtitleChange = (e) => {
    setCaseStudy(prev => ({
      ...prev,
      subtitle: e.target.value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/cms/case-studies')}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-2">
              {isNew ? 'Create Case Study' : 'Edit Case Study'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {isNew ? 'Upload a document to get started' : 'Edit your case study content'}
            </p>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Save size={20} />
          <span>Save</span>
        </button>
      </div>

      {step === 'upload' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">
            Upload Document
          </h2>
          <ContentUploader
            onFileSelect={handleFileSelect}
            onFileRemove={handleFileRemove}
            selectedFile={selectedFile}
          />
          <AIProcessingStatus status={processingStatus} error={processingError} />
        </div>
      )}

      {step === 'edit' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">
              Basic Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={caseStudy.title}
                  onChange={handleTitleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Project Title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={caseStudy.subtitle}
                  onChange={handleSubtitleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="One-line description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Slug
                </label>
                <input
                  type="text"
                  value={caseStudy.slug}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  placeholder="auto-generated-from-title"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  URL-friendly identifier (auto-generated from title)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">
              Sections ({caseStudy.sections.length})
            </h2>
            {caseStudy.sections.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">
                No sections yet. Upload a document to generate sections automatically.
              </p>
            ) : (
              <div className="space-y-4">
                {caseStudy.sections.map((section, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {section.content?.length || 0} content blocks
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyEditor;

