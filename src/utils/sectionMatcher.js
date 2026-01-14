// Utility for matching section names from natural language references

// Common aliases for section types
const SECTION_ALIASES = {
  'overview': ['project overview', 'overview', 'introduction', 'intro'],
  'problem': ['problem statement', 'problem', 'challenge', 'the problem'],
  'solution': ['solution', 'approach', 'the solution'],
  'research': ['user research', 'research', 'discovery', 'user discovery'],
  'team': ['team', 'team info', 'team information', 'the team'],
  'results': ['results', 'impact', 'metrics', 'success', 'outcomes'],
  'conclusion': ['conclusion', 'learnings', 'reflection', 'takeaways', 'key learnings'],
  'design': ['design', 'design process', 'visual design'],
  'testing': ['testing', 'user testing', 'usability testing'],
  'implementation': ['implementation', 'development', 'building']
};

/**
 * Find the index of a section by name using fuzzy matching
 * @param {Array} sections - Array of section objects with title property
 * @param {string} reference - The section name reference from user input
 * @returns {number} - Index of the matched section, or -1 if not found
 */
export const findSectionIndex = (sections, reference) => {
  if (!reference || !sections || sections.length === 0) return -1;

  const normalizedRef = reference.toLowerCase().trim();

  // 1. Exact match
  const exactIndex = sections.findIndex(s =>
    s.title.toLowerCase() === normalizedRef
  );
  if (exactIndex !== -1) return exactIndex;

  // 2. Partial match - reference contains section title or vice versa
  const partialIndex = sections.findIndex(s => {
    const sectionTitle = s.title.toLowerCase();
    return sectionTitle.includes(normalizedRef) || normalizedRef.includes(sectionTitle);
  });
  if (partialIndex !== -1) return partialIndex;

  // 3. Alias matching
  for (const [key, aliases] of Object.entries(SECTION_ALIASES)) {
    // Check if reference matches any alias
    const matchesAlias = aliases.some(alias =>
      normalizedRef.includes(alias) || alias.includes(normalizedRef)
    );

    if (matchesAlias) {
      // Find section that matches this alias group
      const aliasIndex = sections.findIndex(s => {
        const sectionTitle = s.title.toLowerCase();
        return aliases.some(alias =>
          sectionTitle.includes(alias) || alias.includes(sectionTitle)
        );
      });
      if (aliasIndex !== -1) return aliasIndex;
    }
  }

  // 4. Word overlap matching (fallback)
  const refWords = normalizedRef.split(/\s+/).filter(w => w.length > 2);
  let bestMatch = -1;
  let bestScore = 0;

  sections.forEach((section, index) => {
    const titleWords = section.title.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const overlap = refWords.filter(word => titleWords.some(tw => tw.includes(word) || word.includes(tw)));
    const score = overlap.length / Math.max(refWords.length, 1);

    if (score > bestScore && score >= 0.5) {
      bestScore = score;
      bestMatch = index;
    }
  });

  return bestMatch;
};

/**
 * Calculate the insertion index based on insertion point specification
 * @param {Array} sections - Array of section objects
 * @param {Object} insertionPoint - Object with position and referenceSection
 * @returns {number} - Index where the new section should be inserted
 */
export const calculateInsertionIndex = (sections, insertionPoint) => {
  if (!insertionPoint) return sections.length;

  const { position, referenceSection } = insertionPoint;

  // Handle absolute positions
  if (position === 'start') return 0;
  if (position === 'end' || !referenceSection) return sections.length;

  // Find reference section
  const refIndex = findSectionIndex(sections, referenceSection);

  // If not found, default to end
  if (refIndex === -1) return sections.length;

  // Calculate position relative to reference
  if (position === 'before') return refIndex;
  if (position === 'after') return refIndex + 1;

  // Default to after if position is unclear
  return refIndex + 1;
};

/**
 * Get a human-readable description of the insertion position
 * @param {Array} sections - Array of section objects
 * @param {number} index - The insertion index
 * @returns {string} - Human-readable position description
 */
export const getInsertionDescription = (sections, index) => {
  if (index === 0) {
    return 'at the beginning';
  }
  if (index >= sections.length) {
    return 'at the end';
  }
  const beforeSection = sections[index];
  return `before "${beforeSection.title}"`;
};
