const express	        = require('express');
const bodyParser      = require('body-parser');
const bodyParserConf  = express();

// parse application/x-www-form-urlencoded
bodyParserConf.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
bodyParserConf.use(bodyParser.json());

module.exports = bodyParserConf;