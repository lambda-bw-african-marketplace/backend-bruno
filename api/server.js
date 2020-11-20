const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('../config/routes')
const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
server.use('/api', routes)

module.exports = server
