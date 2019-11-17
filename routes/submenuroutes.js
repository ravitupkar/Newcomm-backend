var express = require('express');
var router = express.Router();
var SubMenus = require('../model/Sub_Menus');

/*  Munus listing. */
router.get('/submenus', function(req, res, next) {
SubMenus.find()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/submenus/:id', function(req, res, next) {
SubMenus.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/submenus/get/:id', function(req, res, next) {
SubMenus.find({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.post('/create-submenus', function(req, res, next) {
  res.json(req.body);
  var submenus =   new SubMenus({
    "menus_id": req.body.menus_id,
    "sub_menus": req.body.sub_menus
  });

  submenus.save()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
  
});

router.post('/update-submenus/:id', function(req, res, next) {
    SubMenus.findOneAndUpdate({_id : req.params.id}, {
    $set : req.body
  })
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.delete('/delete-submenus/:id', function(req, res, next) {
    SubMenus.findOneAndRemove({_id : req.params.id})
          .then(result => {
            res.json(result);
          })
          .catch(err => {
            res.json(err);
          });

})

/*  Munus listing. */

module.exports = router;