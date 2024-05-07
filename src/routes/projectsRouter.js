const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const {
  getProjectsHandler,
  updateProjectsHandler,
  createProjectsHandler,
  deleteProjectsHandler,
} = require("../handlers/projectsHandler");

const projectsRouter = Router();

projectsRouter.post("/", authMiddleware, createProjectsHandler);
projectsRouter.put("/:projectId", authMiddleware, updateProjectsHandler);
projectsRouter.delete("/:projectId", authMiddleware, deleteProjectsHandler);

projectsRouter.get("/", getProjectsHandler);

module.exports = projectsRouter;
