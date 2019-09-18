class AbstractRequest {
  constructor() {
    this.fieldName  = '';
    this.message    = '';

    if (this.constructor === AbstractRequest) {
      throw new TypeError('Abstract class "RequestExtended" cannot be instantiated directly.');
    }
  }

  /**
   * Validate request
   *
   * @return boolean
   */
  validate() {}
}

module.exports = AbstractRequest;