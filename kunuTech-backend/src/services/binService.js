const db = require('../config/db');

const getNearbyBins = async (lat, lng) => {
  const binsSnapshot = await db.collection('waste_bins').get();
  const bins = binsSnapshot.docs.map(doc => doc.data());
  const nearbyBins = bins.filter(bin => {
    const distance = Math.sqrt(Math.pow(bin.location.latitude - lat, 2) + Math.pow(bin.location.longitude - lng, 2));
    return distance < 0.01;
  });
  return nearbyBins;
};

const updateBinFillLevel = async (bin_id, fill_level) => {
  const binRef = db.collection('waste_bins').doc(bin_id);
  await binRef.update({ fill_level });
  return { message: 'Bin fill level updated successfully' };
};

const addBin = async (binData) => {
  const binRef = db.collection('waste_bins').doc();
  await binRef.set({
    ...binData,
    created_at: new Date(),
  });
  return { message: 'Bin added successfully', bin_id: binRef.id };
};

module.exports = {
  getNearbyBins,
  updateBinFillLevel,
  addBin,
};