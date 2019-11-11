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

router.get('/get', function(req, res, next) {
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

router.get('/edit/:id', function(req, res, next) {
  Products.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.get('/get/:id', function(req, res, next) {
  Products.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.post('/update', function(req, res, next) {
  Products.findOneAndUpdate({_id : req.body._id}, {
    $set : req.body
  })
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.get('/delete/:id', function(req, res, next) {
  Products.findOne({_id : req.params.id})
  .then(result => {
    if(result.length > 0){
      Products.findOneAndRemove({_id : req.params.id})
          .then(result => {
            res.json(result);
          })
          .catch(err => {
            res.json(err);
          });
    }else{
      res.json({"error": "Porduct Not Found"});
    }
          
  })
  .catch(err => {
    res.json(err);
  });
})

module.exports = router;
