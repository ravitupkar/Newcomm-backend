var express = require('express');
var Student = require('../model/Student');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Student.find()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/students-list', function(req, res, next) {
  Student.find()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
});


router.post('/save-student', function(req, res, next) {
  // res.json(req.body);
  var product =   new Student({
    "student_name": req.body.student_name,
    "student_email": req.body.student_email,
    "student_branch": req.body.student_branch,
  });

  product.save()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
  
});

router.get('/student/:id', function(req, res, next) {
  Student.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.get('/get/:id', function(req, res, next) {
  Student.findOne({_id : req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
})

router.post('/update-student/:id', function(req, res, next) {
  Student.findOneAndUpdate({_id : req.params.id}, {
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
  Student.findOne({_id : req.params.id})
  .then(result => {
    if(result.length > 0){
      Student.findOneAndRemove({_id : req.params.id})
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
