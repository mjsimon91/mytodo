const router = require('express').Router();
const listRoutes = require('./list')

// List route
router.use("/list", listRoutes)