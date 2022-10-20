const User = require("../models/user.model");

// -------> Register
exports.registerService = async (userInfo) => {
  const result = await User.create(userInfo);
  console.log(result);

  return result;
};

// -------> Find user by email
exports.findUserByEmail = async (email) => {
  const result = await User.findOne({ email });

  return result;
};

// -------> Find user by Id
exports.findUserById = async (userId) => {
  const result = await User.findById(userId);
  return result;
};

exports.userProfileUpdateService = async (userId, updateInfo) => {
  const result = await User.findByIdAndUpdate({ _id: userId }, updateInfo, {
    runValidators: true,
  });
  return result;
};
