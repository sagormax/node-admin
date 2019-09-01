/**
 * Home Controller
 * @type {{index: index}}
 */
const HomeController = module.exports = {
    /**
     * Index
     * @param req
     * @param res
     */
    index : (req, res) => {
      res.render('home');
    }
};