const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    father_name: {
      type: String,
      required: true,
    },
    mother_name: {
      type: String,
      required: true,
    },
    district_name: {
      type: String,
      required: true,
    },
    state_name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("ChildData", childSchema);
