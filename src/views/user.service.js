const User = require("../models/User");

async function registerUser(req, res) {
  try {
    const { email } = req.body;
    const userExist = await User.find({ email });
    if (userExist) {
      return {
        status: "error",
        message: "User already exist",
        data: userExist,
      };
    } else {
      return {
        status: "success",
        message: "User Created successfully ",
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
}

module.exports = {
  registerUser,
};
