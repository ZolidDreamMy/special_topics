const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const modelDir = require('../database/product');
const router = express.Router();


router.get('/add-product', (req, res) => {

  const product_id = req.query.product_id;
  
  product = modelDir.find(o =>o.product_id === product_id);
  console.log(product);
  console.log(product_id);

  res.render('add-product', {
    prods: product,
    pageTitle: 'detail',
    path: '/',
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;