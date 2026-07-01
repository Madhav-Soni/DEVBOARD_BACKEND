const User = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginpage = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        const normalizedEmail = email.toLowerCase();
        const checkExistingUser = await User.findOne({ email: normalizedEmail });
        if (!checkExistingUser) {
            return res.status(400).json({ message: "User doesn't exists" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, checkExistingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        const token = jwt.sign({
            id: checkExistingUser._id,
            email: checkExistingUser.email,
            role: checkExistingUser.role,
        }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(200).json({
            message: "Login done!!!",
            user: checkExistingUser.name,
            email: checkExistingUser.email,
            jwt: token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = loginpage;