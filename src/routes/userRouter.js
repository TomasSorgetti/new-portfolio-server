const { Router } = require("express");
const {
  createUserHandler,
  loginUserHandler,
} = require("../handlers/userHandler");
const {
  validateCreateUser,
  validateLoginUser,
} = require("../middlewares/validateUserInputs");

const userRouter = Router();

userRouter.post("/", validateCreateUser, createUserHandler);
userRouter.post("/login", validateLoginUser, loginUserHandler);

module.exports = userRouter;
