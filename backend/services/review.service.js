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

// -------> Create a new review
exports.updateReviewByIdService = async (
  reviewId,
  reviewInfo,
  reviewerEmail
) => {
  const review = await Review.findById(reviewId);

  if (review?.reviewer?.email != reviewerEmail) {
    return res.status(403).json({
      status: "Forbidden",
      message: "Fail",
      error: "You are not authorized.",
    });
  }

  const result = await Review.findByIdAndUpdate({ _id: reviewId }, reviewInfo, {
    runValidators: true,
  });

  return result;
};
