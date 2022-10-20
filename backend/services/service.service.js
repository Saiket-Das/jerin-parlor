const Service = require("../models/service.model");

// -------> Get all services
exports.getAllServiceService = async () => {
  const result = await Service.find();

  return result;
};

// -------> Create new service
exports.createServiceService = async (serviceInfo) => {
  const result = await Service.create(serviceInfo);

  return result;
};

// -------> Find service by Id
exports.getServiceByIdService = async (userId) => {
  const result = await Service.findById(userId);
  return result;
};
