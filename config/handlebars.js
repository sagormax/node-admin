const hbs                         = require('express-handlebars');
const express_handlebars_sections = require('express-handlebars-sections');

var handlebars        = hbs.create({
  extname: '.hbs',
  helpers: {
    section: express_handlebars_sections(),
    getFlashMessage: (arg, options) => {
      return getMessages().arg && options(this);
    },
    ifEquals: (arg1, arg2, options) => {
      return (arg1 === arg2) ? options.fn(this) : '';

    },
    ifNotEquals: (arg1, arg2, options) => {
      return (arg1 !== arg2) ? options.fn(this) : '';

    },
    greaterThen: (arg1, arg2, options) => {
      return (arg1 > arg2) ? options.fn(this) : '';

    },
    lessThen: (arg1, arg2, options) => {
      return (arg1 < arg2) ? options.fn(this) : '';

    },
    greaterThenOREqual: (arg1, arg2, options) => {
      return (arg1 >= arg2) ? options.fn(this) : '';

    },
    lessThenOREqual: (arg1, arg2, options) => {
      return (arg1 <= arg2) ? options.fn(this) : '';

    }
  }
});

module.exports = handlebars;