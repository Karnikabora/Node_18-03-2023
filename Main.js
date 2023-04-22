const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


let products = [
    {
      category: 'Clothing',
      subcategory: 'Top Wear',
      price: 900,
      name: 'Shirt',
      id: 1
    },
    {
      category: 'Clothing',
      subcategory: 'Top Wear',
      price: 1000,
      name: 'Kurta',
      id: 2
    },
];

// get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// get a product by ID
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// add a new product
app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.send('Product added');
});

// update a product by ID
app.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  const index = products.findIndex(p => p.id === productId);

  if (index !== -1) {
    products[index] = updatedProduct;
    res.send('Product updated');
  } else {
    res.status(404).send('Product not found');
  }
});

// Start the server
const port = 1000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
