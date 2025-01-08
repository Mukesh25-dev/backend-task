const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  dishName: String,
  Chef: String,
  Ingredients: [String],
  Howtocook: String,
});

module.exports = mongoose.model("Recipe", recipeSchema, "recipes");
