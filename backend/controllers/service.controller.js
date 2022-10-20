const {
  getAllServiceService,
  createServiceService,
} = require("../services/service.service");

// -------> Get all services
exports.getAllService = async (req, res, next) => {
  try {
    const user = await getAllServiceService();

    res.status(200).json({
      success: true,
      message: "Successfully get all services",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// -------> Create new service
exports.createService = async (req, res, next) => {
  try {
    const user = await createServiceService(req.body);

    res.status(200).json({
      success: true,
      message: "Successfully get all services",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
