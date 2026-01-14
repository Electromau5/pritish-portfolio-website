import React from 'react';
import { Check, X, FileText, BarChart3, Users, Lightbulb, Target, MessageSquareQuote } from 'lucide-react';

// Map section types to icons
const sectionIcons = {
  projectOverview: FileText,
  problemSolution: Target,
  teamInfo: Users,
  successMetrics: BarChart3,
  stats: BarChart3,
  userResearch: Lightbulb,
  conclusion: MessageSquareQuote,
  text: FileText
};

const SectionPreviewCard = ({ section, sectionType, onAccept, onReject }) => {
  const Icon = sectionIcons[sectionType] || FileText;

  // Extract preview content based on section type
  const getPreviewContent = () => {
    const content = section.content?.[0]?.data;
    if (!content) return null;

    if (content.paragraphs) {
      return content.paragraphs[0]?.slice(0, 150) + '...';
    }
    if (content.problemDescription) {
      return content.problemDescription[0]?.slice(0, 150) + '...';
    }
    if (content.items) {
      return `${content.items.length} metrics: ${content.items.map(i => i.label).join(', ')}`;
    }
    if (content.members) {
      return `${content.members.length} team members`;
    }
    if (content.findings) {
      return `${content.findings.length} research findings`;
    }
    if (content.takeaways) {
      return `${content.takeaways.length} key takeaways`;
    }
    return null;
  };

  const preview = getPreviewContent();

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
          <Icon size={16} className="text-white" />
        </div>
        <div>
          <p className="text-xs text-purple-600 font-medium uppercase tracking-wide">
            Generated Section
          </p>
          <h4 className="font-medium text-gray-900">{section.title}</h4>
        </div>
      </div>

      {/* Preview */}
      {preview && (
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {preview}
        </p>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={onAccept}
          className="
            flex-1 flex items-center justify-center gap-2 px-4 py-2
            bg-black text-white rounded-lg text-sm font-medium
            hover:bg-gray-800 transition-colors
          "
        >
          <Check size={16} />
          Add Section
        </button>
        <button
          onClick={onReject}
          className="
            px-4 py-2 border border-gray-200 rounded-lg text-sm
            text-gray-600 hover:bg-gray-50 transition-colors
          "
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default SectionPreviewCard;
