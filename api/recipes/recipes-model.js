const db = require('../data/db-config');


async function getRecipeById(recipe_id){
    const recipeRows = await db('recipes as r')
    .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
    .select("r.recipe_name", "s.*")
    .where('recipe_id', recipe_id);

    const results = {
        recipe_id: Number(recipe_id),
        scheme_name: recipeRows[0].scheme_name,
        steps: recipeRows[0].step_id
          ? recipeRows.map((step) => {
              return {
                category_id: step.category_id,
                step_id: step.step_id,
                step_number: step.step_number,
                instructions: step.instructions,
              };
            })
          : [],
    };

    return results;
}

module.exports = {
    getRecipeById
};