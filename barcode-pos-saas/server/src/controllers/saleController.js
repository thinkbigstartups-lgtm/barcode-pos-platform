import Sale from '../models/sale.js';

export const getAllSales = async (req, res) => {
  try {
    const sales = await Sale.findAll({ where: { tenantId: req.user.tenantId } });
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSale = async (req, res) => {
  try {
    const sale = await Sale.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    res.json(sale);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createSale = async (req, res) => {
  try {
    const { totalAmount } = req.body;
    const sale = await Sale.create({
      totalAmount,
      tenantId: req.user.tenantId
    });
    res.status(201).json(sale);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateSale = async (req, res) => {
  try {
    const sale = await Sale.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    await sale.update(req.body);
    res.json(sale);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteSale = async (req, res) => {
  try {
    const sale = await Sale.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    await sale.destroy();
    res.json({ message: 'Sale deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
