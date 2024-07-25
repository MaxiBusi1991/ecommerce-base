import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
const port = process.env.PORT || 5000

app.get('/api/products', (req, res) => {
  res.send(data.products)
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug)
  if(product) {
    res.send(product)
  } else {
    res.status(404).json({message: 'Product not found'})
  }
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === parseInt(req.params.id))
  if(product) {
    res.send(product)
  } else {
    res.status(404).json({message: 'Product not found'})
  }
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`)
})