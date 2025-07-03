// Import UUID for generating unique IDs for new products
const { v4: uuidv4 } = require('uuid');

// Temporary in-memory database for storing product data
let products = [ // Sample data
  { id: '1', name: 'Laptop', description: '...', price: 1200, category: 'electronics', inStock: true },
  { id: '2', name: 'Smartphone', description: '...', price: 800, category: 'electronics', inStock: true },
  { id: '3', name: 'Coffee Maker', description: '...', price: 50, category: 'kitchen', inStock: false },
];

// Controller functions to get products
exports.getAllProducts = (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  let filtered = [...products]; // create a copy of the products array to apply filters without modifying the original

  if (category) { // if a category is specified, filter products by that category
    filtered = filtered.filter(p => p.category === category);
  }

  // Implement pagination logic: calculate start and end indices based on page and limit
  const start = (page - 1) * limit;
  const end = start + Number(limit);
  res.json(filtered.slice(start, end)); // respond with the sliced array of products based on pagination
};

// Get product by ID
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id); // find the product with the specified ID
  if (!product) return res.status(404).json({ error: 'Product not found' }); // if product not found, return 404 error
  res.json(product); // respond with the found product
};

// CRUD: Create a new product
exports.createProduct = (req, res) => { // validate the request body to ensure it contains the necessary fields
  const newProduct = { id: uuidv4(), ...req.body }; // generate a new unique ID for the product and merge it with the request body
  products.push(newProduct); // add the new product to the in-memory database
  res.status(201).json(newProduct); // respond with the created product and a 201 status code
};

// CRUD: Update an existing product
exports.updateProduct = (req, res) => { // validate the request body to ensure it contains the necessary fields
  const index = products.findIndex(p => p.id === req.params.id); // find the index of the product with the specified ID
  if (index === -1) return res.status(404).json({ error: 'Product not found' }); // if product not found, return 404 error
  products[index] = { id: req.params.id, ...req.body }; // update the product at the found index with the new data from the request body
  res.json(products[index]); // respond with the updated product
};

// CRUD: Delete a product
exports.deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id); // find the index of the product with the specified ID
  if (index === -1) return res.status(404).json({ error: 'Product not found' }); // if product not found, return 404 error
  const deleted = products.splice(index, 1); // remove the product from the in-memory database using splice
  res.json(deleted[0]); // respond with the deleted product
};

// Search products by name
exports.searchProducts = (req, res) => {
  const keyword = req.params.name.toLowerCase(); // convert the search keyword to lowercase for case-insensitive search
  const result = products.filter(p => p.name.toLowerCase().includes(keyword)); // filter products that include the keyword in their name
  res.json(result);
};

// Get statistics about products
exports.getStats = (req, res) => {
  const stats = {}; // initialize an empty object to hold statistics
  for (const p of products) { // iterate over each product in the in-memory database
    stats[p.category] = (stats[p.category] || 0) + 1; // increment the count for the product's category in the stats object
  }
  res.json(stats); // respond with the statistics object containing category counts
};
