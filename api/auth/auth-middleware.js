const { JWT_SECRET } = require('../secrets')
const jwt = require('jsonwebtoken')
const { findBy } = require('../users/users-model')

const restricted = (req, res, next) => {
  const token = req.headers.authorization

  if(token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if(err) {
        next({ status: 401, message: 'Token invalid' })
      } else {
        req.decodedJwt = decoded
        next()
      }
    })
  } else {
    next ({ status: 401, message: 'Token required'})
  }
}

const checkUsernameExists = async (req, res, next) => {
  try {
    const existingUsers = await findBy({ username: req.body.username })
    if(existingUsers.length) {
      res.user = existingUsers[0]
      next()
    } else {
      next ({ status: 401, message: 'Invalid credentials' })
    }
  } catch(err) {
    next(err)
  }
}

module.exports = {
  restricted,
  checkUsernameExists
}