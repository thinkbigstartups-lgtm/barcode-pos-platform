import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getTenantBranding, updateTenantBranding } from '../controllers/tenantController.js';

const router = express.Router();

router.get('/branding', authenticate, getTenantBranding);
router.put('/branding', authenticate, updateTenantBranding);

export default router;
