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
  // .get(reviewController.getById); // Get a service by Id
  .patch(verifyToken, authorization("user"), reviewController.updateReviewById); // Update a service by Id
//   .delete(
//     verifyToken,
//     authorization("admin"),
//     serviceController.deleteServiceById
//   ); // Delete a service by Id

module.exports = router;
