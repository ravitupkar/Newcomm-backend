const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema

var Contact = new Schema({
    name: { type: String},
    email : { type: String},
    subject : { type: String},
    message: { type: String},
    modified: { type: Date, default: Date.now }
}, {
   collection: 'Contact'
});


module.exports = mongoose.model('Contact', Contact)