// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Import your Mongoose model

// Create a new item
router.post('/', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).send(item);
});

// Read all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

// Read a single item by ID
router.get('/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).send('Item not found');
  res.send(item);
});

// Update an item by ID
router.put('/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).send('Item not found');
  res.send(item);
});

// Delete an item by ID
router.delete('/:id', async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).send('Item not found');
  res.send('Item deleted');
});

module.exports = router;

