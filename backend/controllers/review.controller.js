const { getAllReviewService } = require("../services/review.service");

// -------> Get all services
exports.getAllReview = async (req, res, next) => {
  try {
    const service = await getAllReviewService();

    res.status(200).json({
      success: true,
      message: "Successfully get all services",
      data: service,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
