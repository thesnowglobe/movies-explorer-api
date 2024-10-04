const { serverError } = require('../constants/errorsMessages');

const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  console.error(message);
  res.status(statusCode).send({
    message: statusCode === 500
      ? serverError
      : message,
  });
  next();
};

module.exports = errorHandler;
