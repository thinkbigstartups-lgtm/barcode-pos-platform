import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';

class Customer extends Model {}

Customer.init({
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: true },
  tenantId: { type: DataTypes.UUID, allowNull: false }
}, {
  sequelize,
  modelName: 'Customer',
  tableName: 'customers',
  timestamps: true
});

export default Customer;
