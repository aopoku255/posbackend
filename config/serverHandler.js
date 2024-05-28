module.exports = serverHandler = (err, req, res, next) => {
  res.status(500).json({
    status: err.stack,
    message: "SOMETHING WENT WRONG!",
  });
};
