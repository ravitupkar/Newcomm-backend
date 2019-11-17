var express = require('express');
var router = express.Router();
var Products = require('../model/Products');

/*  Munus listing. */
router.get('/products', function(req, res, next) {
    Products.find()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/product/:id', function(req, res, next) {
    Products.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/product/get/:id', function(req, res, next) {
    Products.find({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.post('/create-product', function(req, res, next) {
  // res.json(req.body);
  var product =   new Products({
    "product_name": req.body.product_name,
    "product_brand": req.body.product_brand,
    "product_image" : req.body.product_image,
    "product_images": req.body.product_image,
    "product_s_price" : req.body.product_s_price,
    "product_o_price": req.body.product_o_price,
    "product_discount": req.body.product_discount,
    "product_offer": req.body.product_offer,
    "product_variant": req.body.product_variant,
    "product_discription" : req.body.product_discription,
    "product_vendor": req.body.product_vendor,
    "product_munu_id": req.body.product_munu_id,
    "product_submenu_id": req.body.product_submenu_id,
    "product_categories_id": req.body.product_categories_id,
    "product_sub_categories_id": req.body.product_sub_categories_id,
  });

  product.save()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
  
});

router.post('/update-product/:id', function(req, res, next) {
    Products.findOneAndUpdate({_id : req.params.id}, {
    $set : req.body
  })
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.delete('/delete-product/:id', function(req, res, next) {
    Products.findOneAndRemove({_id : req.params.id})
          .then(result => {
            res.json(result);
          })
          .catch(err => {
            res.json(err);
          });

})

/*  Munus listing. */

module.exports = router;