/**
 * Routes for student API namespace.
 */
const express = require('express');
const { studentController } = require('../controllers');

const router = express.Router();

// Articles API
router.get('/', studentController.getStudent);

module.exports = router;
