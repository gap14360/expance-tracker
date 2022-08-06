const { Schema, model } = require("mongoose");

//Users Schema
const usersSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [
      () => {
        return this.type != null;
      },
      "Name is required!",
    ],
  },
  fullname: {
    type: String,
    required: [
      () => {
        return this.type != null;
      },
      "Name is required!",
    ],
  },
  dateadded: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

// Creating Model
const Users = model("Users", usersSchema);

module.exports = Users;
