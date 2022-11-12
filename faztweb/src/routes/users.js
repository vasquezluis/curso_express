const { Router } = require("express");

const router = Router();

router.post("/user1", (req, res) => {
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

router.get("/user2", (req, res) => {
  res.json({
    name: "Luis",
    lastname: "vasquez",
    age: 23,
    points: [1, 2, 3],
    address: {
      city: "new york",
      street: "some street 123",
    },
  });
});

router.get("/UserName", (req, res) => {
  res.send("Username route");
});

router.get("/profile", (req, res) => {
  res.send("Profile page");
});

router.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "luis") {
    console.log(__dirname);
    return res.sendFile("./living.jpg", { root: __dirname });
  }
  res.send("El usuario no esta permitido");
});

router.get("/name/:name/age/:age", (req, res) => {
  res.send(`El usuario ${req.params.name} tiene ${req.params.age}`);
});

router.get("/hello/:user", (req, res) => {
  console.log(req.query);
  console.log(req.params.user);
  res.send(`Hello ${req.params.user.toLowerCase()}`);
});

module.exports = router;
