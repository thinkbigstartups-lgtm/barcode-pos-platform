import Product from '../models/product.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { tenantId: req.user.tenantId } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, barcode, price, stock, categoryId } = req.body;
    const product = await Product.create({
      name,
      barcode,
      price,
      stock,
      categoryId,
      tenantId: req.user.tenantId
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id, tenantId: req.user.tenantId } });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    await product.destroy();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
