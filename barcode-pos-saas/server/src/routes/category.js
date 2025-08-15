import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getAllCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/', authenticate, getAllCategories);
router.get('/:id', authenticate, getCategory);
router.post('/', authenticate, createCategory);
router.put('/:id', authenticate, updateCategory);
router.delete('/:id', authenticate, deleteCategory);

export default router;
