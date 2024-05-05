const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/mainRouter");
const resError = require("./utils/resError");

const app = express();
app.use(express.json());

app.use(morgan("dev"));
app.use(express.json());

app.use("/", routes);

app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  resError(res, statusCode, message);
});

module.exports = app;
