const { project, technology } = require("../db");
const { ClientError } = require("../utils/errors");

const createProject = async (description, title, image, technologies) => {
  if (!description) throw new ClientError("description input is empty", 400);
  if (!title) throw new ClientError("title input is empty", 400);

  const newProject = await project.create({ description, title, image });

  const foundTechnologies = await technology.findAll({
    where: {
      name: technologies,
    },
  });
  await newProject.addTechnologies(foundTechnologies);

  return newProject;
};

const updateProject = async (
  description,
  title,
  image,
  technologies,
  projectId
) => {
  const findProject = await project.findOne({ where: { id: projectId } });
  if (!findProject) throw new ClientError("That project doesnt exist", 404);
  else {
    findProject.description = description || findProject.description;
    findProject.title = title || findProject.title;
    findProject.image = image || findProject.image;
    if (technologies !== undefined) {
      const foundTechnologies = await technology.findAll({
        where: { name: technologies },
      });
      await findProject.setTechnologies(foundTechnologies);
    }
    await findProject.save();

    return findProject;
  }
};

const deleteProject = async (projectId) => {
  const findProject = await project.findOne({ where: { id: projectId } });
  if (!findProject) throw new ClientError("That project doesnt exist", 404);
  else {
    return await findProject.destroy();
  }
};

const getProjects = async () => {
  return await project.findAll({
    include: [
      {
        model: technology,
        attributes: ["name", "image"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

module.exports = { createProject, updateProject, deleteProject, getProjects };
