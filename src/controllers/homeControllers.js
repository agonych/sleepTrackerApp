/**
 * Home page controller handlers.
 */
function renderHome(req, res) {
  res.render('pages/home', { appName: 'Alive Sleep Tracker App' });
}

module.exports = {
  renderHome,
};

