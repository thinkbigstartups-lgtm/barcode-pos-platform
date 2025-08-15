import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';

class Tenant extends Model {}

Tenant.init({
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  branding: { type: DataTypes.JSON, allowNull: true }
}, {
  sequelize,
  modelName: 'Tenant',
  tableName: 'tenants',
  timestamps: true
});

export default Tenant;
