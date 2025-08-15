import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';

class Category extends Model {}

Category.init({
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  gstRate: { type: DataTypes.DECIMAL(5,2), allowNull: false },
  tenantId: { type: DataTypes.UUID, allowNull: false }
}, {
  sequelize,
  modelName: 'Category',
  tableName: 'categories',
  timestamps: true
});

export default Category;
