const boom = require('@hapi/boom');

function validatorHandler(schema, propety) {
  return (req, res, next) => {
    const data = req[propety];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
