const { about } = require("../db");
const { ClientError } = require("../utils/errors");

const createAbout = async (description) => {
  if (!description) throw new ClientError("Description is missing", 400);

  const findAbout = await about.findOne({
    where: { id: 1 },
  });
  if (!findAbout) {
    return await about.create({ description });
  }
  throw new ClientError("About allready exist", 400);
};

const updateAbout = async (description) => {
  if (!description) throw new ClientError("Description is missing", 400);

  const findAbout = await about.findOne({
    where: { id: 1 },
  });
  if (!findAbout)
    throw new ClientError("Do not found any About description", 404);

  findAbout.description = description || findAbout.description;
  await findAbout.save();
  return findAbout;
};

const getAbout = async () => {
  const findAbout = await about.findOne();
  if (!findAbout) throw new ClientError("About not found", 404);
  return findAbout;
};

module.exports = { createAbout, updateAbout, getAbout };
