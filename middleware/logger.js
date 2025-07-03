module.exports = (req, res, next) => {
  const timestamp = new Date().toISOString(); // Get the current timestamp in ISO format
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`); // Log the request method and URL with the timestamp
  next(); // Call the next middleware or route handler in the stack
};
