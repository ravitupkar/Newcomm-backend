var express = require('express');
var router = express.Router();
var Sub_Categories = require('../model/Sub_Categories');

/*  Munus listing. */
router.get('/sub_categories', function(req, res, next) {
    Sub_Categories.find()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/sub_categories/:id', function(req, res, next) {
    Sub_Categories.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/sub_categories/get/:id', function(req, res, next) {
    Sub_Categories.find({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.post('/create-sub_categories', function(req, res, next) {
  // res.json(req.body);
  var sub_categories =   new Sub_Categories({
    "categories_id": req.body.categories_id,
    "sub_categories": req.body.sub_categories
  });

  sub_categories.save()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
  
});

router.post('/update-sub_categories/:id', function(req, res, next) {
    Sub_Categories.findOneAndUpdate({_id : req.params.id}, {
    $set : req.body
  })
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.delete('/delete-sub_categories/:id', function(req, res, next) {
    Sub_Categories.findOneAndRemove({_id : req.params.id})
          .then(result => {
            res.json(result);
          })
          .catch(err => {
            res.json(err);
          });

})

/*  Munus listing. */

module.exports = router;