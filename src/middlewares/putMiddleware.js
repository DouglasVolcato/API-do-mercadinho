module.exports = (req, res, next) => {
  if (
    !req.body.name &&
    !req.body.price &&
    !req.body.quantity &&
    !req.body.provider &&
    !req.body.photo
  ) {
    return res.status(400).send({ message: "Incomplete fields in request." });
  }

  if (!req.params.id || req.params.id === "") {
    return res.status(400).send({ message: "Invalid Id in request." });
  }

  return next();
};
