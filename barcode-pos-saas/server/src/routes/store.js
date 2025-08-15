import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getAllStores, getStore, createStore, updateStore, deleteStore } from '../controllers/storeController.js';

const router = express.Router();

router.get('/', authenticate, getAllStores);
router.get('/:id', authenticate, getStore);
router.post('/', authenticate, createStore);
router.put('/:id', authenticate, updateStore);
router.delete('/:id', authenticate, deleteStore);

export default router;
