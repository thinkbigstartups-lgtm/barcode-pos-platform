import Tenant from '../models/tenant.js';

export const getTenantBranding = async (req, res) => {
  try {
    const tenant = await Tenant.findOne({ where: { id: req.user.tenantId } });
    if (!tenant) return res.status(404).json({ error: 'Tenant not found' });
    res.json(tenant.branding);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTenantBranding = async (req, res) => {
  try {
    const tenant = await Tenant.findOne({ where: { id: req.user.tenantId } });
    if (!tenant) return res.status(404).json({ error: 'Tenant not found' });
    await tenant.update({ branding: req.body.branding });
    res.json(tenant.branding);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
