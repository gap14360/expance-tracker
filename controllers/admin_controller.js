// Requires
const Users = require("../models/users");
const logger = require("../logger");

// Used in Get '/users/profile' in routes users.js
module.exports.loadPage = function (req, res) {
  return res.render("admin", {
    users_list: usersCollection, //TODO Move this to Get from DB
  });
};

// Add User into DB
module.exports.addUser = function (req, res) {
  Users.create(
    {
      name: req.body.uname,
      fullname: req.body.fname,
    },
    (err, newUser) => {
      if (err) {
        logger.error(`Error in Creating Contact : ${err}`);
      }

      logger.info(`Added User into Database ${newUser}`);
    }
  );

  return res.redirect("back");
};

//TODO Move this to Database
var usersCollection = [
  {
    name: "User1",
    phone: "1111",
  },
  {
    name: "User2",
    phone: "2222",
  },
  {
    name: "User3",
    phone: "333",
  },
];
