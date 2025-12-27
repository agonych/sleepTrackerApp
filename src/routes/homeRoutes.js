/**
  * This module defines the routes for the home page.
 */
const express = require('express');
const { homeControllers } = require('../controllers');

const router = express.Router();

router.get('/', homeControllers.renderHome);

module.exports = router;

