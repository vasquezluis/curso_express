const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

const products = [
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  let { id } = req.params;
  const productFound = products.find((product) => product.id === parseInt(id));
  if (!productFound) return res.status(404).json({ message: "Product not found" });
  res.json(productFound);
});

app.post("/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.send(newProduct);
});

app.put("/products", (req, res) => {
  res.send("Actualizando productos");
});

app.delete("/products", (req, res) => {
  res.send("Eliminando productos");
});

app.listen(3000, () => {
  `server on port ${3000}`;
});
