const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  try {
    const { search, filter } = req.query;

    let query = {};

    if (search) {
      query.text = { $regex: search, $options: "i" };
    }

    if (filter === "active") query.completed = false;
    if (filter === "done") query.completed = true;

    const todos = await Todo.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const createTodo = async (req, res) => {
  try {
    const { text, priority } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Task text zaroori hai",
      });
    }

    const todo = await Todo.create({
      text,
      priority,
    });

    res.status(201).json({
      success: true,
      message: "Task successfully add ho gaya",
      data: todo,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Task nahi mila",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task update ho gaya",
      data: todo,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Task nahi mila",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task delete ho gaya",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteCompletedTodos = async (req, res) => {
  try {
    const result = await Todo.deleteMany({
      completed: true,
    });

    res.status(200).json({
      success: true,
      message: `${result.deletedCount} completed tasks delete ho gaye`,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteCompletedTodos,
};