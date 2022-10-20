const {
  getAllReviewService,
  createReviewService,
  updateReviewByIdService,
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

// -------> Create a new review
exports.updateReviewById = async (req, res, next) => {
  try {
    const review = await updateReviewByIdService(
      req.params.id,
      req.body,
      req.user.email
    );

    res.status(200).json({
      success: true,
      message: "Successfully update a review by Id",
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
