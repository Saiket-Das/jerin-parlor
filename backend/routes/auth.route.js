const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.route("/me").get(verifyToken, authController.getMe);

router
  .route("/profile-update")
  .patch(verifyToken, authController.userProfileUpdate);

module.exports = router;
