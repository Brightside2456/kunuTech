const express = require('express');
const recycleController = require('../controllers/recycleController');
const validationMiddleware = require('../middleware/validationMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const { logRecyclingSchema } = require('../validation/recycleValidation');

const router = express.Router();

router.post('/log', authMiddleware, validationMiddleware(logRecyclingSchema), recycleController.logRecyclingActivity);
router.get('/leaderboard', recycleController.getLeaderboard);

module.exports = router;