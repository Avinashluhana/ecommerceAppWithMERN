const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizedRole } = require("../middlewares/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizedRole("admin"), createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizedRole("admin"), updateProduct);
router
  .route("/product/:id")
  .delete(isAuthenticatedUser, authorizedRole("admin"), deleteProduct);
router.route("/singleproduct/:id").get(getSingleProduct);
module.exports = router;
