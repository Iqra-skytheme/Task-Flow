const express = require("express");

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteCompletedTodos,
} = require("../controller/todoController");

const router = express.Router();

router.get("/", getTodos);

router.post("/", createTodo);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

router.delete("/completed/all", deleteCompletedTodos);

module.exports = router;