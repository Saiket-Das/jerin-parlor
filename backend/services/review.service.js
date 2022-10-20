const Review = require("../models/review.model");

// -------> Get all reviews
exports.getAllReviewService = async () => {
  const result = await Review.find();

  return result;
};

// -------> Create a new review
exports.createReviewService = async (reviewInfo) => {
  const result = await Review.create(reviewInfo);

  return result;
};

// -------> Update a review by poster
exports.getReviewById = async (reviewId) => {
  const result = await Review.findById(reviewId);
  return result;
};

// -------> Update a review by poster
exports.updateReviewByIdService = async (reviewId, reviewInfo) => {
  const result = await Review.findByIdAndUpdate({ _id: reviewId }, reviewInfo, {
    runValidators: true,
  });

  return result;
};

// -------> Delete a review by poster
exports.deleteReviewByIdService = async (reviewId) => {
  const result = await Review.findByIdAndDelete(reviewId);

  return result;
};
