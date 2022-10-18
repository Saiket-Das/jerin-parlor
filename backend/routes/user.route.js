const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router.post("/signup", userController.register);

router.post("/login", userController.login);

router.route("/me").get(verifyToken, userController.getMe);

router
  .route("/profile-update")
  .patch(verifyToken, userController.userProfileUpdate);

module.exports = router;
