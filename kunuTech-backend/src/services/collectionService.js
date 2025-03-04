const db = require('../config/db');

const getCollectionSchedule = async (user_id) => {
  const collectionsSnapshot = await db.collection('waste_collections').where('collector_id', '==', user_id).get();
  return collectionsSnapshot.docs.map(doc => doc.data());
};

const assignCollector = async (collector_id, bin_id, scheduled_time) => {
  const collectionRef = db.collection('waste_collections').doc();
  await collectionRef.set({
    bin_id,
    collector_id,
    scheduled_time: new Date(scheduled_time),
    completion_status: 'pending',
    collected_at: null,
  });
  return { message: 'Collector assigned successfully' };
};

const completeCollection = async (collection_id, collector_id) => {
  const collectionRef = db.collection('waste_collections').doc(collection_id);
  await collectionRef.update({
    completion_status: 'completed',
    collected_at: new Date(),
  });
  return { message: 'Waste collection marked as completed' };
};

module.exports = {
  getCollectionSchedule,
  assignCollector,
  completeCollection,
};