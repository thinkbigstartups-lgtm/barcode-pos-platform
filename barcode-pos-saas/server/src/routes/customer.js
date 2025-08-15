import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getAllCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer } from '../controllers/customerController.js';

const router = express.Router();

router.get('/', authenticate, getAllCustomers);
router.get('/:id', authenticate, getCustomer);
router.post('/', authenticate, createCustomer);
router.put('/:id', authenticate, updateCustomer);
router.delete('/:id', authenticate, deleteCustomer);

export default router;
