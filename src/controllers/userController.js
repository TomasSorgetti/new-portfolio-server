const { user } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { ClientError } = require("../utils/errors");
const { ADMIN_EMAIL, ADMIN_PASSWORD, SECRET } = process.env;

//! create user
const createUser = async (email, password) => {
  const searchUser = await user.findOne({ where: { email } });
  if (searchUser) throw new ClientError("Email allready exist", 400);

  if (ADMIN_EMAIL === email && ADMIN_PASSWORD === password) {
    const response = await user.create({ email, password, role: "owner" });
    const token = jwt.sign({ id: response.id, role: response.role }, SECRET, {
      expiresIn: "1d",
    });
    return token;
  }
  //? Debería de enviarme un mail para que le de acceso
  return { message: "Admin will evaluate your access" };
};

//! login user
const loginUser = async (email, password) => {
  const searchUser = await user.findOne({ where: { email } });
  if (!searchUser) throw new ClientError("that user doesnt exist", 404);
  const match = await bcrypt.compare(password, searchUser.password);
  if (match) {
    //?   si el user no es el admin podría enviarme un mail para avisar
    const token = jwt.sign(
      { id: searchUser.id, role: searchUser.role },
      SECRET,
      {
        expiresIn: "1d",
      }
    );
    return token;
  }
  throw new ClientError("wrong password", 400);
};

module.exports = {
  createUser,
  loginUser,
};
