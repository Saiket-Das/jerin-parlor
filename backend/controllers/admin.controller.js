const {
  assignAdminService,
  assignStaffService,
} = require("../services/admin.service");

// ---------> Assign an admin
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

// ---------> Assign an staff
exports.assignStaff = async (req, res) => {
  try {
    const reuslt = await assignStaffService(req.params.id);

    if (reuslt.modifiedCount > 0) {
      res.status(200).json({
        status: "Success",
        message: "Successfully assign an hiring manager",
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
