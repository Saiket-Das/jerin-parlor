const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const reviewSchema = mongoose.Schema(
  {
    Reviewer: [
      {
        name: String,
        email: String,
        id: {
          type: ObjectId,
          ref: "User",
          required: true,
        },
      },
    ],

    description: {
      type: String,
      trim: true,
      required: [true, "please provide your feedback"],
      maxLength: [500, "Description is too large"],
    },

    rating: {
      type: Number,
      required: [true, "please provide your rating"],
      enum: {
        values: [1, 2, 3, 4, 5],
        message: "Rating value can't be {VALUE}, must be between 1 & 5",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
