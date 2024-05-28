const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    number_of_shops: {
      type: Number,
      required: false,
    },
    profile: {
      type: String,
      required: false,
    },
    contact: {
      type: String,
      required: false,
    },
    role: ["STAFF"],
    priviledges: ["ALL"],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
