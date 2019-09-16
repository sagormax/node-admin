const registerURL             = '/admin/register';
const { nodeRender }          = require('../../helpers/RenderHelper');
const { registerValidation }  = require('../../requests/RegistrationRequest');
const Requests                = require('./Requests');

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

      let validation = new Requests(req, [
        {name: 'required'},
        {roll: 'required'}
      ]).validate();

      if( validation.valid() === false ) {
        console.log(validation.errors);
      }

      // nodeRender('auth/register', req, res, {layout: 'login-register-layout'});
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