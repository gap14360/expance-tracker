// Requires
const express = require("express");
const logger = require("./logger");
const app = express();
const port = 8000; //Prod should be port 80

// Database Setup
const db = require("./config/mongoose");
const Expenses = require("./models/expenses");

// Use Express Router
app.use("/", require("./routes"));

// Calling Assets folder for Front End Apps
app.use(express.static("assets"));

// Use EJS as ViewEngine
app.set("view engine", "ejs");
app.set("views", "./views");

// Server is run
app.listen(port, (err) => {
  if (err) {
    logger.error(`Error in starting the server : ${err}`);
    return;
  }

  logger.info(`Server is running on port : ${port}`);
});
