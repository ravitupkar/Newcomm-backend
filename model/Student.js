const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema

var Student = new Schema({
    student_name: { type: String},
    student_email : { type: String},
    student_branch : { type: String},
    modified: { type: Date, default: Date.now }
}, {
   collection: 'Student'
});


module.exports = mongoose.model('Student', Student)