const express = require('express');
const router = express.Router();
var objectId = require('mongodb').ObjectID;

const Student = require('./models/students');

//get data

router.get('/students', (req, res) =>{
    // res.send("retrieving all students list");
    Student.find(function(err, students){
        res.json(students);
    })
});


//get data by id
router.get('/student/:id', (req, res) =>{
    // res.send("retrieving all students list");
    Student.findById({_id: req.params.id}, function(err, student){
        if(err){
            res.json(err)
        } else {
            res.json(student);
        }
        
    });
});

// add student info

router.post('/student', (req, res, next) => {
    let newStudentInfo = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        address: req.body.address,
        class: req.body.class,
        section: req.body.section,
        grades: req.body.grades
    });
    newStudentInfo.save((err, student) => {
        if(err){
            res.json({msg: 'Failed to add student data'});
        } else {
            res.json(student);

        }
    });
    
});

//delete student info
router.delete('/student/:id', (req, res, next) => {
    Student.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        } else{
            res.json(result);
        }
    });
});




// Update employee
router.put('/update/:id' , (req, res, next) => {
    const options = {new:true};
    Student.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },options, function(err, result){
        if(err){
            res.json(err);
        } else{
            res.json(result);
        }
    });
  });

module.exports = router;