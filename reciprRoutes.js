const express = require("express");
const recipeController = require("../controller/recipeController");

const reciprRoutes = express.Router();

reciprRoutes.get("/", recipeController.GetRecipes);

reciprRoutes.post("/", recipeController.createRecipes);

reciprRoutes.get('/:id', recipeController.SearchRecipes);

reciprRoutes.get('/:id', recipeController.getRecipesById);

reciprRoutes.put('/:id', recipeController.updateRecipes);

reciprRoutes.delete('/:id', recipeController.deleteRecipes);

module.exports = reciprRoutes;
