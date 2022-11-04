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

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});
