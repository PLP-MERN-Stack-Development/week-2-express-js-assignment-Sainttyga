// server.js - Entry point

// server.js - Entry point for the Express application
const express = require('express');

// Import necessary modules
const dotenv = require('dotenv');

// Import routes and middleware
const productRoutes = require('./routes/products'); // Import product routes
const logger = require('./middleware/logger'); // Import custom logger middleware
const auth = require('./middleware/auth'); // Import authentication middleware
const errorHandler = require('./middleware/errorHandler'); // Import global error handler

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Set the port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(logger); // Use custom logger middleware for logging requests
app.use(auth); // Use authentication middleware to protect routes

// Routes
app.get('/', (req, res) => { // Root route for the API
  res.send('Welcome to the Product API!'); // Send a welcome message
});
app.use('/api/products', productRoutes); // Use product routes for all product-related operations

// Use global error handler to catch and respond to errors
app.use(errorHandler); 

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing or further configuration
module.exports = app;
