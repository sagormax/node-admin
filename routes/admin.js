const app             = require('express');
const adminRouter     = app.Router();

const AuthController  = require('../app/controllers/auth/AuthController');
const RegisterController  = require('../app/controllers/auth/RegisterController');

/**
 * Admin Routes
 * @prefix /admin
 */
adminRouter.get('/', (req, res) => {
  res.send('welcome to admin home page');
});

adminRouter.get('/register', RegisterController.register);
adminRouter.post('/register', RegisterController.store);

module.exports = adminRouter;