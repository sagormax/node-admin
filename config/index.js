const express	        = require('express');
const config	        = express();

// # body parser
bodyParserConf        = require('./body-parser');

config.use(bodyParserConf);


module.exports = config;