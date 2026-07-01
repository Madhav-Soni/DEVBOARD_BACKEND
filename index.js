const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Body parser
app.use(express.json());

// Custom CORS middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

const dbconnect = require("./database/db");
dbconnect();

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});