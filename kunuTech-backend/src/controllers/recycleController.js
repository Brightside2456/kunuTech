const { logRecyclingSchema } = require('../validation/recycleValidation');
const recycleService = require('../services/recycleService');

const logRecyclingActivity = async (req, res) => {
  try {
    const data = logRecyclingSchema.parse(req.body);
    const result = await recycleService.logRecyclingActivity(data.user_id, data.material_type, data.weight);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await recycleService.getLeaderboard();
    res.json(leaderboard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  logRecyclingActivity,
  getLeaderboard,
};