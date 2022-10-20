const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router
  .route("/")
  .get(serviceController.getAllService)
  .post(verifyToken, authorization("admin"), serviceController.createService);

router
  .route("/:id")
  .get(serviceController.getServiceById)
  .patch(
    verifyToken,
    authorization("admin"),
    serviceController.updateServiceById
  )
  .delete(
    verifyToken,
    authorization("admin"),
    serviceController.deleteServiceById
  );

module.exports = router;
