var express = require('express');
var Products = require('../model/Products');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Products.find()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.post('/create', function(req, res, next) {
  // res.json(req.body);
  var product =   new Products({
    "title": req.body.title,
    "price": req.body.price,
    "availibility": req.body.availibility,
    "description": req.body.description,
    "style": req.body.style,
    "images": req.body.images, 
    "categories": req.body.categories,
    "catalogs": req.body.catalogs, 
    "variants": req.body.variants, 
  });

  product.save()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
  
});

module.exports = router;
