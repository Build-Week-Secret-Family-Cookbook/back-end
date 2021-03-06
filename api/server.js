const express = require('express');
const recipesRouter = require('./recipes/recipes-router');
const usersRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')
const server = express();

server.use(express.json())
server.use('/api/recipes', recipesRouter)
server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

server.use('/', (req, res) => {
  res.json({ message: 'Hello world from the Family Cookbook!'})
})

server.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
})

server.use('*', (req, res) => {
  res.json({ message: 'something went wrong!'})
})

module.exports = server;