const mongoose = require("mongoose");
const validator = require("validator");

const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide service name"],
      trim: true,
      unique: true,
      minLength: [3, "Service name must be at least 3 characters"],
      maxLength: [150, "Service name is too large"],
    },

    description: {
      type: String,
      trim: true,
      maxLength: [300, "Service description is too large"],
    },

    price: {
      type: Number,
      required: [true, "Please provide service's price"],
    },

    imageURL: {
      type: String,
      required: true,
      validate: [validator.isURL, "You provide a wrong url"],
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
