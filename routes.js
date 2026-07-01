const express = require("express");
const router = express.Router();

const loginpage = require("./auth/login");
const signuppage = require("./auth/signup");
const authMiddleware=require("./middleware/authMiddleware");
router.post("/login", loginpage,authMiddleware);
router.post("/signup", signuppage);

module.exports = router;