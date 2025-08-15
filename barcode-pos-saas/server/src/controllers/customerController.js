import Customer from '../models/customer.js';

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll({ where: { tenantId: req.user.tenantId } });
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const { name, email } = req.body;
    const customer = await Customer.create({
      name,
      email,
      tenantId: req.user.tenantId
    });
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    await customer.update(req.body);
    res.json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    await customer.destroy();
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
