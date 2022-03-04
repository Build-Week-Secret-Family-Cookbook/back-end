const router = require('express').Router();
//import recipe model
const Recipe = require('./recipes-model');


//Get by ID
router.get('/:recipe_id', (req, res, next)=>{
  const {recipe_id} = req.params
  Recipe.getRecipeById(recipe_id)
  .then(resource => {
      res.status(200).json(resource)
  })
  .catch(next)
})

//List
router.get('/', (req, res, next) => {
  Recipe.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(next); 
});

// Add
router.post('/', (req, res, next) => {
  Recipe.createRecipes(req.body)
    .then(recipes => {
      res.status(201).json(recipes);
    })
    .catch(next);
});

//Delete
router.delete('/:recipe_id', (req, res, next) => { 
  const {recipe_id} = req.params
  Recipe.deleteRecipes(recipe_id)
    .then(count => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    })
    .catch(next);
});

//Update
router.put('/:recipe_id', async (req, res, next) => {
  try {
    const data = await Recipe.updateRecipes(req.params.recipe_id, req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next)=>{
  res.status(500).json({
      customMessage: "Something inside the recipes router went wrong",
      message: err.message,
      stack: err.stack,
  })
})

module.exports = router;