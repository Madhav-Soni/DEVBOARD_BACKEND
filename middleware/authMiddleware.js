const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            res.status(500).json({ message: "No JWT provided" });
        }
        
        const token = authHeader.split(" ")[1];
        const decode = jwt.decode(process.env.JWT_SECRET, token);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Invalid or expired token" });
    }
}

module.exports = authMiddleware;