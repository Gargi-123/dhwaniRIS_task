const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const childData = require("./childData.json");
const userData = require("./UserData.json");
const stateData = require("./stateData.json");

const Child = require("./models/childModel");
const User = require("./models/userModel");
const State = require("./models/stateModel");

const Routes = require("./routes/childRoute");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.ATLAS_URI,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Connection to DB failed");
    } else {
      console.log("Database is successfully connected");
      Child.find()
        .then((data) => {
          if (data.length === 0) {
            Child.insertMany(childData)
              .then(() =>
                console.log("Initial Data of child is Added to the database")
              )
              .catch((err) => console.log("Error: " + err));
          } else {
            console.log("initial data is allready present");
          }
        })
        .catch((err) => console.log("Error: " + err));
      User.find()
        .then((data) => {
          if (data.length === 0) {
            User.insertMany(userData)
              .then(() =>
                console.log("Initial Data of user is Added to the database")
              )
              .catch((err) => console.log("Error: " + err));
          } else {
            console.log("initial data is allready present");
          }
        })
        .catch((err) => console.log("Error: " + err));
      State.find()
        .then((data) => {
          if (data.length === 0) {
            State.insertMany(stateData)
              .then(() =>
                console.log("Initial Data of state is Added to the database")
              )
              .catch((err) => console.log("Error: " + err));
          } else {
            console.log("initial data is allready present");
          }
        })
        .catch((err) => console.log("Error: " + err));
    }
  }
);

//parent route
app.use("/", Routes);

app.listen(5000, () => {
  console.log("The server is up and running at port 5000");
});
