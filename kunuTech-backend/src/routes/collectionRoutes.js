const express = require('express');
const collectionController = require('../controllers/collectionController');
const validationMiddleware = require('../middleware/validationMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const { assignCollectorSchema, completeCollectionSchema } = require('../validation/collectionValidation');

const router = express.Router();

router.get('/schedule', authMiddleware, collectionController.getCollectionSchedule);
router.post('/assign', authMiddleware, validationMiddleware(assignCollectorSchema), collectionController.assignCollector);
router.post('/complete', authMiddleware, validationMiddleware(completeCollectionSchema), collectionController.completeCollection);

module.exports = router;