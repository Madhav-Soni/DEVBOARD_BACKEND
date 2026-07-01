import User from "../models/UserModel"
const bcrypt = require('bcrypt');

const loginpage = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!email || !password) {
            console.log("Fill all the details");
        }

        const normalizedEmail = email.toLowerCase();
        const checkExistingUser = User.findOne(normalizedEmail);
        if (!checkExistingUser) {
            return res.status(400).json({ message: "User doesn't exists" });
        }

        const hashedPassword = bcrypt.compare(password, checkExistingUser.password);
        if (!hashedPassword) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        res.status(201).json({
            message: "Login done!!!",
            user: checkExistingUser.name,
            email: checkExistingUser.email
        })

    } catch (err) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const login = mongoose.model("Login", loginpage);
module.exports = login;