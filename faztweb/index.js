const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./living.jpg", { root: __dirname });
});

app.get("/user", (req, res) => {
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

// request body

// poder usar texto que viene desde el body
app.use(express.text());
// poder leer json que viene desde el body
app.use(express.json());

// para formularios
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

// params

app.get("/search", (req, res) => {
  if (req.query.q === "javascript books") {
    res.send("lista de libros de javascript");
  } else {
    res.send("pagina normal");
  }
});

app.get("/hello/:user", (req, res) => {
  console.log(req.query);
  console.log(req.params.user);
  res.send(`Hello ${req.params.user.toLowerCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  const result = parseInt(x) + parseInt(y);
  res.send(`Result: ${result}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "luis") {
    return res.sendFile("./living.jpg", { root: __dirname });
  }
  res.send("El usuario no esta permitido");
});

app.get("/name/:name/age/:age", (req, res) => {
  res.send(`El usuario ${req.params.name} tiene ${req.params.age}`);
});

// comprobacion del estado de servidor
app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});
