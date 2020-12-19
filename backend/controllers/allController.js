const State = require("../models/stateModel");
const Child = require("../models/childModel");

const getStates = async (req, res) => {
  try {
    await State.find()
      .then((data) => res.status(200).json({ error: false, data: data }))
      .catch((err) => res.status(400).json({ error: true, message: err }));
  } catch (err) {
    res.status(400).json({ error: true, message: err });
  }
};

const getDistricts = async (req, res) => {
  try {
    await State.findOne({ state_name: req.query.state_name })
      .then((data) => res.status(200).json({ error: false, data: data }))
      .catch((err) => res.status(400).json({ error: true, message: err }));
  } catch (err) {
    res.status(400).json({
      error: true,
      message: "No such district found related to state",
    });
  }
};
const getChild = async (req, res) => {
  try {
    await Child.find()
      .then((data) => res.status(200).json({ error: false, data: data }))
      .catch((err) => res.status(400).json({ error: true, message: err }));
  } catch (err) {
    res.status(400).json({ error: true, message: err });
  }
};

const addState = (req, res) => {
  const data = new State({
    state_name: req.body.state_name,
    district_name: [],
  });

  data
    .save()
    .then(() =>
      res.status(200).json({
        status: "Success",
        message: "New State has been added to the database",
      })
    )
    .catch((err) => res.status(400).json({ status: "Failed", message: err }));
};

const addDistrict = (req, res) => {
  State.findOne({ state_name: req.body.state_name })
    .then((data) => {
      console.log(data);
      let temp = { name: req.body.district_name };
      data.district.push(temp);
    })
    // State.save()
    //   .then(() =>
    //     res.status(200).json({
    //       status: "Success",
    //       message: "New State has been added to the database",
    //     })
    //   )
    //   .catch(() =>
    //     res.status(200).json({
    //       status: "Failure",
    //       message: "New State has not been added to the database",
    //     })
    //   )
    .catch((err) => res.status(400).json({ error: true, message: err }));
};

const addChild = (req, res) => {
  const data = new Child({
    name: req.body.name,
    sex: req.body.sex,
    dob: req.body.dob,
    father_name: req.body.father_name,
    mother_name: req.body.mother_name,
    district_name: req.body.district_name,
    state_name: req.body.state_name,
    img: req.body.img,
  });

  data
    .save()
    .then(() =>
      res.status(200).json({
        status: "Success",
        message: "New Child has been added to the database",
      })
    )
    .catch((err) => res.status(400).json({ status: "Failed", message: err }));
};

module.exports = {
  getStates,
  getDistricts,
  getChild,
  addState,
  addDistrict,
  addChild,
};
