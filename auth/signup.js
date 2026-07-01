import User from "../models/UserModel"
const bcrypt = require('bcrypt');

const signuppage = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            console.log("Fill all the details");
        }

        const normalizedEmail = email.toLowerCase();
        const checkExistingUser = User.findOne(normalizedEmail);
        if (checkExistingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = bcrypt.hash(password, 21);
        const newUser = User.create({ name, email: normalizedEmail, password: hashedPassword });
        newUser.save();

        res.status(201).json({
            message: "User created successfully!!!",
            user: newUser.name,
            email: newUser.email
        })

    } catch (err) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const Signup = mongoose.model("Signup", signuppage);
module.exports = Signup;