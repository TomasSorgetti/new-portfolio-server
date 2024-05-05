const { response } = require("../utils");

const createProjectsHandler = async (req, res) => {
  const { description, title, image } = req.body;
  const data = await createProjects(description, title, image);
  response(res, 200, data);
};
const updateProjectsHandler = async (req, res) => {
  const { description, title, image } = req.body;
  const data = await updateProjects(description, title, image);
  response(res, 200, data);
};
const getProjectsHandler = async (req, res) => {
  const data = await getProjects();
  response(res, 200, data);
};

module.exports = {
  createProjectsHandler,
  updateProjectsHandler,
  getProjectsHandler,
};
