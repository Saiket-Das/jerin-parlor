const {
  getAllServiceService,
  createServiceService,
  getServiceByIdService,
  updateServiceByIdService,
  deleteServiceByIdService,
} = require("../services/service.service");

// -------> Get all services
exports.getAllService = async (req, res, next) => {
  try {
    const service = await getAllServiceService();

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

// -------> Create a new service
exports.createService = async (req, res, next) => {
  try {
    const service = await createServiceService(req.body);

    res.status(200).json({
      success: true,
      message: "Successfully create a service",
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

// -------> Find a service by Id
exports.getServiceById = async (req, res, next) => {
  try {
    const service = await getServiceByIdService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Successfully get a service by Id",
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

// -------> Update a service by Id
exports.updateServiceById = async (req, res, next) => {
  try {
    const service = await updateServiceByIdService(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Successfully update a service info by Id",
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

// -------> Update a service by Id
exports.deleteServiceById = async (req, res, next) => {
  try {
    const service = await deleteServiceByIdService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Successfully delete a service info by Id",
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
