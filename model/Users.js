const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema

var Users = new Schema({
    firstname: { type: String},
    lastname : { type: String},
    username : { type: String},
    password: { type: String},
    modified: { type: Date, default: Date.now }
}, {
   collection: 'Users'
});


module.exports = mongoose.model('Users', Users)