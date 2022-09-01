const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  provider: { type: String },
  photo: { type: String },
});

module.exports = Product = mongoose.model("product", productsSchema);
