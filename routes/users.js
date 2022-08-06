// Requires
const express = require('express');
const router = express.Router();

// Get the Actions in the User Controller
const usersController = require('../controllers/users_controller');

// Load Users Page
router.get('/', usersController.loadPage);

//! Load Profile Page Based on the Sent Query
//router.get('/profile', usersController.loadProfile)


module.exports = router;