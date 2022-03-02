const router = require('express').Router();
//import recipe model

router.get('/', (req, res, next) => {
  res.json('recipe router up')
})

module.exports = router;