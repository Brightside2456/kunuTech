const express = require('express');
const authController = require('../controllers/authController');
const validationMiddleware = require('../middleware/validationMiddleware');
const { registerSchema, loginSchema } = require('../validation/authValidation');

const router = express.Router();

router.post('/register', validationMiddleware(registerSchema), authController.register);
router.post('/login', validationMiddleware(loginSchema), authController.login);

module.exports = router; 