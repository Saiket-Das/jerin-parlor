const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router
  .route("/assign-admin/:id")
  .patch(verifyToken, authorization("admin"), adminController.assignAdmin);

router
  .route("/assign-staff/:id")
  .patch(verifyToken, authorization("admin"), adminController.assignStaff);

module.exports = router;
