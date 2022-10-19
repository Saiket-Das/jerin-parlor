const { assignAdminService } = require("../services/admin.service");

// ---------> MAKE ADMIN
exports.assignAdmin = async (req, res) => {
  try {
    const reuslt = await assignAdminService(req.params.id);

    if (reuslt.modifiedCount > 0) {
      res.status(200).json({
        status: "Success",
        message: "Successfully assign an admin",
        data: reuslt,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: " Internal server error",
      error: error.message,
    });
  }
};
