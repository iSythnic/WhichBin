import express from 'express';
import { deleteBin, updateBin } from '../controllers/BinsController.js';
import { createItem, deleteItem, getItem, getItemBySearch, updateItem } from '../controllers/ItemController.js';
import upload from '../multer/Uploads.js';
const router = express.Router();

router.post('/', upload.single("image"), createItem);
router.get('/search', getItemBySearch);
router.get('/:id', getItem);
router.put('/:id', upload.single("image"), updateItem);
router.delete('/:id', deleteItem);

export default router;