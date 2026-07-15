const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const dbconnect = require("./database/db");
dbconnect();

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});