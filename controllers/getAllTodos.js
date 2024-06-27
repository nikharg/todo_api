const Todo = require("../models/Todo");

exports.getAllTodos = async (req, res) => {
  try {
    const response = await Todo.find({});
    res.status(200).json({
      success: true,
      data: response,
      message: "All todos fetched successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};
