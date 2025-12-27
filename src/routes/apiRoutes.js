/**
 * Routes for the REST API namespace.
 */
const express = require('express');
const { apiControllers } = require('../controllers');

const router = express.Router();

// Base welcome endpoint
router.get('/', apiControllers.apiWelcome);

// Catch-all for unknown API routes
router.use(apiControllers.apiNotFound);
router.use(apiControllers.apiError);

module.exports = router;


