const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getAllReviews,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizedRole } = require("../middlewares/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizedRole("admin"), createProduct); 
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizedRole("admin"), updateProduct);
router
  .route("/admin/product/:id")
  .delete(isAuthenticatedUser, authorizedRole("admin"), deleteProduct);

router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/allReviews").get(isAuthenticatedUser, getAllReviews);

router.route("/singleproduct/:id").get(getSingleProduct);
module.exports = router;
