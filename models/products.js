// File: models/products.js
const mongoose = require('mongoose'); // Import mongoose to define the schema for products

// Define the product schema with fields: name, description, price, category, and inStock
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  inStock: { type: Boolean, default: true }
}, { timestamps: true });

// Export the product model based on the defined schema
module.exports = mongoose.model('Product', productSchema);
