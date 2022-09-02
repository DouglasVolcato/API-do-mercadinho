const Product = require("../models/products.model");

class ProductsServices {
  getAllProductsService = async () => {
    return await Product.find();
  };

  getProductByIdService = async (id) => {
    return await Product.findOne({ _id: id });
  };

  deleteProductByIdService = async (id) => {
    return await Product.findByIdAndDelete({ _id: id });
  };

  postProductService = async (body) => {
    return await Product.create(body);
  };

  putProductService = async (id, body) => {
    return await Product.findByIdAndUpdate({ _id: id }, body, { new: true });
  };
}

module.exports = productsServices = new ProductsServices();
