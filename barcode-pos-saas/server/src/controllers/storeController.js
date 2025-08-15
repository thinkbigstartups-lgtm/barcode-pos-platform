import Store from '../models/store.js';

export const getAllStores = async (req, res) => {
  try {
    const stores = await Store.findAll({ where: { tenantId: req.user.tenantId } });
    res.json(stores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getStore = async (req, res) => {
  try {
    const store = await Store.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!store) return res.status(404).json({ error: 'Store not found' });
    res.json(store);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createStore = async (req, res) => {
  try {
    const { name, location } = req.body;
    const store = await Store.create({
      name,
      location,
      tenantId: req.user.tenantId
    });
    res.status(201).json(store);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateStore = async (req, res) => {
  try {
    const store = await Store.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!store) return res.status(404).json({ error: 'Store not found' });
    await store.update(req.body);
    res.json(store);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteStore = async (req, res) => {
  try {
    const store = await Store.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!store) return res.status(404).json({ error: 'Store not found' });
    await store.destroy();
    res.json({ message: 'Store deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
