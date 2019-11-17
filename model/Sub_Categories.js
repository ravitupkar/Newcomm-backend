const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema

var Sub_Categories = new Schema({
    categories : {
        type: Schema.Types.ObjectId,
        ref: "Categories"
    },
    sub_categories: { type: String},
    }, 
    {
    collection: 'Sub_Categories'
    }
);


module.exports = mongoose.model('Sub_Categories', Sub_Categories)