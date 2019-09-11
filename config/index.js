const express	        = require('express');
const flash           = require('express-flash-messages');
const config	        = express();

// # body parser
bodyParserConf        = require('./body-parser');

// # session
sessionConfig         = require('./session');


config.use(bodyParserConf);
config.use(sessionConfig);

// # flash
config.use(flash());


module.exports = config;