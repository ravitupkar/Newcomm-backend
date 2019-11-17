const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema

var Categories = new Schema({
    sub_menus : {
        type: Schema.Types.ObjectId,
        ref: "Sub_Menus"
    },
    categories: { type: String},
    }, 
    {
    collection: 'Categories'
    }
);


module.exports = mongoose.model('Categories', Categories)