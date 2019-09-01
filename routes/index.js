const app           = require('express');
const router        = app.Router();

const Home          = require('../app/controllers/HomeController');
const adminRouter   = require('./admin');

router.get('/', Home.index);

// # Add admin route
router.use('/admin', adminRouter);

module.exports = router;