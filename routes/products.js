// File: routes/products.js

// Import the product controller and validation middleware
const express = require('express');

// Create a new router instance
const router = express.Router(); 

// Import the product controller and validation middleware
const controller = require('../controllers/productController.js');
const validateProduct = require('../middleware/validateProduct.js');

// Define the routes for product operations
// Each route corresponds to a specific operation in the product controller
router.get('/', controller.getAllProducts); //
router.get('/search/:name', controller.searchProducts);
router.get('/stats', controller.getStats);
router.get('/:id', controller.getProductById);
router.post('/', validateProduct, controller.createProduct);
router.put('/:id', validateProduct, controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

// Export the router to be used in the main server file
module.exports = router;
