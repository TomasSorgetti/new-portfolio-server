const { Router } = require("express");

const technologiesRouter = Router();

technologiesRouter.post("/", (req, res) => {
  res.send("technologiesRouter post");
});

technologiesRouter.put("/", (req, res) => {
  res.send("technologiesRouter update");
});

technologiesRouter.delete("/", (req, res) => {
  res.send("technologiesRouter delete");
});

technologiesRouter.get("/", (req, res) => {
  res.send("technologiesRouter get");
});

module.exports = technologiesRouter;
