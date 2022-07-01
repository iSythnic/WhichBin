import express from 'express';
import { getAllBins, getAllItems } from '../controllers/DataController.js';

const router = express.Router();

router.get('bins', getAllBins);
router.get('items', getAllItems);

export default router;