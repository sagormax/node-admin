const AbstractRequest = require('../../plugins/Requests/AbstractRequest');

class TestRequest extends AbstractRequest {
  constructor(fieldName = '') {
    super();

    this.fieldName = fieldName;

    this.message = `${this.fieldName} field is required`;
  }

  validate() {
    return true;
  }
}

module.exports = TestRequest;