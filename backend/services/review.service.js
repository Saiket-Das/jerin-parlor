const Review = require("../models/review.model");

exports.getAllReviewService = async () => {
  const result = await Review.find();

  return result;
};
