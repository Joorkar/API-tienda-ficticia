const express = require('express');

const CategoryService = require('./../services/categories.service');

const router = express.Router();
const service = new CategoryService();

router.get('/', (req, res) => {
  const categories = service.find();
  res.status(200).json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  res.status(200).json(category);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.create(body);
  res.status(201).json(newCategory);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body);
  res.status(201).json(category);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body);
  res.status(201).json(category);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.status(200).json(rta);
});

module.exports = router;
