const router = require("express").Router();

const productController = require("../controllers/products.controllers");
const BodyMiddleware = require("../middlewares/bodyMiddleware");
const idMiddleware = require("../middlewares/idMIddleware");
const putMiddleware = require("../middlewares/putMiddleware")

router.get("/", productController.getAllProductsController);
router.get("/getById/:id", idMiddleware, productController.getProductByIdController);
router.delete("/delete/:id", idMiddleware, productController.deleteProductByIdController);
router.post("/post", BodyMiddleware, productController.postProductController);
router.put("/put/:id", putMiddleware, productController.putProductController);

module.exports = router;
