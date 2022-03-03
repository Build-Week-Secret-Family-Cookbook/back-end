const router = require('express').Router()

const Users = require('./users-model')

router.get('/', async(req, res, next) => {
  try {
    const users = await Users.find()
    res.json(users)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  Users.findById(req.params.user_id)
    .then(user => {
      res.json(user)
    })
    .catch(next)
})

module.exports = router;