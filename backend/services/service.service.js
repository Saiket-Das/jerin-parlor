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

// -------> Find a service by Id
exports.getServiceByIdService = async (serviceId) => {
  const result = await Service.findById(serviceId);
  return result;
};

// -------> Update a service by Id
exports.updateServiceByIdService = async (serviceId, updateInfo) => {
  const result = await Service.findByIdAndUpdate(
    { _id: serviceId },
    updateInfo,
    {
      runValidators: true,
    }
  );
  return result;
};

// -------> Update a service by Id
exports.deleteServiceByIdService = async (serviceId) => {
  const result = await Service.findByIdAndDelete(serviceId);
  return result;
};
