import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';

class Store extends Model {}

Store.init({
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  tenantId: { type: DataTypes.UUID, allowNull: false }
}, {
  sequelize,
  modelName: 'Store',
  tableName: 'stores',
  timestamps: true
});

export default Store;
