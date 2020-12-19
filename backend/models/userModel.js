const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    name: {
      type: String,
    },
    organisation: {
      type: String,
    },
    designation: {
      type: String,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("User", userSchema);
