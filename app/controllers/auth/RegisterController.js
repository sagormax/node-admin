const registerURL             = '/admin/register';
const { registerValidation }  = require('../../requests/RegistrationRequest');

/**
 * Register Controller
 */
const RegisterController = module.exports = {
    /**
     * Register
     * @param req
     * @param res
     */
    register : (req, res) => {
      res.render('auth/register', {layout: 'login-register-layout'});
    },

    /**
     * Registration
     * @param req
     * @param res
     */
    store: (req, res) => {
      registerValidation(req, res)
        .then(validate => {
          console.log('here....');
        })
        .catch(error =>{
          req.flash('error_msg', error);
          res.redirect(registerURL);
        });
    }
};