const db = require('../data/db-config');



async function getRecipeById(){
    const result = await db('recipes as r')
    .leftJoin("steps as s", "s.recipe_id", "r.recipe_id")
    .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .select("r.*", "s.*", 'si.*', 'i.*')
    console.log(result)

    const recipe = {
      recipe_id: result[0].recipe_id,
      recipe_name: result[0].recipe_name,
      steps: []
    }

    if(result[0].step_id === null) {
      return recipe
    }

    result.forEach(step => {
      if (step.step_id) {
        recipe.steps.push({
          step_id: step.step_id,
          step_number: step.step_number,
          step_instructions: step.step_instructions,
          ingredients: [{ ingredient_id: step.ingredient_id, ingredient_name: step.ingredient_name, quantity: step.quantity}]
        })
      }
    })
    return recipe;
    // const results = {
    //     recipe_id: Number(recipe_id),
    //     scheme_name: recipeRows[0].scheme_name,
    //     steps: recipeRows[0].step_id
    //       ? recipeRows.map((step) => {
    //           return {
    //             category_id: step.category_id,
    //             step_id: step.step_id,
    //             step_number: step.step_number,
    //             instructions: step.instructions,
    //           };
    //         })
    //       : [],
    // };

    // return results;
}

module.exports = {
    getRecipeById
};