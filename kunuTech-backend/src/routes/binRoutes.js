const express = require('express');
const binController = require('../controllers/binController');
const validationMiddleware = require('../middleware/validationMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const { addBinSchema } = require('../validation/binValidation');

const router = express.Router();

router.get('/nearby', binController.getNearbyBins);
router.post('/update', binController.updateBinFillLevel);
router.post('/add', authMiddleware, validationMiddleware(addBinSchema), binController.addBin);

module.exports = router;