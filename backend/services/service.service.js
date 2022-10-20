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
