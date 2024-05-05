const { Router } = require("express");

const aboutRouter = require("./aboutRouter");
const emailRouter = require("./emailRouter");
const projectsRouter = require("./projectsRouter");
const userRouter = require("./userRouter");

const routes = Router();

routes.use("/about", aboutRouter);
routes.use("/email", emailRouter);
routes.use("/projects", projectsRouter);
routes.use("/user", userRouter);

module.exports = routes;
