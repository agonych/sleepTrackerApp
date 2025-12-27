/**
 * Aggregates and exposes controller modules for easy importing.
 */
const homeControllers = require('./homeControllers');
const apiControllers = require('./apiControllers');

module.exports = {
  homeControllers,
  apiControllers,
};

