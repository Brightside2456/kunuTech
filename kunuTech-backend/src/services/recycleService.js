const db = require('../config/db');

const logRecyclingActivity = async (user_id, material_type, weight) => {
  const points_earned = weight * 20; // Example points calculation
  const activityRef = db.collection('recycling_activities').doc();
  await activityRef.set({
    user_id,
    material_type,
    weight,
    points_earned,
    recycled_at: new Date(),
  });
  const userRef = db.collection('users').doc(user_id);
  const userDoc = await userRef.get();
  const user = userDoc.data();
  await userRef.update({ points: user.points + points_earned });
  return { message: 'Recycling activity recorded', points_earned };
};

const getLeaderboard = async () => {
  const usersSnapshot = await db.collection('users').orderBy('points', 'desc').limit(10).get();
  return usersSnapshot.docs.map(doc => ({
    user: doc.data().full_name,
    points: doc.data().points,
  }));
};

module.exports = {
  logRecyclingActivity,
  getLeaderboard,
};