const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true,
    },
    userPhoto: String,

    birthDate: {
      type: Date,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: Array,
    description: String,
    idPhoto: String,
    country: String,
    alias: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
