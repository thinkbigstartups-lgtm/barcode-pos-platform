# Barcode POS & Inventory Management SaaS Platform

## Overview
This project is a production-ready Barcode POS & Inventory Management SaaS platform designed for retail businesses. It features a modern tech stack and provides essential functionalities for managing sales, inventory, and customer relationships.

## Tech Stack
- **Backend**: Node.js, Express.js, Sequelize ORM, PostgreSQL
- **Frontend**: React.js, Vite, Tailwind CSS
- **Authentication**: JWT with role-based access control (Admin, Staff, Cashier)
- **Real-time Communication**: Socket.io for inventory synchronization
- **Database**: Multi-tenant PostgreSQL with tenant isolation
- **Deployment**: Docker with CI/CD readiness

## Core Features
1. Barcode scanning POS system with camera/USB scanner support
2. Dynamic inventory management with admin/staff access controls
3. GST billing system for Indian retail
4. Business analytics dashboard with sales trends and reports
5. Multi-location inventory tracking
6. White-label customization options
7. Role-based user management
8. Real-time sales and inventory synchronization
9. Invoice generation with print functionality
10. Customer management with purchase history

## Project Structure
```
/server
  ├── src
  │   ├── controllers
  │   ├── middleware
  │   ├── models
  │   ├── routes
  │   ├── services
  │   ├── sockets
  │   └── app.js
  ├── config
  │   ├── config.js
  │   └── swagger.js
  ├── tests
  ├── package.json
  ├── .env.example
  └── README.md
/client
  ├── src
  │   ├── components
  │   ├── pages
  │   ├── hooks
  │   ├── assets
  │   ├── App.jsx
  │   └── main.jsx
  ├── public
  ├── tests
  ├── package.json
  ├── tailwind.config.js
  ├── vite.config.js
  └── README.md
/docs
  ├── api.md
  ├── user-guide.md
  └── swagger.yaml
/docker
  ├── Dockerfile.server
  ├── Dockerfile.client
  ├── docker-compose.yml
  └── nginx.conf
/.github
  └── workflows
      └── ci-cd.yml
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd barcode-pos-saas
   ```

2. **Install server dependencies**:
   ```
   cd server
   npm install
   ```

3. **Set up environment variables**:
   Copy `.env.example` to `.env` and configure your database and other settings.

4. **Run the server**:
   ```
   npm start
   ```

5. **Install client dependencies**:
   ```
   cd ../client
   npm install
   ```

6. **Run the client**:
   ```
   npm run dev
   ```

## API Documentation
API endpoints are documented using Swagger. Access the documentation at `/api-docs` after starting the server.

## Testing
Run tests for the server and client using the respective test commands in their directories.

## Deployment
The application can be deployed using Docker. Refer to the Docker configuration files in the `/docker` directory for setup instructions.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.