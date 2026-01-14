import React from 'react';
import {
  Check, X, FileText, BarChart3, Users, Lightbulb, Target, MessageSquareQuote,
  TrendingUp, Compass, GitBranch, Settings, Brain, Sparkles, Layers, RotateCcw,
  CheckCircle2, Award, Shuffle, Heart
} from 'lucide-react';

// Map section types to icons - includes 2025 IA sections
const sectionIcons = {
  // Original sections
  projectOverview: FileText,
  problemSolution: Target,
  teamInfo: Users,
  successMetrics: BarChart3,
  stats: BarChart3,
  userResearch: Lightbulb,
  conclusion: MessageSquareQuote,
  text: FileText,

  // 2025 IA - Hook
  'intriguing-title': FileText,
  'business-impact-preview': TrendingUp,
  'project-context': FileText,
  'role-contribution': Users,

  // 2025 IA - Strategic Context
  'design-vision-strategy': Compass,
  'cross-functional-alignment': GitBranch,
  'technical-constraints': Settings,
  'ai-ml-considerations': Brain,

  // 2025 IA - Discovery & Research
  'research-methodology': Lightbulb,
  'user-interviews-synthesis': Users,
  'competitive-analysis': Target,
  'data-analysis': BarChart3,
  'key-insights': Sparkles,

  // 2025 IA - Problem Analysis
  'problem-framing': Target,
  'root-cause-analysis': GitBranch,
  'objectives-goals': Target,
  'success-metrics': BarChart3,

  // 2025 IA - Ideation & Prioritization
  'ideation-process': Lightbulb,
  'design-explorations-tradeoffs': Shuffle,
  'prioritization-framework': Layers,

  // 2025 IA - Process & Execution
  'design-process': FileText,
  'design-system-contribution': Layers,
  'collaboration-communication': Users,
  'challenges-obstacles': Target,
  'turning-point': RotateCcw,
  'validation-iteration': CheckCircle2,

  // 2025 IA - Outcome
  'final-solution': Award,
  'business-impact': TrendingUp,
  'design-system-impact': Layers,
  'ui-ux-improvements': Sparkles,
  'team-organizational-impact': Users,
  'reflection-next-steps': Heart
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
    // Carex-specific section types
    if (content.challenges) {
      return `${content.challenges.length} challenges: ${content.challenges.slice(0, 2).join(', ')}${content.challenges.length > 2 ? '...' : ''}`;
    }
    if (content.needs) {
      return `${content.needs.length} user needs: ${content.needs.slice(0, 2).join(', ')}${content.needs.length > 2 ? '...' : ''}`;
    }
    if (content.features) {
      return `${content.features.length} features: ${content.features.slice(0, 2).join(', ')}${content.features.length > 2 ? '...' : ''}`;
    }
    if (content.competitors) {
      return `${content.competitors.length} competitors analyzed`;
    }
    if (content.observations) {
      return `${content.observations.length} research observations`;
    }
    if (content.statement) {
      return content.statement.slice(0, 150) + '...';
    }
    if (content.objectives && content.goals) {
      return `${content.objectives.length} objectives, ${content.goals.length} goals`;
    }
    if (content.persona) {
      return `Persona: ${content.persona.name || 'User'} - ${content.persona.role || 'Role'}`;
    }
    if (content.quadrants) {
      const total = (content.quadrants.doFirst?.length || 0) +
                    (content.quadrants.schedule?.length || 0) +
                    (content.quadrants.delegate?.length || 0) +
                    (content.quadrants.eliminate?.length || 0);
      return `Eisenhower matrix with ${total} items`;
    }
    if (content.problems) {
      return `${content.problems.length} problem${content.problems.length > 1 ? 's' : ''} analyzed with root cause`;
    }

    // 2025 IA - Business Impact Preview
    if (content.primaryMetric) {
      const metric = content.primaryMetric;
      return `Impact: ${metric.value || ''} ${metric.label || 'key metric'}`;
    }

    // 2025 IA - Design Vision & Strategy
    if (content.vision && content.strategy) {
      return `Vision: ${content.vision.slice(0, 80)}...`;
    }
    if (content.northStar) {
      return `North Star: ${content.northStar.slice(0, 100)}...`;
    }

    // 2025 IA - Cross-Functional Alignment
    if (content.pmPartnership || content.engineeringCollaboration || content.dataScienceCoordination) {
      const partnerships = [
        content.pmPartnership ? 'PM' : null,
        content.engineeringCollaboration ? 'Engineering' : null,
        content.dataScienceCoordination ? 'Data Science' : null
      ].filter(Boolean);
      return `Cross-functional work with ${partnerships.join(', ')}`;
    }

    // 2025 IA - Technical Constraints
    if (content.constraints && content.designAdaptations) {
      return `${content.constraints.length} constraints, ${content.designAdaptations.length} design adaptations`;
    }
    if (content.constraints && Array.isArray(content.constraints)) {
      return `${content.constraints.length} technical constraints identified`;
    }

    // 2025 IA - AI/ML Considerations
    if (content.modelCapabilities || content.infrastructureConstraints) {
      const items = [];
      if (content.modelCapabilities) items.push('AI capabilities');
      if (content.infrastructureConstraints) items.push('infrastructure');
      if (content.trustExplainability) items.push('trust & explainability');
      if (content.ethicalConsiderations) items.push('ethics');
      return `AI/ML considerations: ${items.join(', ')}`;
    }

    // 2025 IA - Key Insights
    if (content.insights && Array.isArray(content.insights)) {
      return `${content.insights.length} key insight${content.insights.length > 1 ? 's' : ''} discovered`;
    }

    // 2025 IA - Design Explorations & Tradeoffs
    if (content.explorations && content.tradeoffs) {
      return `${content.explorations.length} explorations, ${content.tradeoffs.length} tradeoffs`;
    }
    if (content.tradeoffs && Array.isArray(content.tradeoffs)) {
      return `${content.tradeoffs.length} design tradeoff${content.tradeoffs.length > 1 ? 's' : ''} analyzed`;
    }

    // 2025 IA - Design System Contribution
    if (content.components && content.patterns) {
      return `${content.components.length} components, ${content.patterns.length} patterns contributed`;
    }
    if (content.components && Array.isArray(content.components) && !content.patterns) {
      return `${content.components.length} design system component${content.components.length > 1 ? 's' : ''}`;
    }

    // 2025 IA - Turning Point
    if (content.situation && content.insight && content.impact) {
      return `Turning point: ${content.insight.slice(0, 80)}...`;
    }

    // 2025 IA - Validation & Iteration
    if (content.testingRounds && Array.isArray(content.testingRounds)) {
      return `${content.testingRounds.length} testing round${content.testingRounds.length > 1 ? 's' : ''} conducted`;
    }
    if (content.validationMetrics) {
      return `Validation with ${Object.keys(content.validationMetrics).length} metrics tracked`;
    }

    // 2025 IA - Business Impact Enhanced
    if (content.quantitativeMetrics && Array.isArray(content.quantitativeMetrics)) {
      return `${content.quantitativeMetrics.length} quantitative metric${content.quantitativeMetrics.length > 1 ? 's' : ''} measured`;
    }
    if (content.qualitativeFeedback) {
      return `Qualitative feedback: ${content.qualitativeFeedback.slice(0, 80)}...`;
    }
    if (content.behavioralChanges) {
      return `Behavioral changes documented`;
    }

    // 2025 IA - Team & Organizational Impact
    if (content.processImprovements || content.collaborationWins) {
      const items = [];
      if (content.processImprovements) items.push(`${content.processImprovements.length} process improvements`);
      if (content.collaborationWins) items.push(`${content.collaborationWins.length} collaboration wins`);
      return items.join(', ');
    }
    if (content.mentorship || content.cultureImpact) {
      return 'Team & organizational impact documented';
    }

    // 2025 IA - Reflection & Next Steps
    if (content.keyLearnings && Array.isArray(content.keyLearnings)) {
      return `${content.keyLearnings.length} key learning${content.keyLearnings.length > 1 ? 's' : ''} captured`;
    }
    if (content.whatWouldChange) {
      return `Reflection: ${content.whatWouldChange.slice(0, 80)}...`;
    }
    if (content.futureIterations && Array.isArray(content.futureIterations)) {
      return `${content.futureIterations.length} future iteration${content.futureIterations.length > 1 ? 's' : ''} planned`;
    }
    if (content.personalGrowth) {
      return `Personal growth: ${content.personalGrowth.slice(0, 80)}...`;
    }

    // 2025 IA - Generic section handlers
    if (content.principles && Array.isArray(content.principles)) {
      return `${content.principles.length} design principle${content.principles.length > 1 ? 's' : ''}`;
    }
    if (content.guidelines && Array.isArray(content.guidelines)) {
      return `${content.guidelines.length} guideline${content.guidelines.length > 1 ? 's' : ''} defined`;
    }
    if (content.adoption) {
      return `Adoption: ${content.adoption.slice(0, 80)}...`;
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
