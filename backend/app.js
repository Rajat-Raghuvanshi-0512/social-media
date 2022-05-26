const express = require("express");
const app = express()
const error = require("./Middleware/error");
const cookieParser = require("cookie-parser");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: __dirname + "/Config/config.env" });
}

app.use(express.json())
app.use(cookieParser())


// Routes
const User = require("./Routes/userRoutes");
const Post = require("./Routes/postRoutes");


app.use("/api/v1", User);
app.use("/api/v1", Post);



app.use(error);
module.exports = app;