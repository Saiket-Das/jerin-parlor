const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router.route("/").get(serviceController.getAllService);
//   .post(verifyToken, authorization("admin"), serviceController.newService);

// router
//   .route("/assign-staff/:id")
//   .patch(verifyToken, authorization("admin"), serviceController.assignStaff);

module.exports = router;
