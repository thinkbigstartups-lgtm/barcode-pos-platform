import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getAllSales, getSale, createSale, updateSale, deleteSale } from '../controllers/saleController.js';

const router = express.Router();

router.get('/', authenticate, getAllSales);
router.get('/:id', authenticate, getSale);
router.post('/', authenticate, createSale);
router.put('/:id', authenticate, updateSale);
router.delete('/:id', authenticate, deleteSale);

export default router;
