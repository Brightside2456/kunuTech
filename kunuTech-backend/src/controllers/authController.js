const { registerSchema, loginSchema } = require('../validation/authValidation');
const authService = require('../services/authService');

const register = async (req, res) => {
  try {
    const userData = registerSchema.parse(req.body);
    const result = await authService.registerUser(userData);
    res.json({ message: 'User registered successfully', ...result });
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

const login = async (req, res) => {
  try {
    const loginData = loginSchema.parse(req.body);
    const result = await authService.loginUser(loginData);
    res.json({ message: 'Login successful', ...result });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
};