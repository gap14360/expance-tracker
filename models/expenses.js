const { Schema, model } = require("mongoose");

//Expense Schema
const expensesSchema = new Schema({
  item: {
    type: String,
    required: [
      () => {
        return this.type != null;
      },
      "Item is required!",
    ],
  },
  amount: {
    type: Number,
    required: [
      () => {
        return this.amount != null;
      },
      "Amount is required!",
    ],
  },
  user: {
    type: String,
    required: [
      () => {
        return this.user != null;
      },
      "User is Required!",
    ],
    immutable: true,
  },
  mode: {
    type: String,
    required: [
      () => {
        return this.mode != null;
      },
      "Mode is Required!",
    ],
  },
  dateadded: {
    type: Date,
    default: Date.now,
  },
  description: String,
  active: {
    type: Boolean,
    default: true,
  },
});

// Creating Model
const Expenses = model("Expenses", expensesSchema);

module.exports = Expenses;
