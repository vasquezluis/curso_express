const express = require("express");
const morgan = require("morgan");

const app = express();

// settings
app.set("appName", "ExpressCourse"); // variable - valor
app.set("port", 3000);
app.set("case sensitive routing", true); // respetar mayusculas en la URL

// middlewares
app.use(morgan("dev"));
app.use(express.json());

let products = [
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];


// routes 
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  let { id } = req.params;
  const productFound = products.find((product) => product.id === parseInt(id));
  if (!productFound)
    return res.status(404).json({ message: "Product not found" });
  res.json(productFound);
});

app.post("/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.send(newProduct);
});

app.put("/products/:id", (req, res) => {
  const newData = req.body;

  let { id } = req.params;
  const productFound = products.find((product) => product.id === parseInt(id));
  if (!productFound)
    return res.status(404).json({ message: "Product not found" });

  products = products.map((p) =>
    p.id === parseInt(id) ? { ...p, ...newData } : p
  );

  res.json({ message: "Product updated" });
});

app.delete("/products/:id", (req, res) => {
  let { id } = req.params;
  const productFound = products.find((product) => product.id === parseInt(id));
  if (!productFound)
    return res.status(404).json({ message: "Product not found" });
  products = products.filter((p) => p.id !== parseInt(id));

  res.sendStatus(204);
});

app.listen(app.get("port"), () => {
  console.log(`server ${app.get("appName")} on port ${app.get("port")}`);
});
