const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router
  .route("/")
  .get(reviewController.getAllReview) // Get all reviews
  .post(verifyToken, authorization("user"), reviewController.createReview); // Create a new review

router
  .route("/:id")
  .patch(verifyToken, authorization("user"), reviewController.updateReviewById) // Update a review by Id
  .delete(
    verifyToken,
    authorization("user"),
    reviewController.deleteReviewById
  ); // Delete a review by Id

module.exports = router;
