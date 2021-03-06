const categories = [
  { category_name: "Breakfast" },
  { category_name: "Lunch" },
  { category_name: "Snack" },
  { category_name: "Dinner" },
  { category_name: "Supper" },
];

const recipes = [
  { recipe_name: "Broccoli Pesto Pasta", category_id: 4 },
  { recipe_name: "Lemon Chicken", category_id: 4 },
  { recipe_name: "Salmon en Papillote", category_id: 4 },
];

const ingredients = [
  { ingredient_name: "Broccoli", ingredient_unit: "lbs" },
  { ingredient_name: "Pesto", ingredient_unit: "lbs" },
  { ingredient_name: "Pasta", ingredient_unit: "lbs" },
  { ingredient_name: "Lemon", ingredient_unit: "slices" },
  { ingredient_name: "Chicken", ingredient_unit: "lbs" },
  { ingredient_name: "Salmon", ingredient_unit: "lbs" },
];

const step_ingredients = [
  // Broccoli Pesto Pasta
  { step_id: 1, },
  { step_id: 2, ingredient_id: 1, quantity: 1 },
  { step_id: 3, ingredient_id: 2, quantity: 1.5 },
  { step_id: 4, ingredient_id: 3, quantity: 2 },
  // Lemon Chicken
  { step_id: 5, ingredient_id: 4, quantity: 1 },
  { step_id: 5, ingredient_id: 5, quantity: 0.4 },
  // Salmon en Papillote
  { step_id: 7, ingredient_id: 6, quantity: 1 },
];

const steps = [
  // Broccoli Pesto Pasta
  { step_instructions: " Heat pan", step_number: 1, recipe_id: 1 },
  { step_instructions: "Add broccoli", step_number: 2, recipe_id: 1 },
  {
    step_instructions: "Add pesto to pan, mix with broccoli",
    step_number: 3,
    recipe_id: 1,
  },
  { step_instructions: "Finally add Pasta to pan and Enjoy that savory green stuff", step_number: 4, recipe_id: 1 },
  // Lemon Chicken
  { step_instructions: " Heat oven", step_number: 1, recipe_id: 2 },
  {
    step_instructions: " Put chicken and lemon in oven",
    step_number: 2,
    recipe_id: 2,
  },
  {
    step_instructions: "Put in oven at 500 degrees",
    step_number: 3,
    recipe_id: 2,
  },
  // Salmon en Papillote
  {
    step_instructions: "Fish a salmon in the Bidasoa river",
    step_number: 1,
    recipe_id: 3,
  },
  { step_instructions: "Cook salmon", step_number: 2, recipe_id: 3 },
];

exports.seed = async function (knex) {
  await knex ("categories").insert(categories);
  await knex("recipes").insert(recipes);
  await knex("ingredients").insert(ingredients);
  await knex("steps").insert(steps);
  await knex("step_ingredients").insert(step_ingredients);
};
