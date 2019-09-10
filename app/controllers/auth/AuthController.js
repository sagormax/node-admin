/**
 * Authentication Controller
 */
const AuthController = module.exports = {
    /**
     * Login
     * @param req
     * @param res
     */
    login : (req, res) => {
      res.render('auth/login', {layout: 'login-register-layout'});
    }
};