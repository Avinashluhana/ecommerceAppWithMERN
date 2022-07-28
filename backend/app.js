const cookieParser = require("cookie-parser");
const express = require("express");
const errorMiddleware = require("./middlewares/error");
const app = express();

app.use(express.json());
app.use(cookieParser());

// Routes imports

const product = require("./routes/productRoute");
const user = require("./routes/userRouter");

app.use("/api/v1", product);
app.use("/api/v1", user);

// error middle ware

app.use(errorMiddleware);

module.exports = app;
