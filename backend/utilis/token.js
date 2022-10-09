const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];

    if (!token) {
      if (!token) {
        return res.status(401).json({
          status: "Fail",
          error: "You are not logged in",
        });
      }
    }
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({
      status: "Fail",
      error: "Invalid token",
    });
  }
};
