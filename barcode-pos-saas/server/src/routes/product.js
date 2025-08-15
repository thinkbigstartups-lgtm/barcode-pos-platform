import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', authenticate, getAllProducts);
router.get('/:id', authenticate, getProduct);
router.post('/', authenticate, createProduct);
router.put('/:id', authenticate, updateProduct);
router.delete('/:id', authenticate, deleteProduct);

export default router;
