const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/home', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/categories', (req, res) => {
  res.json({
    1: 'Technology',
    2: 'Entertainment',
    3: 'Software',
    4: 'VideoGames',
  });
});

app.get('/purchase_orders/:purchase_orderId/users/:userId', (req, res) => {
  const { purchase_orderId, userId } = req.params;
  res.json({
    purchase_orderId,
    userId,
  });
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10), // el 10 indica que sera decimal el parseInt
      Image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});
// todo lo que es especifico, debe ir antes que lo dinamico
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  limit && offset
    ? res.json({
        limit,
        offset,
      })
    : res.send('No hay parametros');
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
