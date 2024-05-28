require("dotenv").config();

module.exports = sessionconfig = {
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRETE,
  resave: false,
  saveUninitialized: false,
};
