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
    },
    serviceName: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
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
    phoneNumber: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

bookingSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
