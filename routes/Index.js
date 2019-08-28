const app     = require('express');
const router  = app.Router();

const Home    = require('../app/controllers/HomeController');

router.get('/', Home.index);

module.exports = router;