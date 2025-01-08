const express = require("express");
const logger = require("./logger");
const reciprRoutes = require("../routes/reciprRoutes");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/recipes", reciprRoutes);

module.exports = app;
