import express from 'express';
import { createBin, deleteBin, getBin, updateBin } from '../controllers/BinsController.js';

const router = express.Router();

router.get('/:name', getBin);
router.post('/', createBin);
router.put('/:id', updateBin);
router.delete('/:id', deleteBin);

export default router;