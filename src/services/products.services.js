const Product = require("../models/products.model");

class ProductsServices {
  getAllProducts = async () => {
    return await Product.find();
  };

  getProductById = async (id) => {
    return await Product.findOne({ _id: id });
  };

  deleteProductById = async (id) => {
    return await Product.findByIdAndDelete({ _id: id });
  };

  postProduct = async (body) => {
    return await Product.create(body);
  };

  putProduct = async (body) => {
    return await Product.findByIdAndUpdate({ _id: id }, body, { new: true });
  };
}
