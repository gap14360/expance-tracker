// Requires
const express = require("express");
const router = express.Router();

// Get the Actions in Admin Controller
const adminController = require("../controllers/admin_controller");

// Load HTML Page
router.get("/", adminController.loadPage);

// Add User into the Database
router.post("/adduser", adminController.addUser);

//TODO Handle Editing and Deleting Users

module.exports = router;
