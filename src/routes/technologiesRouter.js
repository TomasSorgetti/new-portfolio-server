const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const {
  createTechologyHandler,
  updateTechologyHandler,
  deleteTechologyHandler,
  getTechologiesHandler,
} = require("../handlers/technologiesHandler");

const technologiesRouter = Router();

technologiesRouter.post("/", authMiddleware, createTechologyHandler);

technologiesRouter.put(
  "/:technologyId",
  authMiddleware,
  updateTechologyHandler
);

technologiesRouter.delete(
  "/:technologyId",
  authMiddleware,
  deleteTechologyHandler
);

technologiesRouter.get("/", getTechologiesHandler);

module.exports = technologiesRouter;
