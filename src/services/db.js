import Dexie from 'dexie';

const db = new Dexie('CaseStudyCMS');

db.version(1).stores({
  caseStudies: 'id, slug, projectId, status, createdAt, updatedAt',
  imageBlobs: 'id, caseStudyId, filename'
});

export default db;

