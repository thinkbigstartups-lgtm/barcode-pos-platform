import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';

class Product extends Model {}

Product.init({
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  barcode: { type: DataTypes.STRING, allowNull: false, unique: true },
  price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  tenantId: { type: DataTypes.UUID, allowNull: false }
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'products',
  timestamps: true
});

export default Product;
