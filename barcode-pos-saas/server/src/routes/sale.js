import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getAllSales, getSale, createSale, updateSale, deleteSale, getSalesAnalytics } from '../controllers/saleController.js';

const router = express.Router();

router.get('/', authenticate, getAllSales);
router.get('/:id', authenticate, getSale);
router.post('/', authenticate, createSale);
router.put('/:id', authenticate, updateSale);
router.delete('/:id', authenticate, deleteSale);
router.get('/analytics', authenticate, getSalesAnalytics);

export default router;
