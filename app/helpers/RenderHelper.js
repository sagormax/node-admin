/**
 * Node JS custom render helper
 * Receive flash and make them output
 *
 * @type {{nodeRender: nodeRender}}
 */
const RenderHelper = module.exports = {
  /**
   * Render method
   * @param view
   * @param req
   * @param res
   * @param data
   */
  nodeRender: (view, req, res, data) => {
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

    res.render(view, data);
  }
}