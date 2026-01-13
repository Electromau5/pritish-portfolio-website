import Dexie from 'dexie';
import { v4 as uuidv4 } from 'uuid';

const db = new Dexie('CaseStudyCMS');

// Version 1: Original schema
db.version(1).stores({
  caseStudies: 'id, slug, projectId, status, createdAt, updatedAt',
  imageBlobs: 'id, caseStudyId, filename'
});

// Version 2: Add artifacts table
db.version(2).stores({
  caseStudies: 'id, slug, projectId, status, createdAt, updatedAt',
  imageBlobs: 'id, caseStudyId, filename',
  artifacts: 'id, caseStudyId, type, createdAt'
});

// Migration function to convert existing case studies to artifacts system
export const migrateToArtifactsSystem = async () => {
  const MIGRATION_KEY = 'artifacts_migration_v1_complete';

  // Check if migration already ran
  if (localStorage.getItem(MIGRATION_KEY) === 'true') {
    return { success: true, message: 'Migration already completed' };
  }

  try {
    // Get all case studies
    const caseStudies = await db.caseStudies.toArray();
    let migratedCount = 0;

    for (const caseStudy of caseStudies) {
      let hasChanges = false;

      // Migrate journeyMap if exists
      if (caseStudy.journeyMap) {
        await db.artifacts.add({
          id: uuidv4(),
          caseStudyId: caseStudy.id,
          type: 'journeyMap',
          name: 'Customer Journey Map',
          enabled: false, // Don't auto-enable to preserve current behavior
          data: caseStudy.journeyMap,
          createdAt: caseStudy.createdAt || new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        hasChanges = true;
      }

      // Migrate userFlow if exists
      if (caseStudy.userFlow) {
        await db.artifacts.add({
          id: uuidv4(),
          caseStudyId: caseStudy.id,
          type: 'userFlow',
          name: 'User Flow Diagram',
          enabled: false,
          data: caseStudy.userFlow,
          createdAt: caseStudy.createdAt || new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        hasChanges = true;
      }

      // Remove journey/userflow content blocks from sections
      if (Array.isArray(caseStudy.sections)) {
        const cleanedSections = caseStudy.sections
          .map(section => ({
            ...section,
            content: (section.content || []).filter(
              block => block.type !== 'journey' && block.type !== 'userflow'
            )
          }))
          .filter(section => section.content && section.content.length > 0); // Remove empty sections

        // Only update if sections changed
        if (JSON.stringify(cleanedSections) !== JSON.stringify(caseStudy.sections)) {
          await db.caseStudies.update(caseStudy.id, {
            sections: cleanedSections,
            updatedAt: new Date().toISOString()
          });
          hasChanges = true;
        }
      }

      if (hasChanges) {
        migratedCount++;
      }
    }

    // Mark migration as complete
    localStorage.setItem(MIGRATION_KEY, 'true');

    return {
      success: true,
      message: `Migrated ${migratedCount} case studies to artifacts system`
    };
  } catch (error) {
    console.error('Migration failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export default db;

