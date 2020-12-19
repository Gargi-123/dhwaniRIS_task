const express = require("express");
const router = express.Router();
const {
  getChild,
  addChild,
  getStates,
  addState,
  getDistricts,
  addDistrict,
} = require("../controllers/allController");
const { register, login, logout } = require("../controllers/userController");

router.get("/api/child", getChild);
router.get("/api/state", getStates);
router.get("/api/district", getDistricts);

router.post("/api/child", addChild);
router.post("/api/state", addState);
router.post("/api/district", addDistrict);

router.post("/api/register", register);
router.post("/api/login", login);
router.get("/api/logout", logout);

module.exports = router;
