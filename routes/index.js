const app           = require('express');
const router        = app.Router();

const Home          = require('../app/controllers/HomeController');
const adminRouter   = require('./admin');

// # router middleware for flash message
router.use((req, res, next) => {
  if(req.session.flash) {
    // # info msg
    if(req.session.flash.info){
      res.locals.info = req.session.flash.info;
    }

    // # error msg
    if(req.session.flash.error_msg){
      res.locals.error_msg = req.session.flash.error_msg;
    }

    // # success msg
    if(req.session.flash.success_msg){
      res.locals.success_msg = req.session.flash.success_msg;
    }
  }

  next();
});


router.get('/', Home.index);

// # Add admin route
router.use('/admin', adminRouter);

module.exports = router;