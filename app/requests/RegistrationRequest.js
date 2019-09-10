/**
 * RegistrationRequest handler
 * @type {{}}
 */
const RegistrationRequest = module.exports = {

  /**
   * Validate on register user
   * @param req
   * @param res
   * @returns {Promise<unknown>}
   */
  registerValidation: (req, res) => {
    return new Promise((resolve, reject) => {
      let errors = [];

      if( ! req.body.namee ) {
        errors.push('Name is required');
      }

      // # check errors
      if(errors.length){
        reject(errors);
      }

      // # validation success
      resolve(true);
    });
  }
}