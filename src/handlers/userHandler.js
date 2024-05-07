const {
  createUser,
  loginUser,
} = require("../controllers/userController");
const { response, catchedAsync } = require("../utils");

const createUserHandler = async (req, res) => {
  const { email, password } = req.body;
  const data = await createUser(email, password);
  response(res, 200, data);
};

const loginUserHandler = async (req, res) => {
  const { email, password } = req.body;
  const data = await loginUser(email, password);
  response(res, 200, data);
};

module.exports = {
  createUserHandler: catchedAsync(createUserHandler),
  loginUserHandler: catchedAsync(loginUserHandler),
};
