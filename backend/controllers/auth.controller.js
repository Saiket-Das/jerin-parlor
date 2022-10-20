const {
  registerService,
  findUserByEmail,
  userProfileUpdateService,
  findUserById,
} = require("../services/auth.service");
const { generateToken } = require("../utilis/token");

// -------> Register
exports.register = async (req, res, next) => {
  try {
    const user = await registerService(req.body);

    res.status(200).json({
      success: true,
      message: "Successfully sign up",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// -------> Login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "Fail",
        message: "Please provide your credentials.",
      });
    }
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: "Fail",
        message: "No user found. Please create an account first.",
      });
    }

    const isPassowrdValid = user.comparePassword(password, user.password);

    if (!isPassowrdValid) {
      return res.status(403).json({
        status: "Fail",
        error: "Invalid email or password.",
      });
    }

    const token = generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      success: true,
      message: "Successfully sign up",
      data: {
        user: others,
        token: token,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// -------> Get me
exports.getMe = async (req, res, next) => {
  try {
    const user = await findUserById(req.user.id);

    res.status(200).json({
      success: true,
      message: "Successfully get logged in user info",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// -------> Update user info
exports.userProfileUpdate = async (req, res, next) => {
  try {
    const result = await userProfileUpdateService(req.user.id, req.body);

    res.status(200).json({
      success: true,
      message: "Successfully update user info",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
