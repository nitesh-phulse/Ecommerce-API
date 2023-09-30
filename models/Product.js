// models/Product.js

// Import the mongoose library
const mongoose = require('mongoose');

// Define a schema for the 'Product' model
const productSchema = new mongoose.Schema({
  // Define a field 'name' of type String which is required
  name: { type:  String, required: true },
  // Define a field 'quantity' of type Number which is required
  quantity: { type: Number, required: true },
});

// Create and export the 'Product' model using the defined schema
module.exports = mongoose.model('Product', productSchema);
