const {
  getTechnologies,
  deleteTechnology,
  updateTechnology,
  createTechnology,
} = require("../controllers/technologiesController");
const { response } = require("../utils");

const createTechologyHandler = async (req, res) => {
  const { name, image } = req.body;
  const data = await createTechnology(name, image);
  response(res, 200, data);
};
const updateTechologyHandler = async (req, res) => {
  const { name, image } = req.body;
  const { technologyId } = req.params;
  const data = await updateTechnology(name, image, technologyId);
  response(res, 200, data);
};
const deleteTechologyHandler = async (req, res) => {
  const { technologyId } = req.params;
  const data = await deleteTechnology(technologyId);
  response(res, 200, data);
};
const getTechologiesHandler = async (req, res) => {
  const data = await getTechnologies();
  response(res, 200, data);
};

module.exports = {
  createTechologyHandler,
  updateTechologyHandler,
  deleteTechologyHandler,
  getTechologiesHandler,
};
