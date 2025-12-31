import React from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import db from '../../services/db';
import { Plus, Edit, Eye, Trash2 } from 'lucide-react';

const CaseStudyList = () => {
  const caseStudies = useLiveQuery(() => 
    db.caseStudies.orderBy('updatedAt').reverse().toArray()
  ) || [];

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this case study?')) {
      await db.caseStudies.delete(id);
      // Also delete associated images
      await db.imageBlobs.where('caseStudyId').equals(id).delete();
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-2">
            Case Studies
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage all your case studies
          </p>
        </div>
        <Link
          to="/cms/case-studies/new"
          className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Plus size={20} />
          <span>New Case Study</span>
        </Link>
      </div>

      {caseStudies.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">No case studies yet.</p>
          <Link
            to="/cms/case-studies/new"
            className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Plus size={20} />
            <span>Create Your First Case Study</span>
          </Link>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Template
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {caseStudies.map((study) => (
                  <tr key={study.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {study.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {study.subtitle}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        study.status === 'published'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}>
                        {study.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {study.template || 'Not set'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {new Date(study.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {study.status === 'published' && (
                          <a
                            href={`/case-study/${study.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            title="View"
                          >
                            <Eye size={18} />
                          </a>
                        )}
                        <Link
                          to={`/cms/case-studies/${study.id}`}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </Link>
                        <button
                          onClick={() => handleDelete(study.id)}
                          className="p-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyList;

