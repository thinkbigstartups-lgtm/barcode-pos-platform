import Category from '../models/category.js';

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({ where: { tenantId: req.user.tenantId } });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, gstRate } = req.body;
    const category = await Category.create({
      name,
      gstRate,
      tenantId: req.user.tenantId
    });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    await category.update(req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    await category.destroy();
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
