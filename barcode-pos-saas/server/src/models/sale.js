import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';

class Sale extends Model {}

Sale.init({
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  totalAmount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  tenantId: { type: DataTypes.UUID, allowNull: false }
}, {
  sequelize,
  modelName: 'Sale',
  tableName: 'sales',
  timestamps: true
});

export default Sale;
