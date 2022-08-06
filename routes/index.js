// Require
const express = require("express");
const router = express.Router();

// Used to easily read the data being sent from the front end
router.use(express.urlencoded({ extended: true }));

// Home Controller which contains all the actions of root
const homeController = require("../controllers/home_controller");

// All Requests of Home/Root
router.all("/", homeController.loadHome);

// Add Data into the Database when submitted
router.post("/addexpense", homeController.expenses_post);

// Redirect back to home when Accessing by typing URL
router.get("/addexpense", homeController.expenses_get);

// Transfer to admin.js
router.use('/admin', require('./admin'))

// Transfer to users.js
router.use("/users", require("./users"));


// Exporting Router to be imported in index.js (Root)
module.exports = router;
