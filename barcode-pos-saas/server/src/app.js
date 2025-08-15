const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger');
const { sequelize } = require('./models'); // Assuming models/index.js exports sequelize instance
const routes = require('./routes'); // Import routes
import productRoutes from './routes/product.js';
import categoryRoutes from './routes/category.js';
import storeRoutes from './routes/store.js';
import inventoryRoutes from './routes/inventory.js';
import saleRoutes from './routes/sale.js';
import customerRoutes from './routes/customer.js';
import tenantRoutes from './routes/tenant.js';
import setupSwagger from './config/swagger.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
setupSwagger(app);

// API routes
app.use('/api', routes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/tenants', tenantRoutes);

// Database connection and server start
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = app;