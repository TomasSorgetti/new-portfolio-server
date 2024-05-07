const { ValidationError, UnauthorizedError } = require("../utils/errors");
const jwt = require("jsonwebtoken");
const { SECRET, REFRESH_SECRET } = process.env;

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return next(new UnauthorizedError("No token detected"));
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;

    const expirationTime = decoded.exp * 1000;
    const currentTime = Date.now();

    if (expirationTime - currentTime < 60000) {
      const refreshedToken = jwt.sign(
        { id: decoded.id, role: decoded.role },
        REFRESH_SECRET,
        {
          expiresIn: "1d",
        }
      );
      res.setHeader("Authorization", refreshedToken);
    }

    next();
  } catch (error) {
    return next(new UnauthorizedError("Invalid token"));
  }
};
module.exports = authMiddleware;
