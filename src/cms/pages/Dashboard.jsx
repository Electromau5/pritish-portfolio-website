import React from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import db from '../../services/db';
import { FileText, Plus, Eye } from 'lucide-react';

const Dashboard = () => {
  const caseStudies = useLiveQuery(() => 
    db.caseStudies.orderBy('updatedAt').reverse().limit(5).toArray()
  ) || [];

  const publishedCount = useLiveQuery(() => 
    db.caseStudies.where('status').equals('published').count()
  ) || 0;

  const draftCount = useLiveQuery(() => 
    db.caseStudies.where('status').equals('draft').count()
  ) || 0;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your case studies and content
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Published</p>
              <p className="text-3xl font-light text-gray-900 dark:text-white">{publishedCount}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Drafts</p>
              <p className="text-3xl font-light text-gray-900 dark:text-white">{draftCount}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total</p>
              <p className="text-3xl font-light text-gray-900 dark:text-white">{publishedCount + draftCount}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <Link
          to="/cms/case-studies/new"
          className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Plus size={20} />
          <span>Create New Case Study</span>
        </Link>
      </div>

      {/* Recent Case Studies */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
          Recent Case Studies
        </h2>
        {caseStudies.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No case studies yet. Create your first one!</p>
        ) : (
          <div className="space-y-3">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                to={`/cms/case-studies/${study.id}`}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{study.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{study.subtitle}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    study.status === 'published'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {study.status}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(study.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

