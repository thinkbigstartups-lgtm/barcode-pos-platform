# Barcode POS & Inventory Management SaaS Platform

## Overview
This project is a production-ready Barcode POS & Inventory Management SaaS Platform designed for retail businesses. It features a modern tech stack and provides essential functionalities for managing sales, inventory, and customer relationships.

## Tech Stack
- **Backend**: Node.js, Express.js, Sequelize ORM, PostgreSQL
- **Frontend**: React.js, Vite, Tailwind CSS, 21st.dev icons
- **Authentication**: JWT with role-based access control (Admin, Staff, Cashier)
- **Real-time Communication**: Socket.io for inventory synchronization
- **Database**: Multi-tenant PostgreSQL with tenant isolation
- **Deployment**: Docker with CI/CD readiness

## Core Features
1. Barcode scanning POS system with camera/USB scanner support
2. Dynamic inventory management with admin/staff access controls
3. GST billing system (CGST, SGST, IGST) for Indian retail
4. Business analytics dashboard with sales trends and reports
5. Multi-location inventory tracking
6. White-label customization (logo, colors, branding)
7. Role-based user management
8. Real-time sales and inventory synchronization
9. Invoice generation with print functionality
10. Customer management with purchase history

## Project Structure
```
barcode-pos-saas
├── server
├── client
├── docs
├── docker
└── .github
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- PostgreSQL
- Docker (for containerized deployment)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/barcode-pos-saas.git
   cd barcode-pos-saas
   ```

2. Set up the server:
   - Navigate to the server directory:
     ```
     cd server
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file based on the `.env.example` template and configure your database connection.

3. Set up the client:
   - Navigate to the client directory:
     ```
     cd ../client
     ```
   - Install dependencies:
     ```
     npm install
     ```

4. Run the application:
   - Start the server:
     ```
     cd server
     npm start
     ```
   - Start the client:
     ```
     cd ../client
     npm run dev
     ```

### Docker Deployment
To run the application using Docker, navigate to the `docker` directory and use the provided `docker-compose.yml` file:
```
cd docker
docker-compose up --build
```

## API Documentation
API endpoints are documented using Swagger. Access the documentation at `http://localhost:PORT/api-docs` after starting the server.

## Testing
Run tests for the server and client applications to ensure everything is functioning correctly.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.