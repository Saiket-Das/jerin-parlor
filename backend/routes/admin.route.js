const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router
  .route("/assignAdmin/:id")
  .patch(verifyToken, adminController.assignAdmin);

router
  .route("/assignManager/:id")
  .patch(verifyToken, adminController.assignStaff);

module.exports = router;
