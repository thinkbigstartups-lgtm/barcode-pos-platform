import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getAllInventory, getInventory, createInventory, updateInventory, deleteInventory, getInventoryAlerts } from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/', authenticate, getAllInventory);
router.get('/:id', authenticate, getInventory);
router.post('/', authenticate, createInventory);
router.put('/:id', authenticate, updateInventory);
router.delete('/:id', authenticate, deleteInventory);
router.get('/alerts', authenticate, getInventoryAlerts);

export default router;
