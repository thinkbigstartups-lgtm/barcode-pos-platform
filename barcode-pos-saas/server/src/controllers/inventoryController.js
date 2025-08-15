import Inventory from '../models/inventory.js';

export const getAllInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findAll();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getInventory = async (req, res) => {
  try {
    const item = await Inventory.findOne({ where: { id: req.params.id } });
    if (!item) return res.status(404).json({ error: 'Inventory item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createInventory = async (req, res) => {
  try {
    const { productId, storeId, quantity } = req.body;
    const item = await Inventory.create({ productId, storeId, quantity });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateInventory = async (req, res) => {
  try {
    const item = await Inventory.findOne({ where: { id: req.params.id } });
    if (!item) return res.status(404).json({ error: 'Inventory item not found' });
    await item.update(req.body);
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteInventory = async (req, res) => {
  try {
    const item = await Inventory.findOne({ where: { id: req.params.id } });
    if (!item) return res.status(404).json({ error: 'Inventory item not found' });
    await item.destroy();
    res.json({ message: 'Inventory item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
