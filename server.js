const express = require("express");

// const SchemeRouter = require("./Ingredients/IngredientsRouter.js");
// const RecipesRouter = require("./Recipes/RecipesRouter.js");
const server = express();

server.use(express.json());
// server.use("/api/ingredients", SchemeRouter);
// server.use("/api/recipes", RecipesRouter);
module.exports = server;
