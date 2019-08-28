const express	            = require('express');
const app	                = express();
const port	              = 3000;

// # config
const bodyParserConfig    = require('./config/body-parser');
app.use(bodyParserConfig);

// # routers
const routers             = require('./routes/Index');
app.use(routers);

// # listen
app.listen(port, () => console.log(`Node Admin is running on ${port} port`));
