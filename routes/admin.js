const app           = require('express');
const adminRouter   = app.Router();

/**
 * Admin Routes
 * @prefix /admin
 */
adminRouter.get('/', (req, res) => {
  res.send('welcome to admin home page');
});

adminRouter.get('/login', (req, res) => {
  res.send('welcome to login page');
});

module.exports = adminRouter;