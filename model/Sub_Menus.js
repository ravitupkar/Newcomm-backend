const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema

var Sub_Menus = new Schema({
    menus: {
        type: Schema.Types.ObjectId,
        ref: "Menus"
    },
    sub_menus: { type: String},
    }, 
    {
    collection: 'Sub_Menus'
    }
);


module.exports = mongoose.model('Sub_Menus', Sub_Menus)