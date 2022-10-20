const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router
  .route("/")
  .get(serviceController.getAllService) // Get all services
  .post(verifyToken, authorization("admin"), serviceController.createService); // Create a new service

router
  .route("/:id")
  .get(serviceController.getServiceById) // Get a service by Id
  .patch(
    verifyToken,
    authorization("admin"),
    serviceController.updateServiceById
  ) // Update a service by Id
  .delete(
    verifyToken,
    authorization("admin"),
    serviceController.deleteServiceById
  ); // Delete a service by Id

module.exports = router;
