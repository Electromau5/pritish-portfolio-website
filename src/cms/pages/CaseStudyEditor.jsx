import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { parseDocument } from '../../services/fileParser';
import { processContentWithClaude } from '../../services/claudeService';
import db from '../../services/db';
import ContentUploader from '../components/ContentUploader';
import AIProcessingStatus from '../components/AIProcessingStatus';
import CaseStudyDisplay from '../../components/CaseStudyDisplay';
import { getAllTemplates } from '../../templates/caseStudyTemplates';
import { Save, ArrowLeft, Eye, EyeOff, Check, Palette, Layout, ChevronRight } from 'lucide-react';

const colorOptions = [
  { value: 'blue', label: 'Black', class: 'bg-black' },
  { value: 'green', label: 'Dark Gray', class: 'bg-gray-700' },
  { value: 'purple', label: 'Gray', class: 'bg-gray-500' },
  { value: 'orange', label: 'Light', class: 'bg-gray-300' },
];

// Template preview thumbnails - Black/white minimal style
const templatePreviews = {
  // Simon Pan style - Outcome-Focused (Metrics first)
  simonpan: (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="h-1/3 bg-gray-50 p-2 flex items-center justify-between">
        <div className="flex gap-1">
          <div className="w-6 h-4 bg-black rounded-sm flex items-center justify-center">
            <span className="text-[6px] text-white font-bold">+20%</span>
          </div>
          <div className="w-6 h-4 bg-gray-600 rounded-sm flex items-center justify-center">
            <span className="text-[6px] text-white font-bold">85%</span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-2 flex flex-col gap-1">
        <div className="w-12 h-0.5 bg-black" />
        <div className="w-full h-0.5 bg-gray-200" />
        <div className="w-10 h-0.5 bg-gray-200" />
      </div>
    </div>
  ),
  // Moritz style - Process Journey (Step by step)
  moritz: (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      <div className="h-6 bg-white border-b border-gray-200 flex items-center px-2">
        <div className="w-8 h-1.5 bg-black rounded" />
      </div>
      <div className="flex-1 p-2 flex flex-col gap-1.5">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-10 h-0.5 bg-gray-300" />
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gray-600 rounded-full" />
          <div className="w-12 h-0.5 bg-gray-300" />
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <div className="w-8 h-0.5 bg-gray-300" />
        </div>
      </div>
    </div>
  ),
  // Lola style - Data-Driven (Strategic, business focused)
  lola: (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="h-10 bg-black p-2 flex flex-col justify-end">
        <div className="w-10 h-1 bg-white rounded" />
        <div className="w-6 h-0.5 bg-gray-400 mt-0.5" />
      </div>
      <div className="flex-1 p-2">
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div className="h-4 bg-gray-100 rounded-sm flex items-center justify-center">
            <span className="text-[5px] text-black font-bold">91.7%</span>
          </div>
          <div className="h-4 bg-gray-200 rounded-sm flex items-center justify-center">
            <span className="text-[5px] text-black font-bold">+30%</span>
          </div>
          <div className="h-4 bg-gray-100 rounded-sm flex items-center justify-center">
            <span className="text-[5px] text-black font-bold">2.5M</span>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-200" />
      </div>
    </div>
  ),
  // Gloria style - Visual Storyteller (Image-first, creative)
  gloria: (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="h-1/2 bg-gray-100 flex items-center justify-center">
        <div className="w-8 h-6 bg-white rounded shadow-sm border border-gray-200" />
      </div>
      <div className="flex-1 p-2 flex flex-col gap-1">
        <div className="w-10 h-1 bg-black rounded" />
        <div className="flex gap-1 mt-1">
          <div className="w-4 h-4 bg-gray-200 rounded-sm" />
          <div className="w-4 h-4 bg-gray-200 rounded-sm" />
          <div className="w-4 h-4 bg-gray-200 rounded-sm" />
        </div>
      </div>
    </div>
  ),
  // Pratibha style - Clean Professional (Grid-based, user-centric)
  pratibha: (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="h-8 bg-gray-100 flex items-center justify-center">
        <div className="w-12 h-1.5 bg-black rounded" />
      </div>
      <div className="flex-1 p-2">
        <div className="grid grid-cols-2 gap-1">
          <div className="h-6 bg-gray-100 rounded-sm" />
          <div className="h-6 bg-gray-100 rounded-sm" />
          <div className="h-6 bg-gray-100 rounded-sm" />
          <div className="h-6 bg-gray-100 rounded-sm" />
        </div>
        <div className="mt-2 w-full h-0.5 bg-gray-200" />
        <div className="mt-1 w-10 h-0.5 bg-gray-200" />
      </div>
    </div>
  ),
  // Carex style - Comprehensive UX Process (Double Diamond, personas, analysis)
  carex: (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Hero with centered title */}
      <div className="h-10 bg-gray-50 flex flex-col items-center justify-center">
        <div className="w-10 h-1.5 bg-black rounded mb-1" />
        <div className="px-1.5 py-0.5 bg-gray-200 rounded-full">
          <span className="text-[5px] text-black font-medium">UX Case Study</span>
        </div>
      </div>
      {/* Double Diamond Process */}
      <div className="flex justify-center gap-0.5 py-1 px-2">
        <div className="w-3 h-3 bg-gray-200 rounded-sm flex items-center justify-center">
          <span className="text-[4px] text-gray-700">D</span>
        </div>
        <div className="w-3 h-3 bg-gray-300 rounded-sm flex items-center justify-center">
          <span className="text-[4px] text-gray-700">D</span>
        </div>
        <div className="w-3 h-3 bg-gray-500 rounded-sm flex items-center justify-center">
          <span className="text-[4px] text-white">I</span>
        </div>
        <div className="w-3 h-3 bg-black rounded-sm flex items-center justify-center">
          <span className="text-[4px] text-white">D</span>
        </div>
      </div>
      {/* Content sections */}
      <div className="flex-1 p-1.5 flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="flex-1 h-4 bg-gray-100 rounded-sm" />
          <div className="flex-1 h-4 bg-gray-100 rounded-sm" />
        </div>
        <div className="h-5 bg-gray-50 rounded-sm flex items-center justify-center">
          <div className="w-4 h-3 bg-gray-200 rounded-full" />
        </div>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-100 rounded-sm" />
          <div className="w-3 h-3 bg-gray-200 rounded-sm" />
          <div className="w-3 h-3 bg-gray-100 rounded-sm" />
        </div>
      </div>
    </div>
  ),
};

const CaseStudyEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;

  const [step, setStep] = useState(isNew ? 'upload' : 'edit'); // upload, processing, edit, preview
  const [selectedFile, setSelectedFile] = useState(null);
  const [processingStatus, setProcessingStatus] = useState('idle'); // idle, processing, success, error
  const [processingError, setProcessingError] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState(null); // For previewing templates before applying
  const [caseStudy, setCaseStudy] = useState({
    id: id || uuidv4(),
    slug: '',
    title: '',
    subtitle: '',
    projectId: null,
    template: 'pratibha', // Default to Clean Professional template
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
      setCaseStudy(prev => {
        const incomingSections = Array.isArray(result.data.sections) ? result.data.sections : [];
        const hasJourneyBlock = incomingSections.some(
          s => Array.isArray(s.content) && s.content.some(b => b.type === 'journey')
        );
        const sectionsWithJourney = hasJourneyBlock
          ? incomingSections
          : [
              ...incomingSections,
              {
                title: 'User Journey',
                content: [{ type: 'journey', data: { ref: 'journeyMap' } }]
              }
            ];

        return ({
          ...prev,
          title: result.data.title || '',
          subtitle: result.data.subtitle || '',
          sections: sectionsWithJourney,
          journeyMap: result.data.journeyMap || null,
          slug: (result.data.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        });
      });

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

  const handleColorChange = (color) => {
    setCaseStudy(prev => ({
      ...prev,
      accentColor: color
    }));
  };

  const handleStatusChange = (status) => {
    setCaseStudy(prev => ({
      ...prev,
      status
    }));
  };

  const handleTemplateChange = (templateId) => {
    setCaseStudy(prev => ({
      ...prev,
      template: templateId
    }));
  };

  const handlePreviewTemplate = (templateId) => {
    setPreviewTemplate(templateId);
    setShowPreview(true);
  };

  const handlePublish = async () => {
    const updatedCaseStudy = {
      ...caseStudy,
      status: 'published',
      updatedAt: new Date().toISOString()
    };

    await db.caseStudies.put(updatedCaseStudy);
    setCaseStudy(updatedCaseStudy);
    alert('Case study published successfully!');
  };

  // Preview mode
  if (showPreview) {
    const previewData = previewTemplate
      ? { ...caseStudy, template: previewTemplate }
      : caseStudy;

    return (
      <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 overflow-auto">
        <div className="sticky top-0 z-50 bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm">Preview Mode</span>
            {previewTemplate && (
              <span className="text-xs bg-blue-600 px-2 py-1 rounded">
                Previewing: {getAllTemplates().find(t => t.id === previewTemplate)?.name}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-3">
            {previewTemplate && (
              <button
                onClick={() => {
                  handleTemplateChange(previewTemplate);
                  setPreviewTemplate(null);
                  setShowPreview(false);
                }}
                className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Check size={16} />
                <span>Apply Template</span>
              </button>
            )}
            <button
              onClick={() => {
                setPreviewTemplate(null);
                setShowPreview(false);
              }}
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <EyeOff size={16} />
              <span>Exit Preview</span>
            </button>
          </div>
        </div>
        <CaseStudyDisplay caseStudyData={previewData} isPreview={true} />
      </div>
    );
  }

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
        <div className="flex items-center space-x-3">
          {step === 'edit' && caseStudy.sections.length > 0 && (
            <button
              onClick={() => setShowPreview(true)}
              className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Eye size={20} />
              <span>Preview</span>
            </button>
          )}
          <button
            onClick={handleSave}
            className="inline-flex items-center space-x-2 bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Save size={20} />
            <span>Save Draft</span>
          </button>
          {step === 'edit' && caseStudy.sections.length > 0 && (
            <button
              onClick={handlePublish}
              className="inline-flex items-center space-x-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Check size={20} />
              <span>Publish</span>
            </button>
          )}
        </div>
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

              {/* Accent Color Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Palette size={16} className="inline mr-2" />
                  Accent Color
                </label>
                <div className="flex space-x-3">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => handleColorChange(color.value)}
                      className={`w-10 h-10 rounded-full ${color.class} flex items-center justify-center transition-transform ${
                        caseStudy.accentColor === color.value ? 'ring-2 ring-offset-2 ring-gray-900 dark:ring-white scale-110' : 'hover:scale-105'
                      }`}
                      title={color.label}
                    >
                      {caseStudy.accentColor === color.value && (
                        <Check size={16} className="text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Display */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    caseStudy.status === 'published'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {caseStudy.status === 'published' ? 'Published' : 'Draft'}
                  </span>
                  {caseStudy.status === 'published' && (
                    <a
                      href={`/case-study/${caseStudy.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      View live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Template Selection */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-2">
              <Layout size={24} className="inline mr-3" />
              Choose Template
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Select a layout template for your case study. Click "Preview" to see how your content looks with each template.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getAllTemplates().map((template) => (
                <div
                  key={template.id}
                  className={`relative border-2 rounded-xl overflow-hidden transition-all cursor-pointer ${
                    caseStudy.template === template.id
                      ? 'border-black ring-2 ring-gray-300 dark:ring-blue-800'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                  onClick={() => handleTemplateChange(template.id)}
                >
                  {/* Template Preview Thumbnail */}
                  <div className="h-32 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    {templatePreviews[template.id]}
                  </div>

                  {/* Template Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {template.name}
                      </h3>
                      {caseStudy.template === template.id && (
                        <span className="flex items-center text-xs text-blue-600 dark:text-blue-400 font-medium">
                          <Check size={14} className="mr-1" />
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {template.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Preview Button */}
                    {caseStudy.sections.length > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePreviewTemplate(template.id);
                        }}
                        className="w-full flex items-center justify-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-2 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                      >
                        <Eye size={14} />
                        <span>Preview Template</span>
                        <ChevronRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
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

