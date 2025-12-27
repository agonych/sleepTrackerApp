/**
 * Builds and configures the Express application instance
 */
const path = require('path');
const express = require('express');
const routes = require('./routes');

/**
 * Application factory to create and configure the Express app
 * @returns {*|Express}
 */
function createApp() {
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  // Serve static assets such as compiled stylesheets and client scripts
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.use('/', routes);

  // Handle 404 Not Found responses
  app.use((req, res) => {
    res.status(404).render('pages/errors/404', {
      title: 'Page Not Found',
    });
  });

  // Handle unexpected errors
  app.use((err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }

    // Log the error for diagnostics
    console.error('Unhandled error:', err);

    res.status(err.status || 500).render('pages/errors/500', {
      title: 'Server Error',
    });
  });

  return app;
}

module.exports = { createApp };

