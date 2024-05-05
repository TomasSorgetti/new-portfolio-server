const { Router } = require("express");

const emailRouter = Router();

emailRouter.use("", (req, res) => {
  res.send("emailRouter");
});

module.exports = emailRouter;
