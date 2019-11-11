const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema

var Products = new Schema({
    title: { type: String},
    price : { type: String},
    availibility : { type: String},
    description: { type: String},
    style: { type: String},
    images: { type: String},
    categories: { type: String},
    catalogs: { type: String},
    variants: { type: String},
    modified: { type: Date, default: Date.now }
}, {
   collection: 'Products'
});


module.exports = mongoose.model('Products', Products)