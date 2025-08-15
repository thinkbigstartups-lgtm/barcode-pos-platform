import express from 'express';
import cors from 'cors';
import setupSwagger from './config/swagger.js';
import sequelize from './sequelize.js';
import productRoutes from './routes/product.js';
import categoryRoutes from './routes/category.js';
import storeRoutes from './routes/store.js';
import inventoryRoutes from './routes/inventory.js';
import saleRoutes from './routes/sale.js';
import customerRoutes from './routes/customer.js';
import tenantRoutes from './routes/tenant.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

setupSwagger(app);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/tenants', tenantRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});