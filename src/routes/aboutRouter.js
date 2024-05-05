const { Router } = require("express");

const {
  getAboutHandler,
  createAboutHandler,
  updateAboutHandler,
} = require("../handlers/aboutHandler");
const authMiddleware = require("../middlewares/auth");

const aboutRouter = Router();

aboutRouter.post("/", authMiddleware, createAboutHandler);
aboutRouter.put("/", authMiddleware, updateAboutHandler);

aboutRouter.get("/", getAboutHandler);

module.exports = aboutRouter;
