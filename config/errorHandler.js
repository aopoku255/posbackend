module.exports = errorHandler = (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "PAGE NOT FOUND!",
  });
};
