var express = require('express');
var router = express.Router();
var Menus = require('../model/Menus');

/*  Munus listing. */
router.get('/menus', function(req, res, next) {
  Menus.find()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/menus/:id', function(req, res, next) {
  Menus.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/menus/get/:id', function(req, res, next) {
  Menus.find({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.post('/create-menus', function(req, res, next) {
  // res.json(req.body);
  var menu =   new Menus({
    "menus": req.body.menus
  });

  menu.save()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
  
});

router.post('/update-menus/:id', function(req, res, next) {
  Menus.findOneAndUpdate({_id : req.params.id}, {
    $set : req.body
  })
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.delete('/delete-menus/:id', function(req, res, next) {
  Menus.findOneAndRemove({_id : req.params.id})
          .then(result => {
            res.json(result);
          })
          .catch(err => {
            res.json(err);
          });

})

/*  Munus listing. */

module.exports = router;