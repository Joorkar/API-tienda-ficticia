const express = require('express');

const ProductServices = require('./../services/product.service');

const router = express.Router();
const service = new ProductServices();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// todo lo que es especifico, debe ir antes que lo dinamico
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(201).json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.status(201).json(product);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.status(200).json(rta);
});

module.exports = router;
