# API Documentation

## Authentication

### Login
- **Endpoint:** `POST /api/auth/login`
- **Description:** Authenticates a user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Responses:**
  - **200 OK:** Returns a JWT token.
  - **401 Unauthorized:** Invalid credentials.

### Register
- **Endpoint:** `POST /api/auth/register`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "user@example.com",
    "password": "yourpassword",
    "role": "staff" // or "admin", "cashier"
  }
  ```
- **Responses:**
  - **201 Created:** User registered successfully.
  - **400 Bad Request:** Validation errors.

### Get Current User
- **Endpoint:** `GET /api/auth/me`
- **Description:** Retrieves the current authenticated user's information.
- **Responses:**
  - **200 OK:** Returns user details.
  - **401 Unauthorized:** User not authenticated.

## Products

### Get Products
- **Endpoint:** `GET /api/products`
- **Description:** Retrieves a list of products.
- **Responses:**
  - **200 OK:** Returns an array of products.

### Create Product
- **Endpoint:** `POST /api/products`
- **Description:** Creates a new product.
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "barcode": "1234567890123",
    "categoryId": 1,
    "price": 100.00,
    "stock": 50
  }
  ```
- **Responses:**
  - **201 Created:** Product created successfully.
  - **400 Bad Request:** Validation errors.

### Update Product
- **Endpoint:** `PUT /api/products/:id`
- **Description:** Updates an existing product.
- **Request Body:**
  ```json
  {
    "name": "Updated Product Name",
    "price": 120.00,
    "stock": 30
  }
  ```
- **Responses:**
  - **200 OK:** Product updated successfully.
  - **404 Not Found:** Product not found.

### Delete Product
- **Endpoint:** `DELETE /api/products/:id`
- **Description:** Deletes a product.
- **Responses:**
  - **204 No Content:** Product deleted successfully.
  - **404 Not Found:** Product not found.

### Scan Product
- **Endpoint:** `POST /api/products/scan`
- **Description:** Scans a product by barcode.
- **Request Body:**
  ```json
  {
    "barcode": "1234567890123"
  }
  ```
- **Responses:**
  - **200 OK:** Returns product details.
  - **404 Not Found:** Product not found.

## Inventory

### Get Inventory
- **Endpoint:** `GET /api/inventory`
- **Description:** Retrieves inventory details.
- **Responses:**
  - **200 OK:** Returns inventory details.

### Create Inventory Item
- **Endpoint:** `POST /api/inventory`
- **Description:** Adds a new inventory item.
- **Request Body:**
  ```json
  {
    "productId": 1,
    "locationId": 1,
    "quantity": 50
  }
  ```
- **Responses:**
  - **201 Created:** Inventory item added successfully.
  - **400 Bad Request:** Validation errors.

### Update Inventory Item
- **Endpoint:** `PUT /api/inventory/:id`
- **Description:** Updates an existing inventory item.
- **Request Body:**
  ```json
  {
    "quantity": 30
  }
  ```
- **Responses:**
  - **200 OK:** Inventory item updated successfully.
  - **404 Not Found:** Inventory item not found.

### Get Inventory Alerts
- **Endpoint:** `GET /api/inventory/alerts`
- **Description:** Retrieves inventory alerts for low stock.
- **Responses:**
  - **200 OK:** Returns alerts for low stock items.

## Sales

### Create Sale
- **Endpoint:** `POST /api/sales`
- **Description:** Records a new sale transaction.
- **Request Body:**
  ```json
  {
    "items": [
      {
        "productId": 1,
        "quantity": 2
      }
    ],
    "customerId": 1
  }
  ```
- **Responses:**
  - **201 Created:** Sale recorded successfully.
  - **400 Bad Request:** Validation errors.

### Get Sales Reports
- **Endpoint:** `GET /api/sales/reports`
- **Description:** Retrieves sales reports.
- **Responses:**
  - **200 OK:** Returns sales report data.

### Get Sales Analytics
- **Endpoint:** `GET /api/sales/analytics`
- **Description:** Retrieves sales analytics data.
- **Responses:**
  - **200 OK:** Returns analytics data.

## Customers

### Get Customers
- **Endpoint:** `GET /api/customers`
- **Description:** Retrieves a list of customers.
- **Responses:**
  - **200 OK:** Returns an array of customers.

### Create Customer
- **Endpoint:** `POST /api/customers`
- **Description:** Creates a new customer.
- **Request Body:**
  ```json
  {
    "name": "Customer Name",
    "email": "customer@example.com"
  }
  ```
- **Responses:**
  - **201 Created:** Customer created successfully.
  - **400 Bad Request:** Validation errors.

### Update Customer
- **Endpoint:** `PUT /api/customers/:id`
- **Description:** Updates an existing customer.
- **Request Body:**
  ```json
  {
    "name": "Updated Customer Name"
  }
  ```
- **Responses:**
  - **200 OK:** Customer updated successfully.
  - **404 Not Found:** Customer not found.

## Tenants

### Get Tenant Branding
- **Endpoint:** `GET /api/tenants/branding`
- **Description:** Retrieves branding information for the tenant.
- **Responses:**
  - **200 OK:** Returns tenant branding details.

### Update Tenant Branding
- **Endpoint:** `PUT /api/tenants/branding`
- **Description:** Updates branding information for the tenant.
- **Request Body:**
  ```json
  {
    "logo": "url_to_logo",
    "colors": {
      "primary": "#ffffff",
      "secondary": "#000000"
    }
  }
  ```
- **Responses:**
  - **200 OK:** Branding updated successfully.