import User from './user.js';
import Product from './product.js';
import Category from './category.js';
import Store from './store.js';
import Sale from './sale.js';
import Inventory from './inventory.js';
import Customer from './customer.js';
import Tenant from './tenant.js';

// Associations
Product.belongsTo(Category);
Product.belongsTo(Tenant);
Product.hasMany(Inventory);

Category.belongsTo(Tenant);

Store.belongsTo(Tenant);
Store.hasMany(Inventory);

Inventory.belongsTo(Product);
Inventory.belongsTo(Store);

Sale.belongsTo(Store);
Sale.belongsTo(Customer);
Sale.belongsTo(Tenant);

Customer.belongsTo(Tenant);

User.belongsTo(Tenant);

export { User, Product, Category, Store, Sale, Inventory, Customer, Tenant };
