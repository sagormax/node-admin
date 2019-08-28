/**
 * Authentication Controller
 * @type {{index: index}}
 */
const AuthController = module.exports = {
    /**
     * Index
     * @param req
     * @param res
     */
    index : (req, res) => {
      res.send('Auth is processing....');
    }
};