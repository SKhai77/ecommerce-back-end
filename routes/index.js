// Import the necessary modules
const router = require('express').Router();
const apiRoutes = require('./api');

// Use the api routes for the '/api' endpoint
router.use('/api', apiRoutes);

// If the requested route doesn't match any defined routes, send a response
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Export the router with the defined routes
module.exports = router;