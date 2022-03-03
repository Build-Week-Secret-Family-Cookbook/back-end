const db = require("../data/db-config");

async function getRecipeById(recipe_id) {
  const result = await db("recipes as r")
    .leftJoin("steps as s", "s.recipe_id", "r.recipe_id")
    .leftJoin("step_ingredients as si", "si.step_id", "s.step_id")
    .leftJoin("ingredients as i", "si.ingredient_id", "i.ingredient_id")
    .select("r.*", "s.*", "si.*", "i.*")
    .where("r.recipe_id", recipe_id);
  

  const recipe = {
    recipe_id: result[0].recipe_id,
    recipe_name: result[0].recipe_name,
    ingredients: [],
    steps: [],
  };

  if (result[0].step_id === null) {
    return recipe;
  }

  result.forEach((step) => {
    if (step.ingredient_id) {
      recipe.ingredients.push({
        ingredient_name: step.ingredient_name,
        quantity: `${step.quantity } ${step.ingredient_unit} `, // For future reference Can split later on 
        // ingredient_unit: step.ingredient_unit 
      });
    }
  });

  result.forEach((step) => {
    if (step.step_id) {
      recipe.steps.push({
        // step_id: step.step_id,
        step_number: step.step_number,
        step_instructions: step.step_instructions,
        // ingredients: [{ ingredient_id: step.ingredient_id, ingredient_name: step.ingredient_name, quantity: step.quantity}]
      });
    }
  });
  return recipe;
}

async function getRecipes() {
  const result = await db("recipes as r")  

  return result;
}

async function createRecipes(recipe) {
  const [recipe_id] = await db('recipes').insert(recipe);
  return getRecipes().where({ recipe_id }).first();
}

module.exports = {
  getRecipeById,
  getRecipes, 
  createRecipes
};
