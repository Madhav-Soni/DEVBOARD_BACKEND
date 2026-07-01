const express = require("express");
const router = express.Router();

const loginpage = require("./auth/login");
const signuppage = require("./auth/signup");
router.post("/login", loginpage);
router.post("/signup", signuppage);

module.exports = router;