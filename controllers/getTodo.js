const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No todos available with this id",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo fetched by id successfully",
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
