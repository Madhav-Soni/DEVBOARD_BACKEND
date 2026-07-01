const User = require("../models/UserModel");
const bcrypt = require('bcrypt');

const signuppage = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All details required" });
        }

        const normalizedEmail = email.toLowerCase();
        const checkExistingUser = await User.findOne({ email: normalizedEmail });
        if (checkExistingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 21);
        const newUser = await User.create({ name, email: normalizedEmail, password: hashedPassword });

        res.status(201).json({
            message: "User created successfully!!!",
            user: newUser.name,
            email: newUser.email
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = signuppage;