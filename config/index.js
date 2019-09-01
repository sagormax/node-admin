const express	        = require('express');
const config	        = express();

// # body parser
bodyParserConf        = require('./body-parser');

// # session
sessionConfig         = require('./session');


config.use(bodyParserConf);
config.use(sessionConfig);


module.exports = config;