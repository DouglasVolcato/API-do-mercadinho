const productsServices = require("../services/products.services");

class ProductControllers {
  getAllProductsController = async (req, res) => {
    try {
      const products = await productsServices.getAllProductsService();

      if (!products || products.length === 0) {
        res.status(404).send({ message: "Products not found." });
      } else {
        res.status(200).send(products);
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was a problem finding the products." });
    }
  };

  getProductByIdController = async (req, res) => {
    try {
      const id = req.params.id;

      const product = await productsServices.getProductByIdService(id);

      if (!product) {
        res.status(404).send({ message: "Product not found." });
      } else {
        res.status(200).send(product);
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was a problem finding the product." });
    }
  };

  deleteProductByIdController = async (req, res) => {
    try {
      const id = req.params.id;

      const deletedProduct = await productsServices.deleteProductByIdService(
        id
      );

      if (!deletedProduct) {
        res.status(404).send({ message: "Product not found." });
      } else {
        res.status(200).send(deletedProduct);
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was a problem deleting the product." });
    }
  };

  postProductController = async (req, res) => {
    try {
      //apagar tratativa
      if (!req.body.name || !req.body.price || !req.body.quantity) {
        res.status(400).send({ message: "Incomplete fields in request." });
      } else {
        const { name, price, quantity, provider, photo } = req.body;
        const body = {
          name: name,
          price: price,
          quantity: quantity,
          provider: provider ?? "",
          photo: photo ?? "",
        };

        const newProduct = await productsServices.postProductService(body);

        if (!newProduct) {
          res
            .status(400)
            .send({ message: "There was a problem posting the product." });
        } else {
          res.status(200).send(newProduct);
        }
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was a problem posting the product." });
    }
  };

  putProductController = async (req, res) => {
    try {
      const id = req.params.id;
      const { name, price, quantity, provider, photo } = req.body;
      const body = {
        name: name,
        price: price,
        quantity: quantity,
        provider: provider,
        photo: photo,
      };

      const updatedProduct = await productsServices.putProductService(id, body);

      if (!updatedProduct) {
        res.status(404).send({ message: "Product not found." });
      }

      res.status(200).send(updatedProduct);
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was an error updating the product." });
    }
  };
}

module.exports = productControllers = new ProductControllers();
