var express = require('express');

var Users = require('../model/Users');
var router = express.Router();


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.find()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/get', function(req, res, next) {
  Users.find()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});


router.post('/create', function(req, res, next) {
  // res.json(req.body);
  var user =   new Users({
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
    "username": req.body.username,
    "password": req.body.password
  });

  user.save()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
  
});

router.get('/edit/:id', function(req, res, next) {
  Users.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.get('/get/:id', function(req, res, next) {
  Users.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.post('/login', function(req, res, next) {
   Users.findOne({username : req.body.username, password : req.body.password})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.post('/update', function(req, res, next) {
  Users.findOneAndUpdate({_id : req.body._id}, {
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
  Users.findOne({_id : req.params.id})
  .then(result => {
    if(result.length > 0){
      Users.findOneAndRemove({_id : req.params.id})
          .then(result => {
            res.json(result);
          })
          .catch(err => {
            res.json(err);
          });
    }else{
      res.json({"error": "User Not Found"});
    }
          
  })
  .catch(err => {
    res.json(err);
  });
})

module.exports = router;


module.exports = router;
