const {
  createProject,
  updateProject,
  getProjects,
  deleteProject,
} = require("../controllers/projectsController");
const { response, catchedAsync } = require("../utils");

const createProjectsHandler = async (req, res) => {
  const { description, title, image, technologies } = req.body;

  const data = await createProject(description, title, image, technologies);
  response(res, 200, data);
};
const updateProjectsHandler = async (req, res) => {
  const { description, title, image, technologies } = req.body;
  const { projectId } = req.params;

  const data = await updateProject(
    description,
    title,
    image,
    technologies,
    projectId
  );
  response(res, 200, data);
};

const deleteProjectsHandler = async (req, res) => {
  const { projectId } = req.params;

  const data = await deleteProject(projectId);
  response(res, 200, data);
};

const getProjectsHandler = async (req, res) => {
  const data = await getProjects();
  response(res, 200, data);
};

module.exports = {
  createProjectsHandler: catchedAsync(createProjectsHandler),
  updateProjectsHandler: catchedAsync(updateProjectsHandler),
  deleteProjectsHandler: catchedAsync(deleteProjectsHandler),
  getProjectsHandler: catchedAsync(getProjectsHandler),
};
