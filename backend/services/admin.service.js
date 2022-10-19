const User = require("../models/user.model");

// ---------> MAKE ADMIN
exports.assignAdminService = async (id) => {
  const result = await User.updateOne(
    { _id: id },
    { $set: { role: "admin" } },
    { runValidators: true }
  );
  return result;
};

// ---------> MAKE STAFF
exports.assignStaffService = async (id) => {
  const result = await User.updateOne(
    { _id: id },
    { $set: { role: "staff" } },
    { runValidators: true }
  );
  return result;
};
