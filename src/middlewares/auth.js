const { ValidationError } = require("../utils/errors");

const authMiddleware = (req, res, next) => {
  if (false) {
    throw new ValidationError("You dont have permition");
  } else {
    next();
  }
};

module.exports = authMiddleware;
