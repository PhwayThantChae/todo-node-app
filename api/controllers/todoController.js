"use strict";

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

let Todo = mongoose.model("Todo");

exports.addTodo = async (req, res) => {
  let todo = { ...req.body, createdByUser: req.user._id };
  let newTodo = new Todo(todo);
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
    const todos = await Todo.find({
      isDeleted: false,
      createdByUser: req.user._id,
    });
    return res.json(todos);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: error.message,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const updateData = {
      $set: {
        isDeleted: true,
      },
    };
    const todo = await Todo.findById(req.params.id)
      .where("createdByUser")
      .equals(req.user._id);

    if (!todo) {
      res.status(400);
      throw new Error("Todo not found");
    }

    const deletedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
      }
    );

    res.json(deletedTodo);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: error.message,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updateData = {
      $set: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
    };
    const todo = await Todo.findById(req.params.id)
      .where("createdByUser")
      .equals(req.user._id);

    if (!todo) {
      res.status(400);
      throw new Error("Todo not found");
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
      }
    );

    res.json(updatedTodo);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: error.message,
    });
  }
};

exports.showTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id })
      .where("createdByUser")
      .equals(req.user._id);
    if (!todo) {
      res.status(400);
      throw new Error("Todo not found");
    }
    return res.json(todo);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: error.message,
    });
  }
};
