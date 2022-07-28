const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/products").get(isAuthenticatedUser, getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);
router.route("/singleproduct/:id").get(getSingleProduct);
module.exports = router;
