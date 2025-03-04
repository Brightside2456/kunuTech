const jwt = require('jsonwebtoken');
const db = require('../config/db');
const JWT_SECRET  =  "secret";

const registerUser = async (userData) => {
  const userRef = db.collection('users').doc();
  await userRef.set({
    ...userData,
    points: 0,
    created_at: new Date(),
  });
  const token = jwt.sign({ userId: userRef.id }, JWT_SECRET, { expiresIn: '1h' });
  return { user_id: userRef.id, token };
};

const loginUser = async (loginData) => {
  const userSnapshot = await db.collection('users').where('email', '==', loginData.email).get();
  if (userSnapshot.empty) {
    throw new Error('Invalid email or password');
  }

  const user = userSnapshot.docs[0].data();
  if (user.password !== loginData.password) {
    throw new Error('Invalid email or password');
  }
  console.log(user);

  const token = jwt.sign({ userId: userSnapshot.docs[0].id }, JWT_SECRET, { expiresIn: '1h' });
  return { token, user: { id: userSnapshot.docs[0].id, full_name: user.full_name, user_type: user.user_type } };
};

module.exports = {
  registerUser,
  loginUser,
};