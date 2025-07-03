
---

```markdown
# 🚀 Product API – Week 2: Express.js Assignment

A RESTful API built with **Express.js** that manages products, supports advanced query features, and implements custom middleware for logging, authentication, validation, and error handling.

---

## 📁 Project Structure

```

.
├── controllers/
│   └── productController.js      # Business logic for products
├── middleware/
│   ├── auth.js                   # API key authentication middleware
│   ├── errorHandler.js           # Global error handler
│   ├── logger.js                 # Custom request logger
│   └── validate.js               # Request body validation
├── routes/
│   └── products.js               # All /api/products routes
├── .env                          # Environment variables (API\_KEY, PORT)
├── .env.example                  # Sample env file
├── server.js                     # Entry point of the application
├── package.json
└── README.md                     # This file

````

---

## ✅ Features

- 🔁 **CRUD operations** for `/api/products`
- 🔐 API Key **authentication middleware**
- 🧾 Custom **logger middleware**
- ✅ **Validation middleware** for product fields
- 💥 Global **error handling**
- 🔍 **Search** products by name
- 📊 **Stats** route: product count by category
- 🧩 Supports **filtering**, **pagination**, and **category-based queries**

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd week-2-express-js-assignment-Sainttyga
````

### 2. Install dependencies

```bash
pnpm install
```

> Or use `npm install` if you're not using pnpm.

### 3. Create a `.env` file

Create a `.env` file based on the `.env.example` template:

```env
API_KEY=12345
PORT=3000
```

### 4. Start the server

```bash
pnpm start
```

> Server runs on: `http://localhost:3000`

---

## 🔑 Authentication

All API routes (except `/`) require a valid API key in the request headers:

```
x-api-key: 12345
```

---

## 📬 API Endpoints

### Base URL

```
http://localhost:3000/api/products
```

---

### GET `/api/products`

* **Description**: List all products
* **Query Parameters**:

  * `category` (optional): Filter by category
  * `page` (optional): Page number (default = 1)
  * `limit` (optional): Items per page (default = 10)

---

### GET `/api/products/:id`

* **Description**: Get a product by ID

---

### POST `/api/products`

* **Description**: Create a new product
* **Headers**:

  * `x-api-key: 12345`
* **Body**:

```json
{
  "name": "Blender",
  "description": "High-speed kitchen blender",
  "price": 150,
  "category": "kitchen",
  "inStock": true
}
```

---

### PUT `/api/products/:id`

* **Description**: Update an existing product
* **Body**: Same structure as POST

---

### DELETE `/api/products/:id`

* **Description**: Delete a product by ID

---

### GET `/api/products/search/:name`

* **Description**: Search products by name (case-insensitive)

---

### GET `/api/products/stats`

* **Description**: Returns count of products grouped by category

---

## 🧪 Example curl Requests

```bash
# Get all products
curl -H "x-api-key: 12345" http://localhost:3000/api/products

# Filter by category
curl -H "x-api-key: 12345" "http://localhost:3000/api/products?category=electronics"

# Search by name
curl -H "x-api-key: 12345" http://localhost:3000/api/products/search/laptop

# Create a product
curl -X POST -H "Content-Type: application/json" -H "x-api-key: 12345" \
  -d '{"name":"Desk","description":"Office desk","price":100,"category":"furniture","inStock":true}' \
  http://localhost:3000/api/products
```

---

## 🛡️ Validation Rules

Both **POST** and **PUT** requests require the following fields:

| Field       | Type    | Required |
| ----------- | ------- | -------- |
| name        | string  | ✅ Yes    |
| description | string  | ✅ Yes    |
| price       | number  | ✅ Yes    |
| category    | string  | ✅ Yes    |
| inStock     | boolean | ✅ Yes    |

---

## ❌ Error Handling

* All errors return a structured JSON response with appropriate status codes.
* 401 for missing/invalid API keys
* 404 for product not found
* 400 for validation errors

---

## 👨‍🏫 Author

**Sainttyga** – PLP Academy Week 2 Assignment
*This project is for learning purposes only.*

---

## 📄 License

This project is not licensed for production. For academic use only.

```
