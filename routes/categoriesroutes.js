var express = require('express');
var router = express.Router();
var Categories = require('../model/Categories');

/*  Munus listing. */
router.get('/categories', function(req, res, next) {
Categories.find()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/categories/:id', function(req, res, next) {
Categories.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/categories/get/:id', function(req, res, next) {
Categories.find({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.post('/create-categories', function(req, res, next) {
  // res.json(req.body);
  var categories =   new Categories({
    "submenu_id": req.body.submenu_id,
    "categories": req.body.categories
  });

  categories.save()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
  
});

router.post('/update-categories/:id', function(req, res, next) {
    Categories.findOneAndUpdate({_id : req.params.id}, {
    $set : req.body
  })
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.delete('/delete-categories/:id', function(req, res, next) {
    Categories.findOneAndRemove({_id : req.params.id})
          .then(result => {
            res.json(result);
          })
          .catch(err => {
            res.json(err);
          });

})

/*  Munus listing. */

module.exports = router;