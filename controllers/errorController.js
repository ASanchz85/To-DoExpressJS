const error404 = (req, res) => {
  res.status(404).render("error");
};

export default { error404 };
