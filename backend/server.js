import express from 'express';
import data from './data.js';

const app = express();
const port = process.env.PORT || 5000

app.get('/api/products', (req, res) => {
  console.log(data)
  res.send(data.products)
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`)
})