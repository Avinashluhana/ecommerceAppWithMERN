const Product = require("../models/productModel");
const catchAsyncError = require("../utils/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

//Creating product

exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});
// get All products

exports.getAllProducts = catchAsyncError(async (req, res) => {
  const products = await Product.find();
  if(!products){
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    products,
  });
});

// Update products == admin

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product has been deleted",
  });
});

// getting single product

exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
  return next(ErrorHandler("Product not found ", 404))
  }

  res.status(200).json({
    success: true,
    product,
  });
});
