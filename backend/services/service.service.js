const Service = require("../models/service.model");

// -------> Register
exports.getAllServiceService = async () => {
  const result = await Service.find();

  return result;
};
