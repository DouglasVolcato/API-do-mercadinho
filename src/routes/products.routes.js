const router = require("express").Router();

const productController = require("../controllers/products.controllers");
// const productsMiddleware =

router.get("/", productController.getAllProductsController);
router.get("/getById/:id", productController.getProductByIdController);
router.delete("/delete", productController.deleteProductByIdController);
router.post("/post", productController.postProductController);
router.put("/put", productController.putProductController);
