const Recipe = require('../models/Recipe')

const recipeController = {
  GetRecipes: async (request, response) => {
    try {
      const recipe = await Recipe.find();

      response.json(recipe);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  createRecipes: async (request, response) => {
    try {
      const { dishName, chef, Ingredients, Howtocook } = request.body;
      // create a model object
      const newDish = new Recipe({
        dishName,
        chef,
        Ingredients,
        Howtocook,
      });

      // save the recipe to the database
      await newDish.save();

      // send a succesful if data stored in db
      response.json({ message: "Recipe added successfully....." });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  getRecipesById: async (request, response) => {
    try {
      const { id } = request.params;

      const recipe = await Recipe.findById(id);

      response.json(recipe);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  SearchRecipes: (request, response) => {
    response.json({ message: "All Recipe" });
  },
  updateRecipes: async (request, response) => {
    try {
      const { id } = request.params;

      const { dishName, chef, Ingredients, Howtocook } = request.body;

      const updatedRecipes = {
        dishName,
        chef,
        Ingredients,
        Howtocook,
      };

      await Recipe.findByIdAndUpdate(id, updatedRecipes);

      response.json({ message: "Updated successfully" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  deleteRecipes: async (request, response) => {
    const { id } = request.params;

    await Recipe.findByIdAndDelete(id);

    response.json({ message: "recipe deleted" });
  },
};

module.exports = recipeController;
