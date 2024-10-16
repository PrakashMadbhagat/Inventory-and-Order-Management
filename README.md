# Inventory and Order Management API Endpoints

## User Endpoints
- **POST /api/auth/register** - Register a new user.
- **POST /api/auth/login** - User login.

## Product Endpoints
- **POST /api/product** - Add a new product (admin only).
- **GET /api/product** - Get all products.
- **PUT /api/product/:id** - Update a product (admin only).
- **DELETE /api/product/:id** - Delete a product (admin only).
- **DELETE /api/product/low-stock** - View a low stock (admin only).

## Order Endpoints
- **POST /api/order** - Place a new order (for users).
- **GET /api/order/:id** - View a specific order (for users/admins).
- **GET /api/order** - View all orders (admin only).
- **PUT /api/order/:id/status** - Update order status (admin only).
