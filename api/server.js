const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('../config/routes')
const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('/api', routes)

module.exports = server
