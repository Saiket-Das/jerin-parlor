const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    user: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      contactNumber: String,
    },

    serviceName: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },

    date: {
      type: String,
      require: [true, "Please select a date"],
      default: Date.now,
    },

    slot: {
      type: String,
      require: true,
    },

    price: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
