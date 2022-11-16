const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/", (req, res) => {
  let isActive = true;

  const users = [
    {
      id: 1,
      name: "Luis",
      lastname: "Vasquez",
    },
    {
      id: 2,
      name: "Antonio",
      lastname: "Tiu",
    },
  ];

  res.render("index", { title: "index", isActive, users });
});

router.get("/about", (req, res) => {
  const title = "mi pagina creada desde express";

  res.render("index", { title });
});

router.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  res.render("posts", { posts: response.data });
});

router.get("/search", (req, res) => {
  if (req.query.q === "javascript books") {
    res.send("lista de libros de javascript");
  } else {
    res.send("pagina normal");
  }
});

// method all
router.all("/info", (req, res) => {
  res.send("server info");
});

module.exports = router;
