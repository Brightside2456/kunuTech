const { assignCollectorSchema, completeCollectionSchema } = require('../validation/collectionValidation');
const collectionService = require('../services/collectionService');

const getCollectionSchedule = async (req, res) => {
  const { user_id } = req.query;
  try {
    const schedule = await collectionService.getCollectionSchedule(user_id);
    res.json(schedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const assignCollector = async (req, res) => {
  try {
    const data = assignCollectorSchema.parse(req.body);
    const result = await collectionService.assignCollector(data.collector_id, data.bin_id, data.scheduled_time);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

const completeCollection = async (req, res) => {
  try {
    const data = completeCollectionSchema.parse(req.body);
    const result = await collectionService.completeCollection(data.collection_id, data.collector_id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

module.exports = {
  getCollectionSchedule,
  assignCollector,
  completeCollection,
};