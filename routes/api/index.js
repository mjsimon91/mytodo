const router = require('express').Router();

// Import all routes
const listRoutes = require('./list')

// List route
router.use("/list", listRoutes)

module.exports = router;