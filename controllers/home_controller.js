const logger = require("../logger");
const Expenses = require("../models/expenses");
const Users = require("../models/users");

// Used to Handle all routes to home/root
module.exports.loadHome = function (req, res) {
  Users.find({}, (err, users) => {
    if (err) {
      logger.error(`Error in retrieving Users at home_controller : ${err}`);
      return;
    }

    return res.render("home", {
      title: "Home",
      users_list: users,
    });
  });
};

// Add Expenses to the DB
module.exports.expenses_post = function (req, res) {
  Expenses.create(
    {
      item: req.body.item,
      amount: req.body.amount,
      user: req.body.userslist,
      mode: req.body.mode,
      description: req.body.description,
    },
    (err, newExpense) => {
      if (err) {
        logger.error(`Error in Creating Contact : ${err}`);
        return;
      }

      logger.info(`Added new item into Database : ${newExpense}`);
    }
  );

  return res.redirect("back");
};

// Redirect User back to home when accessing via url
module.exports.expenses_get = function (req, res) {
  return res.redirect("/");
};

// //TODO Move this to Database
// var usersList = [
//   {
//     name: "User1",
//     phone: "1111",
//   },
//   {
//     name: "User2",
//     phone: "2222",
//   },
//   {
//     name: "User3",
//     phone: "333",
//   },
// ];
