import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const register = async (req, res) => {
  try {
    const { name, email, password, role, tenantId } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'staff',
      tenantId
    });
    res.status(201).json({ id: user.id, email: user.email, role: user.role });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, tenantId } = req.body;
    const user = await User.findOne({ where: { email, tenantId } });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user.id, role: user.role, tenantId: user.tenantId },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );
    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const me = async (req, res) => {
  res.json({ user: req.user });
};
