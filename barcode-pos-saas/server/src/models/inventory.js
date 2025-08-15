import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';

class Inventory extends Model {}

Inventory.init({
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  productId: { type: DataTypes.UUID, allowNull: false },
  storeId: { type: DataTypes.UUID, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false }
}, {
  sequelize,
  modelName: 'Inventory',
  tableName: 'inventories',
  timestamps: true
});

export default Inventory;
