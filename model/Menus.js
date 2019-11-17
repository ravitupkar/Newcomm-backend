const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema

var Menus = new Schema({
    menus: { type: String},
    }, 
    {
    collection: 'Menus'
    }
);


module.exports = mongoose.model('Menus', Menus)