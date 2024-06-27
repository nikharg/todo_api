const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updatedAt: Date.now(),
      }
    );
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No todos available with this id",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo updated successfully",
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
