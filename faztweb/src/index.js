const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("ejs");

const app = express();

// express routing
const homeRouter = require("./routes/home");
const userRouter = require("./routes/users");

app.use(homeRouter);
app.use(userRouter);

// ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./living.jpg", { root: __dirname });
});

// request body

// poder usar texto que viene desde el body
app.use(express.text());
// poder leer json que viene desde el body
app.use(express.json());

// para formularios
app.use(express.urlencoded({ extended: false }));

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  const result = parseInt(x) + parseInt(y);
  res.send(`Result: ${result}`);
});

// middleware -> funcion que se ejecuta antes de una ruta

app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method: ${req.method}`);
  // next es para seguir con el flujo del programa
  next();
});

// app.use((req, res, next) => {
//   if (req.query.login === "luivasquez95@gmail.com") {
//     next();
//   } else {
//     res.send("No autorizado");
//   }
// });

// middleware con morgan
app.use(morgan("dev"));

app.get("/profilemorgan", (req, res) => {
  res.send("Profile page");
});

// comprobacion del estado de servidor
app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.use("/public", express.static(path.join(__dirname, "public"))); // hacer publica la carpeta static -> public/archivo
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});
