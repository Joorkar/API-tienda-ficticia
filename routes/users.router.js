const express = require('express');

const UserServices = require('./../services/users.service');

const router = express.Router();
const service = new UserServices();

router.get('/', (req, res) => {
  const users = service.find();
  res.status(200).json(users);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(201).json({
    message: 'Update partial',
    data: body,
    id,
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(201).json({
    message: 'Update general',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: 'Deleted',
    id,
  });
});

module.exports = router;
