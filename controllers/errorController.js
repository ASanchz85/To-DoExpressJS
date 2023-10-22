const error404 = (req, res) => {
  res.status(404).send("404 not found");
};

export default { error404 };