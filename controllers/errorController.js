const error404 = (req, res) => {
  if (req.url.includes("/api"))
    return res
      .status(404)
      .json({ error: "404", message: "Resource not found" });
  else return res.status(404).render("error");
};

export default { error404 };
