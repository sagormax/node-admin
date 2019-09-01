const session = require('express-session');

// # Environment
require('dotenv').config();

const sessionConfig = session({
  name: 'node-admin',
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2, // 2 hours
    sameSite: true,
    secure: true
  }
});

module.exports = sessionConfig;