const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateSchema = new Schema(
  {
    state_name: {
      type: String,
      required: true,
    },
    district: {
      type: Array,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("State", stateSchema);
