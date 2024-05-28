const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const session = require("express-session");
const sessionConfig = require("./config/session.config");
const errorHandler = require("./config/errorHandler");
const serverHandler = require("./config/serverHandler");

require("dotenv").config();

// USE MIDDLEWARES
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(session(sessionConfig));

// ALL ROUTES
app.use("/api/v1", require("./routes/router"));

// CUSTOME ERROR HANDLER
app.use(errorHandler);
app.use(serverHandler);

// DISABLE
app.disable("x-powered-by");

// SERVER PORT
const PORT = process.env.PORT || 3001;

// RUN SERVER
app.listen(PORT, () => console.log(`APP RUNNING ON PORT: ${PORT}`));

process.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});
