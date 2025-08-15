import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getAllInventory, getInventory, createInventory, updateInventory, deleteInventory } from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/', authenticate, getAllInventory);
router.get('/:id', authenticate, getInventory);
router.post('/', authenticate, createInventory);
router.put('/:id', authenticate, updateInventory);
router.delete('/:id', authenticate, deleteInventory);

export default router;
