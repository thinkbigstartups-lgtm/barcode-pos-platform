import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  tenantId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'staff', 'cashier'),
    defaultValue: 'staff'
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true
});

export default User;
