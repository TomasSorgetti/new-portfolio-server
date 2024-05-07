const { technology } = require("../db");
const { ClientError } = require("../utils/errors");

const createTechnology = async (name, image) => {
  if (!name) throw new ClientError("name input is empty", 400);
  return await technology.create({ name, image });
};

const updateTechnology = async (name, image, technologyId) => {
  const findTechnology = await technology.findOne({
    where: { id: technologyId },
  });

  if (!findTechnology) throw new ClientError("Technology not found", 404);

  findTechnology.name = name || findTechnology.name;
  findTechnology.image = image || findTechnology.image;

  return findTechnology;
};

const deleteTechnology = async (technologyId) => {
  const findTechnology = await technology.findOne({
    where: { id: technologyId },
  });
  if (!findTechnology) throw new ClientError("Technology not found", 404);
  return await findTechnology.destroy();
};

const getTechnologies = async () => {
  return await technology.findAll();
};

module.exports = {
  createTechnology,
  updateTechnology,
  deleteTechnology,
  getTechnologies,
};
