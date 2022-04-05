const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} value`;
    err = new ErrorHandler(message, err.statusCode);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
