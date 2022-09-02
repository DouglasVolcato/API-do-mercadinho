module.exports = (req, res, next) => {
  if (!req.params.id || req.params.id === "") {
    return res.status(400).send({ message: "Invalid Id in request." });
  }

  return next();
};
