// -------> Register
exports.registerService = async (userInfo) => {
  const result = await User.create(userInfo);
  console.log(result);

  return result;
};

// -------> Login
exports.findUserByEmail = async (email) => {
  const result = await User.findOne({ email });
  console.log(result);

  return result;
};

// -------> Get me
exports.findUserById = async (userId) => {
  const result = await User.findById(userId);
  return result;
};
