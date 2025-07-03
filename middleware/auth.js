// // File: middleware/auth.js
module.exports = (req, res, next) => {
  const apiKey = req.header('x-api-key'); // Retrieve the API key from the request header
  const validKey = process.env.API_KEY || '12345'; // Use an environment variable or a default value for the valid API key
  if (!apiKey || apiKey !== validKey) { // Check if the API key is missing or does not match the valid key
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }
  next(); // If the API key is valid, proceed to the next middleware or route handler
};
