const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema

var Products = new Schema({
  product_name: { type: String},
  product_brand: { type: String},
  product_image : { type: String},
  product_images: { type: Array},
  product_s_price : { type: String},
  product_o_price: { type: String},
  product_discount: { type: String},
  product_offer: { type: String},
  product_variant: { type: String},
  product_discription : { type: Date, default: Date.now },
  product_vendor: {
    type: Schema.Types.ObjectId,
    ref: "Vendor"
  },
  product_munu_id: {
    type: Schema.Types.ObjectId,
    ref: "Menus"
  },
  product_submenu_id: {
    type: Schema.Types.ObjectId,
    ref: "Sub_Munus"
  },
  product_categories_id: {
    type: Schema.Types.ObjectId,
    ref: "Categories"
  },
  product_sub_categories_id: {
    type: Schema.Types.ObjectId,
    ref: "Sub_Categories"
  },
  modifiedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
}, {
   collection: 'Products'
});


module.exports = mongoose.model('Products', Products)