const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const modelDir = require('../database/product');
const router = express.Router();


router.get('/add-product', (req, res) => {
  const id = req.query.id;
  product = modelDir.product;
  console.log(id)
  res.render('add-product', {
    prods: product,
    pageTitle: 'detail',
    path: '/',
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;