const {
  updateAbout,
  createAbout,
  getAbout,
} = require("../controllers/aboutController");

const { catchedAsync, response } = require("../utils");

const createAboutHandler = async (req, res) => {
  const { description } = req.body;

  const data = await createAbout(description);
  response(res, 200, data);
};

const updateAboutHandler = async (req, res) => {
  const { description } = req.body;
  const data = await updateAbout(description);
  response(res, 200, data);
};

const getAboutHandler = async (req, res) => {
  const data = await getAbout();
  response(res, 200, data);
};

module.exports = {
  getAboutHandler: catchedAsync(getAboutHandler),
  createAboutHandler: catchedAsync(createAboutHandler),
  updateAboutHandler: catchedAsync(updateAboutHandler),
};
