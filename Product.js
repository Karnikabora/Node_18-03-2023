const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to a database
mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/addproduct", async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    id: req.body.id,
  });
  try {
    const result = await newProduct.save();
    console.log("Data updated successfully");
    res.send("Data updated successfully");
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});


app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.send(allProducts);
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});



app.listen(4000, () => {
  console.log("Server started at 4000");
});
