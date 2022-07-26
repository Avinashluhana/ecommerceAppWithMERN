const catchAsyncError = require("../utils/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this a demo id",
      url: "dasdasdjskl",
    },
  });
  const token = user.getJwtToken();
  res.status(201).json({
    success: true,
    token,
  });
});
