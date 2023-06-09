"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

const User = require("./api/models/userModel");
const apiV1Router = express.Router();
const bodyParser = require("body-parser");
const jsonwebtoken = require("jsonwebtoken");
const userRoutes = require("./api/routes/userRoutes");

const mongoose = require("mongoose");
const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
};


mongoose.connect(process.env.MONGO_DB_URL, option).then(
  function () {
    //connected successfully
    console.log("mongo connected");
  },
  function (err) {
    //err handle
    console.log(err);
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET,
      function (err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

// Prefix routes with "api/v1"
app.use("/api/v1", apiV1Router);
userRoutes(apiV1Router);

app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("Server started on: " + port);

module.exports = app;
