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
