const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getAllTodos } = require("../controllers/getAllTodos");
const { getTodo } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");

router.get("/allTodos", getAllTodos);
router.get("/todo/:id", getTodo);
router.post("/createTodo", createTodo);
router.put("/updateTodo/:id", updateTodo);

module.exports = router;
