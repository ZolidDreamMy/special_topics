const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const modelDir = require('../database/product');
const router = express.Router();


router.get('/detail/{id}', (req, res) => {
  const id = req.query.id;
  product = modelDir.product[id]
  console.log(id)
  res.render('detail', {
    prods: product,
    pageTitle: 'detail',
    path: '/',
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;