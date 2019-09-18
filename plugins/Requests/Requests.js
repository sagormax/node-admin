const AbstractRequest = require('./AbstractRequest');

/**
 * Request class
 * Validate user requests
 *
 * @return mixed
 */
class Requests {
  constructor (req, rules) {
    this.requests   = req;
    this.rules      = rules;
    this.errors     = [];
  }

  /**
   * Validate by rules
   *
   * @returns {Requests}
   */
  validate() {
    this.expectedParametersShouldPassed();

    this.iterateRules();

    return this;
  }

  /**
   * Iterate rules
   *
   * @return null
   */
  iterateRules() {
    this.rules.forEach(rule => {
      if(this.getRuleFieldName(rule)){

        // # if extended new rule class
        rule[this.ruleField] instanceof AbstractRequest && this.makeInstance(rule[this.ruleField]);

        // # is this field required
        this.isRequired(rule[this.ruleField]);
      }
    });
  }

  /**
   * Create new instance
   *
   * @param instance
   */
  makeInstance(instance) {
    if(instance.validate() === false) {
      this.errors.push(instance.message);
    }
  }

  /**
   * Get validation status
   *
   * @returns {boolean}
   */
  valid() {
    return !this.errors.length;
  }

  /**
   * Get rule field
   * @param rule
   * @returns {string}
   */
  getRuleFieldName(rule) {
    this.ruleField = Object.keys(rule)[0];

    return this.ruleField;
  }

  /**
   * Check required
   *
   * @param rule
   */
  isRequired(rule) {
    if(rule === 'required'){
      if( !this.requests.query[this.ruleField] ) {
        this.errors.push(`${this.ruleField} is required.`);
      }
    }
  }

  /**
   * Make sure expected valid
   * parameter has been passed
   * @return mixed
   */
  expectedParametersShouldPassed() {
    if(!this.requests){
      throw new Error('Please provide the request as first parameter');
    }

    if(!this.rules){
      throw new Error('Please provide rules as second parameter');
    }

    if( !Array.isArray(this.rules) || (this.rules.length === 0) ){
      throw new Error('Rules must be an array with at least one rule');
    }
  }

}

module.exports = Requests;