const { ClientError } = require("../utils/errors");

const validateCreateUser = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    next(new ClientError("Email input empty", 400));
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    next(new ClientError("Invalid email", 400));
  } else if (!password) {
    next(new ClientError("Password input empty", 400));
  } else if (password.length < 5) {
    next(new ClientError("must have more that 5 letters", 400));
  }
  next();
};

const validateLoginUser = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) next(new ClientError("Email input empty", 400));
  else if (!password) next(new ClientError("Password input empty", 400));
  next();
};

module.exports = { validateCreateUser, validateLoginUser };
