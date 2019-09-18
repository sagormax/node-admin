const express	            = require('express');
const app	                = express();

// # todo this port comes from .env file
const port	              = 3000;

// # config
const config              = require('./config/index');
app.use(config)

// # handlebars
hbsConf                   = require('./config/handlebars');
app.engine('hbs', hbsConf.engine);
app.set('view engine', 'hbs');

// # static assets path
app.use(express.static('public'));

// # routers
const routers             = require('./routes');
app.use(routers);

// # listen
app.listen(port, () => console.log(`Node Admin is running on ${port} port`));
