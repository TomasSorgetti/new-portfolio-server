const { Router } = require("express");

const userRouter = Router();

userRouter.use("", (req, res) => {
  res.send("userRouter");
});

module.exports = userRouter;
