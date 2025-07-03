// File: middleware/validateProduct.js
module.exports = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body; // Destructure the required fields from the request body
  if (!name || !description || typeof price !== 'number' || !category || typeof inStock !== 'boolean') { // Check if all required fields are present and valid
    return res.status(400).json({ error: 'Validation failed: Missing or invalid fields' });
  }
  next();
};
