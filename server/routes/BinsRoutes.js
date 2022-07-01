import express from 'express';
import { createBin, deleteBin, getBin, getBinBySearch, updateBin } from '../controllers/BinsController.js';
import upload from '../multer/Uploads.js';

const router = express.Router();

router.get('/search', getBinBySearch);
router.get('/:id', getBin);
router.post('/', upload.single('image'), createBin);
router.put('/:id', upload.single('image'), updateBin);
router.delete('/:id', deleteBin);

export default router;