const logger = require("../logger");
const Expenses = require("../models/expenses");

// Load the Users Page
module.exports.loadPage = function (req, res) {
  Expenses.find({}, (err, expenses) => {
    if (err) {
      logger.error(`Error in retrieving expenses at home_controller : ${err}`);
      return;
    }

    return res.render("users", {
      users_list: usersList,
      expenses_list: expenses,
    });
  });
};

// Load the Profile page of sent user
module.exports.loadProfile = function (req, res) {
  return res.render("profile", {
    title: "User Page",
    username: "Yanuka",
    expenses_list: expensesList,
  });
};

//TODO Move this to get from Database
var expensesList = [
  {
    item: "Computer",
    amount: 500,
    user: "Yanuka",
    mode: "add",
    description: "",
  },
  {
    item: "Mouse",
    amount: 20,
    user: "Yanuka",
    mode: "subtract",
    description: "Logitech Mouse",
  },
  {
    item: "Drinks",
    amount: 5000,
    user: "Yanuka",
    mode: "subtract",
    description: "Monster Cans",
  },
];

var usersList = [
  {
    name: "Yanuka",
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
