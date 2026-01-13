import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import db from '../../services/db';
import { Package, Eye, Trash2, FileText } from 'lucide-react';

const ArtifactsList = () => {
  const [previewArtifact, setPreviewArtifact] = useState(null);

  // Load all artifacts and case studies
  const artifacts = useLiveQuery(() =>
    db.artifacts.orderBy('createdAt').reverse().toArray()
  ) || [];

  const caseStudies = useLiveQuery(() =>
    db.caseStudies.toArray()
  ) || [];

  // Group artifacts by case study
  const artifactsByCaseStudy = artifacts.reduce((acc, artifact) => {
    if (!acc[artifact.caseStudyId]) {
      acc[artifact.caseStudyId] = [];
    }
    acc[artifact.caseStudyId].push(artifact);
    return acc;
  }, {});

  // Get case study title by ID
  const getCaseStudyTitle = (caseStudyId) => {
    const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
    return caseStudy ? caseStudy.title : 'Unknown Case Study';
  };

  const handleToggle = async (artifact) => {
    await db.artifacts.update(artifact.id, {
      enabled: !artifact.enabled,
      updatedAt: new Date().toISOString()
    });
  };

  const handleDelete = async (artifact) => {
    if (window.confirm(`Are you sure you want to delete "${artifact.name}"?`)) {
      await db.artifacts.delete(artifact.id);
    }
  };

  const handlePreview = (artifact) => {
    setPreviewArtifact(artifact);
  };

  const closePreview = () => {
    setPreviewArtifact(null);
  };

  const getArtifactTypeLabel = (type) => {
    return type === 'journeyMap' ? 'Customer Journey Map' : 'User Flow Diagram';
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <Package size={32} className="text-gray-900 dark:text-white" />
          <h1 className="text-4xl font-light text-gray-900 dark:text-white">
            Artifacts
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Manage Customer Journey Maps and User Flow Diagrams for your case studies
        </p>
      </div>

      {artifacts.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
          <Package size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
          <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">No artifacts yet</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">
            Artifacts are automatically generated when you create a new case study from a document.
          </p>
          <Link
            to="/cms/case-studies/new"
            className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FileText size={20} />
            <span>Create Case Study</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(artifactsByCaseStudy).map(([caseStudyId, caseStudyArtifacts]) => (
            <div key={caseStudyId} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                    {getCaseStudyTitle(caseStudyId)}
                  </h2>
                  <Link
                    to={`/cms/case-studies/${caseStudyId}`}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Edit Case Study →
                  </Link>
                </div>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {caseStudyArtifacts.map((artifact) => (
                  <div
                    key={artifact.id}
                    className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={artifact.enabled}
                            onChange={() => handleToggle(artifact)}
                            className="w-5 h-5 text-black focus:ring-black border-gray-300 rounded cursor-pointer"
                          />
                        </label>

                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {artifact.name}
                            </h3>
                            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                              {getArtifactTypeLabel(artifact.type)}
                            </span>
                            {artifact.enabled && (
                              <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium">
                                Enabled
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Created {new Date(artifact.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handlePreview(artifact)}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                          title="Preview"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(artifact)}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Preview Modal */}
      {previewArtifact && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closePreview}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-white">
                  {previewArtifact.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {getArtifactTypeLabel(previewArtifact.type)}
                </p>
              </div>
              <button
                onClick={closePreview}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-light"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              {previewArtifact.type === 'journeyMap' ? (
                <JourneyMapPreview data={previewArtifact.data} />
              ) : (
                <UserFlowPreview data={previewArtifact.data} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Journey Map Preview Component
const JourneyMapPreview = ({ data }) => {
  if (!data || !data.stages) {
    return <p className="text-gray-500">No journey map data available</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          {data.title || 'User Journey'}
        </h3>
        {data.personas && data.personas.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-4">
            {data.personas.map((persona, idx) => (
              <div key={idx} className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">{persona.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{persona.role}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.stages.map((stage, idx) => (
          <div key={idx} className="space-y-3">
            <h4 className="font-medium text-gray-900 dark:text-white pb-2 border-b-2 border-gray-200 dark:border-gray-700">
              {stage.name}
            </h4>
            {stage.steps && stage.steps.map((step, stepIdx) => (
              <div key={stepIdx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 space-y-2">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{step.action}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{step.thoughts}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full"
                      style={{ width: `${(step.emotion || 0) * 20}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{step.emotion}/5</span>
                </div>
                {step.painPoints && step.painPoints.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {step.painPoints.map((pain, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded">
                        {pain}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// User Flow Preview Component
const UserFlowPreview = ({ data }) => {
  if (!data || !data.nodes) {
    return <p className="text-gray-500">No user flow data available</p>;
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {data.title || 'User Flow'}
        </h3>
        {data.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{data.description}</p>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {data.nodes.map((node, idx) => (
          <div
            key={node.id}
            className={`px-4 py-3 rounded-lg border-2 ${
              node.type === 'start' ? 'bg-green-50 dark:bg-green-900/20 border-green-500' :
              node.type === 'end' ? 'bg-red-50 dark:bg-red-900/20 border-red-500' :
              node.type === 'decision' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500' :
              'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
            }`}
          >
            <p className="font-medium text-gray-900 dark:text-white">{node.label}</p>
            {node.description && (
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{node.description}</p>
            )}
          </div>
        ))}
      </div>

      {data.connections && data.connections.length > 0 && (
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {data.connections.length} connections between nodes
        </div>
      )}
    </div>
  );
};

export default ArtifactsList;
