const { Router } = require("express");

const projectsRouter = Router();

projectsRouter.post("/", authMiddleware, createProjectsHandler);
projectsRouter.put("/", authMiddleware, updateProjectsHandler);

projectsRouter.get("/", getProjectsHandler);

module.exports = projectsRouter;
