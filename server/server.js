const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const usersRoute = require("./Route/UsersRoute");
const productRoute = require("./Route/ProductRoute");
const tokenVerify = require("./Middleware/verifyToken");

app.get("/api/verify", tokenVerify);
app.use("/api/users", usersRoute);
app.use("/api/product", productRoute);

app.get("/", (req, res) => {
    res.send("<h1>We are Running & continue</h1>");
});

// Server code
app.listen(8000, () => {
    console.log("App is Running");
    mongoose
        .connect(
            "mongodb+srv://class01:bZB52bi81OPOqY5I@cluster0.mbfkc.mongodb.net/ecommerce"
        )
        .then(() => {
            console.log("Database Connected");
        })
        .catch((err) => {
            console.error("Error occurred during Database Connection:", err);
        });
});