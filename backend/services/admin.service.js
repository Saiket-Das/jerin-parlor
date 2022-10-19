const User = require("../models/user.model");

exports.assignAdminService = async (id) => {
  const result = await User.updateOne(
    { _id: id },
    { $set: { role: "admin" } },
    { runValidators: true }
  );
  return result;
};
