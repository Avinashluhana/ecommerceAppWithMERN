const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your good Name"],
    maxLength: [30, "Name can not be accessed more than 30 characters"],
    minLength: [4, "Your good name must have at least 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter your Password"],
    minLength: [8, "Your password must have at least 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("User", userSchema);
