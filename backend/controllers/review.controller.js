const {
  getAllReviewService,
  createReviewService,
} = require("../services/review.service");

// -------> Get all reviews
exports.getAllReview = async (req, res, next) => {
  try {
    const review = await getAllReviewService();

    res.status(200).json({
      success: true,
      message: "Successfully get all reviews",
      data: review,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// -------> Create a new review
exports.createReview = async (req, res, next) => {
  try {
    const review = await createReviewService(req.body);

    res.status(200).json({
      success: true,
      message: "Successfully create a new review",
      data: review,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
