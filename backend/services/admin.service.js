const User = require("../models/user.model");

// ---------> Assign an admin
exports.assignAdminService = async (id) => {
  const result = await User.updateOne(
    { _id: id },
    { $set: { role: "admin" } },
    { runValidators: true }
  );
  return result;
};

// ---------> Assign an staff
exports.assignStaffService = async (id) => {
  const result = await User.updateOne(
    { _id: id },
    { $set: { role: "staff" } },
    { runValidators: true }
  );
  return result;
};
