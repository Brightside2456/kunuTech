const binService = require('../services/binService');
const { addBinSchema } = require('../validation/binValidation');

const getNearbyBins = async (req, res) => {
  const { lat, lng } = req.query;
  try {
    const bins = await binService.getNearbyBins(lat, lng);
    res.json(bins);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBinFillLevel = async (req, res) => {
  const { bin_id, fill_level } = req.body;
  try {
    const result = await binService.updateBinFillLevel(bin_id, fill_level);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addBin = async (req, res) => {
  try {
    const binData = addBinSchema.parse(req.body);
    const result = await binService.addBin(binData);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

module.exports = {
  getNearbyBins,
  updateBinFillLevel,
  addBin,
};