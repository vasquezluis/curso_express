const { Router } = require("express");

const router = Router();

router.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

// params

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
