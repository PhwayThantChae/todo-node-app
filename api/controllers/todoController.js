"use strict";

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

let Todo = mongoose.model("Todo");

exports.addTodo = async (req, res) => {
  let newTodo = new Todo(req.body);
  try {
    const todo = await newTodo.save();
    return res.json(todo);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: error.message,
    });
  }
};

exports.listTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        return res.json(todos);
    } catch {
        console.log(error);
        return res.status(400).send({
            message: error.message,
        });
    }
}

exports.deleteTodo = async (req, res) => {}

exports.updateTodo = async (req, res) => {}

exports.showTodo = async (req, res) => {}
