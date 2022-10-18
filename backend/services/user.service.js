exports.registerService = async (userInfo) => {
  const result = await User.create(userInfo);
  console.log(result);

  return result;
};
